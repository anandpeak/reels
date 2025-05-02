
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  
  const { toast } = useToast();
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved.",
    });
  };
  
  const handleSavePreferences = () => {
    toast({
      title: "Preferences Updated",
      description: "Your preferences have been saved.",
    });
  };
  
  const handleCancelSubscription = () => {
    toast({
      title: "Action Required",
      description: "This will open your subscription management page.",
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Settings</h1>
          
          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
            </TabsList>
            
            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information and how others see you on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-picture">Profile Picture</Label>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-xl font-medium text-muted-foreground">
                        {name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <Button variant="outline">Change</Button>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={handleSaveProfile}>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Preferences Settings */}
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>
                    Customize how the application works for you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email updates about your reels and account
                      </p>
                    </div>
                    <Switch 
                      id="email-notifications" 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Switch between light and dark theme
                      </p>
                    </div>
                    <Switch 
                      id="dark-mode" 
                      checked={darkMode} 
                      onCheckedChange={setDarkMode} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="auto-save">Auto Save</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically save your drafts while working
                      </p>
                    </div>
                    <Switch 
                      id="auto-save" 
                      checked={autoSave} 
                      onCheckedChange={setAutoSave} 
                    />
                  </div>
                  <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline">Reset to Default</Button>
                    <Button onClick={handleSavePreferences}>Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Subscription Settings */}
            <TabsContent value="subscription">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Management</CardTitle>
                  <CardDescription>
                    Manage your current subscription plan and billing information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Current Plan: Pro</h3>
                        <p className="text-sm text-muted-foreground">$19.99/month</p>
                      </div>
                      <div className="px-2 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded-full">
                        Active
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      Next billing date: May 15, 2025
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Payment Method</h3>
                    <div className="flex items-center space-x-4 p-4 border rounded-md">
                      <div className="bg-muted h-8 w-12 rounded flex items-center justify-center text-xs font-medium">
                        VISA
                      </div>
                      <div>
                        <p>Visa ending in 4242</p>
                        <p className="text-xs text-muted-foreground">Expires 12/24</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Update
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Plan Options</h3>
                    <Button variant="outline" asChild className="w-full">
                      <a href="/pricing">Change Plan</a>
                    </Button>
                    <Button 
                      variant="destructive" 
                      className="w-full"
                      onClick={handleCancelSubscription}
                    >
                      Cancel Subscription
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
