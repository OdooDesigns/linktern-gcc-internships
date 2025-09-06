import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Building2, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import heroStudents from "@/assets/hero-students.jpg"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 fill-current" />
                #1 Internship Platform in GCC
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Connecting Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                The Cool & Clear Way
              </p>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Join thousands of GCC students finding amazing internships with top companies. 
                Your career journey starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" asChild className="text-lg px-8 py-4">
                <Link to="/internships" className="flex items-center gap-2">
                  Find Internships
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4">
                <Link to="/signup" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">2,500+</div>
                <div className="text-sm text-muted-foreground">Active Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">850+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">12K+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroStudents} 
                alt="Diverse students collaborating in modern workspace"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">15 New Matches</div>
                    <div className="text-xs text-muted-foreground">Today</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Tech Intern at NEOM</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Riyadh, Saudi Arabia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}