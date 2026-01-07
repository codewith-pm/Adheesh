import { useEffect, useState } from 'react';
import { Car as CarType } from '../lib/supabase';
import { supabase } from '../lib/supabase';
import { Car, Check } from 'lucide-react';
import BookingModal from './BookingModal';

export default function CarListing() {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<{ id: string; name: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = (carId: string, carName: string) => {
    setSelectedCar({ id: carId, name: carName });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('available', true)
        .order('price_per_day', { ascending: true });

      if (error) throw error;
      setCars(data || []);
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading our fleet...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-slate-200 group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={car.image_url}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-600 to-slate-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {car.type.charAt(0).toUpperCase() + car.type.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-slate-800">{car.name}</h3>
                </div>

                <div className="space-y-2 mb-4">
                  {car.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-600">Per Day</span>
                    <span className="text-2xl font-bold text-slate-800">
                      ₹{car.price_per_day.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Per KM</span>
                    <span className="font-semibold text-slate-700">
                      ₹{car.price_per_km}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleBookNow(car.id, car.name)}
                  className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-slate-700 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-slate-800 transition-all shadow-md hover:shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {cars.length === 0 && (
          <div className="text-center py-12">
            <Car className="w-16 h-16 mx-auto text-slate-300 mb-4" />
            <p className="text-slate-600">No cars available at the moment</p>
          </div>
        )}
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        carId={selectedCar?.id}
        carName={selectedCar?.name}
      />
    </section>
  );
}
