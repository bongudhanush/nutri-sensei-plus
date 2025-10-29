import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { Calculator, ChevronRight, CheckCircle, TrendingUp, Target } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const BuildPlan = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [savedPlan, setSavedPlan] = useState<any>(null);
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    height: "",
    weight: "",
    activity: "moderate",
    goal: "maintain",
    conditions: [] as string[],
  });

  useEffect(() => {
    if (user) {
      fetchUserPlan();
    }
  }, [user]);

  const fetchUserPlan = async () => {
    try {
      const { data, error } = await supabase
        .from("user_plans")
        .select("*")
        .eq("user_id", user?.id)
        .single();

      if (data) {
        setSavedPlan(data);
        setFormData({
          age: data.age.toString(),
          gender: data.gender,
          height: data.height.toString(),
          weight: data.weight.toString(),
          activity: data.activity_level,
          goal: data.goal,
          conditions: data.health_conditions || [],
        });
      }
    } catch (error) {
      console.log("No existing plan found");
    }
  };

  const conditions = [
    "Diabetes",
    "High Blood Pressure",
    "Heart Disease",
    "High Cholesterol",
    "Thyroid",
    "None",
  ];

  const calculateCalories = () => {
    const age = parseInt(formData.age);
    const height = parseInt(formData.height);
    const weight = parseInt(formData.weight);
    
    // BMR calculation
    let bmr = formData.gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };
    
    bmr *= activityMultipliers[formData.activity as keyof typeof activityMultipliers];

    // Goal adjustment
    if (formData.goal === "lose") bmr -= 500;
    if (formData.goal === "gain") bmr += 500;

    return Math.round(bmr);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const calories = calculateCalories();
      const planData = {
        user_id: user.id,
        age: parseInt(formData.age),
        gender: formData.gender,
        height: parseFloat(formData.height),
        weight: parseFloat(formData.weight),
        activity_level: formData.activity,
        goal: formData.goal,
        health_conditions: formData.conditions,
        daily_calories: calories,
      };

      const { data, error } = await supabase
        .from("user_plans")
        .upsert(planData, { onConflict: "user_id" })
        .select()
        .single();

      if (error) throw error;

      setSavedPlan(data);
      toast({
        title: "Success!",
        description: "Your personalized plan has been created.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save plan",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build Your Personal Plan
            </h1>
            <p className="text-xl text-muted-foreground">
              Answer a few questions to get your customized diet plan
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 rounded-full mx-1 transition-colors ${
                    s <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Step {step} of 3
            </p>
          </div>

          <Card className="p-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
                
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="25"
                  />
                </div>

                <div>
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">Female</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    placeholder="170"
                  />
                </div>

                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="70"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Activity & Goals */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Activity & Goals</h2>

                <div>
                  <Label>Activity Level</Label>
                  <RadioGroup
                    value={formData.activity}
                    onValueChange={(value) => setFormData({ ...formData, activity: value })}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sedentary" id="sedentary" />
                        <Label htmlFor="sedentary" className="cursor-pointer">
                          Sedentary (little or no exercise)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="light" />
                        <Label htmlFor="light" className="cursor-pointer">
                          Light (exercise 1-3 days/week)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="moderate" />
                        <Label htmlFor="moderate" className="cursor-pointer">
                          Moderate (exercise 3-5 days/week)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="active" id="active" />
                        <Label htmlFor="active" className="cursor-pointer">
                          Active (exercise 6-7 days/week)
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Your Goal</Label>
                  <RadioGroup
                    value={formData.goal}
                    onValueChange={(value) => setFormData({ ...formData, goal: value })}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lose" id="lose" />
                        <Label htmlFor="lose" className="cursor-pointer">
                          Lose Weight
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maintain" id="maintain" />
                        <Label htmlFor="maintain" className="cursor-pointer">
                          Maintain Weight
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gain" id="gain" />
                        <Label htmlFor="gain" className="cursor-pointer">
                          Gain Weight
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 3: Health Conditions */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Health Conditions</h2>

                <div>
                  <Label className="mb-4 block">
                    Do you have any of these conditions? (Select all that apply)
                  </Label>
                  <div className="space-y-3">
                    {conditions.map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={condition}
                          checked={formData.conditions.includes(condition)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                conditions: [...formData.conditions, condition],
                              });
                            } else {
                              setFormData({
                                ...formData,
                                conditions: formData.conditions.filter((c) => c !== condition),
                              });
                            }
                          }}
                        />
                        <Label htmlFor={condition} className="cursor-pointer">
                          {condition}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results Preview */}
                {formData.age && formData.height && formData.weight && (
                  <Card className="p-6 bg-primary-light/50 border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Calculator className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">Your Daily Calorie Target</h3>
                    </div>
                    <p className="text-4xl font-bold text-primary mb-2">
                      {calculateCalories()} calories
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Based on your profile and {formData.goal} goal
                    </p>
                  </Card>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
              )}
              <Button 
                onClick={step < 3 ? handleNext : handleSubmit}
                className="flex-1"
                disabled={loading}
              >
                {loading ? "Saving..." : step < 3 ? (
                  <>
                    Next <ChevronRight className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  "Get My Plan"
                )}
              </Button>
            </div>
          </Card>

          {/* Display Saved Plan */}
          {savedPlan && (
            <Card className="mt-8 p-8 bg-gradient-card animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <h2 className="text-3xl font-bold">Your Personalized Plan</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-background/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-lg">Daily Calories</h3>
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {savedPlan.daily_calories}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Based on your {savedPlan.goal} goal
                  </p>
                </Card>

                <Card className="p-6 bg-background/50">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-lg">Activity Level</h3>
                  </div>
                  <p className="text-2xl font-bold mb-2 capitalize">
                    {savedPlan.activity_level.replace("_", " ")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {savedPlan.gender === "male" ? "Male" : "Female"}, {savedPlan.age} years
                  </p>
                </Card>

                <Card className="p-6 bg-background/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Calculator className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-lg">Body Metrics</h3>
                  </div>
                  <p className="text-sm mb-1">
                    <span className="font-semibold">Height:</span> {savedPlan.height} cm
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Weight:</span> {savedPlan.weight} kg
                  </p>
                </Card>
              </div>

              {savedPlan.health_conditions && savedPlan.health_conditions.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Health Considerations</h3>
                  <div className="flex flex-wrap gap-2">
                    {savedPlan.health_conditions.map((condition: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="bg-primary-light/20 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">What's Next?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Explore our meal plans tailored to your needs and health goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Browse the food library for healthy options with detailed nutrition information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Check recommended exercises for your health conditions with video tutorials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Consult with our expert nutritionists for personalized guidance</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-6 bg-background/50 hover:shadow-card transition-shadow">
                    <h4 className="font-bold mb-2">Daily Macros Target</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Protein (30%):</span>
                        <span className="font-semibold">{Math.round(savedPlan.daily_calories * 0.3 / 4)}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Carbs (45%):</span>
                        <span className="font-semibold">{Math.round(savedPlan.daily_calories * 0.45 / 4)}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fats (25%):</span>
                        <span className="font-semibold">{Math.round(savedPlan.daily_calories * 0.25 / 9)}g</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-background/50 hover:shadow-card transition-shadow">
                    <h4 className="font-bold mb-2">BMI & Health Score</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Current BMI:</span>
                        <span className="font-semibold">
                          {(savedPlan.weight / Math.pow(savedPlan.height / 100, 2)).toFixed(1)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Target Weight:</span>
                        <span className="font-semibold">
                          {savedPlan.goal === "lose" ? `${savedPlan.weight - 5}kg` : 
                           savedPlan.goal === "gain" ? `${savedPlan.weight + 5}kg` : 
                           `${savedPlan.weight}kg (maintain)`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Est. Timeline:</span>
                        <span className="font-semibold">
                          {savedPlan.goal === "maintain" ? "Ongoing" : "8-12 weeks"}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildPlan;
