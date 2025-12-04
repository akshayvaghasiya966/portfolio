import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden top-16"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu Content */}
            <div className="md:hidden mt-4 pb-4 space-y-1 bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-md rounded-lg border border-border shadow-xl relative z-50">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-md transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 rounded-md transition-all duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-rose-500/10 rounded-md transition-all duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-yellow-500/10 rounded-md transition-all duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-green-500/10 hover:to-cyan-500/10 rounded-md transition-all duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 rounded-md transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

