// Define types for better type safety.

'use server';

/**
 * @fileOverview Generates an email to the Ombuds Commission for reporting checkuser abuse.
 *
 * - generateOmbudsCommissionEmail - A function that generates the email.
 * - GenerateOmbudsCommissionEmailInput - The input type for the generateOmbudsCommissionEmail function.
 * - GenerateOmbudsCommissionEmailOutput - The return type for the generateOmbudsCommissionEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateOmbudsCommissionEmailInputSchema = z.object({
  violator: z.string().describe('The username of the alleged violator.'),
  violations: z.string().describe('A detailed description of the checkuser policy violations.'),
  evidence: z.string().describe('A description of where the evidence can be found.')
});
export type GenerateOmbudsCommissionEmailInput = z.infer<typeof GenerateOmbudsCommissionEmailInputSchema>;

const GenerateOmbudsCommissionEmailOutputSchema = z.object({
  email: z.string().describe('The generated email content.')
});
export type GenerateOmbudsCommissionEmailOutput = z.infer<typeof GenerateOmbudsCommissionEmailOutputSchema>;

export async function generateOmbudsCommissionEmail(input: GenerateOmbudsCommissionEmailInput): Promise<GenerateOmbudsCommissionEmailOutput> {
  return generateOmbudsCommissionEmailFlow(input);
}

const ombudsCommissionEmailPrompt = ai.definePrompt({
  name: 'ombudsCommissionEmailPrompt',
  input: {schema: GenerateOmbudsCommissionEmailInputSchema},
  output: {schema: GenerateOmbudsCommissionEmailOutputSchema},
  prompt: `You are an expert email generator, creating emails for users to report violations to the Ombuds Commission.

  Create an email using the information provided to report a CheckUser abuse.

  The email should be addressed to the Ombuds Commission and include:
  - A clear statement of the CheckUser Policy violation.
  - The username of the violator.
  - A detailed explanation of the violations.
  - Where to find the evidence.

  Here is the information:
  Violator: {{{violator}}}
  Violations: {{{violations}}}
  Evidence: {{{evidence}}}

  Begin!
  `
});

const generateOmbudsCommissionEmailFlow = ai.defineFlow(
  {
    name: 'generateOmbudsCommissionEmailFlow',
    inputSchema: GenerateOmbudsCommissionEmailInputSchema,
    outputSchema: GenerateOmbudsCommissionEmailOutputSchema,
  },
  async input => {
    const {output} = await ombudsCommissionEmailPrompt(input);
    return output!;
  }
);
