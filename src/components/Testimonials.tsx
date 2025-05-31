import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Coastal39738997568",
      rating: 5,
      text: "The ambiance and food was ok but the Service here is terrible, costumers left unattended 🙁very disappointed by the service.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e7/99/default-avatar-2020-57.jpg?w=100&h=-1&s=1"
    },
    {
      name: "Escape68549871736",
      rating: 5,
      text: "Felt great visiting with friends...Great place with private cabins...well served coffees...hot and chilled..",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ef/32/default-avatar-2020-12.jpg?w=100&h=-1&s=1"
    },
    {
      name: "Curious40628070266",
      rating: 5,
      text: "This place is great for casual afternoon with friends and couples... Tho I was solo but great place to visit",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e8/24/default-avatar-2020-60.jpg?w=100&h=-1&s=1"
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">GUEST EXPERIENCES</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}