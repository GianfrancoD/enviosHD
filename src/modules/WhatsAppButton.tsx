import { PhoneIcon as WhatsappIcon } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappIcon size={28} />
      <span className="sr-only">Chat con WhatsApp</span>
    </a>
  );
}
