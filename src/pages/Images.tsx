import heroImage from "@/assets/hero-aquatic-ai.jpg";

const Images = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Hero Background Image</h1>
        <div className="bg-card p-4 rounded-lg">
          <img 
            src={heroImage} 
            alt="Hero Aquatic AI Background" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <a 
            href={heroImage} 
            download="hero-aquatic-ai.jpg"
            className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Descargar Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Images;
