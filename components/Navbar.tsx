"use client";

import { Utensils, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#mission", label: "Mission" },
    { href: "#services", label: "Services" },
    { href: "#events", label: "Events" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Utensils className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">PantryAid</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button asChild>
              <a href="/donate">Donate Now</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-foreground/80 hover:text-primary transition-colors text-lg py-2"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-4">
                    <Button className="w-full" size="lg" asChild>
                      <a href="https://www.paypal.com/donate?token=VC67P-9OCT7XqIf2IjGgrYASfMSh_Lr3SGhFTRbCAvK4WQYv_eI66_8akZTL601lLPWvUYFkm9NEKIcw">Donate Now</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}