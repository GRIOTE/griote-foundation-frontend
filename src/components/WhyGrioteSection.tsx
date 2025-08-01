
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
  return (
    <section className="bg-griote-blue bg-bogolan py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-griote-gold mb-4">
            Pourquoi choisir Griote ?
          </h2>
          <p className="text-xl text-griote-gold/80 max-w-2xl mx-auto">
            Une plateforme pensée par et pour la communauté académique africaine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in griote-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-griote-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-griote-blue" />
                </div>
                
                <h3 className="text-xl font-semibold text-griote-gold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-griote-gold/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Citation inspirante */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-griote-gold/90 italic mb-4">
            "Le griot ne se contente pas de raconter l'histoire, il la préserve et la transmet."
          </blockquote>
          <cite className="text-griote-gold/70">— Sagesse africaine traditionnelle</cite>
        </div>
      </div>
    </section>
  );
};

export default WhyGrioteSection;
