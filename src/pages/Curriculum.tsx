import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, FileText } from "lucide-react";

const semesters = [
  {
    id: "sem1",
    name: "Semester 1",
    subjects: [
      { code: "3300001", name: "Communication Skills - I", credits: 3, type: "Theory" },
      { code: "3300002", name: "Mathematics - I", credits: 4, type: "Theory" },
      { code: "3300003", name: "Physics", credits: 3, type: "Theory" },
      { code: "3310701", name: "Fundamentals of IT", credits: 4, type: "Theory" },
      { code: "3310702", name: "Programming in C", credits: 4, type: "Theory + Practical" },
      { code: "3300007", name: "Workshop Practice", credits: 2, type: "Practical" },
    ],
  },
  {
    id: "sem2",
    name: "Semester 2",
    subjects: [
      { code: "3320001", name: "Communication Skills - II", credits: 3, type: "Theory" },
      { code: "3320002", name: "Mathematics - II", credits: 4, type: "Theory" },
      { code: "3320003", name: "Chemistry", credits: 3, type: "Theory" },
      { code: "3310703", name: "Object Oriented Programming", credits: 4, type: "Theory + Practical" },
      { code: "3310704", name: "Digital Electronics", credits: 4, type: "Theory + Practical" },
      { code: "3310705", name: "Web Development", credits: 4, type: "Theory + Practical" },
    ],
  },
  {
    id: "sem3",
    name: "Semester 3",
    subjects: [
      { code: "3330701", name: "Data Structures", credits: 4, type: "Theory + Practical" },
      { code: "3330702", name: "Database Management System", credits: 4, type: "Theory + Practical" },
      { code: "3330703", name: "Computer Networks", credits: 4, type: "Theory + Practical" },
      { code: "3330704", name: "Operating Systems", credits: 4, type: "Theory" },
      { code: "3330705", name: "Java Programming", credits: 4, type: "Theory + Practical" },
    ],
  },
  {
    id: "sem4",
    name: "Semester 4",
    subjects: [
      { code: "3340701", name: "Python Programming", credits: 4, type: "Theory + Practical" },
      { code: "3340702", name: "Software Engineering", credits: 4, type: "Theory" },
      { code: "3340703", name: "Web Programming", credits: 4, type: "Theory + Practical" },
      { code: "3340704", name: "Linux Administration", credits: 4, type: "Theory + Practical" },
      { code: "3340705", name: "Mobile Application Development", credits: 4, type: "Theory + Practical" },
    ],
  },
  {
    id: "sem5",
    name: "Semester 5",
    subjects: [
      { code: "3350701", name: "Cloud Computing", credits: 4, type: "Theory + Practical" },
      { code: "3350702", name: "Cyber Security", credits: 4, type: "Theory" },
      { code: "3350703", name: "IoT and Embedded Systems", credits: 4, type: "Theory + Practical" },
      { code: "3350704", name: "Project - I", credits: 6, type: "Practical" },
      { code: "3350705", name: "Industrial Training", credits: 4, type: "Practical" },
    ],
  },
  {
    id: "sem6",
    name: "Semester 6",
    subjects: [
      { code: "3360701", name: "Artificial Intelligence", credits: 4, type: "Theory + Practical" },
      { code: "3360702", name: "Data Science", credits: 4, type: "Theory + Practical" },
      { code: "3360703", name: "Project - II", credits: 8, type: "Practical" },
      { code: "3360704", name: "Seminar", credits: 2, type: "Practical" },
      { code: "3360705", name: "Entrepreneurship", credits: 2, type: "Theory" },
    ],
  },
];

const Curriculum = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Curriculum</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Comprehensive 3-year Diploma in Information Technology program structure and syllabus.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-lavender-light">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3 Years</p>
                  <p className="text-sm text-muted-foreground">Program Duration</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-light">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">6 Semesters</p>
                  <p className="text-sm text-muted-foreground">Academic Structure</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-light">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">GTU</p>
                  <p className="text-sm text-muted-foreground">Affiliated University</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Semester-wise Curriculum */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Semester-wise Subjects</h2>
          
          <Tabs defaultValue="sem1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {semesters.map((sem) => (
                <TabsTrigger key={sem.id} value={sem.id}>
                  {sem.name.replace("Semester ", "Sem ")}
                </TabsTrigger>
              ))}
            </TabsList>

            {semesters.map((sem) => (
              <TabsContent key={sem.id} value={sem.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{sem.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-semibold">Code</th>
                            <th className="text-left py-3 px-4 font-semibold">Subject Name</th>
                            <th className="text-center py-3 px-4 font-semibold">Credits</th>
                            <th className="text-left py-3 px-4 font-semibold">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sem.subjects.map((subject) => (
                            <tr key={subject.code} className="border-b last:border-0 hover:bg-muted/50">
                              <td className="py-3 px-4 font-mono text-sm">{subject.code}</td>
                              <td className="py-3 px-4">{subject.name}</td>
                              <td className="py-3 px-4 text-center">{subject.credits}</td>
                              <td className="py-3 px-4">
                                <Badge variant={subject.type === "Practical" ? "secondary" : "outline"}>
                                  {subject.type}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default Curriculum;