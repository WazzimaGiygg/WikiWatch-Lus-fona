import { UserRoundSearch, EyeOff, Gavel } from 'lucide-react';
import { cn } from '@/lib/utils';

const GlassPanel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      'bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-2xl',
      className
    )}
  >
    {children}
  </div>
);

export default function ViolationsTab() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <GlassPanel className="p-8 border-l-4 border-primary">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/20 rounded-lg text-red-400">
              <UserRoundSearch className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold">Doxing & Exposição</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-muted pb-2">
              <span className="text-muted-foreground text-sm">Acusados</span>
              <span className="font-mono text-red-400 font-bold">
                Chronus, Little Sunshine
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-muted pb-2">
              <span className="text-muted-foreground text-sm">Violação</span>
              <span className="font-mono text-white">UCoC §3.1 (Privacidade)</span>
            </div>
            <p className="text-slate-300 leading-relaxed mt-4">
              Exposição deliberada do nome civil
              <strong>"Pedro Henrique Cardona Peres"</strong> em discussões
              públicas e páginas de bloqueio, configurando violação direta da
              política de privacidade e risco à integridade do usuário fora da
              plataforma.
            </p>
          </div>
        </GlassPanel>

        <GlassPanel className="p-8 border-l-4 border-amber-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-amber-500/20 rounded-lg text-amber-400">
              <EyeOff className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold">Abuso de CheckUser</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-muted pb-2">
              <span className="text-muted-foreground text-sm">Acusado</span>
              <span className="font-mono text-amber-400 font-bold">
                Edmond Dantès
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-muted pb-2">
              <span className="text-muted-foreground text-sm">Política</span>
              <span className="font-mono text-white">
                Retenção de Dados &amp; Sigilo
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed mt-4">
              Divulgação pública de "exemplos ilustrativos" de faixas de IP (ex:
              <em>000.000.001–003</em>) para intimidação técnica. Uso de dados
              de contas inativas há 150 dias para ligação técnica, violando o
              limite global de retenção de 90 dias.
            </p>
          </div>
        </GlassPanel>
      </div>

      <GlassPanel className="p-8 border-t-4 border-purple-500">
        <div className="flex items-start gap-6">
          <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 hidden md:block">
            <Gavel className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Perseguição Sistemática (Wikihounding)
            </h2>
            <p className="text-slate-300 mb-6">
              Uso de ferramentas administrativas para retaliação pessoal em vez
              de proteção do projeto. Evidência textual de verificação reativa:
              a frase
              <em>"talvez agora seja viável"</em> proferida pela
              administradora
              <strong>Little Sunshine</strong> imediatamente após
              manifestação do usuário, demonstrando monitoramento abusivo (UCoC
              §3.2).
            </p>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-muted">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Evidências Chave
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>
                  Reativação de verificação minutos após edição do usuário
                  (Agosto 2025).
                </li>
                <li>
                  Bloqueio global sem vandalismo ativo, baseado em "padrão
                  editorial".
                </li>
                <li>Uso da admissão de boa-fé do usuário contra ele mesmo.</li>
              </ul>
            </div>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
