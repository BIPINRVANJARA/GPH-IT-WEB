import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "About",
    items: [
      { title: "About Us", href: "/about", description: "Learn about our department" },
      { title: "Infrastructure", href: "/infrastructure", description: "Our facilities and labs" },
      { title: "Faculty", href: "/faculty", description: "Meet our teaching staff" },
      { title: "Testimonials", href: "/testimonials", description: "What students say" },
    ],
  },
  {
    title: "Academics",
    items: [
      { title: "Academic Calendar", href: "/academic-calendar", description: "Important dates" },
      { title: "Curriculum", href: "/curriculum", description: "Course structure" },
      { title: "Student Policy", href: "/student-policy", description: "Rules and guidelines" },
      { title: "Assessment Policy", href: "/assessment-policy", description: "Evaluation criteria" },
      { title: "Mentoring Policy", href: "/mentoring-policy", description: "Student mentorship" },
    ],
  },
  {
    title: "Students",
    items: [
      { title: "Study Material", href: "/study-material", description: "Notes and resources" },
      { title: "Expert Lectures", href: "/expert-lectures", description: "Guest sessions" },
      { title: "Finishing School", href: "/finishing-school", description: "Skill development" },
      { title: "Newsletter", href: "/newsletter", description: "Department updates" },
      { title: "Resources", href: "/resources", description: "Helpful links" },
      { title: "Student Projects", href: "/student-projects", description: "Showcase work" },
    ],
  },
  {
    title: "Placement",
    href: "/placement",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Links",
    href: "/links",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const TopBar = () => (
  <div className="bg-accent text-accent-foreground py-1.5 text-[11px] sm:text-sm">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
      <div className="flex items-center gap-3 sm:gap-4">
        <a href="tel:2772229285" className="flex items-center gap-1.5 hover:underline">
          <Phone className="h-3 w-3" />
          <span>2772229285</span>
        </a>
        <a href="mailto:gphit@gmail.com" className="flex items-center gap-1.5 hover:underline">
          <Mail className="h-3 w-3" />
          <span>gphit@gmail.com</span>
        </a>
      </div>
      <div className="hidden sm:flex items-center gap-1.5 text-xs">
        <MapPin className="h-3 w-3" />
        <span>Government Polytechnic, Himatnagar - 383001</span>
      </div>
    </div>
  </div>
);

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />
      <div className="glass-effect border-b">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <span className="text-lg font-bold text-primary-foreground">IT</span>
            </div>
            <div className="block">
              <p className="text-sm font-semibold text-foreground leading-tight">IT Department</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Govt Polytechnic, Himatnagar</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    location.pathname === subItem.href && "bg-accent/10"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.href!}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                        location.pathname === item.href && "bg-accent/10"
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-12 w-12"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="container py-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="mb-2">
                  {item.items ? (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                        {item.title}
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={item.href!}
                      className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};