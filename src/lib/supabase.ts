import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Car {
  id: string;
  name: string;
  type: string;
  price_per_day: number;
  price_per_km: number;
  image_url: string;
  available: boolean;
  features: string[];
  created_at: string;
}

export interface Booking {
  id?: string;
  car_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  start_date: string;
  end_date: string;
  license_number: string;
  license_url?: string;
  address_proof_url?: string;
  status?: string;
  created_at?: string;
}

export interface Review {
  id?: string;
  customer_name: string;
  customer_email: string;
  rating: number;
  comment: string;
  car_id?: string;
  created_at?: string;
}
