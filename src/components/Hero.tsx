import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Trading
            </span>
            <br />
            <span className="text-foreground">Revolution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of financial markets with our cutting-edge AI algorithms. 
            Make smarter trades, minimize risks, and maximize returns with Meta Trades AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection("meta-trade")}
              className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4"
            >
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Smart Analytics</h3>
              <p className="text-muted-foreground">Advanced AI algorithms analyze market patterns in real-time</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <Zap className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">Execute trades in milliseconds with our high-speed infrastructure</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <Shield className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Risk Management</h3>
              <p className="text-muted-foreground">Intelligent risk assessment to protect your investments</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-32 right-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default Hero;