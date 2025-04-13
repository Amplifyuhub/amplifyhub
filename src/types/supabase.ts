export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          user_type: 'anunciante' | 'influenciador'
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          user_type: 'anunciante' | 'influenciador'
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          user_type?: 'anunciante' | 'influenciador'
          created_at?: string
        }
      }
      campaigns: {
        Row: {
          id: string
          title: string
          description: string | null
          budget: number
          advertiser_id: string
          status: 'draft' | 'active' | 'completed' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          budget: number
          advertiser_id: string
          status?: 'draft' | 'active' | 'completed' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          budget?: number
          advertiser_id?: string
          status?: 'draft' | 'active' | 'completed' | 'cancelled'
          created_at?: string
        }
      }
      campaign_enrollments: {
        Row: {
          id: string
          campaign_id: string
          influencer_id: string
          status: 'pending' | 'approved' | 'rejected' | 'completed'
          created_at: string
        }
        Insert: {
          id?: string
          campaign_id: string
          influencer_id: string
          status?: 'pending' | 'approved' | 'rejected' | 'completed'
          created_at?: string
        }
        Update: {
          id?: string
          campaign_id?: string
          influencer_id?: string
          status?: 'pending' | 'approved' | 'rejected' | 'completed'
          created_at?: string
        }
      }
    }
  }
} 