import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardList, FileText, Loader2, ExternalLink, Download } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";

const Assignment = () => {
    const { data: assignments, isLoading } = useQuery({
        queryKey: ["assignments"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("assignments")
                .select("*")
                .eq("is_published", true)
                .order("due_date", { ascending: true });

            if (error) throw error;
            return data;
        },
    });

    // Group by semester
    const assignmentsBySemester = assignments?.reduce((acc: any, item: any) => {
        const sem = item.semester || 0;
        if (!acc[sem]) {
            acc[sem] = [];
        }
        acc[sem].push(item);
        return acc;
    }, {} as Record<number, any[]>) || {};

    const semesters = Object.keys(assignmentsBySemester).map(Number).sort((a, b) => a - b);

    return (
        <Layout>
            <SEO
                title="Assignments"
                description="View and download assignments for all semesters."
                keywords="Assignments, Homework, Submission, IP Department"
            />
            {/* Hero */}
            <section className="gradient-primary py-16 text-primary-foreground">
                <div className="container">
                    <h1 className="text-4xl font-bold mb-4">Assignments</h1>
                    <p className="text-lg opacity-90 max-w-2xl">
                        Access subject-wise assignments and submission deadlines.
                    </p>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-8 bg-muted/50">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-3">
                            <ClipboardList className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-bold">{assignments?.length || 0}</p>
                                <p className="text-sm text-muted-foreground">Assignments</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FileText className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-bold">{semesters.length}</p>
                                <p className="text-sm text-muted-foreground">Semesters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assignments by Semester */}
            <section className="py-16">
                <div className="container">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : semesters.length > 0 ? (
                        <Tabs defaultValue={semesters[0].toString()} className="space-y-8">
                            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center">
                                {semesters.map((semester) => (
                                    <TabsTrigger
                                        key={semester}
                                        value={semester.toString()}
                                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
                                    >
                                        Semester {semester}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {semesters.map((semester) => (
                                <TabsContent key={semester} value={semester.toString()}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <ClipboardList className="h-5 w-5 text-primary" />
                                                Semester {semester} Assignments
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                                {assignmentsBySemester[semester]?.map((item: any) => (
                                                    <div
                                                        key={item.id}
                                                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                                                    >
                                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                                            <FileText className="h-5 w-5 text-muted-foreground shrink-0" />
                                                            <div className="min-w-0">
                                                                <p className="font-medium truncate">{item.title}</p>
                                                                <div className="flex items-center gap-2 mt-1">
                                                                    <Badge variant="secondary" className="text-xs">
                                                                        {item.subject}
                                                                    </Badge>
                                                                    {item.due_date && (
                                                                        <span className="text-xs text-red-500 font-medium">
                                                                            Due: {new Date(item.due_date).toLocaleDateString()}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                asChild
                                                            >
                                                                <a
                                                                    href={item.file_url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <ExternalLink className="h-4 w-4" />
                                                                </a>
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                asChild
                                                            >
                                                                <a
                                                                    href={item.file_url}
                                                                    download
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <Download className="h-4 w-4" />
                                                                </a>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))}
                        </Tabs>
                    ) : (
                        <Card className="border-dashed">
                            <CardContent className="p-12 text-center">
                                <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-muted-foreground">
                                    No assignments posted yet. Please check back later.
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Note */}
                    <Card className="mt-8 border-primary/30 bg-lavender-light">
                        <CardContent className="p-6">
                            <p className="text-sm text-muted-foreground">
                                <strong>Note:</strong> Ensure you complete and submit assignments on time.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </Layout>
    );
};

export default Assignment;
