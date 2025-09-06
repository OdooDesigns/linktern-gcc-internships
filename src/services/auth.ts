import { supabase } from "@/lib/supabase"

export const authService = {

    signUp: async (userData) => {
        try {
            const {data: authData, error: authError} = await supabase.auth.signUp({email: userData.email, password: userData.password})
            
            //if the error returned which has been renamed to autherror is true then throw error
            if(authError) throw authError
            //capture the user id to use for profile creation
            const userId = authData.user.id

            //creation of profile
            const {error: profileErr} = await supabase.from('profiles').insert({id: userId, user_type: userData.userType})

            if(profileErr) throw profileErr

            //creation of either student or employer 
            if (userData.userType === 'student') {
                const {error: studentErr} = await supabase.from('students')
                .insert({user_id: userId, 
                        first_name: userData.firstName,
                        last_name: userData.lastName,
                        phone: userData.phone,
                        university: userData.university,
                        major: userData.major,
                        expected_graduation: userData.expectedGraduation,
                        gpa: userData.gpa,
                        bio: userData.bio,
                        skills: userData.skills,
                        linkedin_profile: userData.linkedinProfile,
                        portfolio_website: userData.portfolioWebsite,
                        cv_url: null,
                        city: userData.city || null,
                        country: userData.country || 'Saudi Arabia'
                })

                if(studentErr) throw studentErr
            } else if (userData.userType === 'employer') {
                const {data: companyData, error: companyErr} = await supabase.from('companies')
                .insert({user_id: userId,
                         company_name: userData.companyName,
                         industry: userData.industry,
                         company_size: userData.companySize,
                         website: userData.website,
                         description: userData.description,
                         address: userData.address,
                         city: userData.city,
                         linkedin_page: userData.linkedin,
                         logo_url: null
                }).select().single()

                if(companyErr) throw companyErr

                //create company conact
                const {error: contactErr} = await supabase.from('companies_contact')
                .insert({company_id: companyData.id,
                         full_name: userData.contactName,
                         job_title: userData.contactTitle,
                         phone: userData.contactPhone
                })

                if(contactErr) throw contactErr
            }

            return {user: authData.user, success: true}
        } catch (error) {
            throw error
        }
    },
    signIn: async (credentials) => {
        try {
            const res = await supabase.auth.signInWithPassword(credentials)
            return res.data
        } catch (error) {
            throw error
        }
    },
    signOut: async () => {
        try {
            await supabase.auth.signOut()
            return { success: true }
        } catch (error) {
            throw error
        }
        
    }
}