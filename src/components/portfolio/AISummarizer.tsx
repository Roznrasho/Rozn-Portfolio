"use client";

import * as React from "react";
import { Section } from "./Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/context/language";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm<ContactForm>();
  const [isSending, setIsSending] = React.useState(false);

  const onSubmit = async (data: ContactForm) => {
    setIsSending(true);
    try {
      // Simple placeholder: in a real app you'd send to an API.
      await new Promise((r) => setTimeout(r, 800));
      toast({ title: t("contact.success"), variant: "default" });
      reset();
    } catch (err) {
      console.error(err);
      toast({ title: t("contact.error"), variant: "destructive" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section
      id="contact"
      title={t("section.contact")}
      underlineColor={"hsl(var(--primary))"}
      style={{ background: 'linear-gradient(to right, rgba(30 75 115 / 100%), transparent)' }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2">{t("contact.title")}</h3>
            <p className=" mb-6">{t("contact.description")}</p>

            <Card className="mb-6">
              <CardHeader className="flex items-center gap-3 p-4">
                <Mail className="w-5 h-5 text-primary" />
                <CardTitle className="text-sm">Email</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <a href="mailto:rashorozn@gmail.com" className="text-primary hover:underline">rashorozn@gmail.com</a>
              </CardContent>
            </Card>

            {/* Phone and Location removed per request */}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-background p-6 rounded-lg shadow-lg border border-primary/30">
            <div className="grid gap-4">
              <label className="sr-only">{t("contact.name")}</label>
              <Input placeholder={t("contact.name")} {...register("name")} />

              <label className="sr-only">{t("contact.email")}</label>
              <Input placeholder={t("contact.email")} type="email" {...register("email")} />

              <label className="sr-only">{t("contact.message")}</label>
              <Textarea placeholder={t("contact.message")} className="min-h-[140px]" {...register("message")} />

              <div className="flex justify-end">
                <Button type="submit" disabled={isSending}>
                  {isSending ? t("contact.sending") : t("contact.send")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
