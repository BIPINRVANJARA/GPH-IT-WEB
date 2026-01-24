import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Calendar } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Attendance System",
    team: ["Rahul Patel", "Priya Shah"],
    batch: "2025-26",
    semester: 6,
    technologies: ["Python", "OpenCV", "Flask", "MySQL"],
    description: "Face recognition based attendance system with web dashboard for faculty.",
    status: "Completed",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    team: ["Amit Kumar", "Sneha Desai"],
    batch: "2025-26",
    semester: 6,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    description: "Full-stack e-commerce website with payment integration and admin panel.",
    status: "Completed",
  },
  {
    id: 3,
    title: "College ERP System",
    team: ["Vikram Singh", "Neha Sharma", "Kiran Patel"],
    batch: "2024-25",
    semester: 6,
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    description: "Enterprise resource planning system for managing student records and academics.",
    status: "Completed",
  },
  {
    id: 4,
    title: "IoT Based Home Automation",
    team: ["Dhruv Mehta", "Pooja Patel"],
    batch: "2025-26",
    semester: 5,
    technologies: ["Arduino", "ESP8266", "Android", "Firebase"],
    description: "Smart home system controllable via mobile app with voice commands.",
    status: "In Progress",
  },
  {
    id: 5,
    title: "Online Exam Portal",
    team: ["Riya Shah", "Arjun Kumar"],
    batch: "2024-25",
    semester: 6,
    technologies: ["Django", "PostgreSQL", "React", "Docker"],
    description: "Secure online examination system with anti-cheating measures.",
    status: "Completed",
  },
  {
    id: 6,
    title: "Inventory Management System",
    team: ["Harsh Patel", "Nisha Desai"],
    batch: "2025-26",
    semester: 5,
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    description: "Stock management system for small businesses with reporting features.",
    status: "In Progress",
  },
];

const StudentProjects = () => {
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

      {/* Stats */}
      <section className="py-8 bg-muted/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Award Winners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Published Papers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{project.team.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Batch {project.batch} • Sem {project.semester}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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