import { Car, Clock, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-cyan-900 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Car Rental Service
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100">
            Self Drive & Chauffeur Services | Well Maintained Vehicles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition">
              <Car className="w-10 h-10 mx-auto mb-3 text-cyan-300" />
              <h3 className="font-semibold mb-2">Wide Selection</h3>
              <p className="text-sm text-cyan-100">Economy to Luxury Cars</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition">
              <Clock className="w-10 h-10 mx-auto mb-3 text-cyan-300" />
              <h3 className="font-semibold mb-2">24/7 Service</h3>
              <p className="text-sm text-cyan-100">Available Anytime</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition">
              <Shield className="w-10 h-10 mx-auto mb-3 text-cyan-300" />
              <h3 className="font-semibold mb-2">Safe & Secure</h3>
              <p className="text-sm text-cyan-100">Fully Insured Vehicles</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition">
              <Award className="w-10 h-10 mx-auto mb-3 text-cyan-300" />
              <h3 className="font-semibold mb-2">Best Service</h3>
              <p className="text-sm text-cyan-100">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
