"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const quickLinks = [
    { name: t("links.quick.home"), href: "#" },
    { name: t("links.quick.tutorials"), href: "#tutorials" },
    { name: t("links.quick.community"), href: "#community" },
    { name: t("links.quick.projects"), href: "#projects" },
  ];

  const communityLinks = [
    { name: t("links.community.leaderboard"), href: "#" },
    { name: t("links.community.forums"), href: "#" },
    { name: t("links.community.student"), href: "#" },
    { name: t("links.community.shoutouts"), href: "#" },
  ];

  const aboutLinks = [
    { name: t("links.about.vision"), href: "#" },
    { name: t("links.about.work"), href: "#" },
    { name: t("links.about.contact"), href: "#" },
    { name: t("links.about.donate"), href: "#" },
  ];

  const legalLinks = [
    { name: t("links.legal.privacy"), href: "#" },
    { name: t("links.legal.terms"), href: "#" },
    { name: t("links.legal.license"), href: "#" },
    { name: t("links.legal.conduct"), href: "#" },
  ];

  const socialLinks = [
    { name: t("social.facebook"), icon: Facebook, href: "#" },
    { name: t("social.twitter"), icon: Twitter, href: "#" },
    { name: t("social.instagram"), icon: Instagram, href: "#" },
    { name: t("social.youtube"), icon: Youtube, href: "#" },
    { name: t("social.github"), icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t("brand.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("brand.description")}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  {t("contact.email")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  {t("contact.phone")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  {t("contact.location")}
                </span>
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
            <h4 className="font-semibold text-foreground mb-4">
              {t("sections.quickLinks")}
            </h4>
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
            <h4 className="font-semibold text-foreground mb-4">
              {t("sections.community")}
            </h4>
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
            <h4 className="font-semibold text-foreground mb-4">
              {t("sections.aboutLegal")}
            </h4>
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
                <span className="text-sm font-medium text-foreground">
                  {t("sections.legal")}
                </span>
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

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              {t("bottom.copyright")}
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>{t("bottom.openSource")}</span>
              <span>•</span>
              <span>{t("bottom.license")}</span>
              <span>•</span>
              <span>{t("bottom.tech")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
