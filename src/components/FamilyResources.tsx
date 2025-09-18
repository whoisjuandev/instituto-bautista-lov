import { useState } from "react"
import { FileText, Shirt, School, Download, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const FamilyResources = () => {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const resources = [
    {
      id: "uniformes",
      title: "Uniformes",
      icon: Shirt,
      description: "Información sobre uniformes por nivel educativo",
    },
    {
      id: "formularios",
      title: "Formularios",
      icon: FileText,
      description: "Descargas de documentación importante",
    },
    {
      id: "materiales",
      title: "Lista de Materiales 2026",
      icon: School,
      description: "Lista completa para Nivel Inicial",
    },
  ]

  const uniformesByLevel = [
    {
      level: "Nivel Inicial",
      items: [
        "Guardapolvo anaranjado (sala 4 y 5 años) junto con la remera del Instituto ó remera blanca ó remera azul marino debajo del guardapolvo.",
        "Remera de la escuela color anaranjado (los días de Ed. Física)",
        "Medias azules",
        "Zapatos o zapatillas negras",
        "Abrigos azules (todos con nombres y/o iniciales)",
      ],
    },
    {
      level: "Nivel Primario",
      items: [
        "Chomba de la escuela color anaranjado",
        "Remera de la escuela color anaranjada (los días de Ed. Física)",
        "Short pollera (mujeres)",
        "Pantalón de vestir azul marino (varones)",
        "Pantalón azul marino (los días de Ed. Física)",
        "Medias azul marino",
        "Zapatos o zapatillas negras",
        "Abrigos azules (todos con nombres y/o iniciales)",
      ],
    },
    {
      level: "Nivel Secundario",
      items: [
        "Chomba de la escuela color blanca",
        "Remera de la escuela color blanca (los días de Ed. Física)",
        "Pantalón de vestir color azul marino (mujeres)",
        "Pantalón de vestir color azul marino (varones)",
        "Pantalón azul marino (los días de Ed. Física)",
        "Medias azul marino",
        "Zapatos o zapatillas negras",
        "Abrigos azul marino",
      ],
    },
  ]

  const forms = [
    {
      name: "Autorización para Salida Individual",
      icon: FileText,
      downloadUrl: "#",
    },
    {
      name: "Autorización para Salida Acompañada",
      icon: FileText,
      downloadUrl: "#",
    },
    {
      name: "Ficha Médica Obligatoria",
      icon: FileText,
      downloadUrl: "#",
    },
  ]

  const materialesGrades = [
    { grade: "1°", name: "1° Grado", downloadUrl: "#" },
    { grade: "2°", name: "2° Grado", downloadUrl: "#" },
    { grade: "3°", name: "3° Grado", downloadUrl: "#" },
    { grade: "4°", name: "4° Grado", downloadUrl: "#" },
    { grade: "5°", name: "5° Grado", downloadUrl: "#" },
    { grade: "6°", name: "6° Grado", downloadUrl: "#" },
    { grade: "7°", name: "7° Grado", downloadUrl: "#" },
  ]

  return (
    <section id="recursos-familias" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-school-blue mb-6">
            Recursos para Familias
          </h2>
          <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Accedé rápidamente a la información que necesitás para el ciclo
            lectivo.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <div key={resource.id}>
              {/* Uniformes Modal */}
              {resource.id === "uniformes" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="bg-white border border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:shadow-lg hover:border-school-yellow/50 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in h-full flex flex-col justify-between"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <div className="w-16 h-16 bg-school-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
                          <resource.icon
                            className="text-school-blue"
                            size={28}
                          />
                        </div>
                        <h3 className="text-2xl font-semibold text-school-blue mb-4">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-school-blue">
                        Uniformes del Instituto
                      </DialogTitle>
                      <DialogDescription>
                        Información detallada sobre los uniformes para cada
                        nivel educativo.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                      {uniformesByLevel.map((nivel, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-school-blue mb-4">
                            {nivel.level}
                          </h4>
                          <ul className="space-y-2">
                            {nivel.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="text-sm text-gray-700 leading-relaxed"
                              >
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-school-yellow/10 rounded-lg">
                      <p className="text-school-blue font-semibold text-center">
                        <strong>Nota importante:</strong> Todos los uniformes
                        deben llevar el LOGO del Instituto.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              )}

              {/* Formularios Modal */}
              {resource.id === "formularios" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="bg-white border border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:shadow-lg hover:border-school-yellow/50 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in h-full flex flex-col justify-between"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <div className="w-16 h-16 bg-school-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
                          <resource.icon
                            className="text-school-blue"
                            size={28}
                          />
                        </div>
                        <h3 className="text-2xl font-semibold text-school-blue mb-4">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-school-blue">
                        Formularios para Descarga
                      </DialogTitle>
                      <DialogDescription>
                        Descargá los formularios necesarios para el año lectivo.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 mt-6">
                      {forms.map((form, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          className="h-16 justify-start border-school-yellow/50 hover:bg-school-yellow/10 hover:border-school-yellow"
                          onClick={() =>
                            window.open(form.downloadUrl, "_blank")
                          }
                        >
                          <form.icon
                            className="text-school-blue mr-3"
                            size={20}
                          />
                          <span className="text-school-blue font-medium">
                            {form.name}
                          </span>
                          <Download
                            className="text-school-blue ml-auto"
                            size={16}
                          />
                        </Button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}

              {/* Materiales Modal */}
              {resource.id === "materiales" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="bg-white border border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:shadow-lg hover:border-school-yellow/50 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in h-full flex flex-col justify-between"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <div className="w-16 h-16 bg-school-yellow rounded-full flex items-center justify-center mb-6 mx-auto">
                          <resource.icon
                            className="text-school-blue"
                            size={28}
                          />
                        </div>
                        <h3 className="text-2xl font-semibold text-school-blue mb-4">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-school-blue">
                        Lista de Materiales 2026 - Nivel Inicial
                      </DialogTitle>
                      <DialogDescription>
                        Seleccioná el grado para descargar la lista de
                        materiales correspondiente.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
                      {materialesGrades.map((material, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          className="h-16 justify-start border-school-yellow/50 hover:bg-school-yellow/10 hover:border-school-yellow"
                          onClick={() =>
                            window.open(material.downloadUrl, "_blank")
                          }
                        >
                          <FileText
                            className="text-school-blue mr-3"
                            size={20}
                          />
                          <span className="text-school-blue font-medium">
                            {material.name}
                          </span>
                          <Download
                            className="text-school-blue ml-auto"
                            size={16}
                          />
                        </Button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 p-6 bg-gray-50 rounded-xl max-w-4xl mx-auto">
          <p className="text-gray-700 mb-4">
            ¿Necesitás más información o tenés dudas sobre estos recursos?
          </p>
          <Button
            onClick={() =>
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Contactanos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FamilyResources
