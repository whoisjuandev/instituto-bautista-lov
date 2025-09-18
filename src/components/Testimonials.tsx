
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de alumna de 5° grado",
      content: "El Instituto Bautista del Centro no solo brinda excelencia académica, sino que forma el corazón de nuestros hijos. Mi hija ha crecido en valores y confianza desde que estudia aquí.",
      rating: 5
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Padre de graduado 2023",
      content: "Mi hijo egresó el año pasado y hoy estudia Ingeniería. La base sólida que recibió en el instituto, tanto académica como espiritual, fue fundamental para su éxito universitario.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Ex alumna, promoción 2015",
      content: "Los valores que aprendí en la EBC siguen guiando mi vida profesional y personal. Es increíble como los maestros logran combinar excelencia académica con formación en valores.",
      rating: 5
    }
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
            Las experiencias de nuestra comunidad educativa reflejan el impacto transformador 
            de la educación que brindamos en el Instituto Bautista del Centro.
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
                  <Star key={i} className="text-school-yellow fill-current" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-school-blue">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
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
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
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
