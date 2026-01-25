import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { UserPlus, ShieldAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const AdminSettingsSection = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCreateAdmin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Note: This will log the current user out and log them in as the new user
            // This is a client-side limitation of supabase.auth.signUp
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role: 'admin' // Optional: for future role based access
                    }
                }
            });

            if (error) throw error;

            toast({
                title: "Admin Created Successfully",
                description: "The new admin account has been created. You have been logged in as the new user.",
            });

            // Clear form
            setEmail("");
            setPassword("");

        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <UserPlus className="h-5 w-5" />
                        Create New Admin
                    </CardTitle>
                    <CardDescription>
                        Create a new administrator account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Alert className="mb-6 border-yellow-500/50 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                        <ShieldAlert className="h-4 w-4" />
                        <AlertTitle>Warning</AlertTitle>
                        <AlertDescription>
                            Creating a new account will automatically log you out and log you in as the new user.
                            You will need to log out and log back in to your main account afterwards.
                        </AlertDescription>
                    </Alert>

                    <form onSubmit={handleCreateAdmin} className="space-y-4 max-w-md">
                        <div className="space-y-2">
                            <Label htmlFor="admin-email">Email Address</Label>
                            <Input
                                id="admin-email"
                                type="email"
                                placeholder="new.admin@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="admin-password">Password</Label>
                            <Input
                                id="admin-password"
                                type="password"
                                placeholder="Minimum 6 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                            />
                        </div>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Creating..." : "Create Admin Account"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
