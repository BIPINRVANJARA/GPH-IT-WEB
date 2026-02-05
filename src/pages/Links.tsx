import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const links = [
  {
    category: "University & Board",
    items: [
      { name: "Gujarat Technological University (GTU)", url: "https://www.gtu.ac.in" },
      { name: "DTE Gujarat", url: "https://dte.gujarat.gov.in" },
      { name: "AICTE", url: "https://www.aicte-india.org" },
      { name: "ACPC Gujarat", url: "https://acpc.gujarat.gov.in" },
    ],
  },
  {
    category: "Learning Platforms",
    items: [
      { name: "NPTEL", url: "https://nptel.ac.in" },
      { name: "SWAYAM", url: "https://swayam.gov.in" },
      { name: "Coursera", url: "https://www.coursera.org" },
      { name: "edX", url: "https://www.edx.org" },
      { name: "Udemy", url: "https://www.udemy.com" },
    ],
  },
  {
    category: "Programming & Practice",
    items: [
      { name: "LeetCode", url: "https://leetcode.com" },
      { name: "HackerRank", url: "https://www.hackerrank.com" },
      { name: "CodeChef", url: "https://www.codechef.com" },
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" },
      { name: "W3Schools", url: "https://www.w3schools.com" },
    ],
  },
  {
    category: "Career & Jobs",
    items: [
      { name: "Naukri.com", url: "https://www.naukri.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com" },
      { name: "Indeed", url: "https://www.indeed.co.in" },
      { name: "Glassdoor", url: "https://www.glassdoor.co.in" },
    ],
  },
  {
    category: "Government Portals",
    items: [
      { name: "Digital Gujarat", url: "https://digitalgujarat.gov.in" },
      { name: "Skill India", url: "https://www.skillindia.gov.in" },
      { name: "National Scholarship Portal", url: "https://scholarships.gov.in" },
      { name: "e-Governance Gujarat", url: "https://www.gujaratindia.gov.in" },
    ],
  },
];

const Links = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">🔗 Useful Links</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Quick access to important websites for learning, career, and academics.
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {links.map((category) => (
              <Card key={category.category}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">{category.category}</h3>
                  <div className="space-y-3">
                    {category.items.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <span className="text-sm">{link.name}</span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
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

export default Links;