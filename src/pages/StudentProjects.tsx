import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const StudentProjects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["student-projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("student_projects")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">🆕 Student Projects</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Showcase of innovative projects developed by our talented students.
          </p>
        </div>
      </section>

      {/* Stats - Dynamic */}
      <section className="py-8 bg-muted/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{projects?.length || 0}</p>
              <p className="text-sm text-muted-foreground">Projects Listed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : projects?.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No projects found.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects?.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{project.description}</p>

                    <div className="pt-4 border-t space-y-2 text-sm">
                      {project.team_members && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{project.team_members}</span>
                        </div>
                      )}
                      {project.year && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Year {project.year}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.project_url && (
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.project_url} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Project
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Note */}
          <Card className="mt-8 border-primary/30 bg-lavender-light">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Want to showcase your project?</strong> Students can submit their projects
                through the admin panel. Contact the department for project submission guidelines.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default StudentProjects;