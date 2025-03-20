"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_INTERVAL = 5000;

const CAROUSEL_IMAGES = [
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/IMG-20240607-WA0050.jpg/:/rs=w:600,cg:true,m",
    alt: "People receiving food aid"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/IMG-20240607-WA0044.jpg/:/rs=w:600,cg:true,m",
    alt: "Food distribution event"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/20240525_082645.jpg/:/rs=w:1280,h:721",
    alt: "Community support"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/20240525_135952.jpg/:/rs=w:1280,h:598",
    alt: "Volunteers helping"
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/20240525_132058.jpg/:/rs=w:1280,h:598",
    alt: "Food packages"
  }
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, SLIDE_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Fighting Hunger, Building Hope
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Join us in our mission to combat food insecurity and provide essential support to communities across Africa and beyond.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                <a href="https://www.paypal.com/donate?token=VC67P-9OCT7XqIf2IjGgrYASfMSh_Lr3SGhFTRbCAvK4WQYv_eI66_8akZTL601lLPWvUYFkm9NEKIcw">Make a Donation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/about">Learn More</a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-primary">50K+</h3>
                <p className="text-muted-foreground">People Fed Monthly</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">20+</h3>
                <p className="text-muted-foreground">Active Programs</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-muted-foreground">Countries Reached</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {CAROUSEL_IMAGES.map((image, index) => (
                  <div key={index} className="relative h-[500px] min-w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}