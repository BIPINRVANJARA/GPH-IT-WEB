import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, GraduationCap, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Faculty = () => {
  const { data: facultyMembers, isLoading } = useQuery({
    queryKey: ["faculty"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("faculty")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Faculty</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Meet our dedicated team of experienced educators committed to your success.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="container">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : facultyMembers && facultyMembers.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {facultyMembers.map((faculty) => (
                <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="gradient-primary p-6 text-center text-primary-foreground">
                    {faculty.image_url ? (
                      <img
                        src={faculty.image_url}
                        alt={faculty.name}
                        className="mx-auto mb-4 h-20 w-20 rounded-full object-cover border-2 border-primary-foreground/20"
                      />
                    ) : (
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/20">
                        <span className="text-2xl font-bold">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    <h3 className="font-semibold text-lg">{faculty.name}</h3>
                    <Badge variant="secondary" className="mt-2">
                      {faculty.designation}
                    </Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    {faculty.qualification && (
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Qualification</p>
                          <p className="text-sm text-muted-foreground">{faculty.qualification}</p>
                        </div>
                      </div>
                    )}
                    {faculty.specialization && (
                      <div>
                        <p className="text-sm font-medium mb-1">Specialization</p>
                        <p className="text-sm text-muted-foreground">{faculty.specialization}</p>
                      </div>
                    )}
                    {faculty.experience && (
                      <div>
                        <p className="text-sm font-medium mb-1">Experience</p>
                        <p className="text-sm text-muted-foreground">{faculty.experience}</p>
                      </div>
                    )}
                    <div className="pt-4 border-t space-y-2">
                      {faculty.email && (
                        <a 
                          href={`mailto:${faculty.email}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          <Mail className="h-4 w-4" />
                          {faculty.email}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-dashed">
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground">
                  No faculty members published yet. Please check back later.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;
