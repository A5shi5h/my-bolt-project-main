import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">CONTACT US</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full bg-black border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full bg-black border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-red-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-red-600"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-400">Central Singtam , Sikkim</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-400">+91 8101497215</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400">euphoriasingtam@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-gray-400">Daily: 11:00 AM - 11:00 PM</p>
                    <p className="text-gray-400">Bar: 11:00 AM - 2:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
