"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  handlePrivacyEmailGeneration,
  handleOmbudsEmailGeneration,
} from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
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
      'bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-xl',
      className
    )}
  >
    {children}
  </div>
);

type CopyState = 'idle' | 'loading' | 'copied';

export default function ActionPlanTab() {
  const [privacyCopyState, setPrivacyCopyState] = useState<CopyState>('idle');
  const [ombudsCopyState, setOmbudsCopyState] = useState<CopyState>('idle');
  const { toast } = useToast();

  const handleCopyToClipboard = async (
    generator: () => Promise<string>,
    setCopyState: React.Dispatch<React.SetStateAction<CopyState>>
  ) => {
    setCopyState('loading');
    try {
      const textToCopy = await generator();
      if (textToCopy.startsWith('Error:')) {
        throw new Error(textToCopy);
      }
      await navigator.clipboard.writeText(textToCopy);
      setCopyState('copied');
      toast({
        title: 'Copiado!',
        description: 'O modelo de email foi copiado para a área de transferência.',
      });
      setTimeout(() => setCopyState('idle'), 3000);
    } catch (error) {
      console.error('Failed to copy or generate:', error);
      toast({
        variant: 'destructive',
        title: 'Erro',
        description:
          'Não foi possível gerar ou copiar o email. Tente novamente.',
      });
      setCopyState('idle');
    }
  };

  const getButtonContent = (state: CopyState, defaultText: string) => {
    switch (state) {
      case 'loading':
        return (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Gerando...
          </>
        );
      case 'copied':
        return 'Copiado!';
      case 'idle':
      default:
        return defaultText;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Exija Responsabilização
        </h2>
        <p className="text-muted-foreground">
          Utilize os canais oficiais globais. O "Litígio Duplo" é a estratégia
          recomendada pelo relatório.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <GlassPanel className="p-6 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2">
            Denúncia à Privacy Team
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            Para casos de Doxing (exposição de nome real). Violação UCoC §3.1.
          </p>
          <div className="bg-slate-900 p-3 rounded mb-4 text-xs font-mono text-slate-500 truncate">
            privacy@wikimedia.org
          </div>
          <Button
            onClick={() =>
              handleCopyToClipboard(
                handlePrivacyEmailGeneration,
                setPrivacyCopyState
              )
            }
            disabled={privacyCopyState !== 'idle'}
            className="w-full py-3 h-auto bg-red-600 text-white font-bold rounded hover:bg-red-500 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            {getButtonContent(privacyCopyState, 'Gerar e Copiar Email')}
          </Button>
        </GlassPanel>

        <GlassPanel className="p-6 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2">
            Denúncia à Ombuds Commission
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            Para abuso de CheckUser e violação de retenção de dados.
          </p>
          <div className="bg-slate-900 p-3 rounded mb-4 text-xs font-mono text-slate-500 truncate">
            ombudscommission@wikimedia.org
          </div>
          <Button
            onClick={() =>
              handleCopyToClipboard(
                handleOmbudsEmailGeneration,
                setOmbudsCopyState
              )
            }
            disabled={ombudsCopyState !== 'idle'}
            className="w-full py-3 h-auto bg-amber-600 text-white font-bold rounded hover:bg-amber-500 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            {getButtonContent(ombudsCopyState, 'Gerar e Copiar (Inglês)')}
          </Button>
        </GlassPanel>
      </div>

      <div className="mt-8 p-4 border border-slate-700 rounded-lg text-center bg-slate-900/50">
        <h4 className="text-white font-bold mb-2">Via Judicial (Brasil)</h4>
        <p className="text-sm text-muted-foreground">
          Caso as denúncias internas falhem, o relatório recomenda
          <strong>Notificação Extrajudicial</strong> baseada na LGPD e posterior
          Ação de Danos Morais contra a Wikimedia Foundation no Brasil.
        </p>
      </div>
    </div>
  );
}
