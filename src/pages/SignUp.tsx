import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Upload, Users, Building2 } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Link } from "react-router-dom";

type UserType = "student" | "company" | null;

const SignUp = () => {
  const [userType, setUserType] = useState<UserType>(null);

  const handleRoleSelect = (type: UserType) => {
    setUserType(type);
  };

  const handleBackToSelection = () => {
    setUserType(null);
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Join Linktern
            </h1>
            <p className="text-white/80 text-lg mb-12">
              Choose how you'd like to get started
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card 
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/10 backdrop-blur-sm border-white/20"
                onClick={() => handleRoleSelect("student")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-white text-2xl">I'm a Student</CardTitle>
                  <CardDescription className="text-white/70">
                    Find internships that match your skills and career goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full font-semibold">
                    Join as Student
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/10 backdrop-blur-sm border-white/20"
                onClick={() => handleRoleSelect("company")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">I'm an Employer</CardTitle>
                  <CardDescription className="text-white/70">
                    Connect with talented students and build your future team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="hero" className="w-full font-semibold">
                    Join as Employer
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-white/60 mt-8">
              Already have an account?{" "}
              <Link to="/signin" className="text-secondary hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Button 
              variant="ghost" 
              onClick={handleBackToSelection}
              className="text-white hover:bg-white/10 mb-4"
            >
              ← Back to selection
            </Button>
            <h1 className="text-3xl font-bold text-white mb-2">
              {userType === "student" ? "Join as a Student" : "Join as an Employer"}
            </h1>
            <p className="text-white/80">
              {userType === "student" 
                ? "Create your profile to start applying for internships"
                : "Connect with talented Saudi students and build your future team"
              }
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              {userType === "student" ? <StudentSignUpForm /> : <CompanySignUpForm />}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const StudentSignUpForm = () => {
  return (
    <form className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-white">First Name</Label>
            <Input id="firstName" placeholder="Enter your first name" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-white">Last Name</Label>
            <Input id="lastName" placeholder="Enter your last name" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input id="phone" placeholder="+966 5X XXX XXXX" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="Confirm your password" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Academic Information */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Academic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="university" className="text-white">University</Label>
            <Select>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select your university" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ksu">King Saud University</SelectItem>
                <SelectItem value="kfupm">King Fahd University</SelectItem>
                <SelectItem value="kau">King Abdulaziz University</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="major" className="text-white">Major/Field of Study</Label>
            <Input id="major" placeholder="e.g., Computer Science" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="graduation" className="text-white">Expected Graduation</Label>
            <Select>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="gpa" className="text-white">GPA (Optional)</Label>
            <Input id="gpa" placeholder="e.g., 3.75" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Professional Information */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Professional Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="bio" className="text-white">Bio</Label>
            <Textarea 
              id="bio" 
              placeholder="Tell us about yourself, your interests, and career goals..." 
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
            />
          </div>
          <div>
            <Label htmlFor="skills" className="text-white">Skills</Label>
            <Input id="skills" placeholder="e.g., Python, React, Data Analysis (comma-separated)" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkedin" className="text-white">LinkedIn Profile</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
            </div>
            <div>
              <Label htmlFor="portfolio" className="text-white">Portfolio/Website</Label>
              <Input id="portfolio" placeholder="https://yourportfolio.com" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Documents */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Documents</h3>
        <div className="space-y-4">
          <div>
            <Label className="text-white">Resume/CV</Label>
            <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-white/50 mb-2" />
              <p className="text-white/70">Click to upload your resume</p>
              <p className="text-white/50 text-sm">PDF, DOC, DOCX up to 10MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="secondary" size="lg" className="w-full font-semibold">
          Create Student Account
        </Button>
        <p className="text-white/60 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-secondary hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

const CompanySignUpForm = () => {
  return (
    <form className="space-y-8">
      {/* Company Information */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="companyName" className="text-white">Company Name</Label>
            <Input id="companyName" placeholder="Enter company name" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="industry" className="text-white">Industry</Label>
            <Select>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="energy">Energy</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="companySize" className="text-white">Company Size</Label>
            <Select>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-1000">201-1000 employees</SelectItem>
                <SelectItem value="1000+">1000+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="website" className="text-white">Company Website</Label>
            <Input id="website" placeholder="https://www.yourcompany.com" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="description" className="text-white">Company Description</Label>
            <Textarea 
              id="description" 
              placeholder="Tell us about your company, mission, and culture..." 
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
            />
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Contact Person */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Person</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName" className="text-white">Full Name</Label>
            <Input id="fullName" placeholder="Enter your full name" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="jobTitle" className="text-white">Job Title</Label>
            <Input id="jobTitle" placeholder="e.g., HR Manager" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input id="phone" placeholder="+966 11 XXX XXXX" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="Confirm your password" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Company Location */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Company Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="address" className="text-white">Address</Label>
            <Input id="address" placeholder="Street address" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="city" className="text-white">City</Label>
            <Select>
              <SelectTrigger className="bg-white/5 border-white/20 text-white">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="riyadh">Riyadh</SelectItem>
                <SelectItem value="jeddah">Jeddah</SelectItem>
                <SelectItem value="dammam">Dammam</SelectItem>
                <SelectItem value="mecca">Mecca</SelectItem>
                <SelectItem value="medina">Medina</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Social Media (Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="linkedin" className="text-white">LinkedIn Company Page</Label>
            <Input id="linkedin" placeholder="https://linkedin.com/company/yourcompany" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <div>
            <Label htmlFor="twitter" className="text-white">Twitter/X Profile</Label>
            <Input id="twitter" placeholder="https://twitter.com/yourcompany" className="bg-white/5 border-white/20 text-white placeholder:text-white/50" />
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Company Logo */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Company Logo</h3>
        <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-white/50 mb-2" />
          <p className="text-white/70">Click to upload your company logo</p>
          <p className="text-white/50 text-sm">PNG, JPG, SVG up to 5MB</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Button variant="hero" size="lg" className="w-full font-semibold">
          Create Company Account
        </Button>
        <p className="text-white/60 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-secondary hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;