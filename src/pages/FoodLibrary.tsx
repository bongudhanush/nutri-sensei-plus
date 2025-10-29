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
      sodium: 5,
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
      sodium: 79,
      benefits: ["Low calorie", "High iron", "Vitamin rich"],
      description: "Leafy green vegetable rich in iron, vitamins A, C, and K.",
    },
    {
      id: 3,
      name: "Grilled Chicken Breast",
      category: "Proteins",
      image: chickenImg,
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      sodium: 74,
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
      sodium: 59,
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
      sodium: 2,
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
      sodium: 1,
      benefits: ["High potassium", "Energy boost", "Natural sugars"],
      description: "Energy-dense fruit packed with potassium, perfect pre-workout snack.",
    },
    {
      id: 7,
      name: "Broccoli",
      category: "Vegetables",
      image: spinachImg,
      calories: 55,
      protein: 3.7,
      carbs: 11.2,
      fat: 0.6,
      fiber: 2.4,
      sodium: 33,
      benefits: ["High fiber", "Vitamin C", "Cancer-fighting"],
      description: "Cruciferous vegetable rich in vitamins and cancer-fighting compounds.",
    },
    {
      id: 8,
      name: "Sweet Potato",
      category: "Vegetables",
      image: brownRiceImg,
      calories: 86,
      protein: 1.6,
      carbs: 20.1,
      fat: 0.1,
      fiber: 3,
      sodium: 55,
      benefits: ["High fiber", "Vitamin A", "Complex carbs"],
      description: "Nutrient-dense root vegetable high in beta-carotene and fiber.",
    },
    {
      id: 9,
      name: "Greek Yogurt",
      category: "Dairy",
      image: chickenImg,
      calories: 59,
      protein: 10,
      carbs: 3.6,
      fat: 0.4,
      fiber: 0,
      sodium: 36,
      benefits: ["High protein", "Probiotics", "Low fat"],
      description: "Creamy dairy product packed with protein and gut-healthy probiotics.",
    },
    {
      id: 10,
      name: "Almonds",
      category: "Nuts & Seeds",
      image: bananaImg,
      calories: 164,
      protein: 6,
      carbs: 6,
      fat: 14,
      fiber: 3.5,
      sodium: 0,
      benefits: ["Healthy fats", "Vitamin E", "Heart healthy"],
      description: "Nutrient-dense nuts rich in healthy fats, vitamin E, and magnesium.",
    },
    {
      id: 11,
      name: "Quinoa",
      category: "Grains",
      image: brownRiceImg,
      calories: 120,
      protein: 4.4,
      carbs: 21.3,
      fat: 1.9,
      fiber: 2.8,
      sodium: 7,
      benefits: ["Complete protein", "Gluten-free", "High fiber"],
      description: "Ancient grain with all nine essential amino acids, perfect protein source.",
    },
    {
      id: 12,
      name: "Avocado",
      category: "Fruits",
      image: appleImg,
      calories: 160,
      protein: 2,
      carbs: 8.5,
      fat: 14.7,
      fiber: 6.7,
      sodium: 7,
      benefits: ["Healthy fats", "High fiber", "Potassium rich"],
      description: "Creamy fruit rich in heart-healthy monounsaturated fats.",
    },
    {
      id: 13,
      name: "Eggs",
      category: "Proteins",
      image: chickenImg,
      calories: 155,
      protein: 13,
      carbs: 1.1,
      fat: 11,
      fiber: 0,
      sodium: 124,
      benefits: ["Complete protein", "Vitamin D", "Choline rich"],
      description: "Versatile protein source with all essential amino acids and nutrients.",
    },
    {
      id: 14,
      name: "Blueberries",
      category: "Fruits",
      image: bananaImg,
      calories: 57,
      protein: 0.7,
      carbs: 14.5,
      fat: 0.3,
      fiber: 2.4,
      sodium: 1,
      benefits: ["Antioxidants", "Low calorie", "Brain health"],
      description: "Superfood berries packed with antioxidants and brain-boosting nutrients.",
    },
    {
      id: 15,
      name: "Oats",
      category: "Grains",
      image: brownRiceImg,
      calories: 389,
      protein: 16.9,
      carbs: 66.3,
      fat: 6.9,
      fiber: 10.6,
      sodium: 2,
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
