import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Apple, Activity, Users, BookOpen, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import heroNutrition from "@/assets/hero-nutrition.jpg";

const Index = () => {
  const conditions = [
    { name: "Diabetes", icon: Activity, color: "bg-blue-100 text-blue-600" },
    { name: "Blood Pressure", icon: Heart, color: "bg-red-100 text-red-600" },
    { name: "Heart Health", icon: Heart, color: "bg-pink-100 text-pink-600" },
    { name: "Weight Loss", icon: Activity, color: "bg-green-100 text-green-600" },
  ];

  const features = [
    {
      title: "Personalized Plans",
      description: "Get custom meal plans based on your health condition, goals, and preferences",
      icon: Apple,
    },
    {
      title: "Food Library",
      description: "Explore thousands of foods with detailed nutritional information",
      icon: BookOpen,
    },
    {
      title: "Track Progress",
      description: "Monitor your daily intake, calories, and macro nutrients",
      icon: Activity,
    },
    {
      title: "Consult Experts",
      description: "Connect with nutritionists and doctors for personalized guidance",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0"
        style={{ background: 'var(--gradient-main)' }}
      />
      <div className="relative z-10">
        <Navbar />
        <ChatBot />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                Your Smart Guide to Healthy Eating
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Personalized diet plans for diabetes, blood pressure, heart health, and weight management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/build-plan">
                    Get My Plan <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/food-library">Explore Foods</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroNutrition} 
                alt="Healthy nutrition with fresh fruits, vegetables, and wholesome foods" 
                className="rounded-2xl shadow-card w-full h-auto"
              />
            </div>
          </div>
          
          <div className="text-center mt-16">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-card">
                <p className="text-4xl font-bold text-primary mb-2">50,000+</p>
                <p className="text-muted-foreground">Users Transformed</p>
              </Card>
              <Card className="p-6 bg-gradient-card">
                <p className="text-4xl font-bold text-primary mb-2">2,500+</p>
                <p className="text-muted-foreground">Meal Plans Created</p>
              </Card>
              <Card className="p-6 bg-gradient-card">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Health Conditions */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Health Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((condition) => {
              const Icon = condition.icon;
              return (
                <Link to="/conditions" key={condition.name}>
                  <Card className="p-6 hover:shadow-card transition-all cursor-pointer group">
                    <div className={`w-12 h-12 rounded-lg ${condition.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{condition.name}</h3>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need for Healthy Living
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 hover:shadow-card transition-shadow">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose NutriSensei?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Medically Reviewed</h3>
              <p className="text-sm text-muted-foreground">All plans reviewed by certified nutritionists</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Science-Based</h3>
              <p className="text-sm text-muted-foreground">Evidence-based nutrition recommendations</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Apple className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Easy to Follow</h3>
              <p className="text-sm text-muted-foreground">Simple meal plans with everyday ingredients</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">AI chatbot and expert consultations available</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Health Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of users who have transformed their health with personalized nutrition
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/build-plan">Get Started Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">NutriSensei</h4>
              <p className="text-sm text-muted-foreground">
                Your smart guide to healthy eating
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/meal-plans">Meal Plans</Link></li>
                <li><Link to="/food-library">Food Library</Link></li>
                <li><Link to="/build-plan">Diet Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Health</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/conditions">Conditions</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <p className="text-xs text-muted-foreground">
                This website provides general nutrition information for educational purposes only. 
                Consult your doctor before making dietary changes.
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;
