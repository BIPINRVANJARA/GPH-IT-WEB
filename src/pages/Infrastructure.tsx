import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Wifi, Server, Users, BookOpen, Cpu } from "lucide-react";

const labs = [
  {
    name: "Computer Lab 1",
    description: "Main programming lab with 40 computers",
    specs: "Intel Core i5, 8GB RAM, 256GB SSD",
    capacity: 40,
    software: ["Visual Studio", "Eclipse", "Python", "MySQL"],
  },
  {
    name: "Computer Lab 2",
    description: "Advanced development and project lab",
    specs: "Intel Core i7, 16GB RAM, 512GB SSD",
    capacity: 30,
    software: ["Android Studio", "Node.js", "MongoDB", "Docker"],
  },
  {
    name: "Networking Lab",
    description: "Hands-on networking and security lab",
    specs: "Cisco routers, switches, network simulators",
    capacity: 25,
    software: ["Cisco Packet Tracer", "Wireshark", "GNS3"],
  },
  {
    name: "Hardware Lab",
    description: "Computer hardware assembly and maintenance",
    specs: "PC components, testing equipment",
    capacity: 20,
    software: ["Diagnostic tools", "BIOS configuration"],
  },
];

const facilities = [
  { name: "Smart Classrooms", count: "5", icon: Monitor, desc: "Interactive digital boards" },
  { name: "Wi-Fi Campus", count: "100%", icon: Wifi, desc: "High-speed internet" },
  { name: "Server Room", count: "1", icon: Server, desc: "Centralized infrastructure" },
  { name: "Seminar Hall", count: "1", icon: Users, desc: "200+ seating capacity" },
  { name: "Library Section", count: "500+", icon: BookOpen, desc: "IT books and journals" },
  { name: "Project Lab", count: "1", icon: Cpu, desc: "IoT and embedded systems" },
];

const Infrastructure = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Infrastructure</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            State-of-the-art facilities and labs for comprehensive IT education.
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <Card key={facility.name} className="text-center">
                  <CardContent className="p-4">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-xl font-bold">{facility.count}</p>
                    <p className="text-sm font-medium">{facility.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{facility.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Computer Labs</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {labs.map((lab) => (
              <Card key={lab.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-primary" />
                    {lab.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{lab.description}</p>
                  <div>
                    <p className="text-sm font-medium mb-1">Specifications</p>
                    <p className="text-sm text-muted-foreground">{lab.specs}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Capacity</p>
                    <p className="text-sm text-muted-foreground">{lab.capacity} workstations</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Software Available</p>
                    <div className="flex flex-wrap gap-2">
                      {lab.software.map((sw) => (
                        <Badge key={sw} variant="secondary">{sw}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-lavender-light">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Additional Facilities</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Library</h3>
                <p className="text-sm text-muted-foreground">
                  Well-stocked library with 500+ IT books, journals, and digital resources.
                  Access to online databases and e-books.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Seminar Hall</h3>
                <p className="text-sm text-muted-foreground">
                  200+ seating capacity with audio-visual equipment for seminars,
                  workshops, and guest lectures.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Placement Cell</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated placement cell for career guidance, training programs,
                  and campus recruitment drives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Infrastructure;