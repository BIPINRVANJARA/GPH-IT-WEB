import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Clock, Loader2, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { timetableData } from "@/data/timetableData";
import { TimetableGrid } from "@/components/TimetableGrid";

const Timetable = () => {
    const { data: timetables, isLoading } = useQuery({
        queryKey: ["timetables"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("timetables")
                .select("*")
                .eq("is_published", true)
                .order("semester", { ascending: true });

            if (error) throw error;
            return data;
        },
    });

    // Group timetables by semester
    const timetablesBySemester = timetables?.reduce((acc: any, item: any) => {
        const sem = item.semester || 0;
        if (!acc[sem]) {
            acc[sem] = [];
        }
        acc[sem].push(item);
        return acc;
    }, {} as Record<number, any[]>) || {};

    const staticSemesters = timetableData.map(t => t.semester);
    const dbSemesters = Object.keys(timetablesBySemester).map(Number);
    const allSemesters = Array.from(new Set([...staticSemesters, ...dbSemesters])).sort((a, b) => a - b);

    return (
        <Layout>
            <SEO
                title="Timetable"
                description="Check academic schedules and class timings for IP Department."
                keywords="Timetable, Schedule, Lectures, IP Department"
            />
            {/* Hero */}
            <section className="gradient-primary py-16 text-primary-foreground">
                <div className="container">
                    <h1 className="text-4xl font-bold mb-4">Timetable</h1>
                    <p className="text-lg opacity-90 max-w-2xl">
                        Check the academic schedule and class timings for all semesters.
                    </p>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-8 bg-muted/50">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-3">
                            <Calendar className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-bold">{timetableData.length + (timetables?.length || 0)}</p>
                                <p className="text-sm text-muted-foreground">Schedules</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-bold">{allSemesters.length}</p>
                                <p className="text-sm text-muted-foreground">Semesters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timetables by Semester */}
            <section className="py-16">
                <div className="container">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : allSemesters.length > 0 ? (
                        <Tabs defaultValue={allSemesters[0].toString()} className="space-y-8">
                            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center">
                                {allSemesters.map((semester) => (
                                    <TabsTrigger
                                        key={semester}
                                        value={semester.toString()}
                                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
                                    >
                                        Semester {semester}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {allSemesters.map((semester) => {
                                const staticData = timetableData.find(t => t.semester === semester);
                                const dbItems = timetablesBySemester?.[semester] || [];

                                return (
                                    <TabsContent key={semester} value={semester.toString()} className="space-y-8">
                                        {/* Static Schedules (Grid) */}
                                        {staticData && (
                                            <div className="space-y-8 mb-8">
                                                {staticData.divisions.map((div) => (
                                                    <TimetableGrid
                                                        key={div.name}
                                                        division={div}
                                                        termDate={staticData.termDate}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {/* Database Downloads (PDFs) */}
                                        {dbItems.length > 0 && (
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2">
                                                        <Calendar className="h-5 w-5 text-primary" />
                                                        Downloadable Schedules
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                                        {dbItems.map((item: any) => (
                                                            <div
                                                                key={item.id}
                                                                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                                                            >
                                                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                                                    <Calendar className="h-5 w-5 text-muted-foreground shrink-0" />
                                                                    <div className="min-w-0">
                                                                        <p className="font-medium truncate">{item.title}</p>
                                                                        <div className="flex items-center gap-2 mt-1">
                                                                            {item.division && (
                                                                                <Badge variant="secondary" className="text-xs">
                                                                                    Div {item.division}
                                                                                </Badge>
                                                                            )}
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
                                        )}

                                        {!staticData && dbItems.length === 0 && (
                                            <p className="text-center text-muted-foreground py-8">
                                                No schedule available for this semester.
                                            </p>
                                        )}
                                    </TabsContent>
                                );
                            })}
                        </Tabs>
                    ) : (
                        <Card className="border-dashed">
                            <CardContent className="p-12 text-center">
                                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-muted-foreground">
                                    No timetables published yet. Please check back later.
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Note */}
                    <Card className="mt-8 border-primary/30 bg-lavender-light">
                        <CardContent className="p-6">
                            <p className="text-sm text-muted-foreground">
                                <strong>Note:</strong> Timetables are subject to change. Please check regularly for updates.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </Layout>
    );
};

export default Timetable;
