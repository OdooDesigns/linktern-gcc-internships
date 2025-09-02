import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/navigation';
import { ApplyModal } from '@/components/ApplyModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart,
  Calendar,
  Zap,
  LayoutGrid,
  List
} from 'lucide-react';

// Mock data for internships
const mockInternships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "NEOM Tech",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    duration: "3 months",
    salary: "5,000 SAR/month",
    description: "Join our innovative software engineering team and work on cutting-edge projects...",
    skills: ["React", "Node.js", "Python"],
    posted: "2 days ago",
    applications: 24,
    logo: "🏢"
  },
  {
    id: 2,
    title: "Digital Marketing Intern",
    company: "Saudi Aramco",
    location: "Dhahran, Saudi Arabia",
    type: "Part-time",
    duration: "6 months",
    salary: "4,000 SAR/month",
    description: "Support our digital marketing initiatives and gain hands-on experience...",
    skills: ["Digital Marketing", "Social Media", "Analytics"],
    posted: "5 days ago",
    applications: 18,
    logo: "⚡"
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "STC Group",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    duration: "4 months",
    salary: "5,500 SAR/month",
    description: "Work with our data science team to analyze customer behavior...",
    skills: ["Python", "Machine Learning", "SQL"],
    posted: "1 week ago",
    applications: 32,
    logo: "📊"
  },
  {
    id: 4,
    title: "UX Design Intern",
    company: "Careem",
    location: "Jeddah, Saudi Arabia",
    type: "Full-time",
    duration: "3 months",
    salary: "4,500 SAR/month",
    description: "Join our design team and help create amazing user experiences...",
    skills: ["Figma", "User Research", "Prototyping"],
    posted: "3 days ago",
    applications: 15,
    logo: "🎨"
  }
];

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');
  const [savedInternships, setSavedInternships] = useState<Set<number>>(new Set());
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<any>(null);

  const toggleSaveInternship = (internshipId: number) => {
    const newSaved = new Set(savedInternships);
    if (newSaved.has(internshipId)) {
      newSaved.delete(internshipId);
    } else {
      newSaved.add(internshipId);
    }
    setSavedInternships(newSaved);
  };

  const handleApply = (internship: any) => {
    setSelectedInternship(internship);
    setApplyModalOpen(true);
  };

  const filteredInternships = mockInternships.filter(internship =>
    internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Browse Internships</h1>
            <p className="text-muted-foreground">Discover amazing internship opportunities with top GCC companies</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card border rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by title, company, or skills..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location
                </Button>
                <Button variant="outline" size="sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Duration
                </Button>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              {filteredInternships.length} internship{filteredInternships.length !== 1 ? 's' : ''} found
            </p>
            <div className="flex gap-2">
              <Button 
                variant={viewMode === 'card' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('card')}
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                Cards
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          {/* Internships Grid */}
          <div className={`grid gap-6 ${viewMode === 'card' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredInternships.map((internship) => (
              <Link 
                key={internship.id} 
                to={`/internships/${internship.id}`}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all group relative block"
              >
                {/* Save Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSaveInternship(internship.id);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors z-10"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      savedInternships.has(internship.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`} 
                  />
                </button>

                {/* Company Logo */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                    {internship.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mb-1">
                      {internship.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">{internship.company}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {internship.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {internship.duration} • {internship.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    {internship.salary}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {internship.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {internship.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-xs text-muted-foreground">
                    {internship.posted} • {internship.applications} applications
                  </div>
                  <Button 
                    size="sm" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleApply(internship);
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Internships
            </Button>
          </div>
        </div>
      </main>

      {/* Apply Modal */}
      {selectedInternship && (
        <ApplyModal
          isOpen={applyModalOpen}
          onClose={() => setApplyModalOpen(false)}
          internship={selectedInternship}
        />
      )}
    </div>
  );
};

export default Internships;
