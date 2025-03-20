"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

const eventImages = [
  "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/GE2_2877.jpg",
  "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/GE2_2815.jpg",
  "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/IMG-20240325-WA0043.jpg"
];

export function Events() {
  return (
    <section id="events" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((event, index) => (
            <div key={event} className="bg-card rounded-xl shadow-sm border overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={eventImages[index % eventImages.length]} // Properly cycle through images
                  alt="Event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June {event + 14}, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Food Distribution Drive</h3>
                <p className="text-card-foreground/80 mb-4">
                  Join us for our monthly food distribution event in local communities.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
