import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Calculator, ClipboardCheck } from "lucide-react";

const AssessmentPolicy = () => {
  const assessmentComponents = [
    { component: "Theory Examination", weightage: "50%", description: "End semester written examination" },
    { component: "Practical Examination", weightage: "25%", description: "Lab work and practical assessment" },
    { component: "Internal Assessment", weightage: "15%", description: "Unit tests, quizzes, and assignments" },
    { component: "Continuous Evaluation", weightage: "10%", description: "Attendance, participation, and behavior" },
  ];

  return (
    <Layout>
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary">Assessment Policy</h1>
          <p className="mt-2 text-muted-foreground">
            Evaluation criteria and grading system
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <CardTitle>Theory Assessment</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                End semester examinations are conducted as per GTU guidelines.
                Question papers follow the prescribed syllabus with appropriate
                difficulty levels.
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-primary" />
                  <CardTitle>Practical Assessment</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Laboratory work is evaluated based on execution, viva-voce,
                and practical journal maintenance. Regular practical submissions
                are mandatory.
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                  <CardTitle>Internal Assessment</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Includes unit tests, surprise quizzes, assignments, and class
                participation. Helps in continuous evaluation of student progress.
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Assessment Weightage Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Weightage</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assessmentComponents.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.component}</TableCell>
                      <TableCell className="text-primary font-semibold">{item.weightage}</TableCell>
                      <TableCell className="text-muted-foreground">{item.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="mt-8 border-secondary/30 bg-secondary/5">
            <CardHeader>
              <CardTitle>Passing Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>• Minimum 35% marks required in theory examination</p>
              <p>• Minimum 35% marks required in practical examination</p>
              <p>• Overall minimum 40% required to pass a subject</p>
              <p>• Minimum 75% attendance mandatory for appearing in examinations</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default AssessmentPolicy;
