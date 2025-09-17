import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "SomAdz transformed our local bakery into a regional success. We've reached customers we never thought possible!",
      author: "Sarah Chen",
      role: "Baker & Business Owner",
      rating: 5
    },
    {
      quote: "The AI design tools saved us thousands on marketing materials. Professional results in minutes, not days.",
      author: "Marcus Rodriguez",
      role: "Restaurant Owner",
      rating: 5
    },
    {
      quote: "From 50 to 5,000 customers in 6 months. SomAdz's advertising platform delivered results beyond our expectations.",
      author: "Jennifer Kim",
      role: "Fitness Studio Owner", 
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from businesses that grew with SomAdz
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="testimonial-card mx-auto max-w-2xl">
                    <CardContent className="p-8 text-center">
                      <div className="text-6xl mb-6 text-primary">"</div>
                      <blockquote className="text-xl text-foreground mb-6 leading-relaxed">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                      <cite className="not-italic">
                        <div className="font-semibold text-lg text-gradient">{testimonial.author}</div>
                        <div className="text-muted-foreground">{testimonial.role}</div>
                      </cite>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;