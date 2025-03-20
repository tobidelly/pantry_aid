"use client";

import { Heart, Users, Utensils } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Our Services</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Utensils className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Food Distribution</h3>
            <p className="text-card-foreground/80">Regular distribution of nutritious food packages to communities in need.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Community Support</h3>
            <p className="text-card-foreground/80">Educational programs and resources for sustainable food security.</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Emergency Relief</h3>
            <p className="text-card-foreground/80">Rapid response food aid during crises and natural disasters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}