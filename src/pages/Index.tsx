import { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/HeroSection';
import WhyGrioteSection from '@/components/WhyGrioteSection';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data pour les dépôts récents avec types utilisateur et catégorie
const recentDepots = [
  {
    id: 1,
    title: "Intelligence Artificielle et Agriculture Durable",
    author: "Aminata Diallo",
    userType: "STUDENT",
    category: "RESEARCH_PROJECT",
    date: "15 nov. 2024",
    tags: ["IA", "Agriculture", "Durabilité"],
    isPublic: true,
    description: "Optimisation des rendements agricoles avec l'IA tout en préservant l'environnement."
  },
  {
    id: 2,
    title: "Systèmes de Santé Communautaire",
    author: "Dr. Kwame Asante",
    userType: "TEACHER",
    category: "PEER_REVIEWED_ARTICLE",
    date: "12 nov. 2024",
    tags: ["Santé", "Communauté", "Politique"],
    isPublic: true,
    description: "Comparatif des systèmes de santé communautaire en Afrique de l'Ouest."
  },
  {
    id: 3,
    title: "Éducation Numérique et Langues Africaines",
    author: "Fatima El-Rashid",
    userType: "INDEPENDENT",
    category: "COURSE_WORK",
    date: "10 nov. 2024",
    tags: ["Éducation", "Numérique", "Langues"],
    isPublic: true,
    description: "Création d'outils éducatifs numériques intégrant les langues locales."
  }
];

const Index = () => {
  const [isAuthenticated] = useState(false);

  const handleLogout = () => console.log('Déconnexion');
  const handleDepotView = (depotId: number) => console.log('Voir dépôt:', depotId);
  const handleDepotDownload = (depotId: number) => console.log('Télécharger dépôt:', depotId);

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      
      <main>
        {/* Section Hero */}
        <HeroSection isAuthenticated={isAuthenticated} />

        {/* Section Dépôts Récents */}
        <section className="py-16 bg-[#FFFFFF]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003399] mb-4">
                Dépôts Récents
              </h2>
              <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
                Découvrez les derniers dépôts partagés par notre communauté académique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recentDepots.map((depot) => (
                <ProjectCard
                  key={depot.id}
                  title={depot.title}
                  author={depot.author}
                  userType={depot.userType as any}
                  category={depot.category}
                  date={depot.date}
                  tags={depot.tags}
                  isPublic={depot.isPublic}
                  description={depot.description}
                  onView={() => handleDepotView(depot.id)}
                  onDownload={() => handleDepotDownload(depot.id)}
                />
              ))}
            </div>

            <div className="text-center">
              <Link to="/recherche">
                <Button className="bg-[#003399] text-[#FFFFFF] hover:bg-[#F2B600] hover:text-[#003399] text-lg px-8 py-4 transition-colors duration-200">
                  Voir tous les dépôts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section Pourquoi Griote */}
        <WhyGrioteSection />

        {/* Section Call-to-Action */}
        <section className="py-16 bg-[#FFFFFF]">
          <div className="container mx-auto px-4">
            <div className="bg-[#003399] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">
                Prêt à rejoindre la communauté ?
              </h2>
              <p className="text-xl text-[#FFFFFF]/80 mb-8 max-w-2xl mx-auto">
                Partagez vos recherches, découvrez de nouveaux savoirs et postulez aux meilleures bourses académiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/inscription">
                  <Button className="bg-[#FFFFFF] text-[#003399] hover:bg-[#F2B600] hover:text-[#003399] text-lg px-8 py-4 transition-colors duration-200">
                    Créer un compte maintenant
                  </Button>
                </Link>
                <Link to="/a-propos">
                  <Button variant="outline" className="border-[#FFFFFF] text-[#003399] hover:bg-[#F2B600] hover:text-[#003399] text-lg px-8 py-4 transition-colors duration-200">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
