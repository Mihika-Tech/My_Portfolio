import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { label: "About", id: "about" },
        { label: "Projects", id: "projects" },
        { label: "Skills", id: "skills" },
        { label: "Contact", id: "contact" },
        { label: "Experience", id: "experience"},
        { label: "Education", id: "education"},
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-primary/10" : "bg-transparent"}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button onClick={() => scrollToSection('home')} className={`text-2xl font-bold transition-all font-['Space_Grotesk'] ${isScrolled ? "gradient-text" : "text-white"}`}>MD</button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.id}
                                variant="ghost"
                                onClick={() => scrollToSection(item.id)}
                                className={`transition-all ${isScrolled ? "text-foreground hover:text-primary hover:bg-primary/10" : "text-white hover:bg-white/10"}`}>
                                {item.label}
                            </Button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in bg-background/95 background-blue-lg border-t border-primary/10">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Button
                                    key={item.id}
                                    variant="ghost"
                                    onClick={() => scrollToSection(item.id)}
                                    className="justify-start text-foreground hover:text-primary hover:bg-primary/10">
                                    {item.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;