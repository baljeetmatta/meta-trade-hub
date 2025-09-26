import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Meta Trades AI
            </h3>
            <p className="text-muted-foreground">
              Revolutionizing financial markets through advanced artificial intelligence 
              and automated trading strategies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-primary text-left transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary text-left transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("meta-trade")}
                className="text-muted-foreground hover:text-primary text-left transition-colors"
              >
                Meta Trade
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-muted-foreground hover:text-primary text-left transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary text-left transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Products</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                AI Trading Bots
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Market Analytics
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Risk Management
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Portfolio Tools
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                API Access
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Support</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                API Docs
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                System Status
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Security
              </a>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-muted-foreground text-sm">
              © 2024 Meta Trades AI. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:text-primary mt-4 md:mt-0"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;