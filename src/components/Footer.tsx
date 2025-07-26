import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Github, 
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'Community', href: '#community' },
    { name: 'Projects', href: '#projects' }
  ];

  const communityLinks = [
    { name: 'Leaderboard', href: '#' },
    { name: 'Forums', href: '#' },
    { name: 'Student Projects', href: '#' },
    { name: 'Shoutouts', href: '#' }
  ];

  const aboutLinks = [
    { name: 'Our Vision', href: '#' },
    { name: 'Work With Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Donate', href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'License', href: '#' },
    { name: 'Code of Conduct', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Oracode</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering the next generation of coders through interactive learning, 
                community support, and hands-on projects. Code that shapes minds, 
                not just machines.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">hello@oracode.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">1212121212121</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Global • Remote First</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-background border rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">About & Legal</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t">
                <span className="text-sm font-medium text-foreground">Legal</span>
              </li>
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Oracode. All rights reserved. Built with ❤️ for young coders worldwide.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Open Source</span>
              <span>•</span>
              <span>MIT License</span>
              <span>•</span>
              <span>tech stack will be updated here later k</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}