import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Apple, Flame, Activity, Droplet } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";

const FoodDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const food = {
    name: "Brown Rice",
    category: "Grains",
    servingSize: "1 cup (195g)",
    calories: 112,
    protein: 2.6,
    carbs: 23.5,
    fat: 0.9,
    fiber: 1.8,
    sodium: 5,
    sugar: 0.4,
    benefits: ["Low sodium", "High fiber", "Whole grain", "Heart healthy"],
    suitableFor: ["Diabetes", "Blood Pressure", "Heart Health", "Weight Loss"],
    howToCook: [
      "Rinse 1 cup brown rice under cold water",
      "Add rice and 2.5 cups water to a pot",
      "Bring to boil, then reduce heat to low",
      "Cover and simmer for 45 minutes",
      "Remove from heat, let stand 10 minutes",
      "Fluff with fork and serve",
    ],
    nutritionTips: [
      "Best consumed during lunch for sustained energy",
      "Pair with vegetables and lean protein for balanced meal",
      "Can be prepared in advance and refrigerated for 3-4 days",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/food-library">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Food Library
            </Link>
          </Button>

          <div className="animate-fade-in">
            {/* Header */}
            <div className="mb-8">
              <Badge variant="secondary" className="mb-3">{food.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{food.name}</h1>
              <p className="text-muted-foreground text-lg">Per {food.servingSize}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 text-center">
                <Flame className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{food.calories}</div>
                <div className="text-sm text-muted-foreground">Calories</div>
              </Card>
              <Card className="p-4 text-center">
                <Activity className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{food.protein}g</div>
                <div className="text-sm text-muted-foreground">Protein</div>
              </Card>
              <Card className="p-4 text-center">
                <Apple className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{food.carbs}g</div>
                <div className="text-sm text-muted-foreground">Carbs</div>
              </Card>
              <Card className="p-4 text-center">
                <Droplet className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{food.fat}g</div>
                <div className="text-sm text-muted-foreground">Fat</div>
              </Card>
            </div>

            {/* Detailed Nutrition */}
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Nutrition Facts</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">Dietary Fiber</span>
                  <span>{food.fiber}g</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">Sodium</span>
                  <span>{food.sodium}mg</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">Sugar</span>
                  <span>{food.sugar}g</span>
                </div>
              </div>
            </Card>

            {/* Health Benefits */}
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Health Benefits</h2>
              <div className="flex flex-wrap gap-2">
                {food.benefits.map((benefit, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Suitable For */}
            <Card className="p-6 mb-8 bg-primary-light/30">
              <h2 className="text-2xl font-bold mb-4">Suitable For</h2>
              <div className="flex flex-wrap gap-2">
                {food.suitableFor.map((condition, idx) => (
                  <Badge key={idx} className="text-sm">
                    {condition}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* How to Cook */}
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">How to Prepare</h2>
              <ol className="space-y-3">
                {food.howToCook.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>

            {/* Nutrition Tips */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Nutrition Tips</h2>
              <ul className="space-y-3">
                {food.nutritionTips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
