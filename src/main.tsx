// Ensure window.fetch has a setter so browser extensions or external proxy scripts cannot throw:
// "TypeError: Cannot set property fetch of #<Window> which has only a getter"
try {
  let currentFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get: () => currentFetch,
    set: (newFetch) => {
      currentFetch = newFetch;
    },
    configurable: true,
    enumerable: true,
  });
} catch {
  // Ignored if window is not configurable
}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
