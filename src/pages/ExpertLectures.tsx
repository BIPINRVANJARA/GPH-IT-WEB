import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Calendar, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExpertLectures = () => {
  const lectures = [
    {
      title: "Introduction to Cloud Computing",
      speaker: "Mr. Rajesh Patel",
      designation: "Cloud Architect, TCS",
      date: "December 15, 2025",
      duration: "2 hours",
      topics: ["AWS Basics", "Cloud Architecture", "Career in Cloud"],
      videoLink: "#",
    },
    {
      title: "Cybersecurity in Modern Era",
      speaker: "Ms. Priya Shah",
      designation: "Security Analyst, Infosys",
      date: "November 28, 2025",
      duration: "1.5 hours",
      topics: ["Ethical Hacking", "Security Protocols", "Career Guidance"],
      videoLink: "#",
    },
    {
      title: "Web Development Trends 2026",
      speaker: "Mr. Amit Kumar",
      designation: "Senior Developer, Wipro",
      date: "November 10, 2025",
      duration: "2 hours",
      topics: ["React", "Next.js", "Full Stack Development"],
      videoLink: "#",
    },
    {
      title: "Data Science & AI",
      speaker: "Dr. Meera Joshi",
      designation: "AI Researcher, IIT Gandhinagar",
      date: "October 25, 2025",
      duration: "2.5 hours",
      topics: ["Machine Learning", "Python", "Real-world Applications"],
      videoLink: "#",
    },
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary">Expert Lectures</h1>
          <p className="mt-2 text-muted-foreground">
            Industry expert sessions and knowledge sharing programs
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {lectures.map((lecture, index) => (
              <Card key={index} className="border-primary/20 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{lecture.title}</CardTitle>
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{lecture.speaker}</span>
                      </div>
                      <p className="text-sm text-secondary">{lecture.designation}</p>
                    </div>
                    <Video className="h-8 w-8 text-primary/50" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{lecture.date}</span>
                    </div>
                    <Badge variant="secondary">{lecture.duration}</Badge>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {lecture.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="border-primary/30">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Watch Recording
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-secondary/30 bg-secondary/5">
            <CardContent className="py-6 text-center">
              <p className="text-muted-foreground">
                Want to suggest a topic or speaker for future lectures?
              </p>
              <Button className="mt-4" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ExpertLectures;
