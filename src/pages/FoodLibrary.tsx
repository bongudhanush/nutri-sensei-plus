import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import brownRiceImg from "@/assets/food-brown-rice.jpg";
import spinachImg from "@/assets/food-spinach.jpg";
import chickenImg from "@/assets/food-chicken.jpg";
import salmonImg from "@/assets/food-salmon.jpg";
import appleImg from "@/assets/food-apple.jpg";
import bananaImg from "@/assets/food-banana.jpg";

const FoodLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Foods");

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
      image: brownRiceImg,
      calories: 112,
      protein: 2.6,
      carbs: 23.5,
      fat: 0.9,
      fiber: 1.8,
      benefits: ["Low sodium", "High fiber", "Whole grain"],
      description: "A nutritious whole grain packed with fiber and essential minerals.",
    },
    {
      id: 2,
      name: "Spinach",
      category: "Vegetables",
      image: spinachImg,
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      benefits: ["Low calorie", "High iron", "Vitamin rich"],
      description: "Leafy green vegetable rich in iron, vitamins A, C, and K.",
    },
    {
      id: 3,
      name: "Grilled Chicken",
      category: "Proteins",
      image: chickenImg,
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      benefits: ["High protein", "Low fat", "No carbs"],
      description: "Lean protein source ideal for muscle building and weight management.",
    },
    {
      id: 4,
      name: "Salmon",
      category: "Proteins",
      image: salmonImg,
      calories: 206,
      protein: 22,
      carbs: 0,
      fat: 13,
      fiber: 0,
      benefits: ["Omega-3 rich", "Heart healthy", "High protein"],
      description: "Fatty fish rich in omega-3 fatty acids, excellent for heart health.",
    },
    {
      id: 5,
      name: "Apple",
      category: "Fruits",
      image: appleImg,
      calories: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      fiber: 4.4,
      benefits: ["High fiber", "Low sodium", "Natural sugars"],
      description: "Crunchy fruit high in fiber and antioxidants, great for snacking.",
    },
    {
      id: 6,
      name: "Banana",
      category: "Fruits",
      image: bananaImg,
      calories: 105,
      protein: 1.3,
      carbs: 27,
      fat: 0.4,
      fiber: 3.1,
      benefits: ["High potassium", "Energy boost", "Natural sugars"],
      description: "Energy-dense fruit packed with potassium, perfect pre-workout snack.",
    },
    {
      id: 7,
      name: "Quinoa",
      category: "Grains",
      image: brownRiceImg,
      calories: 120,
      protein: 4.4,
      carbs: 21.3,
      fat: 1.9,
      fiber: 2.8,
      benefits: ["Complete protein", "Gluten-free", "High fiber"],
      description: "Ancient grain with all nine essential amino acids, perfect protein source.",
    },
    {
      id: 8,
      name: "Oats",
      category: "Grains",
      image: brownRiceImg,
      calories: 389,
      protein: 16.9,
      carbs: 66.3,
      fat: 6.9,
      fiber: 10.6,
      benefits: ["High fiber", "Heart healthy", "Sustained energy"],
      description: "Whole grain cereal rich in beta-glucan fiber for heart health.",
    },
  ];

  const filteredFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Foods" || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Badge 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFoods.map((food) => (
              <Link key={food.id} to={`/food/${food.id}`}>
                <Card className="overflow-hidden h-full hover:shadow-card transition-shadow cursor-pointer">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img 
                      src={food.image} 
                      alt={food.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{food.name}</h3>
                        <Badge variant="secondary" className="text-xs">{food.category}</Badge>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <p className="text-xs text-muted-foreground">Calories</p>
                        <p className="font-bold text-primary">{food.calories}</p>
                      </div>
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <p className="text-xs text-muted-foreground">Protein</p>
                        <p className="font-bold text-primary">{food.protein}g</p>
                      </div>
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <p className="text-xs text-muted-foreground">Carbs</p>
                        <p className="font-bold text-primary">{food.carbs}g</p>
                      </div>
                      <div className="text-center p-2 bg-muted/50 rounded">
                        <p className="text-xs text-muted-foreground">Fat</p>
                        <p className="font-bold text-primary">{food.fat}g</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {food.benefits.slice(0, 2).map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
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
