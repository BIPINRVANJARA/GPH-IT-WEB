import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Edit, Eye, EyeOff } from "lucide-react";

export const AdminPlacementsSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [studentName, setStudentName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [pkg, setPkg] = useState(""); // package is a reserved keyword in some contexts, using pkg
    const [designation, setDesignation] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const { data: placements, isLoading } = useQuery({
        queryKey: ["admin-placements"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("placements")
                .select("*")
                .order("created_at", { ascending: false });
            if (error) throw error;
            return data;
        },
    });

    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            const { error } = await supabase.from("placements").insert([data]);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-placements"] });
            toast({ title: "Success", description: "Placement added successfully." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: any }) => {
            const { error } = await supabase.from("placements").update(data).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-placements"] });
            toast({ title: "Success", description: "Placement updated successfully." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("placements").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-placements"] });
            toast({ title: "Success", description: "Placement deleted." });
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const togglePublishMutation = useMutation({
        mutationFn: async ({ id, is_published }: { id: string; is_published: boolean }) => {
            const { error } = await supabase.from("placements").update({ is_published }).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-placements"] });
        },
    });

    const resetForm = () => {
        setStudentName("");
        setCompanyName("");
        setPkg("");
        setDesignation("");
        setImageUrl("");
        setYear(new Date().getFullYear());
        setEditingId(null);
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            student_name: studentName,
            company_name: companyName,
            package: pkg || undefined,
            designation: designation || undefined,
            image_url: imageUrl || undefined,
            year
        };

        if (editingId) {
            updateMutation.mutate({ id: editingId, data });
        } else {
            createMutation.mutate(data);
        }
    };

    const handleEdit = (item: any) => {
        setStudentName(item.student_name);
        setCompanyName(item.company_name);
        setPkg(item.package || "");
        setDesignation(item.designation || "");
        setImageUrl(item.image_url || "");
        setYear(item.year || new Date().getFullYear());
        setEditingId(item.id);
        setIsOpen(true);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Placements</CardTitle>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => resetForm()}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Placement
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingId ? "Edit Placement" : "Add Placement"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="studentName">Student Name</Label>
                                <Input
                                    id="studentName"
                                    value={studentName}
                                    onChange={(e) => setStudentName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="companyName">Company</Label>
                                    <Input
                                        id="companyName"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="pkg">Package (e.g. 5 LPA)</Label>
                                    <Input
                                        id="pkg"
                                        value={pkg}
                                        onChange={(e) => setPkg(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="designation">Designation</Label>
                                    <Input
                                        id="designation"
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="year">Year</Label>
                                    <Input
                                        id="year"
                                        type="number"
                                        value={year}
                                        onChange={(e) => setYear(parseInt(e.target.value))}
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
                ) : placements?.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No placements found.</p>
                ) : (
                    <div className="space-y-4">
                        {placements?.map((item) => (
                            <div key={item.id} className="flex items-start justify-between p-4 border rounded-lg">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold">{item.student_name}</h3>
                                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                                            {item.year}
                                        </span>
                                        {!item.is_published && (
                                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Draft</span>
                                        )}
                                    </div>
                                    <p className="text-sm mt-1">
                                        {item.designation && <span className="font-medium">{item.designation} at </span>}
                                        {item.company_name}
                                        {item.package && <span className="text-muted-foreground"> • {item.package}</span>}
                                    </p>
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
