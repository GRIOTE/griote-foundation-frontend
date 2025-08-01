
import { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/HeroSection';
import WhyGrioteSection from '@/components/WhyGrioteSection';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data pour les projets récents
const recentProjects = [
  {
    id: 1,
    title: "Intelligence Artificielle et Agriculture Durable au Sénégal",
    author: "Aminata Diallo",
    date: "15 nov. 2024",
    tags: ["IA", "Agriculture", "Durabilité"],
    isPublic: true,
    description: "Étude sur l'application de l'IA pour optimiser les rendements agricoles tout en préservant l'environnement."
  },
  {
    id: 2,
    title: "Systèmes de Santé Communautaire en Afrique de l'Ouest",
    author: "Dr. Kwame Asante",
    date: "12 nov. 2024",
    tags: ["Santé", "Communauté", "Politique"],
    isPublic: true,
    description: "Analyse comparative des systèmes de santé communautaire dans cinq pays d'Afrique de l'Ouest."
  },
  {
    id: 3,
    title: "Éducation Numérique et Langues Africaines",
    author: "Fatima El-Rashid",
    date: "10 nov. 2024",
    tags: ["Éducation", "Numérique", "Langues"],
    isPublic: true,
    description: "Développement d'outils éducatifs numériques intégrant les langues africaines locales."
  },
  {
    id: 4,
    title: "Énergies Renouvelables et Développement Rural",
    author: "Jean-Claude Mbeki",
    date: "8 nov. 2024",
    tags: ["Énergie", "Rural", "Innovation"],
    isPublic: true,
    description: "Implémentation de solutions d'énergie solaire dans les communautés rurales africaines."
  },
  {
    id: 5,
    title: "Blockchain et Inclusion Financière",
    author: "Aisha Mohamed",
    date: "5 nov. 2024",
    tags: ["Blockchain", "Finance", "Inclusion"],
    isPublic: true,
    description: "Comment la technologie blockchain peut révolutionner l'inclusion financière en Afrique."
  },
  {
    id: 6,
    title: "Art Contemporain et Identité Culturelle Africaine",
    author: "Kofi Antwi",
    date: "3 nov. 2024",
    tags: ["Art", "Culture", "Identité"],
    isPublic: true,
    description: "Exploration de l'art contemporain africain comme vecteur d'affirmation culturelle."
  }
];

const Index = () => {
  const [isAuthenticated] = useState(false); // À connecter avec le système d'auth

  const handleLogout = () => {
    // Logique de déconnexion
    console.log('Déconnexion');
  };

  const handleProjectView = (projectId: number) => {
    console.log('Voir projet:', projectId);
  };

  const handleProjectDownload = (projectId: number) => {
    console.log('Télécharger projet:', projectId);
  };

  return (
    <div className="min-h-screen bg-griote-white">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      
      <main>
        {/* Section Hero */}
        <HeroSection isAuthenticated={isAuthenticated} />

        {/* Section Projets Récents */}
        <section className="py-16 bg-griote-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-griote-blue mb-4">
                Projets Récents
              </h2>
              <p className="text-xl text-griote-anthracite/80 max-w-2xl mx-auto">
                Découvrez les derniers travaux partagés par notre communauté académique
              </p>
            </div>

            {/* Grille de projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recentProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  author={project.author}
                  date={project.date}
                  tags={project.tags}
                  isPublic={project.isPublic}
                  description={project.description}
                  onView={() => handleProjectView(project.id)}
                  onDownload={() => handleProjectDownload(project.id)}
                />
              ))}
            </div>

            {/* Bouton voir plus */}
            <div className="text-center">
              <Link to="/recherche">
                <Button className="griote-button text-lg px-8 py-4">
                  Voir tous les projets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section Pourquoi Griote */}
        <WhyGrioteSection />

        {/* Section Call-to-Action */}
        <section className="py-16 bg-griote-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-griote-blue to-griote-blue/90 rounded-3xl p-8 md:p-12 text-center bg-kente">
              <h2 className="text-3xl md:text-4xl font-bold text-griote-gold mb-6">
                Prêt à rejoindre la communauté ?
              </h2>
              <p className="text-xl text-griote-gold/80 mb-8 max-w-2xl mx-auto">
                Partagez vos recherches, découvrez de nouveaux savoirs et postulez aux meilleures bourses académiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/inscription">
                  <Button className="griote-button text-lg px-8 py-4">
                    Créer un compte gratuit
                  </Button>
                </Link>
                <Link to="/a-propos">
                  <Button variant="outline" className="griote-button-outline text-lg px-8 py-4">
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
