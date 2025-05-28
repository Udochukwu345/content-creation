import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Search, Filter, ArrowUpDown, Tag } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
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

        {/* Content Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <div
                key={content.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${200 + index * 100}ms` }}
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
