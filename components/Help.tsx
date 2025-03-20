"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Heart, HandHeart, Wallet, Users, X, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DialogTitle } from "@/components/ui/dialog";

export function Help() {
  const [showDocument, setShowDocument] = useState(false);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Help Our Cause</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your support can make a real difference in the lives of those facing food insecurity.
            Join us in our mission to create a hunger-free world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://img1.wsimg.com/isteam/ip/93805ac4-9cb4-4d7c-af20-19bf5b1ddca4/GE2_2866.jpg/:/cr=t:5.52%25,l:0%25,w:100%25,h:88.96%25/rs=w:600,h:800,cg:true/qt=q:3"
              alt="Community food distribution"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Make an Impact Today</h3>
              <p className="text-white/90">
                Every donation helps us provide nutritious meals to families in need.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Feed a Family",
                  description: "Provide meals for an entire family for a month",
                  amount: "$50"
                },
                {
                  icon: Users,
                  title: "Support a Community",
                  description: "Help establish sustainable food programs",
                  amount: "$100"
                },
                {
                  icon: HandHeart,
                  title: "Emergency Relief",
                  description: "Provide immediate food assistance",
                  amount: "$25"
                },
                {
                  icon: Wallet,
                  title: "Monthly Giving",
                  description: "Become a regular supporter",
                  amount: "Custom"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                >
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-card-foreground">{item.title}</h4>
                  <p className="text-card-foreground/80 mb-3">{item.description}</p>
                  <div className="text-xl font-bold text-primary">{item.amount}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground text-lg py-6 px-8" asChild>
                <a href="https://www.paypal.com/donate?token=VC67P-9OCT7XqIf2IjGgrYASfMSh_Lr3SGhFTRbCAvK4WQYv_eI66_8akZTL601lLPWvUYFkm9NEKIcw">Donate Now</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg py-6 px-8"
                onClick={() => setShowDocument(true)}
              >
                The PantryAid Pledge
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
            <div className="text-4xl font-bold text-primary mb-2">100K+</div>
            <p className="text-card-foreground/80">Meals Provided Monthly</p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-card-foreground/80">Communities Reached</p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-card-foreground/80">Funds Go to Programs</p>
          </div>
        </div>
      </div>

      <Dialog open={showDocument} onOpenChange={setShowDocument}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <div className="flex justify-between items-center mb-4">
            <DialogTitle>The PantryAid Pledge</DialogTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://docs.google.com/document/d/e/2PACX-1vRqR55CWvu3Ew5-HvpTz-gdOSSLtn3Sgepka5ld3iRXJh7eJznBT2J2-Hpo2MjvGNBzpI1RALl7PnFQ/pub?embedded=true", "_blank")}
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowDocument(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="overflow-y-auto h-full pr-4">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vRqR55CWvu3Ew5-HvpTz-gdOSSLtn3Sgepka5ld3iRXJh7eJznBT2J2-Hpo2MjvGNBzpI1RALl7PnFQ/pub?embedded=true"
              className="w-full h-full rounded-lg"
              title="The PantryAid Pledge"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}