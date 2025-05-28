import Link from "next/link";
import { ArrowUpRight, Check, Video, Award, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70 animate-gradient-shift" />

      {/* Floating elements */}
      <div className="absolute hidden md:block">
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-float-slow" />
        <div className="absolute top-40 right-40 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-float-medium" />
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-green-500 rounded-full opacity-20 animate-float-fast" />
      </div>

      <div className="relative pt-16 pb-20 sm:pt-24 md:pt-32 sm:pb-32 md:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight animate-slide-up">
              Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-text">
                Educational
              </span>{" "}
              <br className="md:hidden" />
              Content & Earn Rewards
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
              Join our decentralized platform where creators upload educational
              videos and earn blockchain rewards based on content quality and
              popularity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 text-base sm:text-lg font-medium hover:scale-105 shadow-lg hover:shadow-blue-300/50"
              >
                Start Creating
                <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 animate-pulse-subtle" />
              </Link>

              <Link
                href="#explore"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 text-base sm:text-lg font-medium hover:scale-105 shadow hover:shadow-gray-300/50"
              >
                Explore Content
              </Link>
            </div>

            <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600 animate-fade-in-up">
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Video className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 animate-wiggle" />
                <span>Upload educational videos</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 animate-wiggle animation-delay-300" />
                <span>Earn blockchain rewards</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 animate-wiggle animation-delay-600" />
                <span>Share knowledge globally</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
