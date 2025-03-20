"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { Events } from "@/components/Events";
import { Help } from "@/components/Help";
import { Gallery } from "@/components/Gallery";
import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { WhatsAppChatButton } from "@/components/WhatsAppChat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <Events />
      <Help />
      <Gallery />
      <Sponsors />
      <Team />
      <Contact />
      <Newsletter />
      <WhatsAppChatButton />
      <Footer />
    </main>
  );
}