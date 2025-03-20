"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Mission() {
  return (
    <section id="mission" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Our Mission & Vision</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="space-y-8">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2940&auto=format&fit=crop"
                alt="Food distribution to communities"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                <div className="h-1 w-12 bg-white mb-4" />
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border -mt-16 ml-8 relative z-10">
              <p className="text-card-foreground/80 leading-relaxed">
                To alleviate hunger and promote food security through sustainable food distribution programs, education, and community empowerment initiatives. We work tirelessly to ensure that no community goes without access to nutritious food and essential resources.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-card-foreground/80">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Sustainable food distribution systems
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Educational programs for communities
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Local capacity building initiatives
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-8">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2940&auto=format&fit=crop"
                alt="Thriving community garden"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                <div className="h-1 w-12 bg-white mb-4" />
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border -mt-16 ml-8 relative z-10">
              <p className="text-card-foreground/80 leading-relaxed">
                A world where no one goes to bed hungry, where communities are self-sufficient, and where food security is a reality for all. We envision a future where every person has access to nutritious food and the knowledge to maintain sustainable food practices.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center text-card-foreground/80">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Zero hunger communities
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Self-sustainable food systems
                </li>
                <li className="flex items-center text-card-foreground/80">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Global food security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}