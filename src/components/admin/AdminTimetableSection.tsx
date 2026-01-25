import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Edit, Eye, EyeOff, Upload, Calendar, Download } from "lucide-react";

const semesters = [1, 2, 3, 4, 5, 6];
const divisions = ["A", "B", "C"];

export const AdminTimetableSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [division, setDivision] = useState("");
    const [semester, setSemester] = useState<string>("");
    const [fileUrl, setFileUrl] = useState("");
    const [uploading, setUploading] = useState(false);
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const { data: timetables, isLoading } = useQuery({
        queryKey: ["admin-timetables"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("timetables")
                .select("*")
                .order("created_at", { ascending: false });
            if (error) throw error;
            return data;
        },
    });

    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            const { error } = await supabase.from("timetables").insert([data]);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-timetables"] });
            toast({ title: "Success", description: "Timetable added." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: any }) => {
            const { error } = await supabase.from("timetables").update(data).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-timetables"] });
            toast({ title: "Success", description: "Timetable updated." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("timetables").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-timetables"] });
            toast({ title: "Success", description: "Timetable deleted." });
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const togglePublishMutation = useMutation({
        mutationFn: async ({ id, is_published }: { id: string; is_published: boolean }) => {
            const { error } = await supabase.from("timetables").update({ is_published }).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-timetables"] });
        },
    });

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
            .from("uploads")
            .upload(`timetables/${fileName}`, file);

        if (uploadError) {
            toast({ title: "Upload Error", description: uploadError.message, variant: "destructive" });
            setUploading(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage.from("uploads").getPublicUrl(`timetables/${fileName}`);
        setFileUrl(publicUrl);
        setUploading(false);
        toast({ title: "Success", description: "File uploaded successfully." });
    };

    const resetForm = () => {
        setTitle("");
        setDivision("");
        setSemester("");
        setFileUrl("");
        setEditingId(null);
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!fileUrl) {
            toast({ title: "Error", description: "Please upload a file.", variant: "destructive" });
            return;
        }

        const data = {
            title,
            division,
            semester: semester ? parseInt(semester) : null,
            file_url: fileUrl,
        };

        if (editingId) {
            updateMutation.mutate({ id: editingId, data });
        } else {
            createMutation.mutate(data);
        }
    };

    const handleEdit = (item: any) => {
        setTitle(item.title);
        setDivision(item.division || "");
        setSemester(item.semester?.toString() || "");
        setFileUrl(item.file_url);
        setEditingId(item.id);
        setIsOpen(true);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Timetables</CardTitle>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => resetForm()}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Timetable
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingId ? "Edit Timetable" : "Add Timetable"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="title">Title *</Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    placeholder="e.g., Sem 5 Timetable 2026"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="semester">Semester</Label>
                                    <Select value={semester} onValueChange={setSemester}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select semester" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {semesters.map((sem) => (
                                                <SelectItem key={sem} value={sem.toString()}>
                                                    Semester {sem}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="division">Division</Label>
                                    <Select value={division} onValueChange={setDivision}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select division" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {divisions.map((div) => (
                                                <SelectItem key={div} value={div}>
                                                    Division {div}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label>File</Label>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="file"
                                            onChange={handleFileUpload}
                                            disabled={uploading}
                                            className="hidden"
                                            id="timetable-upload"
                                        />
                                        <Label htmlFor="timetable-upload" className="cursor-pointer">
                                            <Button type="button" variant="outline" disabled={uploading} asChild>
                                                <span>
                                                    <Upload className="h-4 w-4 mr-2" />
                                                    {uploading ? "Uploading..." : "Upload File"}
                                                </span>
                                            </Button>
                                        </Label>
                                    </div>
                                    {fileUrl && (
                                        <p className="text-xs text-muted-foreground truncate">📎 {fileUrl}</p>
                                    )}
                                </div>
                            </div>
                            <Button type="submit" className="w-full">
                                {editingId ? "Update" : "Add Timetable"}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <p className="text-muted-foreground">Loading...</p>
                ) : timetables?.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No timetables found.</p>
                ) : (
                    <div className="space-y-3">
                        {timetables?.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Calendar className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-medium">{item.title}</h3>
                                            {!item.is_published && (
                                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Draft</span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            {item.semester && <span>Sem {item.semester}</span>}
                                            {item.division && <span>• Div {item.division}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href={item.file_url} target="_blank" rel="noopener noreferrer">
                                            <Download className="h-4 w-4" />
                                        </a>
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => togglePublishMutation.mutate({ id: item.id, is_published: !item.is_published })}
                                    >
                                        {item.is_published ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => deleteMutation.mutate(item.id)}
                                    >
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
