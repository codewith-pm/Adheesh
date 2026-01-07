import { Car, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Car className="w-10 h-10 text-cyan-400" />
            <div>
              <h1 className="text-3xl font-bold">Aadhees Cars</h1>
              <p className="text-sm text-cyan-300">24/7 Self Drive Car Rental</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@adheeshcars.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
