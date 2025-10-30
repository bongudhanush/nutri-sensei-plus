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
import yogurtImg from "@/assets/food-yogurt.jpg";
import nutsImg from "@/assets/food-nuts.jpg";
import broccoliImg from "@/assets/food-broccoli.jpg";
import blueberriesImg from "@/assets/food-blueberries.jpg";
import quinoaImg from "@/assets/food-quinoa.jpg";
import oatsImg from "@/assets/food-oats.jpg";

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
      name: "Quinoa",
      category: "Grains",
      image: quinoaImg,
      calories: 120,
      protein: 4.4,
      carbs: 21.3,
      fat: 1.9,
      fiber: 2.8,
      benefits: ["Complete protein", "Gluten-free", "High fiber"],
      description: "Ancient grain with all nine essential amino acids, perfect protein source.",
    },
    {
      id: 3,
      name: "Oats",
      category: "Grains",
      image: oatsImg,
      calories: 389,
      protein: 16.9,
      carbs: 66.3,
      fat: 6.9,
      fiber: 10.6,
      benefits: ["High fiber", "Heart healthy", "Sustained energy"],
      description: "Whole grain cereal rich in beta-glucan fiber for heart health.",
    },
    {
      id: 4,
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
      id: 5,
      name: "Broccoli",
      category: "Vegetables",
      image: broccoliImg,
      calories: 55,
      protein: 3.7,
      carbs: 11.2,
      fat: 0.6,
      fiber: 2.4,
      benefits: ["High fiber", "Vitamin C", "Cancer-fighting"],
      description: "Cruciferous vegetable rich in vitamins and cancer-fighting compounds.",
    },
    {
      id: 6,
      name: "Kale",
      category: "Vegetables",
      image: spinachImg,
      calories: 33,
      protein: 2.9,
      carbs: 6,
      fat: 0.9,
      fiber: 1.3,
      benefits: ["Superfood", "High calcium", "Antioxidants"],
      description: "Nutrient-dense leafy green packed with vitamins K, A, and C.",
    },
    {
      id: 7,
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
      id: 8,
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
      id: 9,
      name: "Eggs",
      category: "Proteins",
      image: chickenImg,
      calories: 155,
      protein: 13,
      carbs: 1.1,
      fat: 11,
      fiber: 0,
      benefits: ["Complete protein", "Vitamin D", "Choline rich"],
      description: "Versatile protein source with all essential amino acids and nutrients.",
    },
    {
      id: 10,
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
      id: 11,
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
      id: 12,
      name: "Blueberries",
      category: "Fruits",
      image: blueberriesImg,
      calories: 57,
      protein: 0.7,
      carbs: 14.5,
      fat: 0.3,
      fiber: 2.4,
      benefits: ["Antioxidants", "Low calorie", "Brain health"],
      description: "Superfood berries packed with antioxidants and brain-boosting nutrients.",
    },
    {
      id: 13,
      name: "Strawberries",
      category: "Fruits",
      image: appleImg,
      calories: 32,
      protein: 0.7,
      carbs: 7.7,
      fat: 0.3,
      fiber: 2,
      benefits: ["Vitamin C", "Low calorie", "Antioxidants"],
      description: "Sweet berries rich in vitamin C and heart-healthy compounds.",
    },
    {
      id: 14,
      name: "Greek Yogurt",
      category: "Dairy",
      image: yogurtImg,
      calories: 59,
      protein: 10,
      carbs: 3.6,
      fat: 0.4,
      fiber: 0,
      benefits: ["High protein", "Probiotics", "Low fat"],
      description: "Creamy dairy product packed with protein and gut-healthy probiotics.",
    },
    {
      id: 15,
      name: "Cottage Cheese",
      category: "Dairy",
      image: yogurtImg,
      calories: 98,
      protein: 11,
      carbs: 3.4,
      fat: 4.3,
      fiber: 0,
      benefits: ["High protein", "Low carb", "Calcium rich"],
      description: "Protein-rich cheese excellent for muscle building and bone health.",
    },
    {
      id: 16,
      name: "Skim Milk",
      category: "Dairy",
      image: yogurtImg,
      calories: 83,
      protein: 8.3,
      carbs: 12.2,
      fat: 0.2,
      fiber: 0,
      benefits: ["Low fat", "Calcium", "Vitamin D"],
      description: "Fat-free milk providing essential nutrients for bone health.",
    },
    {
      id: 17,
      name: "Cheddar Cheese",
      category: "Dairy",
      image: yogurtImg,
      calories: 403,
      protein: 25,
      carbs: 1.3,
      fat: 33,
      fiber: 0,
      benefits: ["High protein", "Calcium rich", "Vitamin K2"],
      description: "Aged cheese high in protein and essential minerals.",
    },
    {
      id: 18,
      name: "Almonds",
      category: "Nuts & Seeds",
      image: nutsImg,
      calories: 164,
      protein: 6,
      carbs: 6,
      fat: 14,
      fiber: 3.5,
      benefits: ["Healthy fats", "Vitamin E", "Heart healthy"],
      description: "Nutrient-dense nuts rich in healthy fats, vitamin E, and magnesium.",
    },
    {
      id: 19,
      name: "Walnuts",
      category: "Nuts & Seeds",
      image: nutsImg,
      calories: 185,
      protein: 4.3,
      carbs: 3.9,
      fat: 18.5,
      fiber: 1.9,
      benefits: ["Omega-3", "Brain health", "Antioxidants"],
      description: "Brain-shaped nuts rich in omega-3 fatty acids and antioxidants.",
    },
    {
      id: 20,
      name: "Chia Seeds",
      category: "Nuts & Seeds",
      image: quinoaImg,
      calories: 138,
      protein: 4.7,
      carbs: 12,
      fat: 8.7,
      fiber: 9.8,
      benefits: ["High fiber", "Omega-3", "Protein rich"],
      description: "Tiny seeds packed with fiber, omega-3s, and complete protein.",
    },
    {
      id: 21,
      name: "Pumpkin Seeds",
      category: "Nuts & Seeds",
      image: quinoaImg,
      calories: 151,
      protein: 7,
      carbs: 5,
      fat: 13,
      fiber: 1.1,
      benefits: ["Zinc", "Magnesium", "Healthy fats"],
      description: "Nutrient-dense seeds high in zinc, magnesium, and antioxidants.",
    },
    {
      id: 22,
      name: "Cashews",
      category: "Nuts & Seeds",
      image: nutsImg,
      calories: 157,
      protein: 5.2,
      carbs: 8.6,
      fat: 12.4,
      fiber: 0.9,
      benefits: ["Iron", "Copper", "Heart healthy"],
      description: "Creamy nuts rich in minerals and heart-healthy monounsaturated fats.",
    },
  ];

  const filteredFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Foods" || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
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
