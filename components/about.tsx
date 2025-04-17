import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h3 className="text-2xl font-bold mb-4">
          ¡Hola! Soy <span className="text-teal-400">Desarrollador Front End</span>
        </h3>
        <p className="text-slate-300 mb-4">
          Con más de 5 años de experiencia en el desarrollo web, me especializo en crear interfaces de usuario modernas
          y responsivas utilizando las últimas tecnologías. Mi pasión es construir experiencias digitales que combinen
          un diseño atractivo con una funcionalidad intuitiva.
        </p>
        <p className="text-slate-300 mb-6">
          Me encanta trabajar con React, Next.js, TailwindCSS y otras tecnologías modernas para crear experiencias de
          usuario excepcionales. Siempre estoy aprendiendo nuevas herramientas y metodologías para mantenerme
          actualizado en este campo en constante evolución.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-teal-500 hover:bg-teal-600">
            <FileText className="mr-2 h-4 w-4" /> Descargar CV
          </Button>
          <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-950">
            Más sobre mí
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400">
          <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}
