import { FileText, CreditCard, Home, CheckCircle } from 'lucide-react';

export default function DocumentRequirements() {
  const documents = [
    {
      icon: CreditCard,
      title: 'Valid Driving License',
      description: 'Original driving license with minimum 1 year validity',
      items: [
        'Must be at least 21 years old',
        'License should be valid for minimum 6 months',
        'Both permanent and temporary licenses accepted',
      ],
    },
    {
      icon: Home,
      title: 'Address Proof',
      description: 'Any government-issued address verification document',
      items: [
        'Aadhaar Card / Passport',
        'Voter ID / Utility Bill',
        'Rental Agreement (if applicable)',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Required Documents
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please keep these documents ready for a smooth booking process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border border-slate-200"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan-500 to-slate-600 p-4 rounded-lg">
                  <doc.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-slate-600">{doc.description}</p>
                </div>
              </div>

              <div className="space-y-3 ml-4">
                {doc.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <div className="flex gap-3">
              <FileText className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Important Notes</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• All documents must be original and valid</li>
                  <li>• Digital copies will be required during booking</li>
                  <li>• Security deposit required at the time of vehicle pickup</li>
                  <li>• Documents will be verified before vehicle handover</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
