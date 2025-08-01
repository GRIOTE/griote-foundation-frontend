import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'une connexion
    setTimeout(() => {
      setIsLoading(false);
      // Ici vous ajouteriez la logique de connexion réelle
      console.log('Connexion avec:', { email, password });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-griote-blue bg-bogolan-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo et titre */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 griote-hover">
            <div className="w-12 h-12 bg-griote-gold rounded-lg flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-griote-blue" />
            </div>
            <span className="text-2xl font-bold text-griote-white">
              Fondation Griote
            </span>
          </Link>
          <p className="text-griote-white/80 mt-4 text-lg">
            Connectez-vous à votre compte
          </p>
        </div>

        {/* Formulaire de connexion */}
        <Card className="bg-griote-white border-griote-gold/20 shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-griote-blue">
              Connexion
            </CardTitle>
            <CardDescription className="text-center text-griote-anthracite">
              Entrez vos identifiants pour accéder à votre compte
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-griote-blue font-medium">
                  Adresse e-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-griote-blue/60" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 border-griote-blue/20 focus:border-griote-gold focus:ring-griote-gold"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-griote-blue font-medium">
                  Mot de passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-griote-blue/60" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 border-griote-blue/20 focus:border-griote-gold focus:ring-griote-gold"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-griote-blue/60 hover:text-griote-blue"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 text-griote-gold border-griote-blue/20 rounded focus:ring-griote-gold"
                  />
                  <Label htmlFor="remember" className="text-sm text-griote-anthracite">
                    Se souvenir de moi
                  </Label>
                </div>
                <Link
                  to="/mot-de-passe-oublie"
                  className="text-sm text-griote-gold hover:text-griote-blue transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full griote-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-griote-blue border-t-transparent rounded-full animate-spin"></div>
                    <span>Connexion...</span>
                  </div>
                ) : (
                  'Se connecter'
                )}
              </Button>

              <div className="text-center text-sm text-griote-anthracite">
                Vous n'avez pas de compte ?{' '}
                <Link
                  to="/inscription"
                  className="text-griote-gold hover:text-griote-blue font-medium transition-colors"
                >
                  Créer un compte
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>

        {/* Retour à l'accueil */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-griote-white/80 hover:text-griote-gold transition-colors text-sm"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connexion;