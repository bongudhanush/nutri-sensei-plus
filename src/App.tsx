import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import HealthConditions from "./pages/HealthConditions";
import MealPlans from "./pages/MealPlans";
import FoodLibrary from "./pages/FoodLibrary";
import FoodDetail from "./pages/FoodDetail";
import Doctors from "./pages/Doctors";
import BuildPlan from "./pages/BuildPlan";
import Exercises from "./pages/Exercises";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/conditions" element={<ProtectedRoute><HealthConditions /></ProtectedRoute>} />
            <Route path="/meal-plans" element={<ProtectedRoute><MealPlans /></ProtectedRoute>} />
            <Route path="/meal-plans/:id" element={<ProtectedRoute><MealPlans /></ProtectedRoute>} />
            <Route path="/food-library" element={<ProtectedRoute><FoodLibrary /></ProtectedRoute>} />
            <Route path="/food/:id" element={<ProtectedRoute><FoodDetail /></ProtectedRoute>} />
            <Route path="/doctors" element={<ProtectedRoute><Doctors /></ProtectedRoute>} />
            <Route path="/build-plan" element={<ProtectedRoute><BuildPlan /></ProtectedRoute>} />
            <Route path="/exercises" element={<ProtectedRoute><Exercises /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
