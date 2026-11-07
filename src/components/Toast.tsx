import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[90%] px-4 py-3 rounded-2xl bg-blue-950/90 text-white backdrop-blur-md shadow-2xl border border-white/20 flex items-center justify-between gap-3 animate-fade-in">
      <div className="flex items-center gap-2.5 min-w-0">
        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="text-xs font-semibold truncate leading-tight">
          {message}
        </span>
      </div>
      <button
        onClick={onClose}
        className="text-[11px] font-bold text-sky-300 hover:text-white shrink-0 ml-1 px-1.5 py-0.5 rounded"
      >
        Dismiss
      </button>
    </div>
  );
};
