import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import type { editor } from "monaco-editor";

interface CFile { name: string; content: string; }

const initialFiles: CFile[] = [
  { name: "main.c", content: "#include <stdio.h>\nint main(){ printf(\"Hello from C!\\n\"); return 0; }" },
  { name: "utils.c", content: "#include <stdio.h>\nvoid greet(){ printf(\"Greetings from utils\\n\"); }" },
  { name: "utils.h", content: "#ifndef UTILS_H\n#define UTILS_H\nvoid greet();\n#endif" }
];

const compilePresets = [
  { name: "Debug", flags: ["-O0", "-g"] },
  { name: "Release", flags: ["-O2"] },
  { name: "Size", flags: ["-Os"] },
];

const CCompiler: React.FC = () => {
  const [files, setFiles] = useState<CFile[]>(initialFiles);
  const [activeFile, setActiveFile] = useState("main.c");
  const [flags, setFlags] = useState<string[]>(compilePresets[0].flags);
  const [customFlags, setCustomFlags] = useState("");
  const [compileOutput, setCompileOutput] = useState("");
  const [runOutput, setRunOutput] = useState("");
  const [isDark, setIsDark] = useState(true);
  const [preset, setPreset] = useState(compilePresets[0].name);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const editorOptions: editor.IStandaloneEditorConstructionOptions = {
    fontSize: 14,
    minimap: { enabled: false },
    wordWrap: "on",
    automaticLayout: true,
    lineNumbers: "on",
    folding: true,
    autoClosingBrackets: "always",
    autoClosingQuotes: "always" as editor.EditorAutoClosingStrategy,
    formatOnType: true,
  };

  const updateFileContent = (content: string | undefined) => {
    if (content === undefined) return;
    setFiles(prev => prev.map(f => f.name === activeFile ? { ...f, content } : f));
  };

  const addFile = () => {
    const suggested = "file.c";
    const name = window.prompt("Enter new file name (e.g., mycode.c or header.h)", suggested)?.trim();
    if (!name) return;
    if (!/^[A-Za-z0-9_\-]+\.(c|h)$/.test(name)) { alert("File name must end with .c or .h and contain valid characters."); return; }
    if (files.some(f => f.name === name)) { alert("A file with this name already exists."); return; }
    const defaultContent = name.endsWith(".h") ? "#pragma once\n" : "#include <stdio.h>\nint main(){ return 0; }";
    setFiles(prev => [...prev, { name, content: defaultContent }]);
    setActiveFile(name);
  };

  // Download all C files separately (no ZIP)
  const downloadSeparate = () => {
    const dl = (filename: string, content: string, type = "text/plain") => {
      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    };
    files.forEach(f => dl(f.name, f.content, "text/x-c"));
  };

  // Ctrl+S to save and run (compile then run)
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        compile();
        // slight delay to simulate compile then run
        setTimeout(() => runProgram(), 50);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [files]);

  const removeFile = (name: string) => {
    if (files.length <= 1) return;
    setFiles(prev => prev.filter(f => f.name !== name));
    if (activeFile === name) setActiveFile(files.find(f => f.name !== name)?.name || "");
  };

  // Delete key removes currently selected file (if more than one)
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Delete") {
        e.preventDefault();
        if (files.length > 1) removeFile(activeFile);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [files, activeFile]);

  const applyPreset = (p: string) => {
    const found = compilePresets.find(x => x.name === p);
    if (!found) return;
    setPreset(found.name);
    setFlags(found.flags);
  };

  const compile = () => {
    const all = files.map(f => f.content).join("\n\n");
    const lines: string[] = [];
    lines.push(`Compiling ${files.length} file(s) with flags: ${[...flags, customFlags].filter(Boolean).join(" ")}`);
    files.forEach(f => {
      if (!/int\s+main\s*\(/.test(all) && f.name === "main.c") {
        lines.push(`Warning: main function not found in ${f.name}`);
      }
      if (/TODO/.test(f.content)) lines.push(`Note: ${f.name} contains TODO markers`);
      if (/printf\s*\(/.test(f.content)) lines.push(`Info: ${f.name} uses printf`);
      if (/gets\s*\(/.test(f.content)) lines.push(`Security: Avoid gets in ${f.name}`);
    });
    if (/#include\s+<stdio.h>/.test(all)) lines.push("OK: stdio available");
    if (!/int\s+main\s*\(/.test(all)) lines.push("Error: No main() found. Add int main(){ }.");
    else lines.push("Build succeeded (simulated). Ready to run.");
    setCompileOutput(lines.join("\n"));
  };

  const runProgram = () => {
    const mainFile = files.find(f => /int\s+main\s*\(/.test(f.content));
    if (!mainFile) { setRunOutput("Cannot run: no main function."); return; }
    const code = mainFile.content;
    const outputs: string[] = [];
    const regex = /printf\s*\(\s*"([^"]*)"/g;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(code))) outputs.push(m[1].replace(/\\n/g, "\n"));
    setRunOutput(outputs.length ? outputs.join("\n") : "Program ran (simulated) with no printf output.");
  };

  return (
    <div ref={containerRef} className={`p-4 md:p-8 ${isDark ? "bg-gray-900 text-white" : "bg-gray-100"} min-h-screen`}>      
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h1 className="text-2xl md:text-3xl font-bold">C Playground (Client-side)</h1>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setIsDark(!isDark)}>{isDark ? "Light" : "Dark"}</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => compile()}>Compile</button>
          <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => runProgram()}>Run</button>
          <button className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600" onClick={downloadSeparate}>Download Files</button>
          <button className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600" onClick={() => setShowAdvanced(x => !x)}>{showAdvanced ? "Basic" : "Advanced"}</button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className={`lg:col-span-2 ${isDark ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-4`}>          
          <div className="flex flex-wrap gap-2 mb-3">
            {files.map(f => (
              <div key={f.name} className={`flex items-center ${activeFile === f.name ? "font-semibold" : ""}`}>                
                <button className={`px-2 py-1 rounded ${activeFile === f.name ? "bg-blue-500 text-white" : isDark ? "bg-gray-700" : "bg-gray-200"}`} onClick={() => setActiveFile(f.name)}>{f.name}</button>
                {files.length > 1 && (
                  <button className="ml-1 text-red-500" onClick={() => removeFile(f.name)}>×</button>
                )}
              </div>
            ))}
            <button className="px-2 py-1 rounded bg-teal-500 text-white" onClick={addFile}>+ File</button>
          </div>
          <Editor height="500px" language="c" theme={isDark ? "vs-dark" : "vs-light"} value={files.find(f => f.name === activeFile)?.content || ""} onChange={updateFileContent} options={editorOptions} className="border rounded-md" />
          {showAdvanced && (
            <div className="mt-4 border-t pt-4">
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <label className="text-sm">Preset:</label>
                <select className={`px-2 py-1 rounded ${isDark ? "bg-gray-700" : "bg-gray-200"}`} value={preset} onChange={e => applyPreset(e.target.value)}>
                  {compilePresets.map(p => <option key={p.name}>{p.name}</option>)}
                </select>
                <label className="text-sm">Custom Flags:</label>
                <input className={`px-2 py-1 rounded flex-grow ${isDark ? "bg-gray-700" : "bg-gray-200"}`} placeholder="e.g. -Wall -Wextra" value={customFlags} onChange={e => setCustomFlags(e.target.value)} />
              </div>
              <div className="text-xs opacity-70 mb-2">Future: integrate real WASM clang for full diagnostics.</div>
            </div>
          )}
        </div>
        <div className={`space-y-4 ${isDark ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-4`}>          
          <div>
            <h2 className="font-semibold mb-2 text-lg border-b pb-1">Compile Output</h2>
            <pre className={`text-sm whitespace-pre-wrap ${isDark ? "bg-gray-900" : "bg-gray-100"} p-2 rounded h-64 overflow-auto`}>{compileOutput || "Idle. Press Compile."}</pre>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-lg border-b pb-1">Run Output</h2>
            <pre className={`text-sm whitespace-pre-wrap ${isDark ? "bg-gray-900" : "bg-gray-100"} p-2 rounded h-40 overflow-auto`}>{runOutput || "Idle. Press Run."}</pre>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-lg border-b pb-1">Next Steps</h2>
            <ul className="text-xs list-disc pl-4 space-y-1">
              <li>Integrate WASM clang for real compilation</li>
              <li>Add formatting (clang-format wasm)</li>
              <li>Real diagnostics and squiggles via LSP proxy</li>
              <li>WASI runtime execution for compiled module</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCompiler;
