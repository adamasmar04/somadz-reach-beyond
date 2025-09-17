import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🏪",
      title: "Marketplace",
      description: "Discover and showcase services, connect buyers and sellers in a thriving business ecosystem."
    },
    {
      icon: "📢",
      title: "Advertising",
      description: "Create and publish targeted ad campaigns with advanced analytics and real-time performance tracking."
    },
    {
      icon: "🎨",
      title: "AI Design",
      description: "Generate professional visuals, banners, and ad creatives instantly with our AI-powered design tools."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Core Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to grow your business in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card group cursor-pointer">
              <CardContent className="p-8 text-right">
                <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient group-hover:scale-105 transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;