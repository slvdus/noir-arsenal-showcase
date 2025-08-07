import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";
interface SiteLayoutProps {
  children: ReactNode;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `story-link px-3 py-2 text-sm transition-colors ${
    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"
  }`;

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Mountain className="size-5" aria-hidden />
              Nature's Arsenal
            </motion.span>
          </NavLink>

          <nav className="flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={navLinkClass}>
              Catalog
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <NavLink to="/catalog">
              <Button size="sm" variant="tactile" className="hover-scale">
                Shop Now
              </Button>
            </NavLink>
          </div>
        </div>
      </header>

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="container py-10"
      >
        {children}
      </motion.main>

      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Nature's Arsenal. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/about" className="hover:underline">About</a>
            <a href="/catalog" className="hover:underline">Catalog</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
