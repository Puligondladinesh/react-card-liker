import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CardProps {
  title: string;
}

export const Card = ({ title }: CardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] transform hover:-translate-y-1">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-card-foreground">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-[var(--transition-smooth)] ${
              isLiked 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}>
              {isLiked ? 'Liked' : 'Not Liked'}
            </div>
          </div>
          
          <Button
            onClick={toggleLike}
            variant="outline"
            size="sm"
            className={`transition-[var(--transition-smooth)] hover:scale-105 ${
              isLiked 
                ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
                : 'hover:border-primary hover:text-primary'
            }`}
          >
            <Heart 
              className={`w-4 h-4 mr-2 transition-[var(--transition-smooth)] ${
                isLiked ? 'fill-current' : ''
              }`} 
            />
            {isLiked ? 'Unlike' : 'Like'}
          </Button>
        </div>
      </div>
    </div>
  );
};