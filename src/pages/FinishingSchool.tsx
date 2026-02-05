import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Code, Users, Award, Target } from "lucide-react";

const FinishingSchool = () => {
  const programs = [
    {
      title: "Soft Skills Development",
      icon: Users,
      duration: "30 Hours",
      topics: [
        "Communication Skills",
        "Presentation Skills",
        "Team Work",
        "Time Management",
        "Professional Etiquette",
      ],
    },
    {
      title: "Technical Training",
      icon: Code,
      duration: "60 Hours",
      topics: [
        "Web Development",
        "Database Management",
        "Python Programming",
        "Cloud Fundamentals",
        "Version Control (Git)",
      ],
    },
    {
      title: "Aptitude & Reasoning",
      icon: Target,
      duration: "40 Hours",
      topics: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "Verbal Ability",
        "Data Interpretation",
        "Mock Tests",
      ],
    },
    {
      title: "Interview Preparation",
      icon: Briefcase,
      duration: "20 Hours",
      topics: [
        "Resume Building",
        "Group Discussion",
        "Technical Interview",
        "HR Interview",
        "Mock Interviews",
      ],
    },
  ];

  const outcomes = [
    { icon: Award, title: "95%", subtitle: "Placement Rate" },
    { icon: GraduationCap, title: "500+", subtitle: "Students Trained" },
    { icon: Briefcase, title: "50+", subtitle: "Partner Companies" },
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary">Finishing School</h1>
          <p className="mt-2 text-muted-foreground">
            Industry-ready training for career success
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-primary/20 text-center">
                <CardContent className="pt-6">
                  <outcome.icon className="mx-auto h-12 w-12 text-secondary" />
                  <p className="mt-4 text-4xl font-bold text-primary">{outcome.title}</p>
                  <p className="text-muted-foreground">{outcome.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="mb-6 text-2xl font-bold text-foreground">Training Programs</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <program.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{program.title}</CardTitle>
                    </div>
                    <Badge className="bg-secondary">{program.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-accent/30 bg-accent/5">
            <CardContent className="py-6">
              <h3 className="mb-2 text-lg font-semibold">Program Schedule</h3>
              <p className="text-muted-foreground">
                Finishing School programs are conducted during the final semester (6th semester)
                as part of the curriculum. Training sessions are held on weekdays from 2:00 PM
                to 5:00 PM. Industry experts and placement coordinators conduct specialized sessions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default FinishingSchool;
