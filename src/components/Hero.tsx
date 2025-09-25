import { ChevronDown } from "lucide-react"
const Hero = () => {
  const scrollToNextSection = () => {
    const element = document.querySelector("#nosotros")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/portada.webp"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-school-yellow/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-school-yellow/5 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Pre-title */}
          <p className="text-school-yellow font-medium text-lg md:text-xl mb-4 tracking-wide">
            Bienvenidos al
          </p>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Instituto Bautista
            <span className="block text-gradient">del Centro</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Educamos con valores para transformar el mundo
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Una educación integral que combina excelencia académica con
            formación en valores cristianos, preparando a nuestros estudiantes
            para ser líderes íntegros del mañana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() =>
                document.querySelector("#nosotros")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="btn-primary text-lg"
            >
              Conocé más
            </button>
            <button
              onClick={() => {
                const element = document.querySelector("#preinscripciones")
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              }}
              className="btn-secondary text-lg"
            >
              Preinscripciones 2026
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-school-yellow transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
export default Hero
