'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Certifications() {
  const { t } = useTranslation("translate");

  const certifications = [
    {
      title: t("react_expert_course"),
      issuer: t("udemy"),
      date: t("advanced_react_redux_date"),
      description: t("advanced_react_redux_description"),
    },
    {
      title: t("modern_js_course"),
      issuer: t("udemy"),
      date: t("modern_js_course_date"),
      description: t("modern_js_complete_guide_description"),
    },
    {
      title: t("angular_fundamentals"),
      issuer: t("platzi"),
      date: t("angular_fundamentals_date"),
      description: t("angular_fundamentals_description"),
    },
  ];

  const education = [
    {
      degree: t("software_engineer"),
      institution: t("university_surcolombiana"),
      location: t("colombia"),
      date: "2018 - 2022",
    },
  ];

  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("certifications_education")}
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {t("certifications_education_description")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{t("certifications")}</h3>
            </div>
            <div className="grid gap-4">
              {certifications.map((cert) => (
                <Card key={cert.title}>
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{t("education")}</h3>
            </div>
            <div className="grid gap-4">
              {education.map((edu) => (
                <Card key={edu.degree}>
                  <CardHeader>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>
                      {edu.institution} • {edu.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
