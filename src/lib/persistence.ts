import { db } from '../firebase.config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

export interface HtmlCssJsData {
  html: string; css: string; js: string; updatedAt?: any;
}

export interface CPlaygroundData {
  files: { name: string; content: string }[];
  flags: string[];
  activeFile: string;
  preset: string;
  updatedAt?: any;
}

// Load HTML/CSS/JS data for user
export async function loadHtmlCssJs(uid: string): Promise<HtmlCssJsData | null> {
  try {
    const ref = doc(db, 'playgrounds_htmlcssjs', uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return snap.data() as HtmlCssJsData;
  } catch (e) {
    console.error('loadHtmlCssJs error', e);
    return null;
  }
}

export async function saveHtmlCssJs(uid: string, data: HtmlCssJsData): Promise<void> {
  try {
    const ref = doc(db, 'playgrounds_htmlcssjs', uid);
    await setDoc(ref, { ...data, updatedAt: serverTimestamp() }, { merge: true });
  } catch (e) {
    console.error('saveHtmlCssJs error', e);
  }
}

export async function loadCPlayground(uid: string): Promise<CPlaygroundData | null> {
  try {
    const ref = doc(db, 'playgrounds_c', uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return snap.data() as CPlaygroundData;
  } catch (e) {
    console.error('loadCPlayground error', e);
    return null;
  }
}

export async function saveCPlayground(uid: string, data: CPlaygroundData): Promise<void> {
  try {
    const ref = doc(db, 'playgrounds_c', uid);
    await setDoc(ref, { ...data, updatedAt: serverTimestamp() }, { merge: true });
  } catch (e) {
    console.error('saveCPlayground error', e);
  }
}

// LocalStorage fallbacks for unauthenticated users
export function saveLocalHtmlCssJs(data: HtmlCssJsData) {
  localStorage.setItem('lcj_html', data.html);
  localStorage.setItem('lcj_css', data.css);
  localStorage.setItem('lcj_js', data.js);
}

export function loadLocalHtmlCssJs(): HtmlCssJsData | null {
  const html = localStorage.getItem('lcj_html');
  const css = localStorage.getItem('lcj_css');
  const js = localStorage.getItem('lcj_js');
  if (html === null || css === null || js === null) return null;
  return { html, css, js };
}

export function saveLocalC(data: CPlaygroundData) {
  localStorage.setItem('c_files', JSON.stringify(data.files));
  localStorage.setItem('c_flags', JSON.stringify(data.flags));
  localStorage.setItem('c_active', data.activeFile);
  localStorage.setItem('c_preset', data.preset);
}

export function loadLocalC(): CPlaygroundData | null {
  const files = localStorage.getItem('c_files');
  const flags = localStorage.getItem('c_flags');
  const active = localStorage.getItem('c_active');
  const preset = localStorage.getItem('c_preset');
  if (!files || !flags || !active || !preset) return null;
  try {
    return { files: JSON.parse(files), flags: JSON.parse(flags), activeFile: active, preset };
  } catch {
    return null;
  }
}