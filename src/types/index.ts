export interface StudentProfile {
  firstName: string;
  lastName: string;
  university: string;
  major: string;
  graduationYear: number;
  phone: string;
  location: string;
  skills: string[];
  bio: string;
  profileImage?: string;
}

export interface EmployerProfile {
  companyName: string;
  industry: string;
  companySize: string;
  website: string;
  description: string;
  location: string;
  contactPerson: string;
  phone: string;
  logo?: string;
}
