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
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Coordiná una visita de forma rápida y sencilla. Nuestro equipo está listo para responderte.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact information */}
          <div className="animate-slide-up mb-12">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-8 text-center">
              Información de Contacto
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 shadow-lg"
                >
                  <div className="w-12 h-12 bg-school-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-school-blue" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white mb-3 text-base">{info.title}</h4>
                    
                    {/* Address */}
                    {info.content && (
                      <>
                        <p className="text-white/80 mb-2 text-base break-words">{info.content}</p>
                        {info.action && info.href && (
                          <a 
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-school-yellow hover:text-yellow-300 text-sm font-medium transition-colors"
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
                            <p className="text-white/60 text-sm">{phone.label}:</p>
                            <a 
                              href={`tel:${phone.number}`}
                              className="text-white/80 hover:text-school-yellow text-base transition-colors"
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
                              className="text-white/80 hover:text-school-yellow text-base transition-colors break-words"
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
                            <p className="text-white/60 text-sm">{schedule.label}:</p>
                            <p className="text-white/80 text-base">{schedule.hours}</p>
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
          <div className="max-w-md mx-auto">
            <div className="bg-green-500 rounded-lg p-6 text-center animate-scale-in shadow-xl">
              <MessageCircle className="text-white mx-auto mb-4" size={32} />
              <h4 className="text-white font-bold text-xl mb-2">¿Tenés consultas?</h4>
              <p className="text-white/90 mb-6 text-base">Escribinos por WhatsApp para una respuesta inmediata</p>
              <a 
                href="https://wa.me/543751502744"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-green-500 font-semibold py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;