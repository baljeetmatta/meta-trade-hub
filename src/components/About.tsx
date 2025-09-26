import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Meta Trades AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing financial markets through advanced artificial intelligence, 
            empowering traders with unprecedented insights and automated strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Leading the Future of AI Trading
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Meta Trades AI combines cutting-edge machine learning algorithms with deep market analysis 
              to provide traders with intelligent, data-driven insights. Our platform processes millions 
              of market data points in real-time to identify profitable opportunities.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Founded by a team of quantitative analysts, AI researchers, and trading experts, 
              we're committed to democratizing advanced trading technologies for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Brain className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">AI-Powered</h4>
                <p className="text-sm text-muted-foreground">Advanced neural networks</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Target className="h-10 w-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">Precision</h4>
                <p className="text-sm text-muted-foreground">99.7% accuracy rate</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">Community</h4>
                <p className="text-sm text-muted-foreground">50K+ active traders</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-card-foreground">Awards</h4>
                <p className="text-sm text-muted-foreground">Industry recognition</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">
            Our Mission
          </h3>
          <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto">
            To democratize sophisticated trading strategies through artificial intelligence, 
            making advanced market analysis accessible to traders of all experience levels 
            while maintaining the highest standards of security and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;