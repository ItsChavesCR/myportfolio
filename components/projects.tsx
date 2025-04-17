import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Una plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de control para visualización de datos con gráficos interactivos y reportes personalizados.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TailwindCSS", "Chart.js", "Supabase"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Social Media App",
      description:
        "Aplicación de redes sociales con funciones de publicación, comentarios y mensajería en tiempo real.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Firebase", "Socket.io", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="bg-slate-900/60 border-slate-800 overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-teal-400">{project.title}</h3>
            <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="bg-slate-800 text-teal-400">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="border-slate-700 hover:border-teal-400 hover:bg-slate-800">
                <Github className="mr-2 h-4 w-4" /> Código
              </Button>
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
