import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Download, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Newsletter = () => {
  const { data: newsletters, isLoading } = useQuery({
    queryKey: ["public-newsletters"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("newsletters")
        .select("*")
        .eq("is_published", true)
        .order("publication_date", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const latestNewsletter = newsletters && newsletters.length > 0 ? newsletters[0] : null;

  return (
    <Layout>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary">Newsletter</h1>
          <p className="mt-2 text-muted-foreground">
            TechBytes - Department newsletter archive
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : newsletters?.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No newsletters available at the moment.</p>
          ) : (
            <>
              {latestNewsletter && (
                <Card className="mb-8 border-primary/20 bg-primary/5">
                  <CardContent className="flex flex-col items-center gap-4 py-8 text-center md:flex-row md:text-left">
                    <FileText className="h-16 w-16 text-primary" />
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">Latest Issue: {latestNewsletter.title}</h2>
                      <p className="mt-1 text-muted-foreground">
                        {latestNewsletter.highlights}
                      </p>
                    </div>
                    <Button className="gap-2" asChild>
                      <a href={latestNewsletter.file_url} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4" />
                        Download Latest
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}

              <h2 className="mb-6 text-2xl font-bold text-foreground">Newsletter Archive</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {newsletters?.map((newsletter) => (
                  <Card key={newsletter.id} className="border-primary/20 transition-shadow hover:shadow-lg">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{newsletter.edition}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(newsletter.publication_date).toLocaleDateString()}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {newsletter.highlights && (
                        <div className="mb-4">
                          <p className="mb-2 text-sm font-medium text-foreground">Highlights:</p>
                          <ul className="space-y-1">
                            {newsletter.highlights.split(',').map((highlight, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="h-1 w-1 rounded-full bg-secondary" />
                                {highlight.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                        <a href={newsletter.file_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          View / Download
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
