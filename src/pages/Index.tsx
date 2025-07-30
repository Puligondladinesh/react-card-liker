import { Card } from '@/components/Card';

const Index = () => {
  const cardData = [
    'Amazing Travel Destination',
    'Delicious Recipe Collection',
    'Inspiring Photography',
    'Technology Innovation',
    'Creative Art Project',
    'Fitness Journey'
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
          {cardData.map((title, index) => (
            <Card key={index} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
