'use client'

import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation('translate')

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("about_me")}</h2>
            <p className="text-muted-foreground">
              {t("first_text_about_me")}
            </p>
            <p className="text-muted-foreground">
              {t("second_text_about_me")}
            </p>
            <p className="text-muted-foreground">
              {t("third_text_about_me")}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/its_me.jpeg"
                alt="Juan David González Salazar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

