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
import { Plus, Trash2, Edit, Monitor, Wifi, Server, Users, BookOpen, Cpu, Building, Laptop } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const iconOptions = [
    { label: "Monitor", value: "Monitor", icon: Monitor },
    { label: "Wifi", value: "Wifi", icon: Wifi },
    { label: "Server", value: "Server", icon: Server },
    { label: "Users", value: "Users", icon: Users },
    { label: "BookOpen", value: "BookOpen", icon: BookOpen },
    { label: "Cpu", value: "Cpu", icon: Cpu },
    { label: "Building", value: "Building", icon: Building },
    { label: "Laptop", value: "Laptop", icon: Laptop },
];

export const AdminInfrastructureSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [count, setCount] = useState("");
    const [icon, setIcon] = useState("Monitor");
    const [description, setDescription] = useState("");
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const { data: facilities, isLoading } = useQuery({
        queryKey: ["admin-facilities"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("infrastructure_facilities")
                .select("*")
                .order("created_at", { ascending: true });
            if (error) throw error;
            return data;
        },
    });

    const createMutation = useMutation({
        mutationFn: async (data: any) => {
            const { error } = await supabase.from("infrastructure_facilities").insert([data]);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-facilities"] });
            toast({ title: "Success", description: "Facility added." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: any }) => {
            const { error } = await supabase.from("infrastructure_facilities").update(data).eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-facilities"] });
            toast({ title: "Success", description: "Facility updated." });
            resetForm();
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("infrastructure_facilities").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["admin-facilities"] });
            toast({ title: "Success", description: "Facility deleted." });
        },
        onError: (error: any) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const resetForm = () => {
        setName("");
        setCount("");
        setIcon("Monitor");
        setDescription("");
        setEditingId(null);
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = { name, count, icon, description };

        if (editingId) {
            updateMutation.mutate({ id: editingId, data });
        } else {
            createMutation.mutate(data);
        }
    };

    const handleEdit = (item: any) => {
        setName(item.name);
        setCount(item.count);
        setIcon(item.icon);
        setDescription(item.description || "");
        setEditingId(item.id);
        setIsOpen(true);
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Infrastructure Facilities</CardTitle>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={resetForm}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Facility
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingId ? "Edit Facility" : "Add Facility"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name">Facility Name</Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Smart Classrooms"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="count">Count/Value</Label>
                                <Input
                                    id="count"
                                    value={count}
                                    onChange={(e) => setCount(e.target.value)}
                                    placeholder="e.g. 5 or 100%"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="icon">Icon</Label>
                                <Select value={icon} onValueChange={setIcon}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select icon" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {iconOptions.map((opt) => (
                                            <SelectItem key={opt.value} value={opt.value}>
                                                <div className="flex items-center gap-2">
                                                    <opt.icon className="h-4 w-4" />
                                                    <span>{opt.label}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Short description"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                {editingId ? "Update" : "Add Facility"}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <p className="text-muted-foreground">Loading...</p>
                ) : facilities?.length === 0 ? (
                    <p className="text-center py-8 text-muted-foreground">No facilities added yet.</p>
                ) : (
                    <div className="space-y-4">
                        {facilities?.map((item: any) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        {(() => {
                                            const IconComponent = iconOptions.find(i => i.value === item.icon)?.icon || Monitor;
                                            return <IconComponent className="h-5 w-5 text-primary" />;
                                        })()}
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground">{item.count} • {item.description}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleEdit(item)}
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-destructive hover:text-destructive"
                                        onClick={() => deleteMutation.mutate(item.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
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
