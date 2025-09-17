import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Upload Ad",
      description: "Add your text, images, and select the perfect category for your business",
      icon: "📤"
    },
    {
      step: "2", 
      title: "Target Audience",
      description: "Choose location, interests, demographics, and reach your ideal customers",
      icon: "🎯"
    },
    {
      step: "3",
      title: "Choose Plan", 
      description: "Select from Basic, Standard, or Premium packages that fit your budget",
      icon: "💎"
    },
    {
      step: "4",
      title: "Publish Ad",
      description: "Go live on SomAdz marketplace and watch your business grow",
      icon: "🚀"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">How SomAdz Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your business online and growing in just 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="feature-card group text-center relative overflow-hidden">
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gradient">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;