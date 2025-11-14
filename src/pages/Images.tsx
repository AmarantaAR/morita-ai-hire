import heroImage1 from "@/assets/hero-aquatic-ai.jpg";
import heroImage2 from "@/assets/hero-aquatic-2.jpg";
import heroImage3 from "@/assets/hero-aquatic-3.jpg";
import heroImage4 from "@/assets/hero-aquatic-4.jpg";
import heroImage5 from "@/assets/hero-aquatic-5.jpg";

const images = [
  { src: heroImage1, name: "hero-aquatic-ai.jpg", alt: "Hero Aquatic AI Background 1" },
  { src: heroImage2, name: "hero-aquatic-2.jpg", alt: "Hero Aquatic AI Background 2" },
  { src: heroImage3, name: "hero-aquatic-3.jpg", alt: "Hero Aquatic AI Background 3" },
  { src: heroImage4, name: "hero-aquatic-4.jpg", alt: "Hero Aquatic AI Background 4" },
  { src: heroImage5, name: "hero-aquatic-5.jpg", alt: "Hero Aquatic AI Background 5" },
];

const Images = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Hero Background Images</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-card p-4 rounded-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <a 
                href={image.src} 
                download={image.name}
                className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Descargar {image.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
