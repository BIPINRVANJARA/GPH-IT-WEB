import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, MessageCircle } from "lucide-react";

const MentoringPolicy = () => {
  const objectives = [
    "Guide students in academic planning and career development",
    "Provide emotional and psychological support",
    "Monitor academic progress and attendance",
    "Help in resolving academic and personal issues",
    "Bridge communication between students and department",
  ];

  const responsibilities = [
    {
      title: "Mentor Responsibilities",
      icon: Users,
      points: [
        "Meet mentees at least once every two weeks",
        "Maintain mentee records and progress reports",
        "Communicate with parents when necessary",
        "Guide students in skill development",
        "Report issues to HOD promptly",
      ],
    },
    {
      title: "Mentee Responsibilities",
      icon: Target,
      points: [
        "Attend scheduled meetings with mentor",
        "Share academic concerns openly",
        "Follow mentor's guidance sincerely",
        "Maintain discipline and decorum",
        "Seek help proactively when needed",
      ],
    },
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary">Mentoring Policy</h1>
          <p className="mt-2 text-muted-foreground">
            Student mentorship program guidelines
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="mb-8 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-secondary" />
                <CardTitle>Program Objectives</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 md:grid-cols-2">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid gap-8 md:grid-cols-2">
            {responsibilities.map((item, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="font-bold text-secondary">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle>Mentoring Schedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• <strong>Regular Meetings:</strong> Every 2nd and 4th Saturday</p>
              <p>• <strong>Emergency Meetings:</strong> As required by mentor or mentee</p>
              <p>• <strong>Parent Meetings:</strong> Once per semester or as needed</p>
              <p>• <strong>Documentation:</strong> All meetings are documented in mentoring register</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default MentoringPolicy;
