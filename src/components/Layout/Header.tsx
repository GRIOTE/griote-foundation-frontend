import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Users, Award, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GrioteLogo from '@/assets/griote.svg'; // Lien vers le logo SVG

interface HeaderProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

const Header = ({ isAuthenticated = false, onLogout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/recherche?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigationItems = isAuthenticated ? [
    { label: 'Mes Dépôts', path: '/mes-depots', icon: BookOpen },
    { label: 'Recherche de projets', path: '/recherche', icon: Search },
    { label: 'Bourses', path: '/bourses', icon: Award },
    { label: 'Mon Compte', path: '/compte', icon: User },
  ] : [
    { label: 'Explorer', path: '/recherche', icon: Search },
    { label: 'À propos', path: '/a-propos', icon: Users },
    { label: 'Postuler à une bourse', path: '/bourses', icon: Award },
  ];

  return (
    <header className="bg-[#142393] border-b border-[#FFDE59]/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 griote-hover">
            <img src={GrioteLogo} alt="Griote Logo" className="w-14 h-14" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#FFFFFF] leading-none">
                Griote
              </span>
              <span className="text-[10px] font-medium text-[#FFDE59] leading-tight">
                foundation
              </span>
            </div>
          </Link>

          {/* Search Bar - Central */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Rechercher des projets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#FFFFFF] border-2 border-[#FFDE59] rounded-lg focus:outline-none focus:border-[#FFDE59] text-[#2E2E2E]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FFDE59]" />
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-[#FFDE59] text-[#142393] font-semibold'
                      : 'text-[#FFDE59] hover:bg-[#FFDE59]/10 hover:text-[#FFFFFF]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
            
            {!isAuthenticated ? (
              <div className="flex items-center space-x-3 ml-4">
                <Link to="/connexion">
                  <Button variant="outline" className="border-[#FFDE59] text-[#FFDE59] hover:bg-[#FFDE59] hover:text-[#142393] text-sm">
                    Se connecter
                  </Button>
                </Link>
                <Link to="/inscription">
                  <Button className="bg-[#FFDE59] text-[#142393] hover:bg-[#FFFFFF] text-sm">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            ) : (
              <Button
                onClick={onLogout}
                variant="outline"
                className="border-[#FFDE59] text-[#FFDE59] hover:bg-[#FFDE59] hover:text-[#142393] text-sm ml-4"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Se déconnecter
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#FFDE59] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Rechercher des projets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#FFFFFF] border-2 border-[#FFDE59] rounded-lg focus:outline-none focus:border-[#FFDE59] text-[#2E2E2E]"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#FFDE59]" />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#FFDE59]/20 py-4 animate-slide-in">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-[#FFDE59] text-[#142393] font-semibold'
                        : 'text-[#FFDE59] hover:bg-[#FFDE59]/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {!isAuthenticated ? (
                <div className="space-y-2 pt-4 border-t border-[#FFDE59]/20">
                  <Link
                    to="/connexion"
                    className="block w-full text-center py-3 border-2 border-[#FFDE59] text-[#FFDE59] rounded-lg hover:bg-[#FFDE59] hover:text-[#142393] transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Se connecter
                  </Link>
                  <Link
                    to="/inscription"
                    className="block w-full text-center py-3 bg-[#FFDE59] text-[#142393] rounded-lg hover:bg-[#FFFFFF] transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    S'inscrire
                  </Link>
                </div>
              ) : (
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-3 w-full px-4 py-3 mt-4 border-t border-[#FFDE59]/20 text-[#FFDE59] hover:bg-[#FFDE59]/10 rounded-lg transition-all duration-300"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Se déconnecter</span>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;