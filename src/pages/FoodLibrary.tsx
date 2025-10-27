import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";

const FoodLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Foods",
    "Vegetables",
    "Fruits",
    "Grains",
    "Proteins",
    "Dairy",
    "Nuts & Seeds",
  ];

  const foods = [
    {
      id: 1,
      name: "Brown Rice",
      category: "Grains",
      calories: 112,
      protein: 2.6,
      carbs: 23.5,
      fat: 0.9,
      fiber: 1.8,
      sodium: 5,
      benefits: ["Low sodium", "High fiber", "Whole grain"],
    },
    {
      id: 2,
      name: "Spinach",
      category: "Vegetables",
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      sodium: 79,
      benefits: ["Low calorie", "High iron", "Vitamin rich"],
    },
    {
      id: 3,
      name: "Grilled Chicken Breast",
      category: "Proteins",
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      sodium: 74,
      benefits: ["High protein", "Low fat", "No carbs"],
    },
    {
      id: 4,
      name: "Almonds",
      category: "Nuts & Seeds",
      calories: 164,
      protein: 6,
      carbs: 6,
      fat: 14,
      fiber: 3.5,
      sodium: 0,
      benefits: ["Healthy fats", "High fiber", "Zero sodium"],
    },
    {
      id: 5,
      name: "Apple",
      category: "Fruits",
      calories: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      fiber: 4.4,
      sodium: 2,
      benefits: ["High fiber", "Low sodium", "Natural sugars"],
    },
    {
      id: 6,
      name: "Greek Yogurt",
      category: "Dairy",
      calories: 100,
      protein: 10,
      carbs: 6,
      fat: 4,
      fiber: 0,
      sodium: 50,
      benefits: ["High protein", "Probiotic", "Low sugar"],
    },
  ];

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Food Library
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore detailed nutritional information for thousands of foods
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search foods..."
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {category}
              </Badge>
            ))}
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFoods.map((food) => (
              <Link key={food.id} to={`/food/${food.id}`}>
                <Card className="p-6 h-full hover:shadow-card transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{food.name}</h3>
                      <Badge variant="secondary" className="text-xs">{food.category}</Badge>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Calories</span>
                      <span className="font-semibold">{food.calories}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Protein</span>
                      <span className="font-semibold">{food.protein}g</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Carbs</span>
                      <span className="font-semibold">{food.carbs}g</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Fat</span>
                      <span className="font-semibold">{food.fat}g</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {food.benefits.slice(0, 2).map((benefit, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodLibrary;
