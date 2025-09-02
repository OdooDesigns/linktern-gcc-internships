import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navigation } from '@/components/navigation';
import { ApplyModal } from '@/components/ApplyModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Send,
  Bookmark,
  Share2,
  ExternalLink
} from 'lucide-react';

// Mock internship data
const mockInternships = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'NEOM Tech',
    companyLogo: '🏢',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-time',
    duration: '3 months',
    description: 'Join our innovative software engineering team and work on cutting-edge projects that will shape the future of technology in Saudi Arabia. You will collaborate with senior developers, participate in code reviews, and contribute to real-world applications that impact millions of users across the region.',
    requirements: [
      'Currently pursuing Computer Science, Software Engineering, or related field',
      'Strong foundation in JavaScript, HTML, and CSS',
      'Experience with React or other modern JavaScript frameworks',
      'Understanding of Git version control',
      'Problem-solving skills and attention to detail',
      'Good communication skills in English and Arabic'
    ],
    skills: ['React', 'Node.js', 'Python', 'Git', 'TypeScript'],
    salary: '5,000 SAR/month',
    posted: '2 days ago',
    deadline: 'February 15, 2024',
    applications: 24
  },
  {
    id: '2',
    title: 'Digital Marketing Intern',
    company: 'Saudi Aramco',
    companyLogo: '⚡',
    location: 'Dhahran, Saudi Arabia',
    type: 'Part-time',
    duration: '6 months',
    description: 'Support our digital marketing initiatives and gain hands-on experience with one of the world\'s leading energy companies. You will work on social media campaigns, content creation, and digital analytics.',
    requirements: [
      'Marketing, Business Administration, or Communications major',
      'Creative thinking and strong writing skills',
      'Basic understanding of social media platforms',
      'Analytical mindset with attention to detail',
      'Excellent communication skills',
      'Proficiency in Microsoft Office Suite'
    ],
    skills: ['Digital Marketing', 'Social Media', 'Analytics', 'Content Creation'],
    salary: '4,000 SAR/month',
    posted: '5 days ago',
    deadline: 'March 1, 2024',
    applications: 18
  },
  {
    id: '3',
    title: 'Data Science Intern',
    company: 'STC Group',
    companyLogo: '📊',
    location: 'Riyadh, Saudi Arabia',
    type: 'Full-time',
    duration: '4 months',
    description: 'Work with our data science team to analyze customer behavior and build predictive models. This role offers excellent exposure to machine learning and big data technologies.',
    requirements: [
      'Statistics, Data Science, Computer Science, or Mathematics background',
      'Experience with Python programming',
      'Basic understanding of machine learning concepts',
      'Knowledge of SQL for data manipulation',
      'Strong analytical and problem-solving skills',
      'Experience with data visualization tools'
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'Pandas'],
    salary: '5,500 SAR/month',
    posted: '1 week ago',
    deadline: 'February 25, 2024',
    applications: 32
  },
  {
    id: '4',
    title: 'UX Design Intern',
    company: 'Careem',
    companyLogo: '🎨',
    location: 'Jeddah, Saudi Arabia',
    type: 'Full-time',
    duration: '3 months',
    description: 'Join our design team and help create amazing user experiences for millions of users across the Middle East. You will work on mobile and web interfaces.',
    requirements: [
      'Design, Human-Computer Interaction, or related field',
      'Portfolio demonstrating UI/UX design skills',
      'Proficiency in design tools (Figma, Adobe XD, Sketch)',
      'Understanding of user research methodologies',
      'Knowledge of responsive web design principles',
      'Strong visual communication skills'
    ],
    skills: ['Figma', 'User Research', 'Prototyping', 'Adobe Creative Suite'],
    salary: '4,500 SAR/month',
    posted: '3 days ago',
    deadline: 'March 15, 2024',
    applications: 15
  }
];

const InternshipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  
  const internship = mockInternships.find(i => i.id === id);

  if (!internship) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto py-16 px-4 text-center max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">Internship Not Found</h1>
          <p className="text-muted-foreground mb-6">The internship you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/internships')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Internships
          </Button>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    setApplyModalOpen(true);
  };

  const handleSave = () => {
    // TODO: Implement save logic
    console.log('Save internship:', internship.id);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: internship.title,
        text: `Check out this internship opportunity at ${internship.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/internships')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Internships
        </Button>

        {/* Internship Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <Link to="/company/1" className="hover:opacity-80 transition-opacity">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-3xl cursor-pointer">
                    {internship.companyLogo}
                  </div>
                </Link>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">{internship.title}</h1>
                  <div className="flex items-center text-lg text-muted-foreground">
                    <Building2 className="w-5 h-5 mr-2" />
                    <Link to="/company/1" className="hover:underline">
                      {internship.company}
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {internship.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {internship.duration}
                    </span>
                    <Badge variant="secondary">
                      {internship.type}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={handleSave}>
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Internship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {internship.description}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {internship.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardHeader>
                <CardTitle>Apply for this position</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={handleApply} className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By applying, you agree to our terms and conditions
                </p>
              </CardContent>
            </Card>

            {/* Details */}
            <Card>
              <CardHeader>
                <CardTitle>Internship Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium">{internship.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type</span>
                    <Badge variant="outline">
                      {internship.type}
                    </Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Posted</span>
                    <span className="text-sm font-medium">{internship.posted}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Deadline</span>
                    <span className="text-sm font-medium text-destructive">
                      {internship.deadline}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Salary</span>
                    <span className="text-sm font-medium">
                      {internship.salary}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Applications</span>
                    <span className="text-sm font-medium">
                      {internship.applications} applied
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>About {internship.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                    {internship.companyLogo}
                  </div>
                  <div>
                    <h4 className="font-medium">{internship.company}</h4>
                    <p className="text-sm text-muted-foreground">Technology Company</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/company/${internship.id}`}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Company Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        internship={{
          id: internship.id,
          title: internship.title,
          company: internship.company,
          location: internship.location,
          type: internship.type,
          duration: internship.duration,
          salary: internship.salary,
          skills: internship.skills
        }}
      />
    </div>
  );
};

export default InternshipDetails;
