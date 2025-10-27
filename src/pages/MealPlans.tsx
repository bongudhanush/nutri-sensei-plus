import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Sunrise, Sun, Sunset, Moon, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";

const MealPlans = () => {
  const mealTypes = [
    { id: "breakfast", name: "Breakfast", icon: Sunrise, color: "text-orange-500" },
    { id: "lunch", name: "Lunch", icon: Sun, color: "text-yellow-500" },
    { id: "dinner", name: "Dinner", icon: Sunset, color: "text-purple-500" },
    { id: "snacks", name: "Snacks", icon: Moon, color: "text-blue-500" },
  ];

  const samplePlans = [
    {
      id: 1,
      name: "Diabetic-Friendly Breakfast",
      type: "breakfast",
      calories: 350,
      condition: "Diabetes",
      foods: ["Oats upma with vegetables", "Boiled egg", "Green tea"],
      macros: { carbs: 45, protein: 15, fat: 12 },
    },
    {
      id: 2,
      name: "Heart-Healthy Lunch",
      type: "lunch",
      calories: 450,
      condition: "Heart Health",
      foods: ["Brown rice", "Dal", "Mixed vegetable curry", "Cucumber salad"],
      macros: { carbs: 55, protein: 18, fat: 10 },
    },
    {
      id: 3,
      name: "Low-Sodium Dinner",
      type: "dinner",
      calories: 400,
      condition: "Blood Pressure",
      foods: ["Grilled fish", "Quinoa", "Steamed broccoli", "Tomato soup"],
      macros: { carbs: 40, protein: 30, fat: 12 },
    },
    {
      id: 4,
      name: "Weight Loss Snack",
      type: "snacks",
      calories: 150,
      condition: "Weight Loss",
      foods: ["Handful of almonds", "Apple slices", "Greek yogurt"],
      macros: { carbs: 15, protein: 8, fat: 9 },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meal Plans & Recipes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore nutritious meal ideas organized by meal type and health condition
            </p>
          </div>

          {/* Meal Type Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {mealTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card key={type.id} className="p-6 text-center hover:shadow-card transition-shadow cursor-pointer">
                  <Icon className={`w-10 h-10 ${type.color} mx-auto mb-2`} />
                  <h3 className="font-semibold">{type.name}</h3>
                </Card>
              );
            })}
          </div>

          {/* Sample Meal Plans */}
          <div className="space-y-6">
            {samplePlans.map((plan) => {
              const Icon = mealTypes.find(t => t.id === plan.type)?.icon || Sunrise;
              const color = mealTypes.find(t => t.id === plan.type)?.color || "text-gray-500";
              
              return (
                <Card key={plan.id} className="p-6 hover:shadow-card transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 ${color}`} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{plan.condition}</Badge>
                            <Badge variant="outline">{plan.calories} cal</Badge>
                          </div>
                        </div>
                        <Button asChild>
                          <Link to={`/meal-plans/${plan.id}`}>
                            View Details <ChevronRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Foods:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {plan.foods.map((food, idx) => (
                            <li key={idx}>• {food}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-6 text-sm">
                        <div>
                          <span className="text-muted-foreground">Carbs: </span>
                          <span className="font-semibold">{plan.macros.carbs}g</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Protein: </span>
                          <span className="font-semibold">{plan.macros.protein}g</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Fat: </span>
                          <span className="font-semibold">{plan.macros.fat}g</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-card border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Want a Personalized Plan?</h3>
              <p className="text-muted-foreground mb-6">
                Get a custom meal plan tailored to your specific needs and preferences
              </p>
              <Button asChild size="lg">
                <Link to="/build-plan">Build My Custom Plan</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlans;
