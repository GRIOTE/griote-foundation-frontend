import { useState, useEffect } from 'react';
import { Shield, BookOpen, Star, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sécurité garantie',
    description: 'Vos données et travaux sont protégés par des protocoles de sécurité avancés.'
  },
  {
    icon: BookOpen,
    title: 'Ouvert à tous',
    description: 'Accessible à tous les étudiants et chercheurs africains, sans discrimination.'
  },
  {
    icon: Star,
    title: 'Entièrement gratuit',
    description: 'Plateforme libre et gratuite pour démocratiser l\'accès au savoir.'
  },
  {
    icon: GraduationCap,
    title: 'Bourses M2 et plus',
    description: 'Accès privilégié aux bourses de Master 2, Doctorat et post-doctorat.'
  }
];

const WhyGrioteSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#003399] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4 transition-opacity duration-700 ${
              fadeIn ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Pourquoi choisir Griote ?
          </h2>
          <p
            className={`text-xl text-[#FFFFFF] max-w-2xl mx-auto transition-opacity duration-700 delay-100 ${
              fadeIn ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Une plateforme pensée par et pour la communauté académique africaine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-500 transform rounded-2xl p-6 bg-[#FFFFFF] hover:bg-[#F2B600] hover:text-[#003399] cursor-pointer ${
                  fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-[#003399] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-[#FFFFFF]" />
                </div>
                
                <h3 className="text-xl font-semibold text-[#003399] mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Citation inspirante */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-[#F2B600]/90 italic mb-4 transition-opacity duration-700">
            "Le griot ne se contente pas de raconter l'histoire, il la préserve et la transmet."
          </blockquote>
          <cite className="text-[#6B7280]">— Sagesse africaine traditionnelle</cite>
        </div>
      </div>
    </section>
  );
};

export default WhyGrioteSection;
