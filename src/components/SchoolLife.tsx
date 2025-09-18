
import { Camera, Calendar, Music, Trophy, Palette, Globe } from 'lucide-react';

const SchoolLife = () => {
  const activities = [
    {
      title: "Talleres Creativos",
      description: "Arte, música y expresión que desarrollan la creatividad",
      icon: Palette
    },
    {
      title: "Deportes",
      description: "Formación física y trabajo en equipo", 
      icon: Trophy
    },
    {
      title: "Eventos Especiales",
      description: "Celebraciones que fortalecen nuestra comunidad",
      icon: Calendar
    },
    {
      title: "Proyectos Solidarios",
      description: "Acciones que transforman nuestra sociedad",
      icon: Globe
    },
    {
      title: "Actividades Musicales",
      description: "Coros y grupos que alimentan el alma",
      icon: Music
    },
    {
      title: "Momentos Especiales",
      description: "Recreos y encuentros que crean vínculos",
      icon: Camera
    }
  ];

  const galleryPlaceholders = [
    "Estudiantes en el laboratorio de ciencias",
    "Coro escolar en presentación",
    "Equipo de fútbol celebrando",
    "Taller de arte en acción",
    "Recreo en el patio principal",
    "Graduación de secundaria",
    "Proyecto solidario en la comunidad",
    "Festival de talentos"
  ];

  return (
    <section id="vida-escolar" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-school-blue mb-6">
            Vida Escolar
          </h2>
          <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cada día en nuestro instituto está lleno de momentos especiales, aprendizajes significativos 
            y experiencias que marcan la vida de nuestros estudiantes para siempre.
          </p>
        </div>

        {/* Activities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-school-yellow rounded-full flex items-center justify-center mb-4">
                <activity.icon className="text-school-blue" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-school-blue mb-3">{activity.title}</h3>
              <p className="text-gray-600 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Photo gallery section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-school-blue mb-4">
              Galería de Momentos
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Imágenes que capturan la esencia de nuestra comunidad educativa y 
              los momentos que hacen especial la experiencia en nuestro instituto.
            </p>
          </div>

          {/* Gallery grid - Placeholders for real photos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPlaceholders.map((placeholder, index) => (
              <div 
                key={index}
                className="aspect-square bg-gradient-to-br from-school-blue/10 to-school-yellow/20 rounded-xl flex items-center justify-center group hover:scale-105 transition-transform duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center p-4">
                  <Camera size={32} className="mx-auto mb-2 text-gray-400 group-hover:text-school-blue transition-colors" />
                  <p className="text-sm text-gray-600 font-medium">{placeholder}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note about real photos */}
          <div className="text-center mt-8 p-4 bg-school-yellow/10 rounded-lg">
            <p className="text-school-blue font-medium">
              📸 Estas imágenes serán reemplazadas con fotos reales de la vida escolar
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-school-blue mb-6">
            ¿Te gustaría ser parte de nuestra familia?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Vení a conocer nuestras instalaciones y descubrí todo lo que podemos ofrecerte 
            para el crecimiento integral de tu hijo.
          </p>
          <button 
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Agendá una visita
          </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolLife;
