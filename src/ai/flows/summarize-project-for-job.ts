'use server';
/**
 * @fileOverview Summarizes project details for a specific job opening to assess suitability.
 *
 * - summarizeProjectDetailsForJob - A function that summarizes project details tailored to a job.
 * - SummarizeProjectDetailsForJobInput - The input type for the summarizeProjectDetailsForJob function.
 * - SummarizeProjectDetailsForJobOutput - The return type for the summarizeProjectDetailsForJob function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectDetailsForJobInputSchema = z.object({
  projectDetails: z.string().describe('Details of the project to summarize.'),
  jobOpeningDetails: z.string().describe('Details of the job opening.'),
});
export type SummarizeProjectDetailsForJobInput = z.infer<typeof SummarizeProjectDetailsForJobInputSchema>;

const SummarizeProjectDetailsForJobOutputSchema = z.object({
  summary: z.string().describe('A summary of the project details tailored to the job opening.'),
});
export type SummarizeProjectDetailsForJobOutput = z.infer<typeof SummarizeProjectDetailsForJobOutputSchema>;

export async function summarizeProjectDetailsForJob(input: SummarizeProjectDetailsForJobInput): Promise<SummarizeProjectDetailsForJobOutput> {
  return summarizeProjectDetailsForJobFlow(input);
}

const summarizeProjectDetailsForJobPrompt = ai.definePrompt({
  name: 'summarizeProjectDetailsForJobPrompt',
  input: {schema: SummarizeProjectDetailsForJobInputSchema},
  output: {schema: SummarizeProjectDetailsForJobOutputSchema},
  prompt: `Summarize the following project details in a way that is relevant to the job opening described below.\n\nProject Details: {{{projectDetails}}}\n\nJob Opening Details: {{{jobOpeningDetails}}}\n\nSummary: `,
});

const summarizeProjectDetailsForJobFlow = ai.defineFlow(
  {
    name: 'summarizeProjectDetailsForJobFlow',
    inputSchema: SummarizeProjectDetailsForJobInputSchema,
    outputSchema: SummarizeProjectDetailsForJobOutputSchema,
  },
  async input => {
    const {output} = await summarizeProjectDetailsForJobPrompt(input);
    return output!;
  }
);
