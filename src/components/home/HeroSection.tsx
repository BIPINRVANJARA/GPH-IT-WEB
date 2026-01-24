import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary-foreground/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center text-primary-foreground">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span>Admissions Open for 2026-27</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Information Technology
            <span className="block mt-2 text-secondary">Department</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg opacity-90 sm:text-xl">
            Government Polytechnic, Himatnagar
          </p>
          <p className="mb-10 max-w-2xl mx-auto text-base opacity-80">
            Empowering the next generation of IT professionals with cutting-edge curriculum, 
            industry-aligned training, and hands-on practical experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-accent hover:bg-primary-foreground/90"
            >
              <Link to="/about">
                Explore Department
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/curriculum">View Curriculum</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <BookOpen className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm opacity-80">Years of Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm opacity-80">Students Placed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <Award className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm opacity-80">Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};