import React, { useState } from 'react';
import { ASSOCIATION_DATA } from '../data/associationData';
import { X, Send, MessageSquareText, CheckCircle2 } from 'lucide-react';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'General Community Inquiry',
}) => {
  const [topic, setTopic] = useState(initialTopic);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const direct = ASSOCIATION_DATA.directConnect;

  const topics = [
    'General Community Inquiry',
    'Janaza & Bereavement Welfare',
    'Education & Student Support',
    'Medical & Health Assistance',
    'Donation / Transfer Confirmation',
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      `*RAMBUK-ELA WELFARE ASSOCIATION*`,
      `*Subject:* ${topic}`,
      name.trim() ? `*From:* ${name.trim()}` : null,
      message.trim() ? `*Message:* ${message.trim()}` : null,
      `---`,
      `Sent via Official Digital Directory Portal`
    ].filter(Boolean).join('\n');

    const waUrl = `https://wa.me/${direct.cleanPhone}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-sm rounded-3xl bg-white shadow-2xl border border-white/80 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
              <MessageSquareText className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 id="modal-title" className="text-sm font-bold">
                Direct Official Desk
              </h3>
              <p className="text-[11px] text-emerald-100">
                Direct WhatsApp: {direct.displayPhone}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-4 space-y-3">
          {/* Topic Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select Purpose / Inquiry
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-800"
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Brother / Sister from Rambuk Ela"
              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-800"
            />
          </div>

          {/* Message Area */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Message or Query
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your brief message or inquiry here..."
              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-800 resize-none"
            />
          </div>

          {/* Prompt Note */}
          <div className="flex items-start gap-1.5 p-2 rounded-xl bg-emerald-50 text-emerald-800 text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              This will launch WhatsApp with your pre-formatted message addressed to the official association line.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-b from-[#25D366] to-[#128C7E] hover:from-[#29e06c] hover:to-[#159a8a] text-white text-xs font-bold shadow-md shadow-emerald-900/20 active:translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Open in WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
