"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2940&auto=format&fit=crop",
    alt: "Food distribution event",
    caption: "Monthly Food Distribution Drive"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/IMG-20240607-WA0341.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:771/qt=q:3",
    alt: "Community support",
    caption: "Community Outreach Program"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/20240525_133108.jpg/:/rs=w:1280,h:721",
    alt: "Volunteer work",
    caption: "Volunteer Training Session"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/IMG-20240607-WA0018.jpg/:/rs=w:600,cg:true,m",
    alt: "Food packages",
    caption: "Emergency Relief Packages"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/20240525_131936.jpg/:/rs=w:1280,h:721",
    alt: "Community garden",
    caption: "Sustainable Food Garden"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/20240413_114348.jpg/:/rs=w:1280,h:721",
    alt: "Education program",
    caption: "Food Security Workshop"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImage(current => 
      current === null ? null : current === 0 ? GALLERY_IMAGES.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setSelectedImage(current => 
      current === null ? null : current === GALLERY_IMAGES.length - 1 ? 0 : current + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Our Gallery</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the impact of our work through these moments captured across our various programs and initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[90vw] h-[90vh] p-0" onKeyDown={handleKeyDown}>
            <div className="relative h-full flex items-center justify-center bg-background/95 p-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {selectedImage !== null && (
                <div className="relative h-full w-full">
                  <Image
                    src={GALLERY_IMAGES[selectedImage].src}
                    alt={GALLERY_IMAGES[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-background/80 backdrop-blur-sm">
                    <p className="text-lg font-medium text-foreground">
                      {GALLERY_IMAGES[selectedImage].caption}
                    </p>
                  </div>
                </div>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}