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
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function ExplorePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sample content data - in a real app, this would come from your database
  const featuredContent = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      creator: "Dr. Sarah Johnson",
      thumbnail:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      duration: "45:22",
      views: "12.5k",
      category: "Technology",
      tags: ["AI", "Data Science", "Programming"],
    },
    {
      id: 2,
      title: "Financial Markets Explained",
      creator: "Michael Chen",
      thumbnail:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      duration: "32:15",
      views: "8.2k",
      category: "Finance",
      tags: ["Investing", "Economics", "Markets"],
    },
    {
      id: 3,
      title: "The Art of Public Speaking",
      creator: "Emma Rodriguez",
      thumbnail:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      duration: "28:47",
      views: "15.3k",
      category: "Personal Development",
      tags: ["Communication", "Leadership", "Confidence"],
    },
    {
      id: 4,
      title: "Web Development Fundamentals",
      creator: "Alex Turner",
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      duration: "52:10",
      views: "23.7k",
      category: "Technology",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 5,
      title: "Introduction to Psychology",
      creator: "Dr. Maya Patel",
      thumbnail:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      duration: "41:33",
      views: "19.1k",
      category: "Academic",
      tags: ["Psychology", "Mental Health", "Human Behavior"],
    },
    {
      id: 6,
      title: "Digital Marketing Strategies",
      creator: "James Wilson",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      duration: "36:58",
      views: "10.8k",
      category: "Business",
      tags: ["Marketing", "Social Media", "SEO"],
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Business",
    "Academic",
    "Arts",
    "Personal Development",
    "Finance",
  ];

  // Sample trending content
  const trendingContent = [
    {
      id: 7,
      title: "Advanced AI Techniques for Beginners",
      creator: "Dr. Alan Turing",
      thumbnail:
        "https://images.unsplash.com/photo-1677442135136-760c813770c6?w=800&q=80",
      duration: "38:15",
      views: "45.2k",
      category: "Technology",
      tags: ["AI", "Machine Learning", "Neural Networks"],
    },
    {
      id: 8,
      title: "Sustainable Business Practices",
      creator: "Emma Green",
      thumbnail:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      duration: "27:40",
      views: "32.8k",
      category: "Business",
      tags: ["Sustainability", "ESG", "Green Business"],
    },
    {
      id: 9,
      title: "Quantum Computing Explained",
      creator: "Dr. Richard Feynman",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      duration: "42:18",
      views: "28.3k",
      category: "Technology",
      tags: ["Quantum", "Computing", "Physics"],
    },
  ];

  // Sample personalized recommendations
  const personalizedRecommendations = user
    ? [
        {
          id: 10,
          title: "Advanced React Patterns",
          creator: "Jane Developer",
          thumbnail:
            "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
          duration: "35:42",
          views: "18.9k",
          category: "Technology",
          tags: ["React", "JavaScript", "Web Development"],
        },
        {
          id: 11,
          title: "Data Visualization Techniques",
          creator: "Mark Analyst",
          thumbnail:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          duration: "29:15",
          views: "14.2k",
          category: "Technology",
          tags: ["Data Science", "Visualization", "Analytics"],
        },
        {
          id: 12,
          title: "Effective Leadership Skills",
          creator: "Lisa Manager",
          thumbnail:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
          duration: "33:27",
          views: "21.6k",
          category: "Business",
          tags: ["Leadership", "Management", "Team Building"],
        },
      ]
    : [];

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
    },
    {
      id: 14,
      title: "One-Minute Math: Solving Equations",
      creator: "Math Whiz",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      duration: "1:05",
      views: "38.7k",
    },
    {
      id: 15,
      title: "Quick Business Tip: Elevator Pitch",
      creator: "Startup Pro",
      thumbnail:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      duration: "0:47",
      views: "41.2k",
    },
    {
      id: 16,
      title: "Language Hack: Learn Any Word Fast",
      creator: "Polyglot Pete",
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
      duration: "1:12",
      views: "35.9k",
    },
    {
      id: 17,
      title: "Quick Science: How Lightning Works",
      creator: "Science Simplified",
      thumbnail:
        "https://images.unsplash.com/photo-1605003179269-c6bb9f5e7917?w=800&q=80",
      duration: "0:59",
      views: "47.5k",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Enhanced Search */}
        <section className="mb-12 animate-fade-in">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80')] bg-cover opacity-20 mix-blend-overlay"></div>

            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Discover Educational Content
              </h1>
              <p className="text-lg md:text-xl mb-6 text-blue-100">
                Explore thousands of videos from expert creators across various
                fields
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    placeholder="Search for topics, creators, or keywords"
                    className="pl-10 py-6 rounded-lg w-full bg-white/90 text-gray-800 placeholder:text-gray-500 border-0 focus-visible:ring-2 focus-visible:ring-blue-300"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                </div>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 py-6 px-6 rounded-lg font-medium">
                  Search
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-sm text-blue-100 mr-2">Popular searches:</p>
                <Badge
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  Machine Learning
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  Web Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  Data Science
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  Business Strategy
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-8 animate-fade-in animation-delay-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Browse Content</h2>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <ArrowUpDown className="h-4 w-4" />
                <span>Sort</span>
              </Button>
            </div>
          </div>

          <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`rounded-full px-4 whitespace-nowrap ${index === 0 ? "" : "hover:bg-gray-100"}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Short Videos Carousel */}
        <section className="mb-12 animate-fade-in animation-delay-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" /> Quick Learning
              <Badge
                variant="outline"
                className="ml-2 bg-blue-50 border-blue-100 text-blue-700"
              >
                NEW
              </Badge>
            </h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                id="carousel-prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                id="carousel-next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="carousel-container flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
              {shortVideos.map((video, index) => (
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Content Section */}
        <section className="mb-12 animate-fade-in animation-delay-300">
          <div className="flex items-center mb-6">
            <Flame className="h-6 w-6 text-orange-500 mr-2" />
            <h2 className="text-2xl font-bold">Trending Now</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingContent.map((content, index) => (
              <div
                key={content.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={content.thumbnail}
                    alt={content.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Flame className="h-3 w-3 mr-1" /> Trending
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
        </section>

        {/* Personalized Recommendations */}
        {user && personalizedRecommendations.length > 0 && (
          <section className="mb-12 animate-fade-in animation-delay-400">
            <div className="flex items-center mb-6">
              <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
              <h2 className="text-2xl font-bold">Recommended for You</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalizedRecommendations.map((content, index) => (
                <div
                  key={content.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={content.thumbnail}
                      alt={content.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
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
          </section>
        )}

        {/* Featured Content */}
        <section className="mb-12 animate-fade-in animation-delay-500">
          <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <div
                key={content.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={content.thumbnail}
                    alt={content.title}
                    className="w-full h-48 object-cover"
                  />
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
        </section>

        {/* Call to Action */}
        <section className="mb-12 animate-fade-in animation-delay-500">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Ready to share your knowledge?
            </h3>
            <p className="text-gray-600 mb-4">
              Join our community of educators and start earning rewards for your
              valuable content.
            </p>
            <div className="flex justify-center">
              <Link
                href={user ? "/dashboard" : "/sign-up"}
                className="inline-block"
              >
                <Button size="lg">
                  {user ? "Go to Dashboard" : "Become a Creator"}
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
