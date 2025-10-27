import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HealthConditions from "./pages/HealthConditions";
import MealPlans from "./pages/MealPlans";
import FoodLibrary from "./pages/FoodLibrary";
import FoodDetail from "./pages/FoodDetail";
import Doctors from "./pages/Doctors";
import BuildPlan from "./pages/BuildPlan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conditions" element={<HealthConditions />} />
          <Route path="/meal-plans" element={<MealPlans />} />
          <Route path="/meal-plans/:id" element={<MealPlans />} />
          <Route path="/food-library" element={<FoodLibrary />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/build-plan" element={<BuildPlan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
