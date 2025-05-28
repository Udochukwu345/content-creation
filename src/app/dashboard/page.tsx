import DashboardNavbar from "@/components/dashboard-navbar";
import {
  InfoIcon,
  UserCircle,
  Upload,
  BarChart3,
  Clock,
  Video,
  Award,
  Bookmark,
  Settings,
} from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Sample data for dashboard - in a real app, this would come from your database
  const recentVideos = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      views: 1245,
      likes: 89,
      date: "2023-10-15",
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      views: 876,
      likes: 62,
      date: "2023-10-10",
    },
    {
      id: 3,
      title: "Database Design Fundamentals",
      views: 1532,
      likes: 104,
      date: "2023-10-05",
    },
  ];

  const earnings = {
    total: 1250.75,
    thisMonth: 320.5,
    pending: 75.25,
    history: [
      { month: "Oct", amount: 320.5 },
      { month: "Sep", amount: 285.75 },
      { month: "Aug", amount: 310.25 },
      { month: "Jul", amount: 265.0 },
      { month: "Jun", amount: 215.5 },
      { month: "May", amount: 180.75 },
    ],
  };

  const stats = [
    { label: "Total Videos", value: "12", icon: <Video className="h-4 w-4" /> },
    {
      label: "Total Views",
      value: "24.5K",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      label: "Watch Time",
      value: "1,245 hrs",
      icon: <Clock className="h-4 w-4" />,
    },
    {
      label: "Rewards Earned",
      value: "$1,250",
      icon: <Award className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <DashboardNavbar />
      <main className="w-full bg-gray-50 min-h-screen pb-12">
        <div className="container mx-auto px-4 py-8">
          {/* Welcome Section with Animation */}
          <div className="animate-fade-in-up">
            <header className="flex flex-col gap-4 mb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Creator Dashboard</h1>
                <Button className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Upload New Video
                </Button>
              </div>
              <div className="bg-blue-50 border border-blue-100 text-sm p-3 px-4 rounded-lg text-blue-700 flex gap-2 items-center">
                <InfoIcon size="14" />
                <span>
                  Welcome back! You have 3 new video views since yesterday.
                </span>
              </div>
            </header>
          </div>

          {/* Stats Overview with Animation */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Content Management */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tabs Section with Animation */}
              <Card
                className="border-none shadow-sm animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <CardHeader className="pb-2">
                  <CardTitle>Your Content</CardTitle>
                  <CardDescription>
                    Manage and analyze your educational videos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="recent">
                    <TabsList className="mb-4">
                      <TabsTrigger value="recent">Recent</TabsTrigger>
                      <TabsTrigger value="popular">Popular</TabsTrigger>
                      <TabsTrigger value="drafts">Drafts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="recent" className="space-y-4">
                      {recentVideos.map((video) => (
                        <div
                          key={video.id}
                          className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded">
                              <Video className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">{video.title}</h4>
                              <p className="text-sm text-gray-500">
                                Uploaded on {video.date}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <BarChart3 className="h-4 w-4 text-gray-500" />
                              {video.views}
                            </span>
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full mt-2">
                        View All Videos
                      </Button>
                    </TabsContent>
                    <TabsContent value="popular">
                      <div className="p-4 text-center text-gray-500">
                        <p>Your most popular videos will appear here</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="drafts">
                      <div className="p-4 text-center text-gray-500">
                        <p>Your draft videos will appear here</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Analytics Preview with Animation */}
              <Card
                className="border-none shadow-sm animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>
                    View insights about your content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] bg-gray-50 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2">
                        Analytics visualization will appear here
                      </p>
                      <Button variant="outline" size="sm">
                        View Detailed Analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - User Profile & Earnings */}
            <div className="space-y-8">
              {/* User Profile Card with Animation */}
              <Card
                className="border-none shadow-sm animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <CardHeader className="pb-2">
                  <CardTitle>User Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <UserCircle size={64} className="text-primary mb-2" />
                    <h3 className="font-semibold text-xl">{user.email}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Creator since Oct 2023
                    </p>
                    <div className="flex gap-2 mb-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <Settings className="h-4 w-4" />
                        Edit Profile
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1"
                      >
                        <Bookmark className="h-4 w-4" />
                        Saved
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Earnings Card with Animation */}
              <Card
                className="border-none shadow-sm animate-fade-in-up"
                style={{ animationDelay: "500ms" }}
              >
                <CardHeader className="pb-2">
                  <CardTitle>Earnings</CardTitle>
                  <CardDescription>
                    Your reward tokens and earnings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">Total Earnings</p>
                      <p className="text-2xl font-bold">
                        ${earnings.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">This Month</p>
                      <p className="font-medium">
                        ${earnings.thisMonth.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">Pending</p>
                      <p className="font-medium">
                        ${earnings.pending.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Withdraw Earnings</Button>
                </CardFooter>
              </Card>

              {/* Quick Links Card with Animation */}
              <Card
                className="border-none shadow-sm animate-fade-in-up"
                style={{ animationDelay: "600ms" }}
              >
                <CardHeader className="pb-2">
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link
                      href="/explore"
                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <Video className="h-4 w-4 text-blue-600" />
                      <span>Explore Content</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <Upload className="h-4 w-4 text-blue-600" />
                      <span>Upload New Video</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <Settings className="h-4 w-4 text-blue-600" />
                      <span>Account Settings</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <Award className="h-4 w-4 text-blue-600" />
                      <span>Reward System</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
