"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { summarizeProjectDetailsForJob } from "@/ai/flows/summarize-project-for-job";
import { projects, personalInfo } from "@/lib/data";

import { Section } from "./Section";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { GradientButton } from "./GradientButton";
import { Loader2, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language";

const formSchema = z.object({
  jobDescription: z.string().min(50, "Please provide a more detailed job description (at least 50 characters)."),
});

export default function AISummarizer() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [summary, setSummary] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const { toast } = useToast();
  const { t, lang } = useLanguage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setSummary("");

    try {
      const allProjectsDetails = projects
        .map(p => {
          const title = lang === 'de' && p.title_de ? p.title_de : p.title;
          const desc = lang === 'de' && p.description_de ? p.description_de : p.description;
          return `Project: ${title}\nDescription: ${desc}\nTechnologies: ${p.techStack.join(', ')}`;
        })
        .join('\n\n');

      const combinedProjectInfo = `The candidate is ${personalInfo.name}. Here are the project details from her portfolio:\n\n${allProjectsDetails}`;

      const result = await summarizeProjectDetailsForJob({
        projectDetails: combinedProjectInfo,
        jobOpeningDetails: values.jobDescription,
      });

      if (result.summary) {
        setSummary(result.summary);
        setIsDialogOpen(true);
      } else {
        throw new Error("The AI could not generate a summary.");
      }

    } catch (error) {
      console.error("Error summarizing project details:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem generating the summary. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="contact" title={t("section.ai_summary")} className="bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-8 text-lg text-muted-foreground">{t("ai.description")}</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Job Description</FormLabel>
                  <FormControl>
            <Textarea
              placeholder={t("ai.placeholder_job")}
                      className="min-h-[150px] bg-background text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <GradientButton type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("ai.generating")}
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  {t("ai.generate")}
                </>
              )}
            </GradientButton>
          </form>
        </Form>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Sparkles className="text-primary" />
              {t("ai.generated_summary_heading")}
            </DialogTitle>
            <DialogDescription>{t("ai.generated_summary_heading")}</DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm max-w-none text-muted-foreground max-h-[60vh] overflow-y-auto pr-2">
            <p>{summary}</p>
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
