"use server";

import {
  generatePrivacyViolationEmail,
  type PrivacyViolationEmailOutput,
} from '@/ai/flows/generate-privacy-violation-email';
import {
  generateOmbudsCommissionEmail,
  type GenerateOmbudsCommissionEmailOutput,
} from '@/ai/flows/generate-ombuds-commission-email';

export async function handlePrivacyEmailGeneration(): Promise<string> {
  try {
    const input = {
      violator: 'Chronus, Little Sunshine',
      victim: 'Wazzimagiygg',
      details:
        "Exposição do nome 'Pedro Henrique Cardona Peres' publicamente sem consentimento em discussões e páginas de bloqueio.",
      policySection: '§3.1',
      additionalContext:
        'A ação viola a LGPD brasileira e o Código de Conduta Universal. Solicito a supressão imediata dos dados.',
    };
    const result: PrivacyViolationEmailOutput =
      await generatePrivacyViolationEmail(input);
    return `Subject: ${result.emailSubject}\n\n${result.emailBody}`;
  } catch (error) {
    console.error('AI Error (Privacy Email):', error);
    return 'Error: Falha ao gerar o e-mail.';
  }
}

export async function handleOmbudsEmailGeneration(): Promise<string> {
  try {
    const input = {
      violator: 'Edmond Dantès',
      violations:
        "1. Public disclosure of IP ranges as 'illustrative examples' for technical intimidation.\n2. Violation of the 90-day data retention policy by linking accounts inactive for 150 days.",
      evidence:
        'Evidence can be found in the compliance report and on-wiki discussions related to the case.',
    };
    const result: GenerateOmbudsCommissionEmailOutput =
      await generateOmbudsCommissionEmail(input);
    return result.email;
  } catch (error) {
    console.error('AI Error (Ombuds Email):', error);
    return 'Error: Falha ao gerar o e-mail.';
  }
}
