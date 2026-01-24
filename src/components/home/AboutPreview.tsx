import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AboutPreview = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              About IT Department
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Information Technology Department at Government Polytechnic Himatnagar is 
              dedicated to providing quality technical education that prepares students for 
              successful careers in the IT industry. With state-of-the-art infrastructure, 
              experienced faculty, and industry-aligned curriculum, we strive to produce 
              skilled professionals who can contribute to the nation's technological advancement.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our department offers a comprehensive diploma program in Information Technology, 
              covering programming, networking, database management, web development, and 
              emerging technologies like cloud computing and cybersecurity.
            </p>
            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Vision & Mission Cards */}
          <div className="space-y-4">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-lavender-light">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To be a center of excellence in technical education, producing industry-ready 
                    IT professionals who contribute to technological innovation and societal development.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-rose-light">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To provide quality education through innovative teaching methodologies, 
                    practical training, and industry collaboration to develop skilled IT professionals.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-teal-light">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Values</h3>
                  <p className="text-sm text-muted-foreground">
                    Excellence, Innovation, Integrity, and Student-Centric Approach guide 
                    all our educational endeavors and institutional practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};