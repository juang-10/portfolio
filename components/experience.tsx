"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"

export default function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">My journey as a Frontend Developer</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 mt-12">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Frontend Developer</CardTitle>
                  <CardDescription>Tres Pi Medios</CardDescription>
                </div>
                <Badge className="w-fit">2022 - Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Enhanced user interfaces using Material UI, resulting in a 30% improvement in user engagement metrics.
                </li>
                <li>Implemented Redux for state management, improving application performance and maintainability.</li>
                <li>Utilized React Router for seamless navigation, reducing page load times by 25%.</li>
                <li>
                  Collaborated with backend developers to integrate RESTful APIs, ensuring smooth data flow between
                  frontend and backend systems.
                </li>
                <li>
                  Participated in agile development processes, contributing to sprint planning, daily stand-ups, and
                  retrospectives.
                </li>
                <li>
                  Optimized application performance through code refactoring and implementation of best practices.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Frontend Developer Intern</CardTitle>
                  <CardDescription>Web Solutions Inc.</CardDescription>
                </div>
                <Badge className="w-fit">2021 - 2022</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Assisted in developing responsive web applications using React and CSS frameworks.</li>
                <li>Collaborated with senior developers to implement new features and fix bugs.</li>
                <li>Participated in code reviews and gained valuable feedback to improve coding skills.</li>
                <li>
                  Contributed to the development of a client dashboard that improved user experience and data
                  visualization.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

