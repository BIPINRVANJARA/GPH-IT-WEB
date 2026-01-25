import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink, Instagram } from "lucide-react";

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Curriculum", href: "/curriculum" },
  { title: "Placement", href: "/placement" },
  { title: "Contact", href: "/contact" },
];

const resourceLinks = [
  { title: "Study Material", href: "/study-material" },
  { title: "Student Projects", href: "/student-projects" },
  { title: "Expert Lectures", href: "/expert-lectures" },
  { title: "Newsletter", href: "/newsletter" },
];

const externalLinks = [
  { title: "GTU", href: "https://www.gtu.ac.in" },
  { title: "DTE Gujarat", href: "https://dte.gujarat.gov.in" },
  { title: "AICTE", href: "https://www.aicte-india.org" },
];

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">

              <div className="flex items-center gap-2">
                <img
                  src="/images/college_logo.png"
                  alt="College Logo"
                  className="h-10 w-10 object-contain"
                />
                <img
                  src="/images/dept_logo.png"
                  alt="Department Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <p className="font-semibold">IT Department</p>
                <p className="text-xs opacity-80">Government Polytechnic</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Empowering students with cutting-edge technology education and practical skills
              for a successful career in Information Technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="opacity-80">
                  Government Polytechnic, Near GMERS Civil Hospital, Gadhoda Road,
                  Motipura, Himatnagar - 383001 (Sabarkantha)
                </span>
              </li>
              <li>
                <a
                  href="tel:2772229285"
                  className="flex items-center gap-2 text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  <Phone className="h-4 w-4" />
                  2772229285
                </a>
              </li>
              <li>
                <a
                  href="mailto:gp-himatnagar-dte@gujarat.gov.in"
                  className="flex items-center gap-2 text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  <Mail className="h-4 w-4" />
                  gp-himatnagar-dte@gujarat.gov.in
                </a>
              </li>
              <li>
                <a
                  href="mailto:gphit@gmail.com"
                  className="flex items-center gap-2 text-sm opacity-80 transition-opacity hover:opacity-100"
                >
                  <Mail className="h-4 w-4" />
                  gphit@gmail.com (Department)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* External Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-primary-foreground/20 pt-8">
          {externalLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm opacity-80 transition-opacity hover:opacity-100"
            >
              {link.title}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Information Technology Department, Government Polytechnic Himatnagar.</p>
          <p className="mt-1">All rights reserved.</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs">Developed by @cyberidfc</span>
            <a
              href="https://www.instagram.com/cyberidfc/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 opacity-70 transition-opacity"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};