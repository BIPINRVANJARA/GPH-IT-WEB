import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Book, Loader2, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
// import { supabase } from "@/integrations/supabase/client";

const LabManual = () => {
    const { data: manuals, isLoading } = useQuery({
        queryKey: ["lab-manuals"],
        queryFn: async () => {
            // Mock data for now
            return [];
        },
    });

    // Group by semester
    const manualsBySemester = manuals?.reduce((acc: any, item: any) => {
        const sem = item.semester || 0;
        if (!acc[sem]) {
            acc[sem] = [];
        }
        acc[sem].push(item);
        return acc;
    }, {} as Record<number, any[]>) || {};

    const semesters = Object.keys(manualsBySemester).map(Number).sort((a, b) => a - b);

    return (
        <Layout>
            {/* Hero */}
            <section className="gradient-primary py-16 text-primary-foreground">
                <div className="container">
                    <h1 className="text-4xl font-bold mb-4">Lab Manuals</h1>
                    <p className="text-lg opacity-90 max-w-2xl">
                        Download practical lab manuals and experiment lists.
                    </p>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-8 bg-muted/50">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-3">
                            <Book className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-bold">{manuals?.length || 0}</p>
                                <p className="text-sm text-muted-foreground">Manuals</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-bold">{semesters.length}</p>
                                <p className="text-sm text-muted-foreground">Semesters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manuals by Semester */}
            <section className="py-16">
                <div className="container">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : semesters.length > 0 ? (
                        <div className="space-y-8">
                            {semesters.map((semester) => (
                                <Card key={semester}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <BookOpen className="h-5 w-5 text-primary" />
                                            {semester === 0 ? "General" : `Semester ${semester}`}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                            {manualsBySemester[semester]?.map((item: any) => (
                                                <div
                                                    key={item.id}
                                                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                                                >
                                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                                        <Book className="h-5 w-5 text-muted-foreground shrink-0" />
                                                        <div className="min-w-0">
                                                            <p className="font-medium truncate">{item.title}</p>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <Badge variant="secondary" className="text-xs">
                                                                    {item.subject}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <Card className="border-dashed">
                            <CardContent className="p-12 text-center">
                                <Book className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-muted-foreground">
                                    No lab manuals published yet. Please check back later.
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Note */}
                    <Card className="mt-8 border-primary/30 bg-lavender-light">
                        <CardContent className="p-6">
                            <p className="text-sm text-muted-foreground">
                                <strong>Note:</strong> Perform experiments safely and follow all lab instructions.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </Layout>
    );
};

export default LabManual;
