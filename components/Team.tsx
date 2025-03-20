"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAM_MEMBERS = [
  {
    name: "Adebola Manuwa",
    role: "President",
    image: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/Screenshot_20241108_135003_Photos.jpg/:/cr=t:0%25,l:0.34%25,w:99.33%25,h:100%25/rs=w:388,h:517,cg:true/qt=q:3",
    bio: "Leading PantryAid's mission to create sustainable food security solutions.",
    linkedin: "#",
    email: "sarah.johnson@pantryaid.org"
  },
  {
    name: "Omonike Ajayi",
    role: "Treasurer",
    image: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/OST_1739(E).jpg/:/cr=t:12.51%25,l:0%25,w:100%25,h:74.99%25/rs=w:388,h:194,cg:true/qt=q:3",
    bio: "Managing financial strategies to maximize our impact in communities.",
    linkedin: "#",
    email: "michael.chen@pantryaid.org"
  },
  {
    name: "Olabisi Taiwo",
    role: "Secretary",
    image: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/OST_1719(E).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,cg:true/qt=q:3",
    bio: "Ensuring efficient operations and communication across all programs.",
    linkedin: "#",
    email: "emily.rodriguez@pantryaid.org"
  },
  {
    name: "Temitope Adepoju",
    role: "Fundraising Director",
    image: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/OST_1734(E).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,cg:true/qt=q:3",
    bio: "Developing innovative strategies to support our global initiatives.",
    linkedin: "#",
    email: "james.wilson@pantryaid.org"
  },
  {
    name: "Temitope Oladeji",
    role: "Community Outreach Director",
    image: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/OST_1731(E).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,cg:true/qt=q:3",
    bio: "Building strong relationships with communities and partners worldwide.",
    linkedin: "#",
    email: "aisha.patel@pantryaid.org"
  },
  {
    name: "Omawumi Onifade",
    role: "Community Outreach Director II",
    image: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/OST_1724(E).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,cg:true/qt=q:3",
    bio: "Expanding our reach and impact across African communities.",
    linkedin: "#",
    email: "david.okonjo@pantryaid.org"
  },
  {
    name: "Adetoun Ayo-Adeola",
    role: "Finance Director",
    image: "https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/IMG-20240227-WA0028.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,cg:true/qt=q:3",
    bio: "Overseeing financial planning and sustainable growth strategies.",
    linkedin: "#",
    email: "lisa.chang@pantryaid.org"
  }
];

export function Team() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      slidesToScroll: 1
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Meet The Team</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of professionals working together to make a difference in communities worldwide.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] pl-4"
              >
                <div className="bg-card rounded-2xl shadow-lg overflow-hidden border h-full">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mt-1">{member.role}</p>
                    <p className="text-card-foreground/80 mt-4">{member.bio}</p>
                    <div className="flex gap-3 mt-6">
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <LinkedinIcon className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href={`mailto:${member.email}`}>
                          <MailIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}