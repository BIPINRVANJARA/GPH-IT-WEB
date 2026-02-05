import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Edit, Eye, EyeOff } from "lucide-react";

export const AdminProjectsSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [projectUrl, setProjectUrl] = useState("");
    const [teamMembers, setTeamMembers] = useState("");
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const { data: projects, isLoading } = useQuery({
        queryKey: ["admin-projects"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("student_projects")
                .select("*")
                .order("created_at", { ascending: false });
            if (error) throw error;
            return data;
        },
    });

    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            const { error } = await supabase.from("student_projects").insert([data]);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
            toast({ title: "Success", description: "Project added successfully." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: any }) => {
            const { error } = await supabase.from("student_projects").update(data).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
            toast({ title: "Success", description: "Project updated successfully." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("student_projects").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
            toast({ title: "Success", description: "Project deleted." });
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const togglePublishMutation = useMutation({
        mutationFn: async ({ id, is_published }: { id: string; is_published: boolean }) => {
            const { error } = await supabase.from("student_projects").update({ is_published }).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
        },
    });

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setImageUrl("");
        setProjectUrl("");
        setTeamMembers("");
        setYear(new Date().getFullYear());
        setEditingId(null);
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            title,
            description,
            image_url: imageUrl || undefined,
            project_url: projectUrl || undefined,
            team_members: teamMembers || undefined,
            year
        };

        if (editingId) {
            updateMutation.mutate({ id: editingId, data });
        } else {
            createMutation.mutate(data);
        }
    };

    const handleEdit = (item: any) => {
        setTitle(item.title);
        setDescription(item.description || "");
        setImageUrl(item.image_url || "");
        setProjectUrl(item.project_url || "");
        setTeamMembers(item.team_members || "");
        setYear(item.year || new Date().getFullYear());
        setEditingId(item.id);
        setIsOpen(true);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Student Projects</CardTitle>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => resetForm()}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Project
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingId ? "Edit Project" : "Add Project"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="year">Year</Label>
                                    <Input
                                        id="year"
                                        type="number"
                                        value={year}
                                        onChange={(e) => setYear(parseInt(e.target.value))}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="team">Team Members</Label>
                                    <Input
                                        id="team"
                                        value={teamMembers}
                                        onChange={(e) => setTeamMembers(e.target.value)}
                                        placeholder="e.g. John, Jane"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="imageUrl">Image URL</Label>
                                <Input
                                    id="imageUrl"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    placeholder="https://..."
                                />
                            </div>
                            <div>
                                <Label htmlFor="projectUrl">Project Link</Label>
                                <Input
                                    id="projectUrl"
                                    value={projectUrl}
                                    onChange={(e) => setProjectUrl(e.target.value)}
                                    placeholder="https://github.com/..."
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                {editingId ? "Update" : "Create"}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <p className="text-muted-foreground">Loading...</p>
                ) : projects?.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No projects found.</p>
                ) : (
                    <div className="space-y-4">
                        {projects?.map((item) => (
                            <div key={item.id} className="flex items-start justify-between p-4 border rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                                            {item.year}
                                        </span>
                                        {!item.is_published && (
                                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Draft</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
                                    {item.team_members && (
                                        <p className="text-xs text-muted-foreground mt-1">Team: {item.team_members}</p>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 ml-4">
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
