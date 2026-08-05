import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingContact } from "@/components/FloatingContact";
import { SiteNav } from "@/components/SiteNav";
import { HomePage } from "@/routes/index";
import { AboutPage } from "@/routes/about";
import { ServicesPage } from "@/routes/services";
import { PortfolioPage } from "@/routes/portfolio";
import { ContactPage } from "@/routes/contact";
import { DesignPage } from "@/routes/design";
import { Link } from "@/lib/router";

const pages = { "/": HomePage, "/about": AboutPage, "/services": ServicesPage, "/portfolio": PortfolioPage, "/contact": ContactPage, "/design": DesignPage } as const;

function NotFoundPage() {
  return <div className="flex min-h-[60vh] items-center justify-center px-4 text-center"><div><h1 className="font-serif text-7xl">404</h1><p className="mt-4 text-muted-ink">Page not found.</p><Link to="/" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas">Return home</Link></div></div>;
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, "") || "/");
  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname.replace(/\/$/, "") || "/");
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);
  const Page = pages[path as keyof typeof pages];
  return <div className="min-h-screen flex flex-col bg-canvas text-ink"><SiteNav /><main className="flex-1">{Page ? <Page /> : <NotFoundPage />}</main><SiteFooter /><FloatingContact /></div>;
}
