import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  BookOpen, 
  Video, 
  Code, 
  Globe, 
  FileText,
  GraduationCap,
  Laptop
} from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Learning Platforms",
      icon: GraduationCap,
      resources: [
        { name: "NPTEL", url: "https://nptel.ac.in", description: "Free online courses from IITs" },
        { name: "Coursera", url: "https://coursera.org", description: "Online courses from top universities" },
        { name: "Udemy", url: "https://udemy.com", description: "Practical skill-based courses" },
        { name: "Khan Academy", url: "https://khanacademy.org", description: "Free educational content" },
      ],
    },
    {
      title: "Programming Resources",
      icon: Code,
      resources: [
        { name: "GeeksforGeeks", url: "https://geeksforgeeks.org", description: "DSA and programming tutorials" },
        { name: "LeetCode", url: "https://leetcode.com", description: "Coding practice for interviews" },
        { name: "HackerRank", url: "https://hackerrank.com", description: "Coding challenges and competitions" },
        { name: "W3Schools", url: "https://w3schools.com", description: "Web development tutorials" },
      ],
    },
    {
      title: "Documentation & References",
      icon: BookOpen,
      resources: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org", description: "Web technology documentation" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", description: "Programming Q&A community" },
        { name: "GitHub", url: "https://github.com", description: "Code hosting and collaboration" },
        { name: "DevDocs", url: "https://devdocs.io", description: "Combined API documentation" },
      ],
    },
    {
      title: "Video Tutorials",
      icon: Video,
      resources: [
        { name: "freeCodeCamp", url: "https://youtube.com/freecodecamp", description: "Free coding tutorials" },
        { name: "Traversy Media", url: "https://youtube.com/traversymedia", description: "Web development tutorials" },
        { name: "The Net Ninja", url: "https://youtube.com/thenetninja", description: "Programming tutorials" },
        { name: "CS50", url: "https://cs50.harvard.edu", description: "Harvard's intro to CS" },
      ],
    },
    {
      title: "Government Portals",
      icon: Globe,
      resources: [
        { name: "GTU Official", url: "https://gtu.ac.in", description: "Gujarat Technological University" },
        { name: "DTE Gujarat", url: "https://dtegujarat.org", description: "Directorate of Technical Education" },
        { name: "Swayam", url: "https://swayam.gov.in", description: "Government online courses" },
        { name: "Digital India", url: "https://digitalindia.gov.in", description: "Digital initiatives" },
      ],
    },
    {
      title: "Career & Jobs",
      icon: Laptop,
      resources: [
        { name: "LinkedIn", url: "https://linkedin.com", description: "Professional networking" },
        { name: "Naukri", url: "https://naukri.com", description: "Job portal" },
        { name: "Internshala", url: "https://internshala.com", description: "Internship opportunities" },
        { name: "AngelList", url: "https://angel.co", description: "Startup jobs" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary">Resources</h1>
          <p className="mt-2 text-muted-foreground">
            Curated learning resources for IT students
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.resources.map((resource, idx) => (
                      <a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                      >
                        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        <div>
                          <p className="font-medium text-foreground">{resource.name}</p>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-secondary/30 bg-secondary/5">
            <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
              <FileText className="h-12 w-12 text-secondary" />
              <div>
                <h3 className="text-xl font-bold">Suggest a Resource</h3>
                <p className="mt-1 text-muted-foreground">
                  Know a great resource that should be listed here? Let us know!
                </p>
              </div>
              <Button asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
