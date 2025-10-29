import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Star, MessageCircle, Video, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Doctors = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [showMessageForm, setShowMessageForm] = useState<number | null>(null);
  const [bookingDialog, setBookingDialog] = useState<{ open: boolean; doctor: any | null }>({
    open: false,
    doctor: null,
  });
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    consultationType: "video",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

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
      education: "PhD in Clinical Nutrition, AIIMS Delhi",
      about: "Specialized in diabetes management and sports nutrition with over 12 years of experience helping patients achieve their health goals through evidence-based dietary interventions.",
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
      education: "MD Cardiology, PGIMER Chandigarh",
      about: "Expert in cardiovascular health and preventive cardiology. Helps patients manage heart conditions through lifestyle modifications and personalized nutrition plans.",
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
      education: "MD Endocrinology, CMC Vellore",
      about: "Focuses on hormonal disorders and metabolic conditions. Provides comprehensive treatment plans combining medication and nutrition therapy.",
    },
    {
      id: 4,
      name: "Dr. Amit Patel",
      specialty: "Sports Nutritionist",
      experience: "8 years",
      rating: 4.6,
      reviews: 156,
      expertise: ["Athletic Performance", "Body Building", "Weight Loss"],
      languages: ["English", "Hindi", "Gujarati"],
      availability: "Mon-Sat, 7 AM - 9 PM",
      education: "MSc Sports Nutrition, NIS Patiala",
      about: "Works with athletes and fitness enthusiasts to optimize performance through tailored nutrition strategies and supplementation guidance.",
    },
    {
      id: 5,
      name: "Dr. Meera Iyer",
      specialty: "Pediatric Nutritionist",
      experience: "14 years",
      rating: 4.9,
      reviews: 287,
      expertise: ["Child Nutrition", "Growth Issues", "Food Allergies"],
      languages: ["English", "Tamil", "Hindi"],
      availability: "Mon-Fri, 10 AM - 5 PM",
      education: "MD Pediatrics, JIPMER Pondicherry",
      about: "Specializes in child and adolescent nutrition. Helps parents manage picky eaters, food allergies, and ensure optimal growth and development.",
    },
    {
      id: 6,
      name: "Dr. Sanjay Gupta",
      specialty: "Integrative Medicine Specialist",
      experience: "18 years",
      rating: 4.8,
      reviews: 342,
      expertise: ["Holistic Health", "Ayurveda", "Chronic Diseases"],
      languages: ["English", "Hindi"],
      availability: "Tue-Sat, 11 AM - 7 PM",
      education: "BAMS, MD Integrative Medicine",
      about: "Combines modern nutrition science with traditional Ayurvedic principles to create comprehensive wellness plans for chronic conditions.",
    },
  ];

  const handleBookAppointment = async () => {
    if (!user || !bookingDialog.doctor) return;

    if (!appointmentData.date || !appointmentData.time) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("appointments").insert({
        user_id: user.id,
        doctor_name: bookingDialog.doctor.name,
        doctor_specialty: bookingDialog.doctor.specialty,
        appointment_date: appointmentData.date,
        appointment_time: appointmentData.time,
        consultation_type: appointmentData.consultationType,
        notes: appointmentData.notes,
        status: "pending",
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your appointment has been booked successfully.",
      });

      setBookingDialog({ open: false, doctor: null });
      setAppointmentData({
        date: "",
        time: "",
        consultationType: "video",
        notes: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to book appointment",
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
                        <p className="text-sm text-muted-foreground mb-3">{doctor.about}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Education:</span>
                        <span className="ml-2 text-sm">{doctor.education}</span>
                      </div>
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
                      <Button 
                        variant="outline"
                        onClick={() => setBookingDialog({ open: true, doctor })}
                      >
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

      {/* Appointment Booking Dialog */}
      <Dialog open={bookingDialog.open} onOpenChange={(open) => setBookingDialog({ open, doctor: null })}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              Schedule a consultation with {bookingDialog.doctor?.name}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="date">Appointment Date</Label>
              <Input
                id="date"
                type="date"
                value={appointmentData.date}
                onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div>
              <Label htmlFor="time">Preferred Time</Label>
              <Input
                id="time"
                type="time"
                value={appointmentData.time}
                onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="consultationType">Consultation Type</Label>
              <select
                id="consultationType"
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
                value={appointmentData.consultationType}
                onChange={(e) =>
                  setAppointmentData({ ...appointmentData, consultationType: e.target.value })
                }
              >
                <option value="video">Video Call</option>
                <option value="phone">Phone Call</option>
                <option value="in-person">In-Person</option>
              </select>
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Describe your health concerns or questions..."
                value={appointmentData.notes}
                onChange={(e) => setAppointmentData({ ...appointmentData, notes: e.target.value })}
                rows={3}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setBookingDialog({ open: false, doctor: null })}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button onClick={handleBookAppointment} disabled={loading} className="flex-1">
              {loading ? "Booking..." : "Confirm Booking"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Doctors;
