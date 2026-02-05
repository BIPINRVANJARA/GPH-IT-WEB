import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const academicEvents = {
  odd: [
    { date: "Jul 15, 2026", event: "Commencement of Odd Semester", type: "academic" },
    { date: "Aug 15, 2026", event: "Independence Day Celebration", type: "holiday" },
    { date: "Sep 01, 2026", event: "First Internal Exam", type: "exam" },
    { date: "Sep 15, 2026", event: "Technical Symposium", type: "event" },
    { date: "Oct 02, 2026", event: "Gandhi Jayanti", type: "holiday" },
    { date: "Oct 15, 2026", event: "Mid Semester Exam", type: "exam" },
    { date: "Nov 01, 2026", event: "Industrial Visit", type: "event" },
    { date: "Nov 15, 2026", event: "Project Submission (Sem 5)", type: "deadline" },
    { date: "Dec 01, 2026", event: "End Semester Exam Begins", type: "exam" },
    { date: "Dec 20, 2026", event: "Winter Vacation Begins", type: "holiday" },
  ],
  even: [
    { date: "Jan 10, 2026", event: "Commencement of Even Semester", type: "academic" },
    { date: "Jan 26, 2026", event: "Republic Day", type: "holiday" },
    { date: "Feb 15, 2026", event: "First Internal Exam", type: "exam" },
    { date: "Mar 01, 2026", event: "Technical Workshop Week", type: "event" },
    { date: "Mar 15, 2026", event: "Placement Drive", type: "placement" },
    { date: "Apr 01, 2026", event: "Mid Semester Exam", type: "exam" },
    { date: "Apr 15, 2026", event: "Project Exhibition", type: "event" },
    { date: "May 01, 2026", event: "End Semester Exam Begins", type: "exam" },
    { date: "May 20, 2026", event: "Result Declaration", type: "academic" },
    { date: "Jun 01, 2026", event: "Summer Vacation Begins", type: "holiday" },
  ],
};

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    academic: "bg-lavender text-primary-foreground",
    exam: "bg-destructive text-destructive-foreground",
    event: "bg-secondary text-secondary-foreground",
    holiday: "bg-accent text-accent-foreground",
    deadline: "bg-orange-500 text-white",
    placement: "bg-green-600 text-white",
  };
  return colors[type] || "bg-muted text-muted-foreground";
};

const AcademicCalendar = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Academic Calendar</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Important dates, exams, events, and holidays for the academic year 2026-27.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="py-6 bg-muted/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { type: "academic", label: "Academic" },
              { type: "exam", label: "Examination" },
              { type: "event", label: "Events" },
              { type: "holiday", label: "Holidays" },
              { type: "deadline", label: "Deadlines" },
              { type: "placement", label: "Placement" },
            ].map((item) => (
              <Badge key={item.type} className={getTypeColor(item.type)}>
                {item.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="odd" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="odd">Odd Semester (Jul-Dec)</TabsTrigger>
              <TabsTrigger value="even">Even Semester (Jan-Jun)</TabsTrigger>
            </TabsList>

            {Object.entries(academicEvents).map(([semester, events]) => (
              <TabsContent key={semester} value={semester}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      {semester === "odd" ? "Odd Semester 2026-27" : "Even Semester 2026"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {events.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-center min-w-[80px]">
                              <p className="text-sm font-semibold text-primary">{item.date.split(",")[0]}</p>
                              <p className="text-xs text-muted-foreground">{item.date.split(",")[1]}</p>
                            </div>
                            <p className="font-medium">{item.event}</p>
                          </div>
                          <Badge className={getTypeColor(item.type)}>
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default AcademicCalendar;