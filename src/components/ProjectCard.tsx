import { Calendar, User, BookOpen, Lock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  author: string;
  userType: 'STUDENT' | 'TEACHER' | 'INDEPENDENT';
  category: string;
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
  userType,
  category,
  date, 
  tags, 
  isPublic, 
  description,
  onView,
  onDownload,
  showActions = true
}: ProjectCardProps) => {
  return (
    <div className="p-6 rounded-2xl bg-[#FFFFFF] transition-all duration-300 transform hover:bg-[#F2B600] hover:text-[#003399] cursor-pointer shadow-sm hover:shadow-xl animate-fade-in">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center space-x-2 text-[#6B7280] mb-1">
            <User className="w-4 h-4" />
            <span>{author} ({userType})</span>
          </div>
          <Badge className="text-xs bg-[#003399] text-[#FFFFFF] px-2 py-1 rounded">{category}</Badge>
        </div>
        <div className="ml-4">
          {isPublic ? (
            <BookOpen className="w-6 h-6 text-[#003399]" />
          ) : (
            <Lock className="w-6 h-6 text-[#6B7280]" />
          )}
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-[#6B7280] mb-4 line-clamp-3">{description}</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0,3).map((tag, index) => (
          <Badge key={index} className="bg-[#003399]/10 text-[#003399] px-2 py-1 rounded flex items-center text-xs hover:bg-[#F2B600] hover:text-[#003399] transition-colors duration-200">
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </Badge>
        ))}
        {tags.length > 3 && (
          <Badge className="text-[#6B7280] text-xs">+{tags.length - 3}</Badge>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#F5F7FA]">
        <div className="flex items-center space-x-2 text-[#6B7280]">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>

        {showActions && (
          <div className="flex space-x-2">
            {onView && (
              <Button
                onClick={onView}
                size="sm"
                variant="outline"
                className="px-3 py-2 text-xs border-[#003399] text-[#003399] hover:bg-[#003399] hover:text-[#F2B600]"
              >
                Voir plus
              </Button>
            )}
            {isPublic && onDownload && (
              <Button
                onClick={onDownload}
                size="sm"
                className="px-3 py-2 text-xs bg-[#003399] text-[#FFFFFF] hover:bg-[#F2B600] hover:text-[#003399]"
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
