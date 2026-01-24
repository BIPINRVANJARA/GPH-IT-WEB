import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award } from "lucide-react";

const StudentPolicy = () => {
  const policies = [
    {
      title: "Academic Conduct",
      icon: BookOpen,
      points: [
        "Students must maintain minimum 75% attendance",
        "Regular submission of assignments and practicals",
        "No use of unfair means during examinations",
        "Respect intellectual property and avoid plagiarism",
      ],
    },
    {
      title: "Discipline & Behavior",
      icon: Users,
      points: [
        "Maintain decorum in classrooms and laboratories",
        "Respect faculty, staff, and fellow students",
        "Follow dress code guidelines",
        "No ragging or harassment of any kind",
      ],
    },
    {
      title: "Laboratory Rules",
      icon: Award,
      points: [
        "Handle equipment with care",
        "Report any damage immediately",
        "Maintain cleanliness in labs",
        "Follow safety protocols",
      ],
    },
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary">Student Policy</h1>
          <p className="mt-2 text-muted-foreground">
            Guidelines and regulations for IT Department students
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <policy.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{policy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {policy.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle>Important Notice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Violation of any policy may result in disciplinary action including
                suspension or expulsion. Students are expected to read and understand
                all policies thoroughly. For any clarification, please contact the
                Head of Department or your class mentor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default StudentPolicy;
