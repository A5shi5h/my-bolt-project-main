import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
            alt="Hell's Kitchen Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">EUPHORIA SINGTAM</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Experience the intensity and excellence of our culinary vision</p>
          <ChevronDown className="w-8 h-8 absolute bottom-8 animate-bounce" />
        </div>
      </div>

      {/* Signature Dishes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">SIGNATURE DISHES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80" 
                alt="Beef Wellington"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-2xl font-bold">NON VEG COMBO</h3>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80" 
                alt="Lobster Risotto"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-2xl font-bold">VEG COMBO</h3>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&q=80" 
                alt="Sticky Toffee Pudding"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-2xl font-bold">CONTINENTAL</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
            alt="Restaurant Ambiance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">THE EXPERIENCE</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Step into the world , where the atmosphere is as extraordinary as the cuisine. 
            Experience the dramatic lighting, and the intensity that made the us famous.
          </p>
          <Link 
            to="/gallery"
            className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 hover:bg-red-600 hover:text-white transition"
          >
            EXPLORE THE RESTAURANT
          </Link>
        </div>
      </section>
    </div>
  );
}