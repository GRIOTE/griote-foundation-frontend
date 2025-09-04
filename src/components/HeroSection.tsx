import { useState, useEffect } from 'react';
import { Search, Upload, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  isAuthenticated?: boolean;
}

const HeroSection = ({ isAuthenticated = false }: HeroSectionProps) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100); // léger delay pour déclencher
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div
            className={`text-center lg:text-left transition-all duration-700 ease-out transform ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#003399] mb-6 leading-tight">
              Partagez vos savoirs,<br />
              <span className="text-[#111827]">illuminez l'Afrique</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B7280] mb-8 leading-relaxed">
              Plateforme panafricaine dédiée à la valorisation des travaux académiques 
              et à l'accès aux bourses d'études.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/recherche">
                <Button className="px-8 py-4 w-full sm:w-auto bg-[#003399] text-[#FFFFFF] rounded-md font-semibold hover:bg-[#F2B600] hover:text-[#003399] transition-colors duration-200">
                  Explorer les projets
                </Button>
              </Link>
              
              <Link to={isAuthenticated ? "/depot" : "/connexion"}>
                <Button 
                  variant="outline" 
                  className="px-8 py-4 w-full sm:w-auto border-2 border-[#003399] text-[#003399] rounded-md font-semibold hover:bg-[#003399] hover:text-[#FFFFFF] transition-colors duration-200"
                >
                  Déposer un projet
                </Button>
              </Link>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#F5F7FA]">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#003399] mb-1">1000+</div>
                <div className="text-sm text-[#6B7280]">Projets partagés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#003399] mb-1">500+</div>
                <div className="text-sm text-[#6B7280]">Étudiants connectés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#003399] mb-1">50+</div>
                <div className="text-sm text-[#6B7280]">Bourses disponibles</div>
              </div>
            </div>
          </div>

          {/* Illustrations / Cards */}
          <div
            className={`grid grid-cols-1 gap-6 lg:grid-cols-2 transition-all duration-700 ease-out transform ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="bg-[#F5F7FA] rounded-2xl p-6 hover:scale-105 transform transition-transform duration-300">
              <BookOpen className="w-12 h-12 text-[#003399] mb-4" />
              <h3 className="font-semibold text-[#111827] mb-2">Projets Académiques</h3>
              <p className="text-sm text-[#6B7280]">
                Partagez vos recherches et découvrez celles des autres
              </p>
            </div>
            
            <div className="bg-[#F5F7FA] rounded-2xl p-6 hover:scale-105 transform transition-transform duration-300">
              <Users className="w-12 h-12 text-[#003399] mb-4" />
              <h3 className="font-semibold text-[#111827] mb-2">Communauté</h3>
              <p className="text-sm text-[#6B7280]">
                Connectez-vous avec des étudiants de toute l'Afrique
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-2xl p-6 lg:col-span-2 hover:scale-105 transform transition-transform duration-300">
              <h3 className="font-semibold text-[#111827] mb-1">Bourses d'Excellence</h3>
              <p className="text-sm text-[#6B7280]">
                Accédez aux meilleures opportunités de financement pour vos études
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
