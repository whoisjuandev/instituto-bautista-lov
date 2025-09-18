import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección de Administración",
      content: "La Rioja 1402",
      action: "Ver en Maps",
      href: "https://www.google.com/maps/search/?api=1&query=La+Rioja+1402"
    },
    {
      icon: Phone,
      title: "Teléfono",
      phones: [
        { label: "Administración", number: "+54 03751 424930" },
        { label: "Nivel Inicial", number: "+54 03751 426784" }
      ]
    },
    {
      icon: Mail,
      title: "Email",
      emails: [
        { label: "administracion@ibceldorado.com.ar", email: "administracion@ibceldorado.com.ar" },
        { label: "direcccion@ibceldorado.com.ar", email: "direcccion@ibceldorado.com.ar" }
      ]
    },
    {
      icon: Clock,
      title: "Horarios de atención",
      schedules: [
        { label: "Administración", hours: "Lun a Vie: 7–12 y 13:30–18:30" },
        { label: "Nivel Inicial", hours: "8–11 am" }
      ]
    }
  ];

  return (
    <section id="contacto" className="section-padding bg-school-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Agendá tu Visita
          </h2>
          <div className="w-24 h-1 bg-school-yellow mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Te invitamos a conocer nuestras instalaciones y descubrir todo lo que podemos 
            ofrecerte para el futuro de tu hijo. ¡Estamos esperándote!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact information */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="animate-slide-up">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-white mb-6 lg:mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-4 lg:space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-school-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-school-blue" size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-2 text-sm lg:text-base">{info.title}</h4>
                      
                      {/* Address */}
                      {info.content && (
                        <>
                          <p className="text-white/80 mb-2 text-sm lg:text-base break-words">{info.content}</p>
                          {info.action && info.href && (
                            <a 
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-school-yellow hover:text-yellow-300 text-xs lg:text-sm font-medium transition-colors"
                            >
                              {info.action} →
                            </a>
                          )}
                        </>
                      )}

                      {/* Phone */}
                      {info.phones && (
                        <div className="space-y-2">
                          {info.phones.map((phone, phoneIndex) => (
                            <div key={phoneIndex}>
                              <p className="text-white/60 text-xs lg:text-sm">{phone.label}:</p>
                              <a 
                                href={`tel:${phone.number}`}
                                className="text-white/80 hover:text-school-yellow text-sm lg:text-base transition-colors"
                              >
                                {phone.number}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Email */}
                      {info.emails && (
                        <div className="space-y-2">
                          {info.emails.map((email, emailIndex) => (
                            <div key={emailIndex}>
                              <a 
                                href={`mailto:${email.email}`}
                                className="text-white/80 hover:text-school-yellow text-sm lg:text-base transition-colors break-words"
                              >
                                {email.label}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Hours */}
                      {info.schedules && (
                        <div className="space-y-2">
                          {info.schedules.map((schedule, scheduleIndex) => (
                            <div key={scheduleIndex}>
                              <p className="text-white/60 text-xs lg:text-sm">{schedule.label}:</p>
                              <p className="text-white/80 text-sm lg:text-base">{schedule.hours}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-500 rounded-xl p-4 lg:p-6 text-center animate-scale-in">
              <MessageCircle className="text-white mx-auto mb-3 lg:mb-4" size={28} />
              <h4 className="text-white font-bold text-lg lg:text-xl mb-2">¿Tenés consultas?</h4>
              <p className="text-white/90 mb-3 lg:mb-4 text-sm lg:text-base">Escribinos por WhatsApp para una respuesta inmediata</p>
              <a 
                href="https://wa.me/543751502744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-500 font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm lg:text-base"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 animate-scale-in order-1 lg:order-2">
            <h3 className="text-xl lg:text-2xl font-playfair font-bold text-school-blue mb-4 lg:mb-6">
              Agendá tu Visita
            </h3>
            
            <form className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-school-yellow focus:border-transparent text-sm lg:text-base"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Apellido</label>
                  <input 
                    type="text" 
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-school-yellow focus:border-transparent text-sm lg:text-base"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-school-yellow focus:border-transparent text-sm lg:text-base"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Teléfono</label>
                <input 
                  type="tel" 
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-school-yellow focus:border-transparent text-sm lg:text-base"
                  placeholder="+54 11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Nivel de interés</label>
                <select className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-school-yellow focus:border-transparent text-sm lg:text-base">
                  <option value="">Seleccionar nivel</option>
                  <option value="primario">Nivel Primario</option>
                  <option value="secundario">Nivel Secundario</option>
                  <option value="ambos">Ambos niveles</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Mensaje (opcional)</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-school-yellow focus:border-transparent resize-none text-sm lg:text-base"
                  placeholder="Contanos sobre tus expectativas o hacé cualquier consulta..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full btn-primary text-base lg:text-lg"
              >
                Agendar Visita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;