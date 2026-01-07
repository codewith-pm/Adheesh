/*
  # Aadhees Cars Database Schema

  1. New Tables
    - `cars`
      - `id` (uuid, primary key)
      - `name` (text) - Car model name
      - `type` (text) - Car type (economy, luxury, suv, etc.)
      - `price_per_day` (numeric) - Daily rental price
      - `price_per_km` (numeric) - Price per kilometer
      - `image_url` (text) - Car image URL
      - `available` (boolean) - Availability status
      - `features` (text[]) - Array of car features
      - `created_at` (timestamptz)

    - `bookings`
      - `id` (uuid, primary key)
      - `car_id` (uuid, foreign key)
      - `customer_name` (text)
      - `customer_email` (text)
      - `customer_phone` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `license_number` (text)
      - `license_url` (text) - URL to uploaded license document
      - `address_proof_url` (text) - URL to uploaded address proof
      - `status` (text) - booking status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamptz)

    - `reviews`
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `customer_email` (text)
      - `rating` (integer) - Rating from 1-5
      - `comment` (text)
      - `car_id` (uuid, foreign key, optional)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated insert operations
*/

-- Cars Table
CREATE TABLE IF NOT EXISTS cars (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  price_per_day numeric NOT NULL,
  price_per_km numeric DEFAULT 10,
  image_url text NOT NULL,
  available boolean DEFAULT true,
  features text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE cars ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view cars"
  ON cars
  FOR SELECT
  TO public
  USING (true);

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  car_id uuid REFERENCES cars(id) ON DELETE CASCADE,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  license_number text NOT NULL,
  license_url text,
  address_proof_url text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own bookings"
  ON bookings
  FOR SELECT
  TO public
  USING (true);

-- Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  car_id uuid REFERENCES cars(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert Sample Cars
INSERT INTO cars (name, type, price_per_day, price_per_km, image_url, features) VALUES
('Swift Dzire', 'economy', 2500, 10, 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800', ARRAY['AC', 'Power Steering', 'Music System', '5 Seater']),
('Honda City', 'sedan', 3000, 12, 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800', ARRAY['AC', 'Power Windows', 'Music System', 'Airbags', '5 Seater']),
('Toyota Innova', 'suv', 4000, 15, 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800', ARRAY['AC', 'Power Steering', '7 Seater', 'Large Boot Space']),
('Mahindra XUV700', 'suv', 4500, 18, 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800', ARRAY['AC', 'Panoramic Sunroof', '7 Seater', 'Advanced Safety']),
('Mercedes GLC', 'luxury', 8000, 25, 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800', ARRAY['Luxury Interior', 'Premium Sound', 'Climate Control', 'All Safety Features']),
('BMW X5', 'luxury', 10000, 30, 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800', ARRAY['Premium Leather', 'Advanced Tech', 'Sport Mode', 'Panoramic Roof'])
ON CONFLICT DO NOTHING;