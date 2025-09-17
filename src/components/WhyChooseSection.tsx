import { Card, CardContent } from "@/components/ui/card";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Get enterprise-level features at small business prices"
    },
    {
      icon: "🤖",
      title: "AI-Powered Tools", 
      description: "Create professional ads with artificial intelligence"
    },
    {
      icon: "📱",
      title: "Easy Interface",
      description: "Intuitive design that anyone can master in minutes"
    },
    {
      icon: "📈",
      title: "Real Results",
      description: "Proven track record of growing businesses worldwide"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Launch campaigns in minutes, not hours or days"
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose SomAdz?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of businesses that trust SomAdz to accelerate their growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="feature-card group text-center">
              <CardContent className="p-6">
                <div className="text-5xl mb-4 group-hover:animate-bounce transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gradient">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;