import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          location: string
          bedrooms: number
          bathrooms: number
          square_feet: number
          property_type: 'rent' | 'sale'
          image_url: string
          agent_name: string
          agent_title: string
          agent_avatar: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          price: number
          location: string
          bedrooms: number
          bathrooms: number
          square_feet: number
          property_type: 'rent' | 'sale'
          image_url: string
          agent_name: string
          agent_title: string
          agent_avatar: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          price?: number
          location?: string
          bedrooms?: number
          bathrooms?: number
          square_feet?: number
          property_type?: 'rent' | 'sale'
          image_url?: string
          agent_name?: string
          agent_title?: string
          agent_avatar?: string
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          image_url: string
          category: string
          author: string
          published_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          image_url: string
          category: string
          author: string
          published_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          image_url?: string
          category?: string
          author?: string
          published_at?: string
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          message?: string
          created_at?: string
        }
      }
      site_content: {
        Row: {
          id: string
          section: string
          content: any
          updated_at: string
        }
        Insert: {
          id?: string
          section: string
          content: any
          updated_at?: string
        }
        Update: {
          id?: string
          section?: string
          content?: any
          updated_at?: string
        }
      }
    }
  }
}