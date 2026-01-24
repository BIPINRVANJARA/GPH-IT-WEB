import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import News from "./pages/News";
import Infrastructure from "./pages/Infrastructure";
import Faculty from "./pages/Faculty";
import Testimonials from "./pages/Testimonials";
import AcademicCalendar from "./pages/AcademicCalendar";
import Curriculum from "./pages/Curriculum";
import StudentPolicy from "./pages/StudentPolicy";
import AssessmentPolicy from "./pages/AssessmentPolicy";
import MentoringPolicy from "./pages/MentoringPolicy";
import StudyMaterial from "./pages/StudyMaterial";
import ExpertLectures from "./pages/ExpertLectures";
import FinishingSchool from "./pages/FinishingSchool";
import Newsletter from "./pages/Newsletter";
import Resources from "./pages/Resources";
import StudentProjects from "./pages/StudentProjects";
import Placement from "./pages/Placement";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        
        {/* About Section */}
        <Route path="/about" element={<About />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        
        {/* Academics Section */}
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/student-policy" element={<StudentPolicy />} />
        <Route path="/assessment-policy" element={<AssessmentPolicy />} />
        <Route path="/mentoring-policy" element={<MentoringPolicy />} />
        
        {/* Students Section */}
        <Route path="/study-material" element={<StudyMaterial />} />
        <Route path="/expert-lectures" element={<ExpertLectures />} />
        <Route path="/finishing-school" element={<FinishingSchool />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/student-projects" element={<StudentProjects />} />
        
        {/* Other Pages */}
        <Route path="/news" element={<News />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Auth & Admin */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        
        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
