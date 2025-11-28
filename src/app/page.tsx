import { Siren } from 'lucide-react';
import { WikiWatchClient } from '@/components/wiki-watch-client';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pb-20">
      <header className="w-full max-w-5xl px-6 py-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/10 blur-[100px] z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4 animate-pulse">
            <Siren className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase">
            Wiki<span className="text-primary">Watch</span> Lusófona
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Dossiê de conformidade sobre abuso de ferramentas,
            <span className="text-white font-semibold"> perseguição seletiva</span>
            e
            <span className="text-white font-semibold"> doxing institucional </span>
            na Wikipédia em Português.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-red-400 text-sm font-semibold uppercase tracking-wider">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Relatório de Conformidade 2025
          </div>
        </div>
      </header>

      <WikiWatchClient />

      <footer className="w-full max-w-5xl px-6 mt-20 text-center border-t border-slate-800 pt-8">
        <p className="text-slate-500 text-sm">
          Este é um documento de protesto baseado no
          <em>
            "Relatório de Conformidade: Análise de Violações de Políticas e Abuso
            de Ferramentas na Wikipédia Lusófona"
          </em>
          .
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Todas as informações são extraídas de registros públicos da Wikipédia
          (pt.wikipedia.org). A proteção de dados é um direito fundamental.
        </p>
      </footer>
    </div>
  );
}
