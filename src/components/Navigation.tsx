import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Quiénes Somos", href: "#nosotros" },
    { name: "Niveles", href: "#niveles" },
    { name: "Vida Escolar", href: "#vida-escolar" },
    { name: "Recursos para Familias", href: "#recursos-familias" },
    { name: "Valores", href: "#valores" },
    { name: "Contacto", href: "#contacto" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-school-blue/85 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo-instituto-blanco.svg"
              alt="Instituto Bautista del Centro Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-white font-playfair font-semibold text-lg">
                Instituto Bautista del Centro
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-school-yellow transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#preinscripciones")}
              className="btn-primary text-sm"
            >
              Preinscripciones 2026
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-school-blue border-t border-school-yellow/20">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-white hover:text-school-yellow transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={() => scrollToSection("#contacto")}
                  className="btn-primary w-full text-sm"
                >
                  Agendá tu visita
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
