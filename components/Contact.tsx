"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Contact Us</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
            Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl shadow-lg border p-8">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-card-foreground">Visit Us</h4>
                    <p className="text-card-foreground/80 mt-1">
                      Pantry Aid Court<br />
                      Maryland, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-card-foreground">Call Us</h4>
                    <p className="text-card-foreground/80 mt-1">
                      Main: +1 (443) 898-2815<br />
                      Support: +1 (443) 898-2815
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-card-foreground">Email Us</h4>
                    <p className="text-card-foreground/80 mt-1">
                      General: info@pantryaid.org<br />
                      Support: help@pantryaid.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-card-foreground">Working Hours</h4>
                    <p className="text-card-foreground/80 mt-1">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                <h4 className="font-medium text-card-foreground mb-2">Emergency Food Support</h4>
                <p className="text-card-foreground/80">
                  For urgent food assistance, please call our 24/7 emergency hotline:
                  <br />
                  <span className="font-semibold text-primary">+1 (443) 898-2815</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-lg border p-8">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Emmanuel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Olushola" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="olushola@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+234 805 xxx xxxx" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}