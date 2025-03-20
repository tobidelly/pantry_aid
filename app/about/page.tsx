"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">About PantryAid</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pantry Aid Inc is a dedicated non-profit organization committed to fighting hunger, food insecurity, and social inequality worldwide. As a 501(c)(3) organization, our mission is to provide food assistance, empowerment initiatives, health support, and essential social services to individuals and communities in need. Through strategic partnerships, dedicated volunteers, and generous donors, we strive to make a tangible impact—one meal at a time.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At PantryAid, we believe in a world where no one has to go to bed hungry. Our mission is to combat hunger and food insecurity while addressing broader social and health issues. Through our various programs and initiatives, we instill hope and provide essential resources to improve the quality of life for the underserved.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">How We Serve</h2>
            <p className="text-muted-foreground mb-4">Our work extends beyond just providing meals; we are actively involved in:</p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                <span><strong className="text-foreground">Food Assistance:</strong> Operating food banks and mobile food banks to distribute meals and essential groceries.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                <span><strong className="text-foreground">Empowerment Initiatives:</strong> Providing skill-building, job training, and entrepreneurship programs to uplift communities.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                <span><strong className="text-foreground">Health & Social Services:</strong> Organizing medical outreach programs, health awareness campaigns, and wellness drives to support individuals in need.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Presence in Nigeria</h2>
            <p className="text-muted-foreground mb-6">
              PantryAid is committed to serving communities worldwide, and we have established a strong presence in Nigeria through our partnership with the PantryAid Initiative. Our Monthly Food Bank currently operates in six locations across the country, with plans for expansion:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { state: "Ondo State", address: "16b, Iwalewa Street, Iwalewa 2, Akure" },
                { state: "Lagos State", address: "Block N55, Red Street, Jakande, Isolo" },
                { state: "Lagos State", address: "1, Adetayo Street, Idimu, Ikotun" },
                { state: "Ogun State", address: "Olorunnisola Community, Ashimolowo, Mowe-Ibafo" },
                { state: "Osun State", address: "2, Adagunodo Street, Imo, Ilesha" },
                { state: "Oyo State", address: "Success Layout, Onideure Olaogun, Ibadan" }
              ].map((location, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-1 mr-2" />
                    <div>
                      <h3 className="font-semibold text-foreground">{location.state}</h3>
                      <p className="text-muted-foreground text-sm">{location.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Supporting Our Volunteers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our work is made possible by the dedication of volunteers who selflessly give their time and skills to make a difference. We provide comprehensive training and resources to our volunteers, ensuring they are well-equipped to serve communities effectively. Whether assisting at food banks, organizing campaigns, or distributing meals, our volunteers play a vital role in fulfilling our mission.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">How You Can Help</h2>
            <p className="text-muted-foreground mb-4">Your support is crucial in helping us expand our reach and impact. Here's how you can get involved:</p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                <span><strong className="text-foreground">Donate:</strong> Your contributions help us provide food and essential items to those in need. Every dollar makes a difference.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                <span><strong className="text-foreground">Volunteer:</strong> Join our team of dedicated individuals working to combat hunger.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                <span><strong className="text-foreground">Partner with Us:</strong> Organizations, businesses, and sponsors can collaborate with us to amplify our impact.</span>
              </li>
            </ul>

            <div className="mt-12 bg-primary/5 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">Make a Difference Today!</h2>
              <p className="text-muted-foreground mb-6">
                Together, we can fight hunger, empower communities, and bring lasting change. Join PantryAid in our mission to create a world where everyone has access to nutritious food and essential resources.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                <a href="/donate">Donate Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}