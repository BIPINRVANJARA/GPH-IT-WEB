import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building, Users, Award, Briefcase } from "lucide-react";

const placementStats = [
  { label: "Placement Rate", value: "95%", icon: TrendingUp },
  { label: "Companies Visited", value: "50+", icon: Building },
  { label: "Students Placed", value: "500+", icon: Users },
  { label: "Highest Package", value: "₹6 LPA", icon: Award },
];

const recruiters = [
  "TCS", "Infosys", "Wipro", "Tech Mahindra", "HCL", "Cognizant",
  "Capgemini", "L&T Infotech", "Cybage", "Persistent", "Cygnet Infotech",
  "Simform", "Bacancy Technology", "Azilen Technologies", "Silver Touch"
];

const recentPlacements = [
  { name: "Rahul Patel", company: "TCS", package: "₹3.5 LPA", year: "2025" },
  { name: "Priya Shah", company: "Infosys", package: "₹4.0 LPA", year: "2025" },
  { name: "Amit Kumar", company: "Wipro", package: "₹3.8 LPA", year: "2025" },
  { name: "Sneha Desai", company: "Tech Mahindra", package: "₹4.2 LPA", year: "2025" },
  { name: "Vikram Singh", company: "Cognizant", package: "₹4.5 LPA", year: "2025" },
  { name: "Neha Sharma", company: "Simform", package: "₹5.0 LPA", year: "2025" },
];

const Placement = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">🎯 Placement</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Excellent career opportunities for our students with top IT companies.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {placementStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label}>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Placement Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: 1, title: "Registration", desc: "Students register for placement drive" },
              { step: 2, title: "Pre-Placement Training", desc: "Aptitude, communication, technical training" },
              { step: 3, title: "Company Visits", desc: "Presentations, tests, and interviews" },
              { step: 4, title: "Offer Letter", desc: "Selected students receive job offers" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-primary-foreground font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-16 bg-lavender-light">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Recruiters</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {recruiters.map((company) => (
              <Badge 
                key={company} 
                variant="secondary" 
                className="px-4 py-2 text-sm"
              >
                {company}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Recent Placements</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentPlacements.map((placement, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{placement.name}</p>
                    <p className="text-sm text-muted-foreground">{placement.company}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">{placement.package}</Badge>
                      <Badge variant="secondary" className="text-xs">{placement.year}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placement;