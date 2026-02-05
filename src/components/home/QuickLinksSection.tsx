import { Link } from "react-router-dom";
import { 
  Calendar, 
  BookOpen, 
  Users, 
  Briefcase, 
  FileText, 
  GraduationCap,
  Building,
  MessageSquare
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const quickLinks = [
  {
    title: "Academic Calendar",
    description: "Important dates & schedules",
    href: "/academic-calendar",
    icon: Calendar,
    color: "bg-lavender-light",
  },
  {
    title: "Curriculum",
    description: "Course structure & syllabus",
    href: "/curriculum",
    icon: BookOpen,
    color: "bg-rose-light",
  },
  {
    title: "Faculty",
    description: "Meet our expert teachers",
    href: "/faculty",
    icon: Users,
    color: "bg-teal-light",
  },
  {
    title: "Placement",
    description: "Career opportunities",
    href: "/placement",
    icon: Briefcase,
    color: "bg-lavender-light",
  },
  {
    title: "Study Material",
    description: "Notes & resources",
    href: "/study-material",
    icon: FileText,
    color: "bg-rose-light",
  },
  {
    title: "Student Projects",
    description: "Showcase of innovation",
    href: "/student-projects",
    icon: GraduationCap,
    color: "bg-teal-light",
  },
  {
    title: "Infrastructure",
    description: "Labs & facilities",
    href: "/infrastructure",
    icon: Building,
    color: "bg-lavender-light",
  },
  {
    title: "Testimonials",
    description: "What students say",
    href: "/testimonials",
    icon: MessageSquare,
    color: "bg-rose-light",
  },
];

export const QuickLinksSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Quick Access</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navigate to important sections of our department website
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.title} to={link.href}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${link.color}`}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{link.title}</h3>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};