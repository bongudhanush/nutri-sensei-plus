import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { Activity, Clock, Target } from "lucide-react";

const Exercises = () => {
  const exerciseCategories = [
    {
      id: "diabetes",
      name: "Diabetes",
      exercises: [
        {
          id: 1,
          title: "After Meal Walking Workout (Lower Blood Sugar)",
          duration: "10 min",
          intensity: "Low",
          videoId: "4kOFfQlXfDk",
          description: "Gentle walking routine after meals to help lower blood sugar levels",
          benefits: ["Improves insulin sensitivity", "Controls blood glucose", "Promotes cardiovascular health"]
        },
        {
          id: 2,
          title: "10 Min After Eating Walking Workout",
          duration: "10 min",
          intensity: "Low",
          videoId: "sxBmITOwQ54",
          description: "Easy after-meal walking workout aimed at blood sugar control",
          benefits: ["Supports glucose control", "Boosts mood", "Improves sleep quality"]
        },
        {
          id: 3,
          title: "Chair Yoga for Diabetes",
          duration: "15 min",
          intensity: "Low",
          videoId: "KJJl7QX4xtc",
          description: "Gentle seated yoga exercises suitable for diabetes management",
          benefits: ["Builds muscle mass", "Increases metabolism", "Better glucose control"]
        }
      ]
    },
    {
      id: "heart",
      name: "Heart Health",
      exercises: [
        {
          id: 4,
          title: "Beginner Heart-Healthy Cardio (All Standing)",
          duration: "30 min",
          intensity: "Low",
          videoId: "AHS8f_m_MYo",
          description: "Low-impact standing cardio session focusing on heart health",
          benefits: ["Strengthens heart muscle", "Improves circulation", "Reduces blood pressure"]
        },
        {
          id: 5,
          title: "Heart Healthy Beginner Cardio (Zone 2)",
          duration: "32 min",
          intensity: "Low",
          videoId: "zxa9ZAQrjlc",
          description: "Beginner-friendly Zone 2 cardio to safely improve cardiovascular fitness",
          benefits: ["Safe heart strengthening", "Reduces cardiac risk", "Improves endurance"]
        },
        {
          id: 6,
          title: "Light Cardio for Heart Health",
          duration: "23 min",
          intensity: "Low",
          videoId: "hGYFfYD2oKA",
          description: "Light to moderate cardio designed to support heart health",
          benefits: ["Reduces stress", "Lowers heart rate", "Improves flexibility"]
        }
      ]
    },
    {
      id: "blood-pressure",
      name: "Blood Pressure",
      exercises: [
        {
          id: 7,
          title: "Cardio + Isometrics to Lower Blood Pressure",
          duration: "27 min",
          intensity: "Low",
          videoId: "HD6sGJst-TM",
          description: "Follow-along routine combining cardio and isometrics to help reduce BP",
          benefits: ["Lowers BP naturally", "Improves circulation", "Reduces hypertension"]
        },
        {
          id: 8,
          title: "Best Workout for High Blood Pressure",
          duration: "15 min",
          intensity: "Low",
          videoId: "EsVLl_bEcXw",
          description: "Low-impact total body workout suitable for high blood pressure",
          benefits: ["Safe for hypertension", "Easy to follow", "Stress reduction"]
        },
        {
          id: 9,
          title: "5-Min Breathing to Lower Blood Pressure",
          duration: "5 min",
          intensity: "Low",
          videoId: "jZq_NqJ9rKE",
          description: "Quick guided breathing session to help lower blood pressure",
          benefits: ["Reduces stress", "Lowers BP immediately", "Improves relaxation"]
        }
      ]
    },
    {
      id: "weight",
      name: "Weight Loss",
      exercises: [
        {
          id: 10,
          title: "30 Min Beginner Low Impact for Weight Loss",
          duration: "30 min",
          intensity: "Medium",
          videoId: "i96SEOqyAjU",
          description: "Low-impact routine for calorie burn and strength gains",
          benefits: ["Burns calories", "Boosts metabolism", "Builds lean muscle"]
        },
        {
          id: 11,
          title: "30 Min Full Body for Total Beginners",
          duration: "30 min",
          intensity: "Medium",
          videoId: "3rdsdh5fVeY",
          description: "All-standing, no equipment workout designed for beginners",
          benefits: ["Total body conditioning", "No equipment needed", "Effective fat loss"]
        },
        {
          id: 12,
          title: "30 Min Low Impact Home Workout for Weight Loss",
          duration: "30 min",
          intensity: "Medium",
          videoId: "MOz41fYRBvs",
          description: "Low-impact full-body routine that's joint-friendly yet effective",
          benefits: ["Maximum calorie burn", "Time-efficient", "Sustainable intensity"]
        }
      ]
    }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Low":
        return "bg-green-500/20 text-green-700 dark:text-green-400";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400";
      case "High":
        return "bg-red-500/20 text-red-700 dark:text-red-400";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-main)' }}>
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Exercise Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored exercise routines for different health conditions
            </p>
          </div>

          <Tabs defaultValue="diabetes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mb-8">
              {exerciseCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {exerciseCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.exercises.map((exercise) => (
                    <Card key={exercise.id} className="overflow-hidden hover:shadow-card transition-shadow">
                      <div className="aspect-video bg-muted">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube-nocookie.com/embed/${exercise.videoId}?rel=0&modestbranding=1&playsinline=1`}
                          title={exercise.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold">{exercise.title}</h3>
                          <Badge className={getIntensityColor(exercise.intensity)}>
                            {exercise.intensity}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {exercise.description}
                        </p>

                        <div className="flex items-center gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{exercise.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Activity className="w-4 h-4 text-primary" />
                            <span>Guided Exercise</span>
                          </div>
                        </div>

                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-4 h-4 text-primary" />
                            <h4 className="font-semibold text-sm">Benefits:</h4>
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {exercise.benefits.map((benefit, idx) => (
                              <li key={idx}>• {benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Safety Information */}
          <Card className="mt-12 p-8 bg-primary-light/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Exercise Safety Tips</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                  1
                </div>
                <h4 className="font-semibold mb-2">Consult Your Doctor</h4>
                <p className="text-sm text-muted-foreground">
                  Always check with your healthcare provider before starting any new exercise program
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                  2
                </div>
                <h4 className="font-semibold mb-2">Start Slowly</h4>
                <p className="text-sm text-muted-foreground">
                  Begin with low-intensity exercises and gradually increase intensity as your fitness improves
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                  3
                </div>
                <h4 className="font-semibold mb-2">Listen to Your Body</h4>
                <p className="text-sm text-muted-foreground">
                  Stop immediately if you feel pain, dizziness, or excessive fatigue
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
