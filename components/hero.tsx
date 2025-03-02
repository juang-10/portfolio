'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { useTranslation } from "react-i18next";

export default function Hero() {

  const { t } = useTranslation("translate");

  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-16 bg-muted/50">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Juan David González Salazar
          </h1>
          <p className="text-xl font-medium text-primary">
            {t("description")}
          </p>
        </div>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          {t("experience_work")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg">
            <Link href="#contact">{t("get_in_touch")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">{t("view_my_work")}</Link>
          </Button>
        </div>
        <div className="flex gap-4 mt-6">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/juang-10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://www.linkedin.com/in/juan-gonzalez-salazar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

