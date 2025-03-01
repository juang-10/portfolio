import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate Frontend Developer with a strong focus on creating intuitive and performant web
              applications. With 2 years of experience in React and TypeScript, I've developed a deep understanding of
              modern frontend technologies and best practices.
            </p>
            <p className="text-muted-foreground">
              My approach combines technical expertise with a keen eye for design, allowing me to build applications
              that are not only functional but also visually appealing and user-friendly. I excel at optimizing user
              experiences, working with APIs, and collaborating in agile teams.
            </p>
            <p className="text-muted-foreground">
              I'm constantly learning and exploring new technologies to stay at the forefront of web development. My
              goal is to create web applications that make a positive impact and provide exceptional user experiences.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=320&width=320"
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

