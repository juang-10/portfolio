"use client"

import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Send } from "lucide-react"

export default function Contact() {
  const { t } = useTranslation("translate");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("get_in_touch")}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">{t("get_in_touch_description")}</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact_information")}</CardTitle>
              <CardDescription>{t("contact_information_description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:juan.gonzalez@example.com" className="text-sm hover:underline">
                  juan.gonzalez@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  linkedin.com/in/juandavidgonzalez
                </a>
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">{t("availability")}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t("send_message")}</CardTitle>
              <CardDescription>{t("send_message_description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("name_placeholder")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("email_placeholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("message_placeholder")}
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t("sending")
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> {t("send_button")}
                    </>
                  )}
                </Button>
                {submitSuccess && (
                  <p className="text-sm text-green-500 mt-2">{t("message_sent_success")}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
