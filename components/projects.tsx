'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Projects() {
  const { t } = useTranslation("translate");

  const projects = [
    {
      title: t("journal_app"),
      description: t("journal_app_description"),
      tags: ["React", "Redux", "Material UI", "Firebase", "Cloudinary"],
      liveUrl: "https://calendar-backend-527j.onrender.com/",
      githubUrl: "https://github.com/juang-10/calendar-frontend",
      image: "/journal.png",
    },
    {
      title: t("search_gifs"),
      description: t("search_gifs_description"),
      image: "/gifs.webp",
      tags: ["React", "Hooks", "Giphy API"],
      liveUrl: "https://juang-10.github.io/react-gif-expert/",
      githubUrl: "https://github.com/juang-10/react-gif-expert",
    },
    {
      title: t("heroes_spa"),
      description: t("heroes_spa_description"),
      tags: ["React", "React Router DOM", "Hooks", "Context API"],
      liveUrl: "https://heroes-dc-marvel-app-react.netlify.app/login",
      githubUrl: "https://github.com/juang-10/heroes-with-react",
      image: "/heroes.png"
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("featured_projects")}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">{t("featured_projects_description")}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t("code")}
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("live_demo")}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
