import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Professional Trader",
      company: "Goldman Sachs",
      content: "Meta Trades AI has revolutionized my trading strategy. The AI insights are incredibly accurate, and I've seen a 40% increase in my portfolio performance.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Investment Manager",
      company: "BlackRock",
      content: "The platform's risk management features are outstanding. It's helped me protect my investments while maximizing returns consistently.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "David Kim",
      role: "Quantitative Analyst",
      company: "Morgan Stanley",
      content: "As a quant analyst, I'm impressed by the sophisticated algorithms. The backtesting results are remarkable and translate well to live trading.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Emma Thompson",
      role: "Hedge Fund Manager",
      company: "Bridgewater Associates",
      content: "Meta Trades AI's real-time analytics have given us a significant edge in the market. The execution speed is unmatched.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "James Wilson",
      role: "Retail Trader",
      company: "Independent",
      content: "I started as a beginner trader, and this platform has helped me become profitable. The AI guidance is like having a mentor 24/7.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Lisa Zhang",
      role: "Portfolio Manager",
      company: "Fidelity",
      content: "The automated trading bots work flawlessly even when I'm sleeping. My portfolio continues growing without constant monitoring.",
      rating: 5,
      avatar: "LZ"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Traders</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful traders who trust Meta Trades AI 
            for their investment strategies and portfolio management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Join 50,000+ Successful Traders
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Don't just take our word for it. Start your journey with Meta Trades AI today 
              and experience the difference that advanced AI can make in your trading success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-background flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm text-muted-foreground">
                  and 49,995+ others
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;