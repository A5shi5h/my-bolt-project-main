import { Phone, Facebook, Instagram } from "lucide-react";

export function About() {
  return (
    <>
      <div className="pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">ABOUT EUPHORIA SINGTAM</h1>
        
        <div className="space-y-8">
          <div className="relative h-96">
            <img src="https://content.jdmagicbox.com/comp/gangtok/m6/9999p3592.3592.230616140424.p9m6/catalogue/euphoria-singtam-gangtok-pubs-pwyi8hlvh3.jpg"
              alt="Restaurant Interior"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg">
              Welcome to Euphoria Singtam, a gastronomic haven where the art of fine dining meets the thrill of culinary exploration. Nestled in the heart of Singtam, Euphoria is a restaurant like no other, where your dining experience transcends mere sustenance and becomes a journey of indulgence. With a rich blend of world-class cuisine, an inviting ambiance, and a commitment to excellence, Euphoria promises to tantalize your taste buds and elevate your dining expectations. Join us as we embark on a culinary voyage that promises to create unforgettable memories, one delectable dish at a time. Euphoria Singtam is a culinary gem born out of a simple yet profound inspiration the scarcity of exceptional dining experiences in our town. In a landscape where quality dining options were a rarity, "Euphoria Singtam" emerged as a beacon of culinary excellence. Founded by a passionate team of food enthusiasts, this restaurant is a testament to their unwavering commitment to bring delectable flavors, innovative dishes, and an inviting ambiance to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-600 mb-2">LOCATION</h3>
              <p>Central Singtam</p>
              <p>Sikkim</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-600 mb-2">HOURS</h3>
              <p>Daily: 11:00 AM - 11:00 PM</p>
              <p>Bar: 11:00 AM - 11:00 PM</p>
            </div>
            <div className="text-center">
            </div>
          </div>

<div className="flex justify-center mt-12">
  <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center relative">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Meet Anand Lamichaney</h2>
    <img 
      src="./images/owner.jpg" 
      alt="Owner" 
      className="w-40 h-40 rounded-full mb-4"
    />
    <p className="text-gray-600 text-lg text-center">
      Anand Lamichaney, also famous by his alias Mr.@one, is a dynamic entrepreneur who has blended his passion for food with social media expertise. As the proud owner of Euphoria Singtam, he has mastered the art of crafting delectable dishes that not only tantalize taste buds but also shine on Instagram. Anand has built a substantial online following, turning his restaurant into a culinary hotspot while also establishing himself as a sought-after social media influencer. His engaging content provides food inspiration and restaurant insights to an ever-growing community of followers.
    </p>

    {/* Social Media Links */}
    <div className="flex space-x-6 mt-6">
      <a href="https://wa.me/918101497215" target="_blank" rel="noopener noreferrer">
        <Phone className="w-6 h-6 text-green-600 hover:text-green-800 transition" />
      </a>
      <a href="https://www.facebook.com/anandlamichaney" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
      </a>
      <a href="https://www.instagram.com/anand_lamichaney" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-800 transition" />
      </a>
    </div>
  </div>
</div>
        </div>
        </div>
      </div>
    </>
  );
}