import React, { useState, useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase.config";
import { loadHtmlCssJs, saveHtmlCssJs, loadLocalHtmlCssJs, saveLocalHtmlCssJs } from "@/lib/persistence";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Editor from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { debounce } from "lodash";
import JSZip from "jszip";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

const HtmlCssJsCompiler: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <p>Edit me to see live changes!</p>
    <button id="demo-button">Click Me</button>
  </body>
</html>`);
  const [cssCode, setCssCode] = useState(`body {
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #0066cc;
  text-align: center;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}`);
  const [jsCode, setJsCode] = useState(`document.getElementById("demo-button")?.addEventListener("click", function() {
  alert("Button clicked!");
  this.textContent = "Clicked!";
});
console.log("Script loaded successfully!");`);

  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState<"html"|"css"|"js">("html");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAutocomplete, setIsAutocomplete] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [aiHint, setAiHint] = useState("");
  const [showAiModal, setShowAiModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const previewWindowRef = useRef<Window | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);

  const generateSrcDoc = () => {
    let bodyContent = htmlCode;
    if (htmlCode.includes("<body") && htmlCode.includes("</body>")) {
      const bodyMatch = htmlCode.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      if (bodyMatch && bodyMatch[1]) {
        bodyContent = bodyMatch[1];
      }
    }
    return `\n      <!DOCTYPE html>\n      <html${isDark ? ' class="dark"' : ""}>\n        <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <style>\n            ${cssCode}\n          </style>\n        </head>\n        <body>\n          ${bodyContent}\n          <script>\n            ${jsCode}\n          </script>\n        </body>\n      </html>\n    `;
  };

  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const debouncedUpdate = debounce(() => {
      const doc = generateSrcDoc();
      setSrcDoc(doc);
      if (previewWindowRef.current && !previewWindowRef.current.closed) {
        previewWindowRef.current.document.open();
        previewWindowRef.current.document.write(doc);
        previewWindowRef.current.document.close();
      }
    }, 750);
    debouncedUpdate();
    return () => debouncedUpdate.cancel();
  }, [htmlCode, cssCode, jsCode, isDark]);

  // Auth state & initial load
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setUserId(user ? user.uid : null);
      if (user) {
        const remote = await loadHtmlCssJs(user.uid);
        if (remote) {
          setHtmlCode(remote.html);
          setCssCode(remote.css);
          setJsCode(remote.js);
        } else {
          const local = loadLocalHtmlCssJs();
          if (local) {
            setHtmlCode(local.html);
            setCssCode(local.css);
            setJsCode(local.js);
          }
        }
      } else {
        const local = loadLocalHtmlCssJs();
        if (local) {
          setHtmlCode(local.html);
          setCssCode(local.css);
          setJsCode(local.js);
        }
      }
    });
    return () => unsub();
  }, []);

  // Debounced autosave (2s inactivity)
  useEffect(() => {
    const handle = setTimeout(async () => {
      const payload = { html: htmlCode, css: cssCode, js: jsCode };
      if (userId) {
        setIsSaving(true);
        await saveHtmlCssJs(userId, payload);
        setIsSaving(false);
        setLastSavedAt(new Date());
      } else {
        saveLocalHtmlCssJs(payload);
        setLastSavedAt(new Date());
      }
    }, 2000);
    return () => clearTimeout(handle);
  }, [htmlCode, cssCode, jsCode, userId]);

  useEffect(() => {
    if (isFullScreen && !isPreviewOpen) {
      handleTogglePreview(true);
    } else if (!isFullScreen && isPreviewOpen) {
      if (previewWindowRef.current && !previewWindowRef.current.closed) {
        previewWindowRef.current.close();
      }
      previewWindowRef.current = null;
      setIsPreviewOpen(false);
    }
  }, [isFullScreen]);

  const handleSaveCode = async () => {
    const zip = new JSZip();
    let extractedBody = htmlCode;
    const match = htmlCode.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (match && match[1]) extractedBody = match[1];
    const indexHtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
${extractedBody}
    <script src="script.js"></script>
  </body>
</html>`;
    zip.file("index.html", indexHtml);
    zip.file("style.css", cssCode);
    zip.file("script.js", jsCode);
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "project.zip";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  // Download separate files (index.html, style.css, script.js) without ZIP
  const handleDownloadSeparate = () => {
    let extractedBody = htmlCode;
    const match = htmlCode.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (match && match[1]) extractedBody = match[1];
    const indexHtml = `<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="style.css">\n  </head>\n  <body>\n${extractedBody}\n    <script src="script.js"></script>\n  </body>\n</html>`;
    const dl = (filename: string, content: string, type = "text/plain") => {
      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    };
    dl("index.html", indexHtml, "text/html");
    dl("style.css", cssCode, "text/css");
    dl("script.js", jsCode, "application/javascript");
  };

  // Ctrl+S to manual save & refresh preview immediately
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        const doc = generateSrcDoc();
        setSrcDoc(doc);
        if (previewWindowRef.current && !previewWindowRef.current.closed) {
          previewWindowRef.current.document.open();
          previewWindowRef.current.document.write(doc);
          previewWindowRef.current.document.close();
        }
        const payload = { html: htmlCode, css: cssCode, js: jsCode };
        (async () => {
          if (userId) {
            setIsSaving(true);
            await saveHtmlCssJs(userId, payload);
            setIsSaving(false);
            setLastSavedAt(new Date());
          } else {
            saveLocalHtmlCssJs(payload);
            setLastSavedAt(new Date());
          }
        })();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [htmlCode, cssCode, jsCode]);

  // Delete key clears current tab's content (simulate deleting selected file)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Delete") {
        e.preventDefault();
        if (activeTab === "html") setHtmlCode("");
        else if (activeTab === "css") setCssCode("");
        else setJsCode("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeTab]);

  const handleTogglePreview = (auto: boolean = false) => {
    if (!isPreviewOpen) {
      const previewWindow = window.open("", "_blank");
      if (previewWindow) {
        previewWindow.document.open();
        previewWindow.document.write(srcDoc);
        previewWindow.document.close();
        previewWindowRef.current = previewWindow;
        setIsPreviewOpen(true);
      }
    } else {
      if (!auto && previewWindowRef.current && !previewWindowRef.current.closed) {
        previewWindowRef.current.close();
      }
      previewWindowRef.current = null;
      setIsPreviewOpen(false);
    }
  };

  const handleExplainCode = async () => {
    if (!isAutocomplete) {
      setAiHint("Enable autocomplete to get AI explanations.");
      setShowAiModal(true);
      return;
    }
    setAiHint("Analyzing your code… please wait.");
    setShowAiModal(true);
    setTimeout(() => {
      setAiHint("AI Explanation: Structure appears correct. Ensure selectors are scoped and script elements exist before attaching listeners.");
    }, 1500);
  };

  const handleAiHelp = async () => {
    if (!isAutocomplete) {
      setAiHint("Enable autocomplete to use AI help.");
      setShowAiModal(true);
      return;
    }
    setAiHint("Analyzing your code… please wait.");
    setShowAiModal(true);
    setTimeout(() => {
      setAiHint("AI Help: Consider modular JS and accessibility improvements (aria labels, semantic tags).");
    }, 1500);
  };

  const submitChat = () => {
    if (chatInput.trim()) {
      const newMessage: ChatMessage = { sender: "user", text: chatInput };
      setChatMessages(prev => [...prev, newMessage]);
      setChatInput("");
      setTimeout(() => {
        const reply: ChatMessage = { sender: "ai", text: "AI Chat: Add error handling and avoid direct DOM coupling for scalability." };
        setChatMessages(prev => [...prev, reply]);
      }, 1000);
    }
  };

  const editorOptions: editor.IStandaloneEditorConstructionOptions = {
    fontSize: 14,
    minimap: { enabled: false },
    wordWrap: "on",
    automaticLayout: true,
    suggestOnTriggerCharacters: isAutocomplete,
    quickSuggestions: isAutocomplete ? { other: true, comments: true, strings: true } : false,
    autoClosingBrackets: "always",
    autoClosingQuotes: "always" as editor.EditorAutoClosingStrategy,
    formatOnType: true,
    formatOnPaste: true,
    tabCompletion: "on",
    snippetSuggestions: "inline",
    acceptSuggestionOnEnter: "on",
    scrollBeyondLastLine: false,
    lineNumbers: "on",
    folding: true,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const fullScreenClass = isFullScreen
    ? "fixed top-0 left-0 w-full h-full z-50 bg-gray-900 text-white overflow-auto p-4"
    : `p-4 md:p-8 ${isDark ? "bg-gray-900 text-white" : "bg-gray-100"} min-h-screen`;

  return (
    <div ref={containerRef} className={fullScreenClass}>
      {!isFullScreen && (
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h1 className="text-2xl md:text-3xl font-bold">HTML, CSS & JS Playground</h1>
          <div className="flex gap-2 items-center">
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setShowMenu(!showMenu)}>Menu</button>
          </div>
        </div>
      )}
      {showMenu && !isFullScreen && (
        <div className={`mb-4 border p-3 rounded ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
          <button className={`px-3 py-1 rounded mr-2 mb-2 ${isDark ? "bg-gray-400 hover:bg-gray-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`} onClick={() => setIsDark(!isDark)}>{isDark ? "Light Mode" : "Dark Mode"}</button>
          <button className={`px-3 py-1 rounded mr-2 mb-2 ${isDark ? "bg-gray-400 hover:bg-gray-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`} onClick={() => setIsFullScreen(!isFullScreen)}>{isFullScreen ? "Exit Full Screen" : "Full Screen"}</button>
          <button className={`px-3 py-1 rounded mr-2 mb-2 ${isDark ? "bg-gray-400 hover:bg-gray-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`} onClick={() => setIsAutocomplete(!isAutocomplete)}>{isAutocomplete ? "Disable Autocomplete" : "Enable Autocomplete"}</button>
          <button className={`px-3 py-1 rounded mr-2 mb-2 ${isDark ? "bg-green-400 hover:bg-green-500 text-white" : "bg-green-200 hover:bg-green-300"}`} onClick={handleDownloadSeparate}>Download Files</button>
          <button className={`px-3 py-1 rounded mr-2 mb-2 ${isDark ? "bg-indigo-400 hover:bg-indigo-500 text-white" : "bg-indigo-200 hover:bg-indigo-300"}`} onClick={handleSaveCode}>Download as ZIP</button>
          <button className={`px-3 py-1 rounded mr-2 mb-2 ${isDark ? "bg-purple-400 hover:bg-purple-500 text-white" : "bg-purple-200 hover:bg-purple-300"} ${!isAutocomplete ? "opacity-50 cursor-not-allowed" : ""}`} onClick={handleAiHelp} disabled={!isAutocomplete}>AI Help</button>
          <button className={`px-3 py-1 bg-orange-200 rounded hover:bg-orange-300 mr-2 mb-2 ${!isAutocomplete ? "opacity-50 cursor-not-allowed" : ""}`} onClick={handleExplainCode} disabled={!isAutocomplete}>Explain Code</button>
          <button className={`px-3 py-1 rounded mr-2 mb-2 ${isDark ? "bg-teal-400 hover:bg-teal-500 text-white" : "bg-teal-200 hover:bg-teal-300"}`} onClick={() => setShowChatModal(true)}>Chat with AI</button>
          <div className="text-xs mt-2 opacity-70">
            {userId ? `User: ${userId.substring(0,6)}…` : "Not signed in (local only)"} • {isSaving ? "Saving…" : lastSavedAt ? `Saved at ${lastSavedAt.toLocaleTimeString()}` : "Unsaved"}
          </div>
        </div>
      )}
      {isFullScreen ? (
        <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-4`}>
          <Tabs defaultValue="html" onValueChange={(v) => setActiveTab(v as any)}>
            <TabsList className={`flex  gap-9 mb-4 ${isDark ? "bg-gray-700" : "bg-gray-100"} p-1 rounded-md`}>
              <div className="flex justify-center gap-2 mb-4">
                <TabsTrigger value="html" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-4 py-2 rounded">HTML</TabsTrigger>
                <TabsTrigger value="css" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white px-4 py-2 rounded">CSS</TabsTrigger>
                <TabsTrigger value="js" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white px-4 py-2 rounded">JavaScript</TabsTrigger>
                {isFullScreen && (
                  <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-white " onClick={() => setIsFullScreen(false)}>Exit Full Screen</button>
                )}
              </div>
            </TabsList>
            <TabsContent value="html">
              <Editor height="400px" defaultLanguage="html" value={htmlCode} onChange={value => setHtmlCode(value || "")} theme={isDark ? "vs-dark" : "vs-light"} options={editorOptions} className="border rounded-md" />
            </TabsContent>
            <TabsContent value="css">
              <Editor height="400px" defaultLanguage="css" value={cssCode} onChange={value => setCssCode(value || "")} theme={isDark ? "vs-dark" : "vs-light"} options={editorOptions} className="border rounded-md" />
            </TabsContent>
            <TabsContent value="js">
              <Editor height="400px" defaultLanguage="javascript" value={jsCode} onChange={value => setJsCode(value || "")} theme={isDark ? "vs-dark" : "vs-light"} options={editorOptions} className="border rounded-md" />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-4`}>
            <Tabs defaultValue="html" onValueChange={(v) => setActiveTab(v as any)}>
              <TabsList className={`flex justify-center gap-2 mb-4 ${isDark ? "bg-gray-700" : "bg-gray-100"} p-1 rounded-md`}>
                <TabsTrigger value="html" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-4 py-2 rounded">HTML</TabsTrigger>
                <TabsTrigger value="css" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white px-4 py-2 rounded">CSS</TabsTrigger>
                <TabsTrigger value="js" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white px-4 py-2 rounded">JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="html">
                <Editor height="400px" defaultLanguage="html" value={htmlCode} onChange={value => setHtmlCode(value || "")} theme={isDark ? "vs-dark" : "vs-light"} options={editorOptions} className="border rounded-md" />
              </TabsContent>
              <TabsContent value="css">
                <Editor height="400px" defaultLanguage="css" value={cssCode} onChange={value => setCssCode(value || "")} theme={isDark ? "vs-dark" : "vs-light"} options={editorOptions} className="border rounded-md" />
              </TabsContent>
              <TabsContent value="js">
                <Editor height="400px" defaultLanguage="javascript" value={jsCode} onChange={value => setJsCode(value || "")} theme={isDark ? "vs-dark" : "vs-light"} options={editorOptions} className="border rounded-md" />
              </TabsContent>
            </Tabs>
          </div>
          <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-4`}>
            <h2 className="font-semibold mb-2 text-lg border-b pb-2">Live Preview</h2>
            <iframe srcDoc={srcDoc} sandbox="allow-scripts" title="Live Preview" className="w-full h-[500px] bg-white border rounded" />
          </div>
        </div>
      )}
      {showAiModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">AI Response</h3>
            <p className="mb-4">{aiHint}</p>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setShowAiModal(false)}>Close</button>
          </div>
        </div>
      )}
      {showChatModal && (
        <div className="fixed inset-0 flex flex-col items-center justify-end bg-black bg-opacity-30 z-50">
          <div className="bg-white p-4 rounded-t shadow-lg w-full max-w-lg">
            <h3 className="text-lg font-bold mb-2">Chat with AI</h3>
            <div className="h-40 overflow-y-auto border p-2 mb-2">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`mb-1 ${msg.sender === "ai" ? "text-blue-600" : "text-gray-800"}`}>
                  <strong>{msg.sender === "ai" ? "AI" : "You"}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" className="flex-grow border rounded px-2 py-1" placeholder="Type your message..." value={chatInput} onChange={e => setChatInput(e.target.value)} />
              <button className="px-3 py-1 bg-teal-200 rounded hover:bg-teal-300" onClick={submitChat}>Send</button>
            </div>
            <button className="mt-3 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setShowChatModal(false)}>Close Chat</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HtmlCssJsCompiler;