import { Card } from '@/components/Card';

const Index = () => {
  const cardData = [
    {
      title: 'Amazing Travel Destination',
      imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Delicious Recipe Collection', 
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Inspiring Photography',
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Technology Innovation',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Creative Art Project',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Fitness Journey',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--gradient-subtle)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            Interactive Card Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of interactive cards. Each card features a like/unlike functionality 
            to help you save your favorites and discover new content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} imageUrl={card.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
