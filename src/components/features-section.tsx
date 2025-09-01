import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, Briefcase, MessageSquare, Target, Globe, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Smart Matching",
    description: "AI-powered matching algorithm connects you with internships that fit your skills, interests, and career goals perfectly.",
    gradient: "from-primary to-primary-light"
  },
  {
    icon: Users,
    title: "Diverse Network",
    description: "Connect with students and professionals across the GCC region, building lasting relationships for your career.",
    gradient: "from-secondary to-secondary-light"
  },
  {
    icon: Briefcase,
    title: "Quality Opportunities",
    description: "Access exclusive internships from top companies across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Chat directly with recruiters and hiring managers. No more waiting - get instant feedback and updates.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Career Guidance",
    description: "Get personalized career advice, interview tips, and professional development resources tailored for GCC market.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Regional Focus",
    description: "Specialized platform understanding GCC culture, work environment, and regional career opportunities.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Verified Companies",
    description: "All companies are verified and vetted to ensure legitimate, quality internship experiences for students.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Quick Applications",
    description: "Apply to multiple internships with one-click using your saved profile. No repetitive form filling.",
    gradient: "from-yellow-500 to-orange-500"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Platform Features
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Launch Your Career
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why thousands of GCC students choose Linktern to find their dream internships 
            and build meaningful career connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" variant="cta" className="text-lg px-8 py-4">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  )
}