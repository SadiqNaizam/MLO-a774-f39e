import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Assuming a generic Homepage exists for the root path
// If not, one of the auth pages could be the root, or a dedicated landing.
// For this exercise, we assume Homepage is defined elsewhere or not the focus.
// The example App.tsx from prompt includes Homepage, so we do too.
// If `Homepage.tsx` is not yet created, it would need to be.
// For now, let's imagine a simple placeholder `Homepage` or it exists.
// const Homepage = () => <div className="p-4">Welcome to the App! <Link to="/login">Login</Link></div>;
// Ideally, Homepage would be imported from './pages/Homepage' if it exists.
// For the sake of this exercise, if `Homepage.tsx` is not part of this request,
// we'll assume it exists. If it's not supposed to exist, the `/` route would need adjustment.
// The prompt example imports ./pages/Homepage, so we will assume it exists.
import Homepage from "./pages/Homepage"; // Assuming this exists as per prompt example
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PostLoginLandingPage from "./pages/PostLoginLandingPage";
import NotFound from "./pages/NotFound"; // Always Must Include

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* As per prompt's example App.tsx */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* The token part is optional for this exercise, keeping it simple */}
          <Route path="/reset-password" element={<PasswordResetPage />} /> 
          <Route path="/reset-password/:token" element={<PasswordResetPage />} /> {/* For link with token */}
          <Route path="/dashboard" element={<PostLoginLandingPage />} />
          {/* Other application routes would go here */}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} /> {/* Always Include This Line As It Is. */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;