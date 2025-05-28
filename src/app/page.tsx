import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  BookOpen,
  Tag,
  TrendingUp,
  Video,
  Wallet,
  Layers,
  Play,
  Award,
  ChevronRight,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section with Animation */}
      <section className="py-24 bg-white" id="explore">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our decentralized platform empowers creators to share educational
              content and earn rewards based on quality and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Video className="w-6 h-6" />,
                title: "Easy Video Upload",
                description:
                  "Simple interface for uploading and previewing your educational content",
              },
              {
                icon: <Tag className="w-6 h-6" />,
                title: "Smart Categorization",
                description:
                  "Powerful tagging system for educational content discovery",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Blockchain Rewards",
                description:
                  "Earn tokens based on content quality and popularity",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Creator Dashboard",
                description: "Track performance and earnings in real-time",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4 animate-bounce-subtle">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section with Animation */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community of creators and learners in just a few simple
              steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Video className="w-8 h-8 text-blue-600" />,
                title: "1. Create Content",
                description:
                  "Upload your educational videos with detailed metadata and learning tags",
              },
              {
                icon: <Play className="w-8 h-8 text-blue-600" />,
                title: "2. Engage Viewers",
                description:
                  "Learners watch, interact with, and rate your educational content",
              },
              {
                icon: <Wallet className="w-8 h-8 text-blue-600" />,
                title: "3. Earn Rewards",
                description:
                  "Receive blockchain tokens based on content quality and engagement",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-500 hover:scale-110 animate-pulse-glow">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "10K+", label: "Educational Videos" },
              { value: "5K+", label: "Content Creators" },
              { value: "1M+", label: "Monthly Viewers" },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2 animate-count-up animate-pulse-subtle">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section with Animation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of educational content
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <BookOpen className="w-6 h-6" />, name: "Academic" },
              { icon: <TrendingUp className="w-6 h-6" />, name: "Business" },
              { icon: <Layers className="w-6 h-6" />, name: "Technology" },
              { icon: <Video className="w-6 h-6" />, name: "Arts" },
              {
                icon: <Award className="w-6 h-6" />,
                name: "Personal Development",
              },
              { icon: <Wallet className="w-6 h-6" />, name: "Finance" },
            ].map((category, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer animate-fade-in animate-tilt"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-2 flex justify-center animate-spin-slow">
                  {category.icon}
                </div>
                <h3 className="text-sm sm:text-base font-medium">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>

          <div
            className="mt-8 text-center animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <Link href="/explore">
              <Button variant="outline" className="gap-2">
                Explore All Categories
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Preview */}
      <section
        className="py-16 bg-gray-50 animate-fade-in"
        style={{ animationDelay: "700ms" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Content</h2>
            <Link
              href="/explore"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View all
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Introduction to Machine Learning",
                creator: "Dr. Sarah Johnson",
                image:
                  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
                category: "Technology",
              },
              {
                title: "Financial Markets Explained",
                creator: "Michael Chen",
                image:
                  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
                category: "Finance",
              },
              {
                title: "The Art of Public Speaking",
                creator: "Emma Rodriguez",
                image:
                  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
                category: "Personal Development",
              },
            ].map((content, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-36 sm:h-48">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {content.category}
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-1">
                    {content.title}
                  </h3>
                  <p className="text-sm text-gray-600">{content.creator}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div
          className="container mx-auto px-4 text-center animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 animate-pulse-text">
            Ready to Share Your Knowledge?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of educators and start earning rewards for your
            valuable content.
          </p>
          <Link
            href={user ? "/dashboard" : "/sign-up"}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 animate-bounce-subtle"
          >
            {user ? "Go to Dashboard" : "Become a Creator"}
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
