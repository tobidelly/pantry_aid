"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { HandHeart, Building2, Trophy, Users } from "lucide-react";
import Image from "next/image";

export function Sponsors() {
  const [sponsorType, setSponsorType] = useState("partner");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="sponsors" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Become a Sponsor</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in making a difference. Partner with PantryAid to help create lasting change in communities worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Information */}
          <div className="space-y-8">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop"
                alt="Corporate partnership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Why Partner With Us?</h3>
                <div className="h-1 w-12 bg-white mb-4" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: HandHeart,
                  title: "Social Impact",
                  description: "Make a meaningful difference in communities worldwide"
                },
                {
                  icon: Building2,
                  title: "Brand Recognition",
                  description: "Associate with a trusted humanitarian organization"
                },
                {
                  icon: Trophy,
                  title: "CSR Goals",
                  description: "Meet your corporate social responsibility objectives"
                },
                {
                  icon: Users,
                  title: "Network Growth",
                  description: "Connect with other socially responsible organizations"
                }
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-card-foreground">{item.title}</h4>
                  <p className="text-card-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label>I'm interested in becoming a:</Label>
                <RadioGroup
                  defaultValue="partner"
                  onValueChange={setSponsorType}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partner" id="partner" />
                    <Label htmlFor="partner">Strategic Partner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sponsor" id="sponsor" />
                    <Label htmlFor="sponsor">Financial Sponsor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Salem" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="David" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization Name</Label>
                  <Input id="organization" placeholder="Company Ltd." required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="david@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How would you like to help?</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your organization and how you'd like to contribute..."
                    className="min-h-[100px]"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground">
                Submit Interest
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                We'll get back to you within 48 hours to discuss partnership opportunities.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}