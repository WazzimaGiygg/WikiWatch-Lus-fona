export default function TimelineTab() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-slate-700 transform md:-translate-x-1/2"></div>
      <div className="relative flex flex-col gap-12">
        
        {/* Event 1 */}
        <div className="flex md:items-center w-full">
          <div className="hidden md:block w-1/2"></div>
          <div className="z-10 absolute left-4 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full border-4 border-background bg-red-500"></div>
          </div>
          <div className="w-full md:w-1/2 bg-slate-800/50 p-6 rounded-lg ml-10 md:ml-8 relative border-l-4 border-red-500 md:border-l-0">
            <h3 className="text-xl font-bold text-white">Início da Vigilância</h3>
            <span className="text-red-400 font-mono text-sm">Fevereiro 2025</span>
            <p className="text-slate-400 mt-2 text-sm">Solicitação de CheckUser no artigo "Unifunec" sem provas de vandalismo. Quebra inicial da Presunção de Boa-Fé.</p>
          </div>
        </div>

        {/* Event 2 */}
        <div className="flex md:items-center w-full md:flex-row-reverse">
          <div className="hidden md:block w-1/2"></div>
          <div className="z-10 absolute left-4 md:left-1/2 top-[calc(25%+1.5rem)] md:top-auto -translate-x-1/2 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full border-4 border-background bg-slate-600"></div>
          </div>
          <div className="w-full md:w-1/2 bg-slate-800/50 p-6 rounded-lg ml-10 md:mr-8 md:ml-0 relative border-l-4 border-slate-600 md:border-l-0 md:border-r-4 md:text-right">
            <h3 className="text-xl font-bold text-white">Retaliação "Talvez agora seja viável"</h3>
            <span className="text-red-400 font-mono text-sm">Agosto 2025</span>
            <p className="text-slate-400 mt-2 text-sm">Little Sunshine reativa pedidos de verificação minutos após o usuário se manifestar. Bloqueio de 8 contas.</p>
          </div>
        </div>
        
        {/* Event 3 */}
        <div className="flex md:items-center w-full">
          <div className="hidden md:block w-1/2"></div>
          <div className="z-10 absolute left-4 md:left-1/2 top-[calc(50%+3rem)] md:top-auto -translate-x-1/2 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full border-4 border-background bg-amber-500"></div>
          </div>
          <div className="w-full md:w-1/2 bg-slate-800/50 p-6 rounded-lg ml-10 md:ml-8 relative border-l-4 border-amber-500 md:border-l-0">
            <h3 className="text-xl font-bold text-white">Intimidação Técnica</h3>
            <span className="text-red-400 font-mono text-sm">Setembro 2025</span>
            <p className="text-slate-400 mt-2 text-sm">Edmond Dantès expõe faixas de IP como "exemplo ilustrativo". Violação de política de retenção de dados.</p>
          </div>
        </div>

        {/* Event 4 */}
        <div className="flex md:items-center w-full md:flex-row-reverse">
          <div className="hidden md:block w-1/2"></div>
          <div className="z-10 absolute left-4 md:left-1/2 top-[calc(75%+4.5rem)] md:top-auto -translate-x-1/2 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full border-4 border-background bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
          </div>
          <div className="w-full md:w-1/2 bg-slate-800/50 p-6 rounded-lg ml-10 md:mr-8 md:ml-0 relative border-l-4 border-red-600 md:border-l-0 md:border-r-4 md:text-right">
            <h3 className="text-xl font-bold text-white">Doxing Consumado</h3>
            <span className="text-red-400 font-mono text-sm">Consolidado 2025</span>
            <p className="text-slate-400 mt-2 text-sm">Exposição pública do nome real em múltiplas discussões. Risco de danos irreparáveis.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
