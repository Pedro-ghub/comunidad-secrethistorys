import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, MessageCircle, Heart, Shield, Star, Gift } from 'lucide-react';
import heroImage from '@/assets/hero-romance.jpg';

// Declaração de tipo para o window.checkoutElements
declare global {
  interface Window {
    checkoutElements: {
      init: (type: string) => {
        mount: (selector: string) => void;
      };
    };
  }
}

const UpsellLanding = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Hotmart Sales Funnel Widget
  useEffect(() => {
    const loadHotmartScript = () => {
      // Verifica se o script já foi carregado
      if (window.checkoutElements) {
        // Monta o widget no primeiro elemento
        const element1 = document.getElementById('hotmart-sales-funnel');
        if (element1) {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        }
        
        // Monta o widget no segundo elemento
        const element2 = document.getElementById('hotmart-sales-funnel-2');
        if (element2) {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-2');
        }
        return;
      }

      // Carrega o script da Hotmart
      const script = document.createElement('script');
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.onload = () => {
        if (window.checkoutElements) {
          // Aguarda um pouco para garantir que os elementos existem
          setTimeout(() => {
            const element1 = document.getElementById('hotmart-sales-funnel');
            if (element1) {
              window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
            }
            
            const element2 = document.getElementById('hotmart-sales-funnel-2');
            if (element2) {
              window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-2');
            }
          }, 100);
        }
      };
      document.head.appendChild(script);
    };

    // Aguarda o DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadHotmartScript);
    } else {
      loadHotmartScript();
    }

    return () => {
      // Cleanup se necessário
      const existingScript = document.querySelector('script[src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

        <div className="relative container mx-auto px-4 py-16 text-center">
          {/* Headline */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              YA ASEGURASTE ACCESO A LAS HISTORIAS...
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              PERO AHORA PUEDES UNIRTE A <span className="bg-primary text-white px-3 py-1.5 rounded-md whitespace-nowrap inline-block">NUESTRA COMUNIDAD EXCLUSIVA</span>.
            </h2>
          </div>

          {/* Textual Content Area - Psicologia das Vendas */}
          <div className="w-full max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-card rounded-xl border border-border p-6 sm:p-8 shadow-romantic">
              <div className="text-center space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  💔 ¿Te sientes sola leyendo tus historias favoritas?
                </h3>
                
                <div className="bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-lg p-6 border border-red-500/20 mb-6">
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    <strong>Imagina esto:</strong> Terminas de leer un capítulo increíble, tu corazón late fuerte, 
                    tienes mil teorías sobre lo que va a pasar... pero no tienes a nadie con quien compartir esa emoción.
                  </p>
                  <p className="text-base text-muted-foreground mt-3">
                    <em>¿Cuántas veces has sentido esa frustración? ¿Cuántas veces has deseado tener a alguien 
                    que realmente entienda lo que sientes cuando lees?</em>
                  </p>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                  🌟 Ya no tienes que sentirte sola...
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Conexión Emocional Real</h4>
                        <p className="text-muted-foreground">Conecta con mujeres que <strong>realmente entienden</strong> tu pasión. No juzgan, no critican. Solo comparten tu amor por las historias que te hacen soñar.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Conversaciones que Te Hacen Sentir Viva</h4>
                        <p className="text-muted-foreground">Cada día, <strong>más de 200 mensajes</strong> de lectoras compartiendo sus emociones, teorías y momentos favoritos. Nunca más te sentirás sola.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Historias que Te Llegan al Alma</h4>
                        <p className="text-muted-foreground">Descubre historias <strong>seleccionadas especialmente</strong> por lectoras experimentadas. No más perder tiempo con historias que no valen la pena.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Gift className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Acceso VIP a Nuevos Capítulos</h4>
                        <p className="text-muted-foreground">Sé la <strong>primera en saber</strong> cuando salen nuevos capítulos. Mientras otras esperan, tú ya estás disfrutando.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-lg p-6 border border-green-500/20">
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    <strong>"Antes me sentía tan sola leyendo..."</strong> - dice Carmen, 47 años - 
                    <em>"Ahora tengo amigas que entienden perfectamente por qué lloro con ciertos capítulos. 
                    Es como si hubiera encontrado mi tribu. Ya no leo sola nunca más."</em>
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    - Carmen, miembro desde hace 8 meses
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-lg p-4 border border-orange-500/20">
                  <p className="text-base text-foreground font-semibold">
                    ⚠️ <strong>ATENCIÓN:</strong> Solo aceptamos 50 nuevas miembros por mes. 
                    <span className="text-red-500">Ya tenemos 47 plazas ocupadas este mes.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section - Psicologia das Vendas */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                🚨 ¿Cuánto tiempo más vas a leer sola?
              </h3>
              
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-600/10 rounded-lg p-6 border border-yellow-500/20 mb-6">
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  <strong>La verdad es dura:</strong> Cada día que pasa sin unirte a nuestra comunidad, 
                  pierdes la oportunidad de conectar con mujeres increíbles que podrían convertirse en tus mejores amigas.
                </p>
                <p className="text-base text-muted-foreground mt-3">
                  <em>¿Cuántas historias más vas a leer sintiéndote sola? ¿Cuántas emociones más vas a guardar para ti misma?</em>
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {[
                  { text: "200+ mensajes diarios de lectoras apasionadas", emoji: "💬", highlight: "200+" },
                  { text: "Historias seleccionadas por expertas", emoji: "⭐", highlight: "expertas" },
                  { text: "Acceso VIP 24h antes que el resto", emoji: "🚀", highlight: "24h antes" },
                  { text: "Garantía de 30 días o tu dinero de vuelta", emoji: "🛡️", highlight: "30 días" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center group relative p-4 rounded-lg bg-gradient-to-br from-pink-500/5 to-rose-600/5 border border-pink-500/10 hover:border-pink-500/20 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="text-sm sm:text-base text-foreground font-medium">
                        {item.text.split(item.highlight).map((part, i) => (
                          <span key={i}>
                            {part}
                            {i < item.text.split(item.highlight).length - 1 && (
                              <span className="text-primary font-bold">{item.highlight}</span>
                            )}
                          </span>
                        ))}
                      </span>
                    </div>
                    {/* Risco à mão em rosa */}
                    <svg
                      className="w-full max-w-xs h-3 text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 8C15 5, 25 6, 35 7C45 8, 55 6, 65 7C75 8, 85 6, 95 7C105 8, 115 5, 125 6C135 7, 145 4, 155 5C165 6, 175 3, 185 4C190 5, 195 7, 200 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        filter="blur(0.5px)"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-lg p-4 border border-red-500/20 mt-6">
                <p className="text-base text-foreground font-semibold">
                  ⏰ <strong>ÚLTIMA OPORTUNIDAD:</strong> Esta oferta expira en <span 
                    className="text-red-500 font-bold"
                    style={{
                      background: 'linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)',
                      backgroundSize: '300% 300%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      animation: timeLeft < 300 ? 'gradientShift 1s ease infinite' : 'gradientShift 2s ease infinite'
                    }}
                  >
                    {formatTime(timeLeft)}
                  </span>. 
                  Después de eso, tendrás que esperar hasta el próximo mes.
                </p>
              </div>
            </div>
          </div>

          {/* HOTMART - Sales Funnel Widget */}
          <div className="max-w-md mx-auto mt-8">
            <div id="hotmart-sales-funnel"></div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="container mx-auto px-4 mb-4">
        <div className="flex justify-center">
          <img
            src="/secret-logo.png"
            alt="Secret Historys Logo"
            className="h-44 md:h-46 lg:h-52 xl:h-60 w-auto"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            🦋 LO QUE RECIBES EN NUESTRA <span className="bg-primary text-white px-3 py-1.5 rounded-md">COMUNIDAD EXCLUSIVA</span>
          </h3>

          <div className="space-y-6">
            {[
              {
                icon: Users,
                title: "Comunidad privada de WhatsApp",
                description: "acceso exclusivo a nuestro grupo cerrado donde compartimos historias, recomendaciones y experiencias",
                cardColor: "bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-500/30",
                iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
                iconColor: "text-white"
              },
              {
                icon: MessageCircle,
                title: "Discusiones diarias sobre historias",
                description: "participa en conversaciones apasionadas sobre tus personajes favoritos, teorías y momentos más emocionantes",
                cardColor: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border-blue-500/30",
                iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
                iconColor: "text-white"
              },
              {
                icon: Star,
                title: "Recomendaciones exclusivas",
                description: "descubre nuevas historias seleccionadas especialmente por y para lectoras apasionadas como tú",
                cardColor: "bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-yellow-500/30",
                iconBg: "bg-gradient-to-br from-yellow-500 to-amber-600",
                iconColor: "text-white"
              },
              {
                icon: Gift,
                title: "Acceso anticipado a nuevos capítulos",
                description: "recibe notificaciones instantáneas cuando se publiquen nuevos capítulos de tus historias favoritas",
                cardColor: "bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border-purple-500/30",
                iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
                iconColor: "text-white"
              },
              {
                icon: Heart,
                title: "Conexión con lectoras apasionadas",
                description: "conecta con mujeres que comparten tu amor por las historias románticas, crea amistades duraderas",
                cardColor: "bg-gradient-to-br from-pink-500/20 to-rose-600/20 border-pink-500/30",
                iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
                iconColor: "text-white"
              },
              {
                icon: Shield,
                title: "Espacio seguro y exclusivo",
                description: "un lugar privado donde puedes expresarte libremente sobre tus historias favoritas sin juicios",
                cardColor: "bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30",
                iconBg: "bg-gradient-to-br from-primary to-accent",
                iconColor: "text-white"
              }
            ].map((benefit, index) => {
              // Definir cores de glassmorphism para cada card
              const getGlassColors = (cardIndex: number) => {
                switch (cardIndex) {
                  case 0: // Comunidade WhatsApp - verde
                    return {
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25), rgba(16, 185, 129, 0.15), rgba(34, 197, 94, 0.1))',
                      border: 'rgba(34, 197, 94, 0.5)',
                      shadow: '0 8px 32px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 1: // Discusiones diarias - azul
                    return {
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(37, 99, 235, 0.15), rgba(59, 130, 246, 0.1))',
                      border: 'rgba(59, 130, 246, 0.5)',
                      shadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 2: // Recomendaciones exclusivas - dourado
                    return {
                      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.25), rgba(245, 158, 11, 0.15), rgba(251, 191, 36, 0.1))',
                      border: 'rgba(251, 191, 36, 0.5)',
                      shadow: '0 8px 32px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 3: // Acceso anticipado - roxo
                    return {
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(124, 58, 237, 0.15), rgba(139, 92, 246, 0.1))',
                      border: 'rgba(139, 92, 246, 0.5)',
                      shadow: '0 8px 32px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 4: // Conexión con lectoras - rosa
                    return {
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(219, 39, 119, 0.15), rgba(236, 72, 153, 0.1))',
                      border: 'rgba(236, 72, 153, 0.5)',
                      shadow: '0 8px 32px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  case 5: // Espacio seguro - rosa primário
                    return {
                      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(190, 24, 93, 0.15), rgba(236, 72, 153, 0.1))',
                      border: 'rgba(236, 72, 153, 0.5)',
                      shadow: '0 8px 32px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                  default:
                    return {
                      background: 'linear-gradient(135deg, rgba(107, 114, 128, 0.25), rgba(75, 85, 99, 0.15), rgba(107, 114, 128, 0.1))',
                      border: 'rgba(107, 114, 128, 0.5)',
                      shadow: '0 8px 32px rgba(107, 114, 128, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                    };
                }
              };

              const glassColors = getGlassColors(index);

              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-romantic transition-all duration-300 relative backdrop-blur-sm"
                  style={{
                    background: glassColors.background,
                    border: `1px solid ${glassColors.border}`,
                    borderRadius: '16px',
                    boxShadow: glassColors.shadow,
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${benefit.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm`}
                      style={{
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{
                          color: '#ffffff',
                          textShadow: glassColors.textShadow
                        }}
                      >
                        {benefit.title}
                      </h4>
                      <p
                        className="leading-relaxed"
                        style={{
                          color: '#e5e7eb',
                          textShadow: glassColors.textShadow
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Exclusive Badge */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Badge className="bg-gradient-luxury text-accent-foreground px-8 py-3 text-lg font-bold shadow-luxury">
            🎁 EXCLUSIVO - Solo para Miembros de la Comunidad
          </Badge>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16" data-section="offer">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-card border-2 border-primary/30 shadow-intense">
            <div className="text-center mb-8">
              {/* Countdown Timer */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">⏰ Expira en:</p>
                <div
                  id="countdown-timer"
                  className="text-4xl sm:text-5xl font-bold"
                  style={{
                    background: 'linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)',
                    backgroundSize: '300% 300%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: timeLeft < 300 ? 'gradientShift 1s ease infinite' : 'gradientShift 2s ease infinite' // Mais rápido nos últimos 5 minutos
                  }}
                >
                  {formatTime(timeLeft)}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-6">
                OFERTA POR <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)',
                    backgroundSize: '300% 300%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'gradientShift 2s ease infinite',
                    textShadow: '0 0 20px rgba(239, 68, 68, 0.5)'
                  }}
                >
                  TIEMPO LIMITADO
                  <span
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(45deg, #ef4444, #dc2626, #f87171, #ef4444)',
                      backgroundSize: '300% 300%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      animation: 'gradientShift 2s ease infinite',
                      filter: 'blur(2px)',
                      opacity: 0.7,
                      zIndex: -1
                    }}
                  >
                    TIEMPO LIMITADO
                  </span>
                </span>
              </h3>

              <p className="text-lg text-muted-foreground mb-4">
                El valor real de una comunidad exclusiva de WhatsApp con acceso anticipado, recomendaciones personalizadas y conexión con otras lectoras, sería de
                <span className="line-through text-destructive font-bold text-xl ml-2">$50/mes</span>.
              </p>

              <p className="text-xl text-foreground mb-6">
                Pero por ya ser parte de Secret Historys…
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Puedes unirte a nuestra comunidad <span className="font-bold text-primary">hoy, y para siempre</span>, por solo:
              </p>

              <div className="text-7xl font-bold mb-4 flex flex-col items-center justify-center gap-4 animate-pulse">
                <div className="relative">
                  <img
                    src="/secret-logo.png"
                    alt="Secret Historys Logo"
                    className="h-28 w-auto filter drop-shadow-lg"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5)) drop-shadow(0 0 16px rgba(219, 39, 119, 0.3))',
                      background: 'linear-gradient(45deg, #f472b6, #ec4899, #db2777)',
                      backgroundClip: 'padding-box',
                      borderRadius: '8px',
                      padding: '4px'
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-lg opacity-30"
                    style={{
                      background: 'linear-gradient(45deg, #f472b6, #ec4899, #db2777)',
                      filter: 'blur(4px)',
                      zIndex: -1
                    }}
                  />
                </div>
                <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
                  $14.90
                </span>
              </div>

              <p className="text-xl text-accent font-semibold mb-6">
                (pago único)
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sin tarifas mensuales
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Sin monedas
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Sin anuncios
                </span>
              </div>

              <p className="text-lg text-foreground mb-8">
                Haz clic en el botón de abajo antes de que esta oferta desaparezca.
              </p>
            </div>

            {/* HOTMART - Sales Funnel Widget */}
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-6">
                <div id="hotmart-sales-funnel-2"></div>

                {/* CSS para animação do gradiente */}
                <style dangerouslySetInnerHTML={{
                  __html: `
                    @keyframes gradientShift {
                      0% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                      100% { background-position: 0% 50%; }
                    }
                  `
                }}></style>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8 bg-gradient-card border border-accent/30">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/Selo_de_Garantia_de_30_Dias.png"
                alt="Selo de Garantia de 30 Dias"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
              />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">
              GARANTÍA DE 30 DÍAS 💎
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Si te unes a nuestra comunidad y no amas la experiencia… solo pide el reembolso.
            </p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Secret Historys - Comunidad Exclusiva. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UpsellLanding;