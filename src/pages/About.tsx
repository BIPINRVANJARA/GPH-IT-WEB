import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, BookOpen, Briefcase } from "lucide-react";

const stats = [
  { label: "Years of Excellence", value: "20+" },
  { label: "Students Enrolled", value: "200+" },
  { label: "Faculty Members", value: "10+" },
  { label: "Placement Rate", value: "95%" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">About IT Department</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Learn about our history, vision, mission, and commitment to excellence in technical education.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Welcome to IT Department</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The Information Technology Department at Government Polytechnic Himatnagar was established 
              with the vision to provide quality technical education in the field of Information Technology. 
              Our department is committed to nurturing skilled IT professionals who can meet the challenges 
              of the rapidly evolving technology industry.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We offer a comprehensive 3-year Diploma program in Information Technology, affiliated with 
              Gujarat Technological University (GTU). Our curriculum is designed to provide students with 
              a strong foundation in programming, networking, database management, web development, and 
              emerging technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experienced faculty, well-equipped laboratories, and industry partnerships, we ensure 
              that our students receive both theoretical knowledge and practical skills required for 
              successful careers in the IT industry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lavender-light">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a center of excellence in technical education, producing industry-ready IT 
                  professionals who contribute to technological innovation and societal development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-light">
                    <Target className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle>Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide quality education through innovative teaching methodologies, practical 
                  training, and industry collaboration to develop skilled IT professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle>Values</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Excellence, Innovation, Integrity, and Student-Centric Approach guide all our 
                  educational endeavors and institutional practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-lavender-light">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12">Why Choose IT Department?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary mb-4">
                <Users className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Experienced Faculty</h3>
              <p className="text-sm text-muted-foreground">
                Learn from qualified and experienced faculty members dedicated to student success.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary mb-4">
                <BookOpen className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Updated Curriculum</h3>
              <p className="text-sm text-muted-foreground">
                Industry-aligned curriculum covering latest technologies and programming languages.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent mb-4">
                <Briefcase className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Placement Support</h3>
              <p className="text-sm text-muted-foreground">
                Strong industry connections and placement support for career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;