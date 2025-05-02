
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Video, Settings, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Studio', href: '/studio', icon: Video },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: CreditCard },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">ReelCraft</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navigation.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link to={item.href} className="flex items-center space-x-1">
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            </Button>
          ))}
          <Button asChild>
            <Link to="/studio">Create Reel</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 transform bg-background md:hidden overflow-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "transition-transform duration-300 ease-in-out"
        )}
      >
        <div className="container py-6 space-y-4">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to={item.href} className="flex items-center space-x-2">
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </Button>
          ))}
          <Button className="w-full" onClick={() => setIsMenuOpen(false)} asChild>
            <Link to="/studio">Create Reel</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
