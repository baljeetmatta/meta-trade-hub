import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Zap, 
  Shield, 
  Smartphone, 
  Clock, 
  TrendingUp,
  Bot,
  Database
} from "lucide-react";

const MetaTrade = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Trading Bots",
      description: "Automated trading algorithms that work 24/7 to maximize your profits",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Advanced charting tools with AI-powered market analysis and insights",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Intelligent stop-loss and take-profit mechanisms to protect investments",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Lightning Execution",
      description: "Ultra-fast order execution with minimal slippage and latency",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Process millions of data points to identify market opportunities",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade on-the-go with our responsive mobile-optimized platform",
      color: "text-accent"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: [
        "Basic AI trading signals",
        "5 trading pairs",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      features: [
        "Advanced AI algorithms",
        "Unlimited trading pairs",
        "24/7 priority support",
        "Advanced analytics",
        "Risk management tools",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      features: [
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <section id="meta-trade" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Meta Trade</span> Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of AI-driven trading with our comprehensive platform 
            designed for both novice and professional traders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trading Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.7%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$2.5B+</div>
            <div className="text-muted-foreground">Total Volume</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Market Access</div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Choose Your Plan</h3>
          <p className="text-lg text-muted-foreground">Select the perfect plan for your trading needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 ${plan.popular ? 'border-primary scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-card-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-primary hover:shadow-glow' : 'variant-outline'}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetaTrade;