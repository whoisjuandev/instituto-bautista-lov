import {
  Heart,
  Shield,
  Zap,
  CheckCircle,
  Target,
  Book,
  Users,
  Brain,
  Globe,
  Palette,
  MessageCircle,
  Music,
  BookOpen,
} from "lucide-react"

const InstitutionalValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Nuestro trabajo está motivado por amor a Dios",
      description:
        "Creador de todas las cosas, y de la niñez, razón de ser de nuestra institución. Nuestra tarea es impartir una educación integral incluyendo todas las áreas de la persona y evangelizar, esto es llevar las Buenas Nuevas primeramente a los niños y luego a través de ellos a sus familias.",
    },
    {
      icon: Shield,
      title: "Defendemos el valor de la vida",
      description:
        "Entendiendo que todo ser humano, varón y mujer, es persona desde la concepción. Defendemos la familia como institución social básica establecida por Dios como ambiente propicio para el desarrollo personal, transmisora de vida, primera educadora de virtudes y valores.",
    },
    {
      icon: Zap,
      title: "Nuestra escuela funciona en el marco de libertad",
      description:
        "Sin discriminación de ningún tipo, ya que Nuestro Señor Jesús dio su vida por todos, y respeto mutuo para beneficio de toda la Comunidad Educativa. Procuramos formar personas que se respeten a sí mismas, a los demás y al contexto en el cual se desarrollan. Respetamos la autonomía en la toma de decisiones de cada alumno y familia en cuanto a cuestiones personales y familiares.",
    },
  ]

  const objectives = [
    {
      icon: Heart,
      text: "Enseñar un estilo de vida inspirado en el amor a Dios y al prójimo.",
    },
    {
      icon: Users,
      text: "Funcionar en el marco de libertad, solidaridad y respeto mutuo para beneficio de toda la Comunidad Educativa.",
    },
    {
      icon: Target,
      text: "Desarrollar una propuesta educativa que produzca una experiencia de aprendizaje significativa, que capacite al niño para enfrentar la complejidad de la realidad.",
    },
    {
      icon: MessageCircle,
      text: "Crear condiciones para que los niños participen activamente en las prácticas sociales del lenguaje y asuman una posición crítica frente a ellas.",
    },
    {
      icon: Brain,
      text: "Que comprendan los fundamentos de pensamiento matemático, resolución de problemas y comunicación de procedimientos y resultados.",
    },
    {
      icon: Book,
      text: "Que se acerquen al conocimiento de la diversidad biológica y comprendan estructuras y funciones vitales.",
    },
    {
      icon: Globe,
      text: "Que accedan a información de hechos sociales actuales y pasados, y comprendan causas y consecuencias.",
    },
    {
      icon: CheckCircle,
      text: "Promover el uso de múltiples tecnologías y recursos didácticos para la comunicación.",
    },
    {
      icon: Palette,
      text: "Fomentar la expresión a través de la voz, el cuerpo, el juego y las imágenes, con creatividad y autonomía.",
    },
    {
      icon: Music,
      text: "Desarrollar habilidades en inglés, comunicación internacional y aspectos propios de la cultura anglosajona.",
    },
  ]

  return (
    <section id="valores" className="section-padding bg-school-blue">
      <div className="container mx-auto px-4">
        {/* Valores Institucionales */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-school-yellow mr-3" size={40} />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-school-yellow">
                Nuestros Valores Institucionales
              </h2>
            </div>
            <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Los principios fundamentales que guían nuestra labor educativa y
              forman el corazón de nuestra institución.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-school-yellow/20 rounded-full mb-4">
                    <value.icon className="text-school-yellow" size={32} />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-school-yellow mb-4 leading-tight">
                    {value.title}
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Objetivos Pedagógicos */}
        <div>
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="text-school-yellow mr-3" size={40} />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-school-yellow">
                Nuestros Objetivos Pedagógicos
              </h2>
            </div>
            <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              El camino que trazamos para formar estudiantes integrales,
              preparados para los desafíos del futuro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-school-yellow/20 rounded-lg">
                    <objective.icon className="text-school-yellow" size={24} />
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed pt-2">
                  {objective.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Llamado a la acción final */}
        <div className="mt-20 text-center">
          <div className="bg-school-yellow/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-school-yellow mb-4">
              ¿Compartís estos valores?
            </h3>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Te invitamos a ser parte de nuestra comunidad educativa, donde
              cada día cultivamos fe, conocimiento y valores que trascienden el
              aula.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-school-yellow text-school-blue font-bold text-lg px-8 py-4 rounded-lg hover:bg-school-yellow/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Conocé más sobre nosotros
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstitutionalValues
