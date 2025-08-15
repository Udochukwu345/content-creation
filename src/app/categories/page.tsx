import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Search,
  Filter,
  ArrowUpDown,
  Tag,
  Flame,
  Sparkles,
  Clock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Layers,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function CategoriesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sample categories data
  const categories = [
    {
      id: 1,
      name: "Technology",
      icon: "laptop",
      count: 1250,
      color: "bg-blue-500",
      description:
        "Explore the latest in tech, programming, and digital innovation",
    },
    {
      id: 2,
      name: "Business",
      icon: "briefcase",
      count: 875,
      color: "bg-green-500",
      description:
        "Business strategies, entrepreneurship, and management skills",
    },
    {
      id: 3,
      name: "Academic",
      icon: "book",
      count: 1050,
      color: "bg-purple-500",
      description: "University-level courses and academic research topics",
    },
    {
      id: 4,
      name: "Arts",
      icon: "palette",
      count: 620,
      color: "bg-pink-500",
      description: "Creative arts, design, music, and artistic expression",
    },
    {
      id: 5,
      name: "Personal Development",
      icon: "user",
      count: 930,
      color: "bg-yellow-500",
      description: "Self-improvement, productivity, and personal growth",
    },
    {
      id: 6,
      name: "Finance",
      icon: "dollar-sign",
      count: 780,
      color: "bg-teal-500",
      description: "Personal finance, investing, and financial literacy",
    },
    {
      id: 7,
      name: "Health & Wellness",
      icon: "heart",
      count: 845,
      color: "bg-red-500",
      description: "Physical health, mental wellbeing, and healthy living",
    },
    {
      id: 8,
      name: "Science",
      icon: "flask",
      count: 920,
      color: "bg-indigo-500",
      description: "Scientific discoveries, research, and STEM education",
    },
  ];

  // Sample short videos for carousel
  const shortVideos = [
    {
      id: 13,
      title: "Quick Tip: CSS Grid in 60 Seconds",
      creator: "CSS Master",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      duration: "0:58",
      views: "52.3k",
      category: "Technology",
    },
    {
      id: 14,
      title: "One-Minute Math: Solving Equations",
      creator: "Math Whiz",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      duration: "1:05",
      views: "38.7k",
      category: "Academic",
    },
    {
      id: 15,
      title: "Quick Business Tip: Elevator Pitch",
      creator: "Startup Pro",
      thumbnail:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      duration: "0:47",
      views: "41.2k",
      category: "Business",
    },
    {
      id: 16,
      title: "Language Hack: Learn Any Word Fast",
      creator: "Polyglot Pete",
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
      duration: "1:12",
      views: "35.9k",
      category: "Personal Development",
    },
    {
      id: 17,
      title: "Quick Science: How Lightning Works",
      creator: "Science Simplified",
      thumbnail:
        "https://images.unsplash.com/photo-1605003179269-c6bb9f5e7917?w=800&q=80",
      duration: "0:59",
      views: "47.5k",
      category: "Science",
    },
    {
      id: 18,
      title: "Finance in a Flash: Understanding ETFs",
      creator: "Money Mentor",
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      duration: "1:02",
      views: "33.6k",
      category: "Finance",
    },
    {
      id: 19,
      title: "Quick Art Tip: Color Theory Basics",
      creator: "Art Academy",
      thumbnail:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      duration: "0:51",
      views: "29.4k",
      category: "Arts",
    },
  ];

  // Sample personalized recommendations based on user interests
  const personalizedRecommendations = user
    ? [
        {
          id: 20,
          title: "Advanced React Patterns for Web Developers",
          creator: "Jane Developer",
          thumbnail:
            "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
          duration: "35:42",
          views: "18.9k",
          category: "Technology",
          tags: ["React", "JavaScript", "Web Development"],
        },
        {
          id: 21,
          title: "Data Visualization Techniques for Beginners",
          creator: "Mark Analyst",
          thumbnail:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          duration: "29:15",
          views: "14.2k",
          category: "Technology",
          tags: ["Data Science", "Visualization", "Analytics"],
        },
        {
          id: 22,
          title: "Effective Leadership Skills in Modern Workplace",
          creator: "Lisa Manager",
          thumbnail:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
          duration: "33:27",
          views: "21.6k",
          category: "Business",
          tags: ["Leadership", "Management", "Team Building"],
        },
        {
          id: 23,
          title: "Introduction to Quantum Computing",
          creator: "Dr. Richard Feynman",
          thumbnail:
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
          duration: "42:18",
          views: "28.3k",
          category: "Technology",
          tags: ["Quantum", "Computing", "Physics"],
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Category Search */}
        <section className="mb-12 animate-fade-in">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80')] bg-cover opacity-20 mix-blend-overlay"></div>

            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Browse by Categories
              </h1>
              <p className="text-lg md:text-xl mb-6 text-purple-100">
                Discover educational content organized by topics and interests
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    placeholder="Search for categories or topics"
                    className="pl-10 py-6 rounded-lg w-full bg-white/90 text-gray-800 placeholder:text-gray-500 border-0 focus-visible:ring-2 focus-visible:ring-purple-300"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                </div>
                <Button className="bg-white text-purple-600 hover:bg-purple-50 py-6 px-6 rounded-lg font-medium">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Short Videos Carousel */}
        <section className="mb-12 animate-fade-in animation-delay-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-purple-600" /> Quick Learning Bites
              <Badge
                variant="outline"
                className="ml-2 bg-purple-50 border-purple-100 text-purple-700"
              >
                NEW
              </Badge>
            </h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                id="short-videos-prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                id="short-videos-next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="short-videos-carousel flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
              {shortVideos.map((video) => (
                <div
                  key={video.id}
                  className="carousel-item flex-none w-64 snap-start bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 hover:bg-white"
                      >
                        Watch Now
                      </Button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm line-clamp-1">
                      {video.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-600 mt-1">
                      <span>{video.creator}</span>
                      <span className="mx-2">•</span>
                      <span>{video.views} views</span>
                    </div>
                    <div className="mt-2">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-purple-50 text-purple-700"
                      >
                        {video.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="mb-12 animate-fade-in animation-delay-300">
          <div className="flex items-center mb-6">
            <Layers className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold">All Categories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className={`h-2 ${category.color}`}></div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {category.count} courses
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 -mr-2"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personalized Recommendations */}
        {user && personalizedRecommendations.length > 0 && (
          <section className="mb-12 animate-fade-in animation-delay-400">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Sparkles className="h-6 w-6 text-amber-500 mr-2" />
                <h2 className="text-2xl font-bold">Recommended For You</h2>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  id="recommendations-prev"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  id="recommendations-next"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="recommendations-carousel flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
                {personalizedRecommendations.map((content) => (
                  <div
                    key={content.id}
                    className="carousel-item flex-none w-80 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative">
                      <img
                        src={content.thumbnail}
                        alt={content.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                        <Sparkles className="h-3 w-3 mr-1" /> For You
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {content.duration}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg line-clamp-2">
                          {content.title}
                        </h3>
                      </div>

                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <span>{content.creator}</span>
                        <span className="mx-2">•</span>
                        <span>{content.views} views</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        <Badge
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                        >
                          {content.category}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {content.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Popular Topics */}
        <section className="mb-12 animate-fade-in animation-delay-500">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold">Popular Topics</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Machine Learning",
              "Web Development",
              "Data Science",
              "Digital Marketing",
              "UX Design",
              "Mobile Development",
              "Cloud Computing",
              "Cybersecurity",
              "Blockchain",
              "Artificial Intelligence",
              "Business Strategy",
              "Product Management",
              "Leadership",
              "Finance",
              "Graphic Design",
              "Video Editing",
              "Photography",
              "Music Production",
              "3D Modeling",
              "Game Development",
            ].map((topic, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-white hover:bg-gray-50 text-gray-800 cursor-pointer"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12 animate-fade-in animation-delay-600">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-3">
              Ready to share your knowledge?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join our community of educators and start earning rewards for your
              valuable content. Create courses in your area of expertise and
              reach students worldwide.
            </p>
            <div className="flex justify-center">
              <Link
                href={user ? "/dashboard" : "/sign-up"}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                >
                  {user ? "Go to Creator Dashboard" : "Become a Creator"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
