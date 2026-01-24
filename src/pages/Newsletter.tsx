import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Download, ExternalLink } from "lucide-react";

const Newsletter = () => {
  const newsletters = [
    {
      title: "TechBytes - Winter 2025",
      edition: "Volume 5, Issue 4",
      date: "December 2025",
      highlights: ["Student Achievements", "Placement Updates", "Technical Articles"],
      downloadLink: "#",
    },
    {
      title: "TechBytes - Autumn 2025",
      edition: "Volume 5, Issue 3",
      date: "September 2025",
      highlights: ["New Lab Inauguration", "Industry Visit", "Faculty Corner"],
      downloadLink: "#",
    },
    {
      title: "TechBytes - Summer 2025",
      edition: "Volume 5, Issue 2",
      date: "June 2025",
      highlights: ["Internship Opportunities", "Project Showcase", "Alumni Connect"],
      downloadLink: "#",
    },
    {
      title: "TechBytes - Spring 2025",
      edition: "Volume 5, Issue 1",
      date: "March 2025",
      highlights: ["Annual Day Report", "Coding Competition", "Department Events"],
      downloadLink: "#",
    },
    {
      title: "TechBytes - Winter 2024",
      edition: "Volume 4, Issue 4",
      date: "December 2024",
      highlights: ["Year in Review", "Best Projects", "Farewell to Seniors"],
      downloadLink: "#",
    },
    {
      title: "TechBytes - Autumn 2024",
      edition: "Volume 4, Issue 3",
      date: "September 2024",
      highlights: ["Hackathon Results", "Guest Lectures", "Student Articles"],
      downloadLink: "#",
    },
  ];

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
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col items-center gap-4 py-8 text-center md:flex-row md:text-left">
              <FileText className="h-16 w-16 text-primary" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold">Latest Issue: TechBytes Winter 2025</h2>
                <p className="mt-1 text-muted-foreground">
                  Featuring student achievements, placement highlights, and technical insights
                </p>
              </div>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Download Latest
              </Button>
            </CardContent>
          </Card>

          <h2 className="mb-6 text-2xl font-bold text-foreground">Newsletter Archive</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {newsletters.map((newsletter, index) => (
              <Card key={index} className="border-primary/20 transition-shadow hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{newsletter.edition}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {newsletter.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-medium text-foreground">Highlights:</p>
                    <ul className="space-y-1">
                      {newsletter.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-secondary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View / Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
