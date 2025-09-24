import {
  GraduationCap,
  Users,
  BookOpen,
  Baby,
  School,
  Dumbbell,
  CheckCircle,
  UserCheck,
} from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const EducationalLevels = () => {
  const levels = [
    {
      title: "Salas de 4 y 5 años",
      subtitle: "Turno Mañana",
      description:
        "Primeros pasos en el aprendizaje con juego, creatividad y valores cristianos. Nuestros pequeños descubren el mundo en un ambiente de amor y seguridad.",
      features: [
        "Desarrollo de la creatividad",
        "Juegos educativos",
        "Socialización temprana",
        "Formación en valores",
        "Inglés",
      ],
      icon: Baby,
      gradient: "from-pink-400 to-rose-500",
    },
    {
      title: "Nivel Primario",
      subtitle: "Turno Mañana",
      description:
        "Fundamentamos el aprendizaje con amor, creatividad y valores cristianos. Nuestros estudiantes desarrollan habilidades académicas y sociales en un ambiente estimulante.",
      features: [
        "Educación personalizada",
        "Talleres creativos y deportivos",
        "Formación en valores",
        "Acompañamiento integral",
        "Taller de Robótica e Informática",
        "Inglés",
      ],
      icon: School,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Nivel Secundario",
      subtitle: "Orientación Educación Física - Turno Tarde",
      description:
        "Preparamos adolescentes para los desafíos del futuro con excelencia académica y formación integral, con especial énfasis en la educación física y el deporte.",
      features: [
        "Orientación en Educación Física",
        "Formación deportiva integral",
        "Desarrollo del liderazgo",
        "Preparación universitaria",
        "Idiomas: Inglés y Portugués",
        "Acompañamiento integral a estudiantes y sus familias en situaciones de crisis",
      ],
      icon: Dumbbell,
      gradient: "from-green-400 to-emerald-600",
    },
  ]

  const studentProfile = [
    "Es protagonista del proceso de enseñanza - aprendizaje",
    "Es un ser sociable, independiente, participativo, solidario, crítico, observador, respetuoso y creativo",
    "Es respetuoso de las diferencias, con capacidad creciente para aceptar lo diverso, desarrollando actitudes de tolerancia",
    "Se reconoce y respeta como persona",
    "Manifiesta sentimientos de pertenencia, seguridad y confianza en sí mismo, para resolver situaciones problemáticas",
    "Tiene control de su cuerpo y seguridad en sus desplazamientos",
    "Conoce y relaciona hechos, fenómenos y situaciones del ambiente natural y social, y los explica",
    "Valora la importancia del medio natural y de la calidad de la vida humana",
  ]

  return (
    <section id="niveles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-school-blue mb-6">
            Niveles Educativos
          </h2>
          <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una educación integral desde salas de 4 y 5 años hasta
            quinto año del secundario, acompañando el crecimiento de nuestros
            estudiantes en cada etapa de su desarrollo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header with gradient - Fixed height */}
              <div
                className={`bg-gradient-to-r ${level.gradient} p-8 text-white relative overflow-hidden h-48 flex flex-col justify-center`}
              >
                <div className="relative z-10">
                  <level.icon size={32} className="mb-4" />
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-2">
                    {level.title}
                  </h3>
                  <p className="text-lg opacity-90">{level.subtitle}</p>
                </div>
                {/* Decorative circle */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>

              {/* Content - Flexible height with proper spacing */}
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {level.description}
                </p>

                {/* Features list - Takes available space */}
                <div className="space-y-3 flex-1">
                  <h4 className="font-semibold text-school-blue mb-4 flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    Características destacadas:
                  </h4>
                  {level.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-school-yellow rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Always at bottom */}
                <div className="mt-8">
                  <button
                    onClick={() =>
                      document
                        .querySelector("#contacto")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="w-full bg-school-blue text-white py-3 rounded-lg font-semibold hover:bg-school-blue/90 transition-colors duration-300"
                  >
                    Más información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver perfil del alumno */}
        <div className="mt-12 text-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="bg-school-yellow text-school-blue font-bold text-lg px-8 py-4 rounded-lg hover:bg-school-yellow/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <UserCheck className="inline-block mr-2" size={20} />
                Ver perfil del alumno
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-playfair font-bold text-school-blue mb-4">
                  Perfil del alumno
                </AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <div className="space-y-4">
                    {studentProfile.map((trait, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle
                          className="text-school-yellow mt-0.5 flex-shrink-0"
                          size={20}
                        />
                        <p className="text-gray-700 leading-relaxed">{trait}</p>
                      </div>
                    ))}
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex justify-end mt-6">
                <AlertDialogAction className="bg-school-blue text-white hover:bg-school-blue/90">
                  Cerrar
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  )
}

export default EducationalLevels
