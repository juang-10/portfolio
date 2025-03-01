import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and checkout process.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Redux", "Material UI", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks, projects, and deadlines with a clean, intuitive interface.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and forecasts based on user location or search.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "API Integration", "Styled Components"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">A selection of my recent work</p>
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
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
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

