import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    description: "Technologies for building user interfaces",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Material UI",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Development tools and processes",
    skills: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "npm", "yarn", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Backend & Deployment",
    description: "Server-side technologies and deployment",
    skills: ["RESTful APIs", "Firebase", "Node.js basics", "Docker", "Vercel", "Netlify"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">The tools and technologies I work with</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category) => (
            <Card key={category.title} className="h-full">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

