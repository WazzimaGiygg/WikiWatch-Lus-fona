import { ShieldAlert, KeyRound } from 'lucide-react';
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
      'bg-slate-800 rounded-xl p-6 border border-slate-700',
      className
    )}
  >
    {children}
  </div>
);

export default function LegalTab() {
  return (
    <div className="space-y-6">
      <GlassPanel>
        <div className="flex items-center gap-3 mb-4">
          <ShieldAlert className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-bold">LGPD (Lei nº 13.709/2018)</h2>
        </div>
        <p className="text-slate-300 mb-4">
          A Wikimedia Foundation, embora internacional, responde à legislação
          brasileira ao tratar dados de brasileiros. A exposição do nome real
          sem consentimento e o tratamento de IPs para fins de perseguição violam
          os princípios da <strong>finalidade</strong> e
          <strong>necessidade</strong>.
        </p>
        <div className="bg-red-900/20 p-3 rounded border border-red-900/50 text-red-200 text-sm">
          Multa potencial: até 2% do faturamento no Brasil por infração.
        </div>
      </GlassPanel>

      <GlassPanel>
        <div className="flex items-center gap-3 mb-4">
          <KeyRound className="h-8 w-8 text-blue-400" />
          <h2 className="text-xl font-bold">
            Marco Civil da Internet (Art. 10)
          </h2>
        </div>
        <p className="text-slate-300">
          A quebra de sigilo de dados de conexão (IPs) e registros de acesso
          depende exclusivamente de <strong>ordem judicial</strong>. O
          rastreamento proativo e exposição pública por administradores
          voluntários usurpa a competência do Poder Judiciário.
        </p>
      </GlassPanel>

      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 border-l-4 border-blue-500">
        <h2 className="text-xl font-bold mb-2">
          Precedente STF (RE 1.037.396 - Junho 2025)
        </h2>
        <p className="text-slate-300 text-sm italic">
          "Notice-and-takedown para conteúdos de notória gravidade, incluindo
          exposição de dados pessoais."
        </p>
        <p className="text-slate-400 mt-3 text-sm">
          Ao ser notificada extrajudicialmente sobre o doxing, a plataforma
          torna-se civilmente responsável se não remover o conteúdo
          imediatamente.
        </p>
      </div>
    </div>
  );
}
