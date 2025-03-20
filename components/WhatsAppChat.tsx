"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppChatButton() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPrompt(true);
      setTimeout(() => setShowPrompt(false), 5000); // Hide after 5 seconds
    }, 20000); // Show prompt every 20 seconds

    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20there!%20I%20have%20an%20enquiry.`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2">
      {showPrompt && (
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          Have any enquiry? <br /> Click here to chat with us.
        </div>
      )}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
