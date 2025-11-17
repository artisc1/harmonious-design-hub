import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-white/20 transition-colors"
          asChild
        >
          <a
            href="https://instagram.com/sd_idea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-white/20 transition-colors"
          asChild
        >
          <a
            href="https://wa.me/77018004171"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
