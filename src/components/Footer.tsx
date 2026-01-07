import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold">Aadhees Cars</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Your trusted partner for premium car rental services. We provide well-maintained vehicles for all your travel needs.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Contact Us</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>info@adheeshcars.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>123 Main Street, City Name, State - 123456</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Working Hours</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">24/7 Service Available</p>
                  <p className="text-sm mt-2">Open all days including holidays</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Aadhees Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
