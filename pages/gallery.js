// pages/gallery.js
import Image from "next/image";

const IMAGES = [
  // Elegant, event-ish Unsplash shots (free)
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532634732-8b9fb99825c7?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530023367847-a683933f417c?q=80&w=1600&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">Gallery</h1>
        <p className="text-lg text-gray-600 mb-10">A selection of elegant, organic moments—until your own portfolio takes the stage.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-lg border bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

