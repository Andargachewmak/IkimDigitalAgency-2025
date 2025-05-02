const features = [
    { title: "Easy to Use", description: "User-friendly interface that anyone can use." },
    { title: "Fast Performance", description: "Lightning fast with optimized performance." },
    { title: "Secure", description: "Top-level security for your peace of mind." },
  ];
  
  export default function Features() {
    return (
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  