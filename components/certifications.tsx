import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap } from "lucide-react"

const certifications = [
  {
    title: "Advanced React and Redux",
    issuer: "Udemy",
    date: "2023",
    description: "Comprehensive course on advanced React patterns and Redux state management",
  },
  {
    title: "JavaScript: The Complete Guide",
    issuer: "Coursera",
    date: "2022",
    description: "In-depth JavaScript course covering ES6+ features and modern practices",
  },
  {
    title: "Angular Fundamentals",
    issuer: "Pluralsight",
    date: "2022",
    description: "Introduction to Angular framework and component-based architecture",
  },
]

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Universidad Surcolombiana",
    location: "Colombia",
    date: "2018 - 2022",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications & Education</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              My academic background and professional development
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
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
              <h3 className="text-2xl font-bold">Education</h3>
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

