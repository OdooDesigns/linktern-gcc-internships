import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Link, useNavigate } from "react-router-dom"
import { GraduationCap, Building2, User, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getNavigationLinks = () => {
    if (!user) {
      // Public navigation
      return (
        <>
          <Link to="/internships" className="text-foreground/80 hover:text-foreground transition-colors">
            Browse Internships
          </Link>
          {/* <Link to="/companies" className="text-foreground/80 hover:text-foreground transition-colors">
            For Companies
          </Link> */}
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </>
      );
    }

    if (user.type === 'student') {
      // Student navigation
      return (
        <>
          <Link to="/internships" className="text-foreground/80 hover:text-foreground transition-colors">
            Browse Internships
          </Link>
          <Link to="/student/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/companies" className="text-foreground/80 hover:text-foreground transition-colors">
            Companies
          </Link>
        </>
      );
    } else {
      // Employer navigation
      return (
        <>
          <Link to="/employer/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/employer/post-job" className="text-foreground/80 hover:text-foreground transition-colors">
            Post New Internship
          </Link>
          <Link to="/employer/browse-talents" className="text-foreground/80 hover:text-foreground transition-colors">
            Browse Talents
          </Link>
        </>
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link to={user ? `/${user.type}/dashboard` : "/"} className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            LINKTERN
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {getNavigationLinks()}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {user ? (
            /* User Profile Dropdown */
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  {user.type === 'student' ? (
                    <GraduationCap className="h-4 w-4" />
                  ) : (
                    <Building2 className="h-4 w-4" />
                  )}
                  <span className="hidden sm:inline">{user.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to={`/${user.type}/profile`} className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            /* Auth Buttons */
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button variant="cta" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  )
}
