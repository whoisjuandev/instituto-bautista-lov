import {
  BookOpen,
  User,
  Users,
  GraduationCap,
  Calendar,
  ChevronRight,
} from "lucide-react"
import { Button } from "./ui/button"

const Preinscripciones = () => {
  const handlePreinscripcion = () => {
    // TODO: Reemplazar con el link real de Google Forms cuando esté disponible
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScPhNdw02D7vLrh98ewHaMpBV5Zi0b6EAUNiYan9iIc5DA2MQ/viewform?usp=header",
      "_blank"
    )
  }

  const educationalLevels = [
    {
      icon: User,
      title: "Salas de 4 y 5 años",
      description: "Primeros pasos con amor y valores",
    },
    {
      icon: Users,
      title: "Nivel Primario",
      description: "Bases sólidas para el futuro",
    },
    {
      icon: GraduationCap,
      title: "Nivel Secundario",
      description: "Preparación integral y liderazgo",
    },
  ]

  return (
    <section
      id="preinscripciones"
      className="py-16 px-4 md:py-20"
      style={{ backgroundColor: "hsl(228, 72%, 11%)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge superior */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "hsl(53, 91%, 61%)",
              color: "hsl(228, 72%, 11%)",
            }}
          >
            <Calendar className="w-4 h-4" />
            Ciclo Lectivo 2026
          </div>
        </div>

        {/* Título principal */}
        <div className="mb-8">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-2"
            style={{ color: "hsl(53, 91%, 61%)" }}
          >
            Preinscripciones 2026
          </h2>
          <h3
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold"
            style={{ color: "hsl(0, 0%, 100%)" }}
          >
            Abiertas
          </h3>
        </div>

        {/* Texto descriptivo */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p
            className="text-lg md:text-xl mb-6"
            style={{ color: "hsl(0, 0%, 100%)" }}
          >
            ¿Querés que tus hijos formen parte de una comunidad educativa que
            enseña con valores, propósito y excelencia académica?
          </p>

          <p
            className="text-base md:text-lg"
            style={{ color: "hsl(0, 0%, 100%)" }}
          >
            Ya podés preinscribirte al Ciclo Lectivo 2026 para{" "}
            <span
              style={{ color: "hsl(53, 91%, 61%)" }}
              className="font-semibold"
            >
              Salas de 4 y 5 años, Nivel Primario
            </span>{" "}
            y{" "}
            <span
              style={{ color: "hsl(53, 91%, 61%)" }}
              className="font-semibold"
            >
              Nivel Secundario
            </span>
            .
          </p>
        </div>

        {/* Tarjetas de niveles educativos */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {educationalLevels.map((level, index) => (
            <div
              key={index}
              className="p-6 rounded-xl flex flex-col h-full"
              style={{ backgroundColor: "hsl(228, 72%, 15%)" }}
            >
              <level.icon
                className="w-8 h-8 mx-auto mb-4"
                style={{ color: "hsl(53, 91%, 61%)" }}
              />
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: "hsl(0, 0%, 100%)" }}
              >
                {level.title}
              </h4>
              <p
                className="text-sm flex-grow mb-4"
                style={{ color: "hsl(0, 0%, 80%)" }}
              >
                {level.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botón principal con animación */}
        <div className="mb-6">
          <Button
            onClick={handlePreinscripcion}
            className="group px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: "hsl(53, 91%, 61%)",
              color: "hsl(228, 72%, 11%)",
              border: "none",
            }}
          >
            <BookOpen className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
            Preinscribirme ahora
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Texto adicional */}
        <p className="text-sm" style={{ color: "hsl(0, 0%, 70%)" }}>
          Proceso rápido y sencillo • Cupos limitados
        </p>
      </div>
    </section>
  )
}

export default Preinscripciones
