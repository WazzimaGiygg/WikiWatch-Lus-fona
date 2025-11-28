"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ViolationsTab from './tabs/violations-tab';
import TimelineTab from './tabs/timeline-tab';
import LegalTab from './tabs/legal-tab';
import ActionPlanTab from './tabs/action-plan-tab';

type Tab = 'denuncias' | 'cronologia' | 'legal' | 'acao';

const TABS: { id: Tab; label: string }[] = [
  { id: 'denuncias', label: 'Violações' },
  { id: 'cronologia', label: 'Linha do Tempo' },
  { id: 'legal', label: 'Jurídico & LGPD' },
  { id: 'acao', label: 'Plano de Ação' },
];

export function WikiWatchClient() {
  const [activeTab, setActiveTab] = useState<Tab>('denuncias');

  const renderContent = () => {
    switch (activeTab) {
      case 'denuncias':
        return <ViolationsTab />;
      case 'cronologia':
        return <TimelineTab />;
      case 'legal':
        return <LegalTab />;
      case 'acao':
        return <ActionPlanTab />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
        {TABS.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-6 py-3 h-auto rounded-lg font-bold text-sm uppercase tracking-widest transition-all',
              activeTab === tab.id
                ? 'bg-red-600 text-white shadow-lg shadow-red-900/50 hover:bg-red-500'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            )}
            variant="secondary"
          >
            {tab.label}
          </Button>
        ))}
      </nav>

      <main className="w-full max-w-5xl px-6 relative z-10">
        <div key={activeTab} className="animate-fade-in">
          {renderContent()}
        </div>
      </main>
    </>
  );
}
