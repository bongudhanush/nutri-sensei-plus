import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Flame, Beef, Wheat, Droplet } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import brownRiceImg from "@/assets/food-brown-rice.jpg";
import spinachImg from "@/assets/food-spinach.jpg";
import chickenImg from "@/assets/food-chicken.jpg";
import salmonImg from "@/assets/food-salmon.jpg";
import appleImg from "@/assets/food-apple.jpg";
import bananaImg from "@/assets/food-banana.jpg";

const FoodDetail = () => {
  const { id } = useParams();

  // Expanded food data
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
      description: "Brown rice is a nutritious whole grain that retains its bran and germ layers, making it rich in fiber, vitamins, and minerals. It's an excellent source of complex carbohydrates and provides sustained energy throughout the day.",
      servingSize: "1 cup cooked (195g)",
      vitamins: { "Vitamin B1": "12%", "Vitamin B3": "15%", "Vitamin B6": "14%", "Magnesium": "21%" },
      healthBenefits: [
        "Helps regulate blood sugar levels",
        "Supports digestive health",
        "May reduce risk of type 2 diabetes",
        "Rich in antioxidants",
      ],
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
      description: "Spinach is a nutrient-dense leafy green vegetable packed with vitamins A, C, and K, iron, folate, and antioxidants. It's one of the most nutritious foods you can eat.",
      servingSize: "1 cup raw (30g)",
      vitamins: { "Vitamin A": "56%", "Vitamin C": "14%", "Vitamin K": "181%", "Folate": "15%", "Iron": "15%" },
      healthBenefits: [
        "Strengthens immune system",
        "Supports bone health",
        "Improves eye health",
        "Anti-inflammatory properties",
      ],
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
      description: "Grilled chicken breast is a lean source of high-quality protein with all essential amino acids. It's perfect for muscle building, weight loss, and overall health.",
      servingSize: "100g cooked",
      vitamins: { "Vitamin B3": "69%", "Vitamin B6": "30%", "Selenium": "36%", "Phosphorus": "20%" },
      healthBenefits: [
        "Builds and repairs muscle tissue",
        "Supports weight management",
        "Boosts metabolism",
        "Provides essential amino acids",
      ],
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
      description: "Salmon is a fatty fish rich in omega-3 fatty acids EPA and DHA, which are crucial for heart and brain health. It's also an excellent source of high-quality protein and various vitamins.",
      servingSize: "100g cooked",
      vitamins: { "Vitamin B12": "127%", "Vitamin D": "111%", "Vitamin B3": "50%", "Selenium": "59%" },
      healthBenefits: [
        "Reduces inflammation",
        "Supports heart health",
        "Improves brain function",
        "May reduce depression risk",
      ],
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
      description: "Apples are crunchy fruits high in fiber, vitamin C, and various antioxidants. They're incredibly nutritious and may help support weight loss, heart health, and lower diabetes risk.",
      servingSize: "1 medium apple (182g)",
      vitamins: { "Vitamin C": "14%", "Vitamin K": "5%", "Potassium": "6%", "Vitamin B6": "4%" },
      healthBenefits: [
        "Supports gut health",
        "May lower cholesterol",
        "Good for heart health",
        "Helps with weight management",
      ],
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
      description: "Bananas are among the world's most popular fruits, packed with essential nutrients that may help moderate blood sugar, improve digestive health, and aid weight loss.",
      servingSize: "1 medium banana (118g)",
      vitamins: { "Vitamin B6": "33%", "Vitamin C": "11%", "Potassium": "12%", "Magnesium": "8%" },
      healthBenefits: [
        "Supports heart health",
        "Aids digestion",
        "May improve kidney health",
        "Provides quick energy",
      ],
    },
  ];

  const food = foods.find((f) => f.id === parseInt(id || ""));

  if (!food) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold mb-4">Food Not Found</h1>
            <Button asChild>
              <Link to="/food-library">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Food Library
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/food-library">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Library
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{food.name}</h1>
                  <Badge variant="secondary" className="mb-4">
                    {food.category}
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{food.description}</p>

              <div className="bg-muted/50 p-4 rounded-lg mb-6">
                <p className="text-sm font-semibold mb-2">Serving Size</p>
                <p className="text-lg">{food.servingSize}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {food.benefits.map((benefit, idx) => (
                  <Badge key={idx} variant="outline">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Nutrition Facts</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold">Calories</span>
                  </div>
                  <span className="text-xl font-bold">{food.calories}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Beef className="w-5 h-5 text-red-500" />
                    <span className="font-semibold">Protein</span>
                  </div>
                  <span className="text-xl font-bold">{food.protein}g</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Wheat className="w-5 h-5 text-amber-500" />
                    <span className="font-semibold">Carbs</span>
                  </div>
                  <span className="text-xl font-bold">{food.carbs}g</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Droplet className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">Fat</span>
                  </div>
                  <span className="text-xl font-bold">{food.fat}g</span>
                </div>

                <div className="flex justify-between p-3 border-t">
                  <span className="text-muted-foreground">Fiber</span>
                  <span className="font-semibold">{food.fiber}g</span>
                </div>

                <div className="flex justify-between p-3">
                  <span className="text-muted-foreground">Sodium</span>
                  <span className="font-semibold">{food.sodium}mg</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Vitamins & Minerals</h2>
              <div className="space-y-4">
                {Object.entries(food.vitamins).map(([vitamin, value]) => (
                  <div key={vitamin}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{vitamin}</span>
                      <span className="text-primary">{value} DV</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Health Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {food.healthBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
