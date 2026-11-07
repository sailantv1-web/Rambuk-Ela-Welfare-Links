/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { IslamicPatternWatermark } from './components/IslamicPatternWatermark';
import { Header } from './components/Header';
import { ConnectMatrix } from './components/ConnectMatrix';
import { BankCard } from './components/BankCard';
import { MembersDirectory } from './components/MembersDirectory';
import { MembersTeaserCard } from './components/MembersTeaserCard';
import { LocationCard } from './components/LocationCard';
import { WelfareHighlights } from './components/WelfareHighlights';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { Landmark, Users } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'members'>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('General Community Inquiry');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  const handleOpenInquiry = (topic?: string) => {
    if (topic) {
      setInquiryTopic(topic);
    }
    setInquiryModalOpen(true);
  };

  const navigateTo = (page: 'home' | 'members') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen text-slate-800 flex justify-center selection:bg-sky-500 selection:text-white pb-16 sm:pb-6">
      {/* Serene Sky & Islamic Geometric Arabesque Pattern Background */}
      <IslamicPatternWatermark />

      {/* Main Viewport Container: Mobile-First Max-W-MD Centered on Desktop with Subtle Halo */}
      <main className="relative z-10 w-full max-w-md min-h-screen flex flex-col my-0 sm:my-6 sm:rounded-3xl sm:shadow-2xl sm:shadow-sky-950/20 sm:border sm:border-white/70 overflow-hidden backdrop-blur-xs bg-white/30">
        {/* Subtle upper ambient highlight */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-sky-400 to-blue-600" />

        {/* Top Page Switcher Tabs */}
        <nav className="p-3 bg-white/70 backdrop-blur-md border-b border-white/80" aria-label="Portal Navigation">
          <div className="grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-slate-100/80 border border-slate-200/60">
            <button
              onClick={() => navigateTo('home')}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                currentPage === 'home'
                  ? 'bg-white text-blue-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Landmark className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Hub</span>
            </button>

            <button
              onClick={() => navigateTo('members')}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                currentPage === 'members'
                  ? 'bg-white text-blue-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Members (12)</span>
            </button>
          </div>
        </nav>

        {/* Conditional Rendering between Home Page and Dedicated Members Page */}
        {currentPage === 'home' ? (
          <>
            {/* 1. Header & Identity Banner */}
            <Header onShowToast={showToast} />

            {/* 2. 5 Social Buttons in 1 Column 5 Rows with IDs / Details */}
            <ConnectMatrix onShowToast={showToast} />

            {/* 3. Official Banking Credentials Card (with Account Name prominent) */}
            <BankCard onShowToast={showToast} />

            {/* 4. Leadership Gateway Teaser Card (routes to separate members page) */}
            <MembersTeaserCard onOpenMembers={() => navigateTo('members')} />

            {/* 5. Community Welfare Pillars & Highlights */}
            <WelfareHighlights onOpenQuickMessage={handleOpenInquiry} />

            {/* 6. Headquarters Address & Interactive Map Launcher */}
            <LocationCard onShowToast={showToast} />

            {/* 7. Footer */}
            <Footer />
          </>
        ) : (
          /* Separate Dedicated Page: Board of Members Contact Details */
          <MembersDirectory
            onBack={() => navigateTo('home')}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Persistent Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-slate-200/80 sm:hidden">
        <div className="max-w-md mx-auto grid grid-cols-2 h-14">
          <button
            onClick={() => navigateTo('home')}
            className={`flex flex-col items-center justify-center gap-0.5 text-xs font-bold transition-colors ${
              currentPage === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Landmark className="w-5 h-5" />
            <span className="text-[10px]">Official Hub</span>
          </button>

          <button
            onClick={() => navigateTo('members')}
            className={`flex flex-col items-center justify-center gap-0.5 text-xs font-bold transition-colors ${
              currentPage === 'members' ? 'text-emerald-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="text-[10px]">Members (12)</span>
          </button>
        </div>
      </div>

      {/* Interactive Quick WhatsApp Inquiry Modal */}
      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialTopic={inquiryTopic}
      />

      {/* Feedback Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}
