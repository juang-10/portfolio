"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"

export default function Experience() {
  const { t } = useTranslation("translate")
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("professional_experience")}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">{t("my_journey_frontend_developer")}</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 mt-12">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>{t("frontend_developer")}</CardTitle>
                  <CardDescription>Tres Pi Medios</CardDescription>
                </div>
                <Badge className="w-fit">{t("january_2023")} - {t("present")}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t("enhanced_ui_material_ui")}</li>
                <li>{t("implemented_redux_state_management")}</li>
                <li>{t("utilized_react_router_navigation")}</li>
                <li>{t("collaborated_backend_restful_apis")}</li>
                <li>{t("participated_agile_processes")}</li>
                <li>{t("optimized_app_performance")}</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>{t("web_master_developer")}</CardTitle>
                  <CardDescription>Tres Pi Medios</CardDescription>
                </div>
                <Badge className="w-fit">{t("web_master_trayectory")}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t("worked_with_no_code_tools")}</li>
                <li>{t("developed_wp_wpbakery")}</li>
                <li>{t("build_minisites_kcp")}</li>
                <li>{t("responsive_email_templates")}</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

