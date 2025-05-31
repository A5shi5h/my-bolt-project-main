import { MapPin, Phone, Mail , Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">LOCATION</h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5" />
              <p>1st floor of Apollo Diagnostic Centre , Near Dhamala Hardware</p>
              <p>Singtam , 737134</p>
            </div>
          </div>
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">HOURS</h3>
            <div className="text-gray-300">
              <p>Daily: 11:00 AM - 11:00 PM</p>
              <p>Bar: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">CONTACT</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <p>+91 8101497215</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <p>euphoriasingtam@gmail.com</p>
              </div>
               <div className="flex items-center space-x-2">
                <Instagram className="w-5 h-5" />
                <p>euphoriasingtam</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
          <p>© 2023 Euphoria Singtam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}