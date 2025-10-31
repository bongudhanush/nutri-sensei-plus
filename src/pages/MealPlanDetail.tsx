import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";

const MealPlanDetail = () => {
  const { id } = useParams();

  const mealPlans = [
    {
      id: 1,
      name: "Diabetic-Friendly Breakfast",
      type: "breakfast",
      calories: 350,
      condition: "Diabetes",
      foods: ["Oats upma with vegetables", "Boiled egg", "Green tea"],
      macros: { carbs: 45, protein: 15, fat: 12 },
      instructions: [
        "Cook oats with mixed vegetables (carrots, peas, beans)",
        "Add minimal salt and spices for flavor",
        "Prepare a boiled egg on the side",
        "Serve hot with sugar-free green tea"
      ],
      benefits: "Slow-release carbs help maintain steady blood sugar levels throughout the morning",
      prepTime: "15 minutes",
      servings: 1,
      ingredients: [
        "1/2 cup oats",
        "1 cup mixed vegetables (carrots, peas, beans)",
        "1 boiled egg",
        "1 cup green tea (no sugar)",
        "Salt and spices to taste"
      ],
      tips: [
        "Use steel-cut oats for better blood sugar control",
        "Add protein powder to increase protein content",
        "Prepare vegetables the night before to save time"
      ]
    },
    {
      id: 2,
      name: "Heart-Healthy Lunch",
      type: "lunch",
      calories: 450,
      condition: "Heart Health",
      foods: ["Brown rice", "Dal", "Mixed vegetable curry", "Cucumber salad"],
      macros: { carbs: 55, protein: 18, fat: 10 },
      instructions: [
        "Cook brown rice with minimal oil",
        "Prepare dal with turmeric and minimal salt",
        "Make mixed vegetable curry with seasonal veggies",
        "Toss cucumber salad with lemon juice"
      ],
      benefits: "Rich in fiber and omega-3s, supports cardiovascular health and reduces cholesterol",
      prepTime: "30 minutes",
      servings: 2,
      ingredients: [
        "1 cup brown rice",
        "1/2 cup dal (lentils)",
        "2 cups mixed seasonal vegetables",
        "1 cucumber",
        "1 tbsp olive oil",
        "Turmeric, cumin, coriander",
        "Lemon juice"
      ],
      tips: [
        "Soak dal for 30 minutes before cooking for better digestion",
        "Use heart-healthy oils like olive or canola",
        "Add more vegetables to increase fiber content"
      ]
    },
    {
      id: 3,
      name: "Low-Sodium Dinner",
      type: "dinner",
      calories: 400,
      condition: "Blood Pressure",
      foods: ["Grilled fish", "Quinoa", "Steamed broccoli", "Tomato soup"],
      macros: { carbs: 40, protein: 30, fat: 12 },
      instructions: [
        "Grill fish with herbs (no salt)",
        "Cook quinoa in low-sodium vegetable stock",
        "Steam broccoli until tender-crisp",
        "Prepare fresh tomato soup without added salt"
      ],
      benefits: "Low in sodium and high in potassium, helps regulate blood pressure naturally",
      prepTime: "25 minutes",
      servings: 1,
      ingredients: [
        "150g white fish fillet",
        "3/4 cup quinoa",
        "1 cup broccoli florets",
        "2 large tomatoes",
        "Fresh herbs (basil, oregano)",
        "1 garlic clove",
        "Black pepper"
      ],
      tips: [
        "Use fresh herbs instead of salt for flavor",
        "Choose fish rich in omega-3 like salmon or mackerel",
        "Steam vegetables to retain maximum nutrients"
      ]
    },
    {
      id: 4,
      name: "Weight Loss Snack",
      type: "snacks",
      calories: 150,
      condition: "Weight Loss",
      foods: ["Handful of almonds", "Apple slices", "Greek yogurt"],
      macros: { carbs: 15, protein: 8, fat: 9 },
      instructions: [
        "Measure 10-12 almonds (about 23g)",
        "Slice one medium apple",
        "Serve with 100g plain Greek yogurt",
        "Sprinkle cinnamon on apple for extra flavor"
      ],
      benefits: "High protein and fiber keep you full longer, preventing overeating between meals",
      prepTime: "5 minutes",
      servings: 1,
      ingredients: [
        "10-12 raw almonds",
        "1 medium apple",
        "100g plain Greek yogurt",
        "1/2 tsp cinnamon"
      ],
      tips: [
        "Portion control is key - measure your almonds",
        "Choose plain yogurt to avoid added sugars",
        "Eat slowly to feel more satisfied"
      ]
    },
  ];

  const plan = mealPlans.find(p => p.id === parseInt(id || "1"));

  if (!plan) {
    return (
      <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
        <Navbar />
        <div className="container mx-auto max-w-4xl pt-24 px-4">
          <p className="text-center text-muted-foreground">Meal plan not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/meal-plans">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Meal Plans
            </Link>
          </Button>

          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{plan.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-base">{plan.condition}</Badge>
                <Badge variant="outline" className="text-base">{plan.calories} calories</Badge>
              </div>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{plan.prepTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{plan.servings} {plan.servings === 1 ? 'serving' : 'servings'}</span>
                </div>
              </div>
            </div>

            <Card className="p-6 mb-6 bg-primary-light/20">
              <h3 className="text-lg font-semibold mb-2">Health Benefits</h3>
              <p className="text-foreground">{plan.benefits}</p>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-primary" />
                Ingredients
              </h3>
              <ul className="space-y-2">
                {plan.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Preparation Instructions</h3>
              <ol className="space-y-4">
                {plan.instructions.map((instruction, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {idx + 1}
                    </span>
                    <span className="pt-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Nutritional Information</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary">{plan.macros.carbs}g</p>
                  <p className="text-sm text-muted-foreground">Carbohydrates</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary">{plan.macros.protein}g</p>
                  <p className="text-sm text-muted-foreground">Protein</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-primary">{plan.macros.fat}g</p>
                  <p className="text-sm text-muted-foreground">Fat</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/50">
              <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
              <ul className="space-y-2">
                {plan.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">💡</span>
                    <span>{tip}</span>
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

export default MealPlanDetail;
