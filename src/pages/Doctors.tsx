import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, MessageCircle, Video, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { useState } from "react";

const Doctors = () => {
  const [showMessageForm, setShowMessageForm] = useState<number | null>(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Clinical Nutritionist",
      experience: "12 years",
      rating: 4.8,
      reviews: 245,
      expertise: ["Diabetes", "Weight Management", "Sports Nutrition"],
      languages: ["English", "Hindi", "Telugu"],
      availability: "Mon-Fri, 9 AM - 6 PM",
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist & Diet Consultant",
      experience: "15 years",
      rating: 4.9,
      reviews: 312,
      expertise: ["Heart Health", "Blood Pressure", "Cholesterol"],
      languages: ["English", "Hindi"],
      availability: "Tue-Sat, 10 AM - 7 PM",
    },
    {
      id: 3,
      name: "Dr. Anita Reddy",
      specialty: "Endocrinologist",
      experience: "10 years",
      rating: 4.7,
      reviews: 189,
      expertise: ["Diabetes", "Thyroid", "Hormone Balance"],
      languages: ["English", "Telugu"],
      availability: "Mon-Fri, 2 PM - 8 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Consult Our Experts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized guidance from experienced nutritionists and doctors
            </p>
          </div>

          <div className="space-y-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="p-6 hover:shadow-card transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Doctor Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-hero flex items-center justify-center text-primary-foreground text-3xl font-bold">
                      {doctor.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1">{doctor.name}</h3>
                      <p className="text-muted-foreground mb-2">{doctor.specialty}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{doctor.rating}</span>
                          <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                        </div>
                        <span className="text-muted-foreground">{doctor.experience} experience</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Expertise:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {doctor.expertise.map((exp, idx) => (
                            <Badge key={idx} variant="secondary">{exp}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Languages:</span>
                        <span className="ml-2 text-sm">{doctor.languages.join(", ")}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Available:</span>
                        <span className="ml-2 text-sm">{doctor.availability}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button 
                        onClick={() => setShowMessageForm(showMessageForm === doctor.id ? null : doctor.id)}
                        variant={showMessageForm === doctor.id ? "secondary" : "default"}
                      >
                        <MessageCircle className="mr-2 w-4 h-4" />
                        Message
                      </Button>
                      <Button variant="outline">
                        <Video className="mr-2 w-4 h-4" />
                        Video Call
                      </Button>
                      <Button variant="outline">
                        <Calendar className="mr-2 w-4 h-4" />
                        Book Appointment
                      </Button>
                    </div>

                    {/* Message Form */}
                    {showMessageForm === doctor.id && (
                      <Card className="mt-6 p-4 bg-muted/50 animate-slide-up">
                        <h4 className="font-semibold mb-4">Send a Message to {doctor.name}</h4>
                        <div className="space-y-4">
                          <Input placeholder="Subject" />
                          <Textarea 
                            placeholder="Describe your health concerns or questions..."
                            rows={4}
                          />
                          <div className="flex gap-2">
                            <Button>Send Message</Button>
                            <Button 
                              variant="ghost" 
                              onClick={() => setShowMessageForm(null)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <Card className="mt-12 p-8 bg-primary-light/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">How Consultations Work</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Choose Your Expert</h4>
                <p className="text-sm text-muted-foreground">
                  Select a doctor based on specialty and expertise
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Book & Connect</h4>
                <p className="text-sm text-muted-foreground">
                  Schedule via message, video, or in-person appointment
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Get Your Plan</h4>
                <p className="text-sm text-muted-foreground">
                  Receive personalized diet and health recommendations
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
