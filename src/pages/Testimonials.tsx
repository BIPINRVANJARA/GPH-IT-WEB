import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Patel",
    batch: "2023-26",
    company: "TCS",
    testimonial: "The IT department provided me with excellent technical knowledge and practical skills. The faculty's guidance and placement support helped me secure a position at TCS. I'm grateful for the foundation they gave me.",
    image: null,
  },
  {
    id: 2,
    name: "Priya Shah",
    batch: "2022-25",
    company: "Infosys",
    testimonial: "Best decision of my life was joining GP Himatnagar's IT department. The curriculum is industry-aligned, and the teachers go above and beyond to help students. The lab facilities are excellent for hands-on learning.",
    image: null,
  },
  {
    id: 3,
    name: "Amit Kumar",
    batch: "2021-24",
    company: "Wipro",
    testimonial: "The department's focus on practical training and projects helped me become job-ready. The mentoring system ensured personalized attention for every student. Highly recommend this institute.",
    image: null,
  },
  {
    id: 4,
    name: "Sneha Desai",
    batch: "2020-23",
    company: "Tech Mahindra",
    testimonial: "The workshops, expert lectures, and industrial visits organized by the department gave us real-world exposure. The placement cell worked tirelessly to bring good companies to campus.",
    image: null,
  },
  {
    id: 5,
    name: "Vikram Singh",
    batch: "2019-22",
    company: "Cognizant",
    testimonial: "From coding fundamentals to advanced technologies, the IT department covered everything. The project-based learning approach helped me develop problem-solving skills that are invaluable in my career.",
    image: null,
  },
  {
    id: 6,
    name: "Neha Sharma",
    batch: "2018-21",
    company: "Simform",
    testimonial: "The supportive environment and quality education at GP Himatnagar shaped my career. The soft skills training and interview preparation were crucial for my placement success.",
    image: null,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Hear what our alumni have to say about their experience at IT Department.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{item.testimonial}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-primary-foreground font-semibold">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Batch {item.batch} • {item.company}
                      </p>
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

export default Testimonials;