
import { Heart, Shield, Star, Users, BookOpen, Lightbulb } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Fe",
      description: "Crecemos en nuestra relación con Dios y vivimos según Sus enseñanzas",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Users,
      title: "Amor",
      description: "Cultivamos relaciones basadas en el amor cristiano y la comprensión mutua",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Shield,
      title: "Compromiso",
      description: "Nos dedicamos con pasión a la excelencia en todo lo que emprendemos",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Star,
      title: "Respeto",
      description: "Valoramos la dignidad de cada persona y tratamos a todos con consideración",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "Excelencia",
      description: "Buscamos la mejora continua en nuestro desarrollo académico y personal",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Lightbulb,
      title: "Sabiduría",
      description: "Aplicamos el conocimiento con discernimiento para servir a otros",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section id="valores" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-school-blue mb-6">
            Valores que nos Guían
          </h2>
          <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nuestros valores son los pilares que sustentan cada aspecto de la vida escolar, 
            formando el carácter de nuestros estudiantes y guiando sus decisiones hacia un futuro próspero.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-2xl font-playfair font-bold text-school-blue mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 h-1 w-12 bg-school-yellow rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className="bg-school-blue rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-school-yellow/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-school-yellow/5 rounded-full translate-x-20 translate-y-20"></div>
          
          <div className="relative z-10">
            <div className="text-6xl md:text-7xl text-school-yellow/30 font-serif mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-white font-playfair italic mb-6 max-w-4xl mx-auto leading-relaxed">
              Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.
            </blockquote>
            <cite className="text-school-yellow font-semibold text-lg">
              Proverbios 22:6
            </cite>
          </div>
        </div>

        {/* Mission statement */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-school-blue mb-6">
            Formamos Líderes Íntegros
          </h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Cada día trabajamos para que nuestros estudiantes internalicen estos valores 
            y los lleven consigo a lo largo de su vida, convirtiéndose en agentes de cambio 
            positivo en sus familias, comunidades y en el mundo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
