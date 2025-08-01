
import { Calendar, User, BookOpen, Lock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  author: string;
  date: string;
  tags: string[];
  isPublic: boolean;
  description?: string;
  onView?: () => void;
  onDownload?: () => void;
  showActions?: boolean;
}

const ProjectCard = ({ 
  title, 
  author, 
  date, 
  tags, 
  isPublic, 
  description,
  onView,
  onDownload,
  showActions = true
}: ProjectCardProps) => {
  return (
    <div className="griote-card p-6 hover:shadow-xl transition-all duration-300 animate-fade-in">
      {/* Header avec statut */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="griote-subtitle text-lg font-semibold mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center space-x-2 text-griote-anthracite/70 mb-2">
            <User className="w-4 h-4" />
            <span className="griote-secondary">{author}</span>
          </div>
        </div>
        <div className="ml-4">
          {isPublic ? (
            <BookOpen className="w-6 h-6 text-griote-gold" />
          ) : (
            <Lock className="w-6 h-6 text-griote-anthracite" />
          )}
        </div>
      </div>

      {/* Description si fournie */}
      {description && (
        <p className="griote-body text-sm text-griote-anthracite/80 mb-4 line-clamp-2">
          {description}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag, index) => (
          <Badge 
            key={index}
            variant="secondary" 
            className="bg-griote-gold/20 text-griote-blue border-griote-gold/30"
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </Badge>
        ))}
        {tags.length > 3 && (
          <Badge variant="outline" className="text-griote-anthracite/60">
            +{tags.length - 3}
          </Badge>
        )}
      </div>

      {/* Footer avec date et actions */}
      <div className="flex items-center justify-between pt-4 border-t border-griote-gold/20">
        <div className="flex items-center space-x-2 text-griote-anthracite/60">
          <Calendar className="w-4 h-4" />
          <span className="griote-secondary">{date}</span>
        </div>

        {showActions && (
          <div className="flex space-x-2">
            {onView && (
              <Button
                onClick={onView}
                size="sm"
                variant="outline"
                className="griote-button-outline text-xs px-3 py-2"
              >
                Voir plus
              </Button>
            )}
            {isPublic && onDownload && (
              <Button
                onClick={onDownload}
                size="sm"
                className="griote-button text-xs px-3 py-2"
              >
                Télécharger
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
