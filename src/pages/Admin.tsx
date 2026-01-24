import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  LogOut,
  Newspaper,
  Calendar,
  Image,
  Users,
  FileText,
  GraduationCap,
  Briefcase,
  Code,
  MessageSquare
} from "lucide-react";
import { AdminNewsSection } from "@/components/admin/AdminNewsSection";
import { AdminEventsSection } from "@/components/admin/AdminEventsSection";
import { AdminGallerySection } from "@/components/admin/AdminGallerySection";
import { AdminFacultySection } from "@/components/admin/AdminFacultySection";
import { AdminMaterialsSection } from "@/components/admin/AdminMaterialsSection";
import { AdminProjectsSection } from "@/components/admin/AdminProjectsSection";
import { AdminPlacementsSection } from "@/components/admin/AdminPlacementsSection";
import { AdminTestimonialsSection } from "@/components/admin/AdminTestimonialsSection";
import { AdminNewsletterSection } from "@/components/admin/AdminNewsletterSection";

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
    });
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-primary-foreground/80">
                  IT Department - GP Himatnagar
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm hidden md:block">{user?.email}</span>
              <Button variant="secondary" size="sm" onClick={() => navigate("/")}>
                View Website
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="news" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-2 h-auto p-2">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              <span className="hidden sm:inline">News</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              <span className="hidden sm:inline">Gallery</span>
            </TabsTrigger>
            <TabsTrigger value="faculty" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Faculty</span>
            </TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Materials</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="placements" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Placement</span>
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Testimonials</span>
            </TabsTrigger>
            <TabsTrigger value="newsletter" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Newsletter</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <AdminNewsSection />
          </TabsContent>

          <TabsContent value="events">
            <AdminEventsSection />
          </TabsContent>

          <TabsContent value="gallery">
            <AdminGallerySection />
          </TabsContent>

          <TabsContent value="faculty">
            <AdminFacultySection />
          </TabsContent>

          <TabsContent value="materials">
            <AdminMaterialsSection />
          </TabsContent>

          <TabsContent value="projects">
            <AdminProjectsSection />
          </TabsContent>

          <TabsContent value="placements">
            <AdminPlacementsSection />
          </TabsContent>

          <TabsContent value="testimonials">
            <AdminTestimonialsSection />
          </TabsContent>

          <TabsContent value="newsletter">
            <AdminNewsletterSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
