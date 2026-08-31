import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      role: "Mamá de 3° grado",
      content:
        "Mi experiencia siendo mamá desde el inicio en el ibc es totalmente linda ya que nos permiten ser parte de la institución de una u otra manera acompañado a nuestros hijos, ese vínculo de escuela familiar es súper importante y lo que me llevo a elegirlos fue la calidad educativa, infraestructura, el ambiente, la reputación y la educación a las necesidades individuales de cada estudiante.",
      rating: 5,
    },
    {
      role: "Mamá de 4° grado y Nivel Inicial",
      content:
        "Como familia elegimos el Instituto Bautista del Centro para nuestros hijos por varios motivos: Su orientación cristiana, lo más importante para nosotros. La contención que reciben los alumnos tanto de la dirección, los docentes y el EDAyO. La cercanía a nuestro hogar, que también influye. Cuando nuestra hija mayor comenzó la escuela nunca pensamos en otra opción. Desde antes del Nivel Inicial sabíamos que sería aquí, con la certeza de que Dios estaba en medio 🩷",
      rating: 5,
    },
    {
      role: "Mamá de 7° grado",
      content:
        "Me siento muy afortunada de haber elegido el Instituto Bautista del Centro para la educación de mi hija. La escuela se destaca por su enfoque a la educación cristiana. Esto ha permitido que mi hija crezca y se desarrole de manera integral, no solo académicamente sino también en sus habilidades sociales y emocionales. La directora y los docentes del establecimiento escolar han demostrado un compromiso genuino con la educación y el bienestar de los estudiantes, lo que ha sido fundamental para que mi hija se sienta cómoda y segura en el entorno escolar. Es por ello que también elegimos para que continúe sus estudios secundarios en esta institución. Estoy muy satisfecha con la elección del Instituto Bautista, recomiendo esta escuela a cualquier padre o madre que busque una educación excelente para sus hijos.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-school-blue mb-6">
            Testimonios
          </h2>
          <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Las experiencias de nuestra comunidad educativa reflejan el impacto
            transformador de la educación que brindamos en el Instituto Bautista
            del Centro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 relative animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-school-yellow rounded-full flex items-center justify-center">
                <Quote className="text-school-blue" size={20} />
              </div>

              {/* Rating */}
              <div className="flex mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-school-yellow fill-current"
                    size={16}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-school-blue">
                  {testimonial.role}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6">
            ¿Te gustaría ser parte de estas historias de éxito?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Conocé más sobre nosotros
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
