import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Heart, Droplet, Scale, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";

const HealthConditions = () => {
  const conditions = [
    {
      id: "diabetes",
      name: "Diabetes Management",
      icon: Activity,
      color: "bg-blue-100 text-blue-600",
      description: "Control blood sugar with low-carb, high-fiber meal plans",
      guidelines: [
        "Target: 45-50% carbs, focus on complex carbohydrates",
        "Increase fiber intake to 25-30g per day",
        "Monitor portion sizes and meal timing",
        "Include lean proteins with every meal",
      ],
      exercises: [
        "30 minutes brisk walking daily after meals",
        "Strength training 2-3 times per week",
        "Yoga or stretching for 15 minutes daily",
        "Swimming or cycling 3 times per week",
      ],
    },
    {
      id: "blood-pressure",
      name: "Blood Pressure Control",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      description: "Reduce sodium and manage BP with heart-healthy foods",
      guidelines: [
        "Limit sodium to less than 2g per day",
        "Increase potassium-rich foods (bananas, spinach)",
        "Choose whole grains over refined grains",
        "Include fatty fish 2-3 times per week",
      ],
      exercises: [
        "Moderate cardio like walking or jogging 30 mins daily",
        "Deep breathing exercises for stress management",
        "Light aerobics or dancing 4 times per week",
        "Avoid heavy weightlifting, focus on light weights",
      ],
    },
    {
      id: "heart-health",
      name: "Heart Health",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
      description: "Protect your heart with balanced nutrition and healthy fats",
      guidelines: [
        "Limit saturated fat to less than 6% of calories",
        "Include omega-3 fatty acids from fish and nuts",
        "Eat 5+ servings of fruits and vegetables daily",
        "Choose lean proteins and plant-based options",
      ],
      exercises: [
        "Aerobic exercises like walking, cycling 150 mins/week",
        "Swimming for cardiovascular endurance",
        "Tai Chi or gentle yoga for flexibility",
        "Regular monitoring during exercise",
      ],
    },
    {
      id: "weight-loss",
      name: "Weight Management",
      icon: Scale,
      color: "bg-green-100 text-green-600",
      description: "Achieve healthy weight with balanced, calorie-controlled meals",
      guidelines: [
        "Create a 500-calorie deficit for steady weight loss",
        "Focus on protein (20-30% of calories)",
        "Eat nutrient-dense, whole foods",
        "Include regular physical activity",
      ],
      exercises: [
        "HIIT workouts 3 times per week (20-30 mins)",
        "Daily walking 10,000 steps or 60 minutes",
        "Strength training to build muscle mass",
        "Mix cardio and resistance for best results",
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Health Condition-Specific Diets
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Personalized nutrition guidelines for your specific health needs
            </p>
          </div>

          <div className="space-y-8">
            {conditions.map((condition) => {
              const Icon = condition.icon;
              return (
                <Card key={condition.id} className="p-8 hover:shadow-card transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`w-16 h-16 rounded-2xl ${condition.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{condition.name}</h2>
                      <p className="text-muted-foreground mb-6">{condition.description}</p>
                      
                      <div className="bg-muted/50 rounded-lg p-6 mb-4">
                        <h3 className="font-semibold mb-4 text-lg">Key Dietary Guidelines:</h3>
                        <ul className="space-y-3">
                          {condition.guidelines.map((guideline, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-primary-light/30 rounded-lg p-6 mb-6">
                        <h3 className="font-semibold mb-4 text-lg">Recommended Exercises:</h3>
                        <ul className="space-y-3">
                          {condition.exercises.map((exercise, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{exercise}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Button asChild>
                          <Link to={`/meal-plans?condition=${condition.id}`}>
                            View Meal Plans <ChevronRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link to="/build-plan">Get Custom Plan</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-12 p-8 bg-primary-light/50 border-primary/20">
            <div className="text-center">
              <Droplet className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Need Personalized Guidance?</h3>
              <p className="text-muted-foreground mb-6">
                Connect with our nutritionists and doctors for customized diet plans
              </p>
              <Button asChild size="lg">
                <Link to="/doctors">Consult a Doctor</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HealthConditions;
