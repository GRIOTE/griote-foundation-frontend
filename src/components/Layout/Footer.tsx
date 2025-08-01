
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-griote-blue bg-kente border-t-4 border-griote-gold">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-griote-gold rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-griote-blue">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-griote-gold">Fondation Griote</h3>
                <p className="text-griote-gold/80 text-sm">Valorisant les savoirs africains</p>
              </div>
            </div>
            <p className="text-griote-gold/80 text-sm leading-relaxed">
              Plateforme panafricaine dédiée à la valorisation des travaux académiques 
              et à l'accès aux bourses d'études supérieures.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-griote-gold font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/recherche" 
                  className="text-griote-gold/80 hover:text-griote-white text-sm transition-colors duration-300"
                >
                  Explorer les projets
                </Link>
              </li>
              <li>
                <Link 
                  to="/bourses" 
                  className="text-griote-gold/80 hover:text-griote-white text-sm transition-colors duration-300"
                >
                  Bourses disponibles
                </Link>
              </li>
              <li>
                <Link 
                  to="/a-propos" 
                  className="text-griote-gold/80 hover:text-griote-white text-sm transition-colors duration-300"
                >
                  À propos de nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-griote-gold font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contact" 
                  className="text-griote-gold/80 hover:text-griote-white text-sm transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/conditions" 
                  className="text-griote-gold/80 hover:text-griote-white text-sm transition-colors duration-300"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link 
                  to="/confidentialite" 
                  className="text-griote-gold/80 hover:text-griote-white text-sm transition-colors duration-300"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur avec motif */}
        <div className="border-t border-griote-gold/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-griote-gold/60 text-sm">
              © 2024 Fondation Griote. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-griote-gold/60 text-sm">
                Fait avec ❤️ pour l'Afrique
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
