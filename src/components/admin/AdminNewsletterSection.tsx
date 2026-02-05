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
import { Plus, Trash2, Edit, Eye, EyeOff, FileText } from "lucide-react";

export const AdminNewsletterSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [edition, setEdition] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [highlights, setHighlights] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const { data: newsletters, isLoading } = useQuery({
        queryKey: ["admin-newsletters"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("newsletters")
                .select("*")
                .order("publication_date", { ascending: false });
            if (error) throw error;
            return data;
        },
    });

    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            const { error } = await supabase.from("newsletters").insert([data]);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-newsletters"] });
            toast({ title: "Success", description: "Newsletter added successfully." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: any }) => {
            const { error } = await supabase.from("newsletters").update(data).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-newsletters"] });
            toast({ title: "Success", description: "Newsletter updated successfully." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("newsletters").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-newsletters"] });
            toast({ title: "Success", description: "Newsletter deleted." });
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const togglePublishMutation = useMutation({
        mutationFn: async ({ id, is_published }: { id: string; is_published: boolean }) => {
            const { error } = await supabase.from("newsletters").update({ is_published }).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-newsletters"] });
        },
    });

    const resetForm = () => {
        setTitle("");
        setEdition("");
        setPublicationDate("");
        setHighlights("");
        setFileUrl("");
        setEditingId(null);
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            title,
            edition,
            publication_date: publicationDate,
            highlights: highlights || undefined,
            file_url: fileUrl
        };

        if (editingId) {
            updateMutation.mutate({ id: editingId, data });
        } else {
            createMutation.mutate(data);
        }
    };

    const handleEdit = (item: any) => {
        setTitle(item.title);
        setEdition(item.edition);
        setPublicationDate(item.publication_date);
        setHighlights(item.highlights || "");
        setFileUrl(item.file_url);
        setEditingId(item.id);
        setIsOpen(true);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Newsletters</CardTitle>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => resetForm()}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Newsletter
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingId ? "Edit Newsletter" : "Add Newsletter"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="TechBytes - Winter 2025"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="edition">Edition</Label>
                                    <Input
                                        id="edition"
                                        value={edition}
                                        onChange={(e) => setEdition(e.target.value)}
                                        placeholder="Volume 5, Issue 4"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="date">Publication Date</Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={publicationDate}
                                        onChange={(e) => setPublicationDate(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="highlights">Highlights (comma separated)</Label>
                                <Textarea
                                    id="highlights"
                                    value={highlights}
                                    onChange={(e) => setHighlights(e.target.value)}
                                    placeholder="Student Achievements, Placement Updates"
                                />
                            </div>
                            <div>
                                <Label htmlFor="fileUrl">PDF URL</Label>
                                <Input
                                    id="fileUrl"
                                    value={fileUrl}
                                    onChange={(e) => setFileUrl(e.target.value)}
                                    placeholder="https://..."
                                    required
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
                ) : newsletters?.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No newsletters found.</p>
                ) : (
                    <div className="space-y-4">
                        {newsletters?.map((item) => (
                            <div key={item.id} className="flex items-start justify-between p-4 border rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-primary" />
                                        <h3 className="font-semibold">{item.title}</h3>
                                        {!item.is_published && (
                                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Draft</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {item.edition} • {new Date(item.publication_date).toLocaleDateString()}
                                    </p>
                                    {item.highlights && (
                                        <p className="text-xs text-muted-foreground mt-1">Highlights: {item.highlights}</p>
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
