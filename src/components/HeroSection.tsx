
import { Search, Upload, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  isAuthenticated?: boolean;
}

const HeroSection = ({ isAuthenticated = false }: HeroSectionProps) => {
  return (
    <section className="bg-griote-blue bg-bogolan py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-griote-gold mb-6 leading-tight">
              Partagez vos savoirs,
              <br />
              <span className="text-griote-white">illuminez l'Afrique</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-griote-gold/80 mb-8 leading-relaxed">
              La première plateforme panafricaine dédiée à la valorisation 
              des travaux académiques et à l'accès aux bourses d'études.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/recherche">
                <Button className="griote-button text-lg px-8 py-4 w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Explorer les projets
                </Button>
              </Link>
              
              <Link to={isAuthenticated ? "/depot" : "/connexion"}>
                <Button 
                  variant="outline" 
                  className="griote-button-outline text-lg px-8 py-4 w-full sm:w-auto"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Déposer un projet
                </Button>
              </Link>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-griote-gold/30">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-griote-gold mb-1">
                  1000+
                </div>
                <div className="text-sm text-griote-gold/70">Projets partagés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-griote-gold mb-1">
                  500+
                </div>
                <div className="text-sm text-griote-gold/70">Étudiants connectés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-griote-gold mb-1">
                  50+
                </div>
                <div className="text-sm text-griote-gold/70">Bourses disponibles</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-fade-in">
            <div className="bg-griote-gold/10 rounded-3xl p-8 backdrop-blur-sm border border-griote-gold/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-griote-white rounded-2xl p-6 griote-hover">
                  <BookOpen className="w-12 h-12 text-griote-blue mb-4" />
                  <h3 className="font-semibold text-griote-anthracite mb-2">
                    Projets Académiques
                  </h3>
                  <p className="text-sm text-griote-anthracite/70">
                    Partagez vos recherches et découvrez celles des autres
                  </p>
                </div>
                
                <div className="bg-griote-white rounded-2xl p-6 griote-hover">
                  <Users className="w-12 h-12 text-griote-blue mb-4" />
                  <h3 className="font-semibold text-griote-anthracite mb-2">
                    Communauté
                  </h3>
                  <p className="text-sm text-griote-anthracite/70">
                    Connectez-vous avec des étudiants de toute l'Afrique
                  </p>
                </div>
                
                <div className="bg-griote-white rounded-2xl p-6 griote-hover col-span-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-griote-gold rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-griote-anthracite mb-1">
                        Bourses d'Excellence
                      </h3>
                      <p className="text-sm text-griote-anthracite/70">
                        Accédez aux meilleures opportunités de financement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Élément décoratif */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-griote-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-griote-gold/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
