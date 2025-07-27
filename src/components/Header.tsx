"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Download, ChevronDown, Heart } from "lucide-react";
import Link from "next/link";
import SignInModal from "./SignInModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isDropdownOpen, setIsDropdownOpen] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const languages = [
    { code: "EN", name: "English" },
    { code: "HI", name: "हिंदी" },
    { code: "TA", name: "தமிழ்" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
    { code: "DE", name: "Deutsch" },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tutorials", href: "#" },
    {
      name: "Community",
      href: "#community",
      dropdown: ["Leaderboard", "Forums", "Projects", "Shoutouts", "Partners"],
    },
    {
      name: "More",
      href: "#more",
      dropdown: ["Our Vision", "Work With Us", "Contact Us"],
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b theme-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                Oracode
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(item.name)}
                      onMouseLeave={() => setIsDropdownOpen("")}
                    >
                      <button className="flex items-center text-foreground hover:text-primary transition-colors py-2">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isDropdownOpen === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-background border rounded-lg shadow-lg py-2">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      className="text-foreground hover:text-primary transition-colors"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side controls */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Dropdown */}
              <div className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen("language")}
                  onMouseLeave={() => setIsDropdownOpen("")}
                >
                  <button className="flex items-center px-3 py-2 text-sm text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                    {selectedLanguage}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isDropdownOpen === "language" && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-background border rounded-lg shadow-lg py-2 z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLanguage(lang.code);
                            setIsDropdownOpen("");
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                            selectedLanguage === lang.code
                              ? "text-primary bg-muted"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          <span className="font-medium">{lang.code}</span>
                          <span className="ml-2 text-muted-foreground">
                            {lang.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Donate Button */}
              <Link href="/donate">
                <button className="flex items-center px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate
                </button>
              </Link>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>

              {/* Download App */}
              <button className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download App
              </button>

              {/* Sign In */}
              <button
                onClick={() => setIsSignInOpen(true)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    {theme === "light" ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <Sun className="h-5 w-5" />
                    )}
                  </button>

                  {/* Mobile Language Selector */}
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="px-2 py-1 text-sm bg-background border rounded"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.code} - {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setIsSignInOpen(true)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                >
                  Sign In
                </button>
              </div>

              {/* Mobile Donate Button */}
              <button className="w-full flex items-center justify-center px-4 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors">
                <Heart className="h-4 w-4 mr-2" />
                Donate
              </button>

              <button className="w-full flex items-center justify-center px-4 py-3 bg-secondary text-secondary-foreground rounded-lg">
                <Download className="h-4 w-4 mr-2" />
                Download App
              </button>
            </div>
          </div>
        )}
      </header>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </>
  );
}
