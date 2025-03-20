"use client";

import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
          <p className="mt-4 text-white/80">Subscribe to our newsletter for updates on our initiatives and ways to help.</p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}