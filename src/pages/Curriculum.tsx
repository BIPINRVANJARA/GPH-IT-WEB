import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface Subject {
  code: string;
  name: string;
  category: string;
  l: number;
  t: number;
  p: number;
  totalCredit: number;
  e: number;
  m: number;
  i: number;
  v: number;
  totalMarks: number;
}

interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

const semesters: Semester[] = [
  {
    id: "sem1",
    name: "Semester 1",
    subjects: [
      { code: "DI01000011", name: "Induction Programme with Essence of Indian Knowledge", category: "Audit Course", l: 1, t: 0, p: 0, totalCredit: 0, e: 0, m: 0, i: 0, v: 0, totalMarks: 0 },
      { code: "DI01000021", name: "Mathematics-I", category: "Basic Science", l: 3, t: 1, p: 0, totalCredit: 4, e: 70, m: 30, i: 0, v: 0, totalMarks: 100 },
      { code: "DI01000031", name: "Communication Skills in English", category: "Humanities", l: 2, t: 0, p: 2, totalCredit: 3, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI01000041", name: "Sports and Yoga", category: "Audit Course", l: 0, t: 0, p: 2, totalCredit: 0, e: 0, m: 0, i: 50, v: 0, totalMarks: 50 },
      { code: "DI01000071", name: "Engineering Chemistry", category: "Basic Science", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI01016011", name: "Python Programming", category: "Professional Core", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI01016021", name: "Introduction to I.T. Systems", category: "Engineering Science", l: 2, t: 0, p: 2, totalCredit: 3, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI01016031", name: "Web Development using PHP", category: "Engineering Science", l: 0, t: 1, p: 4, totalCredit: 3, e: 0, m: 0, i: 20, v: 30, totalMarks: 50 },
    ],
  },
  {
    id: "sem2",
    name: "Semester 2",
    subjects: [
      { code: "DI01000061", name: "Modern Physics", category: "Basic Science", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI02000011", name: "Applied Mathematics", category: "Basic Science", l: 3, t: 1, p: 0, totalCredit: 4, e: 70, m: 30, i: 0, v: 0, totalMarks: 100 },
      { code: "DI02000051", name: "Environmental Sustainability", category: "Engineering Science", l: 2, t: 0, p: 0, totalCredit: 2, e: 70, m: 30, i: 0, v: 0, totalMarks: 100 },
      { code: "DI02000061", name: "Indian Constitution", category: "Audit Course", l: 2, t: 0, p: 0, totalCredit: 0, e: 0, m: 0, i: 50, v: 0, totalMarks: 50 },
      { code: "DI02000131", name: "Contributor Personality Development", category: "Humanities", l: 2, t: 0, p: 2, totalCredit: 3, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI02000151", name: "Essence of Indian Knowledge and Tradition", category: "Humanities", l: 3, t: 0, p: 0, totalCredit: 3, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI02016011", name: "Advanced Python Programming", category: "Professional Core", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI02016021", name: "Fundamentals of Software Development", category: "Engineering Science", l: 3, t: 0, p: 0, totalCredit: 3, e: 70, m: 30, i: 0, v: 0, totalMarks: 100 },
    ],
  },
  {
    id: "sem3",
    name: "Semester 3",
    subjects: [
      { code: "DI03016011", name: "Digital Marketing", category: "Engineering Science", l: 2, t: 0, p: 2, totalCredit: 3, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI03016021", name: "Cryptography and Web Security", category: "Professional Core", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI03016031", name: "Data Structures with Python", category: "Professional Core", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI03016041", name: "Database Management", category: "Professional Core", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI03016051", name: "Object Oriented Programming with JAVA", category: "Professional Core", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI03016061", name: "Operating Systems", category: "Professional Core", l: 2, t: 0, p: 2, totalCredit: 3, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
    ],
  },
  {
    id: "sem4",
    name: "Semester 4",
    subjects: [
      { code: "DI04000081", name: "Entrepreneurship & Start-up", category: "Elective", l: 3, t: 0, p: 0, totalCredit: 3, e: 70, m: 30, i: 0, v: 0, totalMarks: 100 },
      { code: "DI04000141", name: "Human Resources Management", category: "Elective", l: 3, t: 0, p: 0, totalCredit: 3, e: 70, m: 30, i: 0, v: 0, totalMarks: 100 },
      { code: "DI04000291", name: "Industry 4.0", category: "Elective", l: 3, t: 0, p: 0, totalCredit: 3, e: 70, m: 30, i: 0, v: 0, totalMarks: 100 },
      { code: "DI04016011", name: "Mobile Computing and Networks", category: "Professional Core", l: 3, t: 1, p: 0, totalCredit: 4, e: 70, m: 30, i: 0, v: 0, totalMarks: 100 },
      { code: "DI04016021", name: "Cyber Security and Digital Forensics", category: "Professional Core", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI04016031", name: "Fundamental of Machine Learning", category: "Professional Core", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI04016041", name: "UI and UX Design", category: "Professional Core", l: 0, t: 2, p: 2, totalCredit: 3, e: 0, m: 0, i: 20, v: 30, totalMarks: 50 },
      { code: "DI04016051", name: "Mobile Application Development", category: "Elective - I", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI04016061", name: "Database Administration", category: "Elective - I", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI04016071", name: "Advanced Java Programming", category: "Elective - II", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
      { code: "DI04016081", name: "Data Mining and Warehousing", category: "Elective - II", l: 3, t: 0, p: 2, totalCredit: 4, e: 70, m: 30, i: 20, v: 30, totalMarks: 150 },
    ],
  },
];

const Curriculum = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-primary py-12 md:py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Curriculum</h1>
          <p className="text-base md:text-lg opacity-90 max-w-2xl">
            Information Technology Syllabus & Structure (With Effect from 2024-25)
          </p>
        </div>
      </section>

      {/* Semester-wise Curriculum */}
      <section className="py-12">
        <div className="container">

          <Tabs defaultValue="sem1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
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
                    <CardTitle className="flex items-center justify-between">
                      {sem.name}
                      <Badge variant="outline" className="ml-2 hidden sm:inline-flex">Detailed Syllabus</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-muted/50 border-b">
                            <th className="p-3 text-left font-semibold min-w-[100px]">Code</th>
                            <th className="p-3 text-left font-semibold min-w-[250px]">Subject Name</th>
                            <th className="p-3 text-center font-semibold min-w-[150px] border-l border-r bg-muted/60">
                              Teaching Scheme (Hours)
                              <div className="grid grid-cols-3 border-t mt-1 pt-1 text-xs">
                                <span>L</span>
                                <span>T</span>
                                <span>P</span>
                              </div>
                            </th>
                            <th className="p-3 text-center font-semibold min-w-[80px]">Credit</th>
                            <th className="p-3 text-center font-semibold min-w-[200px] border-l bg-muted/60">
                              Exam Scheme (Marks)
                              <div className="grid grid-cols-5 border-t mt-1 pt-1 text-xs gap-1">
                                <span>E</span>
                                <span>M</span>
                                <span>I</span>
                                <span>V</span>
                                <span className="font-bold">Total</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {sem.subjects.map((subject) => (
                            <tr key={subject.code} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                              <td className="p-3 font-mono text-xs">{subject.code}</td>
                              <td className="p-3 font-medium">
                                {subject.name}
                                <div className="text-xs text-muted-foreground font-normal mt-0.5">{subject.category}</div>
                              </td>
                              <td className="p-3 text-center border-l border-r">
                                <div className="grid grid-cols-3">
                                  <span>{subject.l}</span>
                                  <span>{subject.t}</span>
                                  <span>{subject.p}</span>
                                </div>
                              </td>
                              <td className="p-3 text-center font-bold bg-accent/5">{subject.totalCredit}</td>
                              <td className="p-3 text-center border-l bg-accent/5">
                                <div className="grid grid-cols-5 gap-1">
                                  <span>{subject.e}</span>
                                  <span>{subject.m}</span>
                                  <span>{subject.i}</span>
                                  <span>{subject.v}</span>
                                  <span className="font-bold">{subject.totalMarks}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground bg-muted/20 p-4 rounded-lg">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">L:</span> Lectures
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">T:</span> Tutorial
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">P:</span> Practical
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">E:</span> External Theory
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">M:</span> Internal Assessment
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">I:</span> Internal Viva/Submission
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold">V:</span> External Viva
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex items-center justify-center mt-12 gap-2 text-muted-foreground p-4 border rounded-lg bg-orange-50/50">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <p className="text-sm">Semester 5 and 6 are not available as per the new syllabus updates.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculum;