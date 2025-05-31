export function Gallery() {
  const images = [
    {
      url: "https://euphoriasingtam.netlify.app/images/g1.jpg",
      caption: "Bar"
    },
    {
      url: "https://content.jdmagicbox.com/comp/gangtok/m6/9999p3592.3592.230616140424.p9m6/catalogue/euphoria-singtam-gangtok-pubs-pwyi8hlvh3.jpg",
      caption: "Live Music Corner"
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
      caption: "Rooftop"
    },
    {
      url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
      caption: "Continental"
    },
    {
      url: "https://media-cdn.tripadvisor.com/media/photo-s/29/5b/4c/6b/life-s-too-short-for.jpg",
      caption: "Dining"
    },
    {
      url: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL2FxMzJQdXl2U09hakZxak5DYjhjb2ciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
      caption: "Cozy Ambiance"
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">GALLERY</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.url} className="group relative">
              <img 
                src={`${image.url}?auto=format&fit=crop&q=80`}
                alt={image.caption}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-xl font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}