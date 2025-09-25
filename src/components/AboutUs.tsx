import { Heart, BookOpen, Users, Award } from "lucide-react"

const AboutUs = () => {
  const features = [
    {
      icon: Heart,
      title: "Educación con Amor",
      description:
        "Cada estudiante es valorado y acompañado en su crecimiento personal y académico",
    },
    {
      icon: BookOpen,
      title: "Excelencia Académica",
      description:
        "Programas educativos de calidad que preparan para los desafíos del futuro",
    },
    {
      icon: Users,
      title: "Comunidad Unida",
      description:
        "Una familia educativa comprometida con el desarrollo integral de cada alumno",
    },
    {
      icon: Award,
      title: "Valores Sólidos",
      description:
        "Formación en principios cristianos que forjan carácter y liderazgo",
    },
  ]

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-school-blue mb-6">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            El Instituto Bautista del Centro ha sido pionero en la educación
            evangélica en Eldorado, formando estudiantes con excelencia
            académica y principios sólidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-school-blue mb-6">
              Nuestra Misión
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Brindar una educación integral de excelencia, fundamentada en
              valores cristianos, que forme personas íntegras capaces de
              transformar positivamente su entorno y contribuir al desarrollo de
              una sociedad más justa y solidaria.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Creemos en el potencial único de cada estudiante y nos
              comprometemos a acompañarlos en su crecimiento académico,
              emocional y espiritual, preparándolos para ser líderes del mañana
              con corazón de servicio.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-school-blue/10 to-school-yellow/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl overflow-hidden hero-gradient">
                <img
                  src="/images/estudiantes.webp"
                  alt="Background"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-school-yellow rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-school-blue rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-school-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-school-blue" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-school-blue mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
