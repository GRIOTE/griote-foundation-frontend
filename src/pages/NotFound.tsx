
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-griote-blue bg-bogolan flex items-center justify-center">
      <div className="text-center px-4">
        {/* Illustration 404 */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-griote-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl">🔍</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-griote-gold mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-griote-white mb-4">
            Page introuvable
          </h2>
          <p className="text-xl text-griote-gold/80 mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="griote-button text-lg px-8 py-4">
              <Home className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          
          <Link to="/recherche">
            <Button variant="outline" className="griote-button-outline text-lg px-8 py-4">
              <Search className="w-5 h-5 mr-2" />
              Explorer les projets
            </Button>
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 p-6 bg-griote-white/10 rounded-xl backdrop-blur-sm border border-griote-gold/20">
          <h3 className="text-lg font-semibold text-griote-gold mb-4">
            Suggestions :
          </h3>
          <ul className="text-griote-gold/80 space-y-2">
            <li>• Vérifiez l'orthographe de l'URL</li>
            <li>• Utilisez la barre de recherche pour trouver du contenu</li>
            <li>• Explorez nos projets académiques récents</li>
            <li>• Consultez notre section À propos</li>
          </ul>
        </div>

        {/* Lien retour */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center text-griote-gold/70 hover:text-griote-gold transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la page précédente
        </button>
      </div>
    </div>
  );
};

export default NotFound;
