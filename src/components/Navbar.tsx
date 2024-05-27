import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Button } from "./Button";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "About",
    id: "about",
  },
  {
    title: "Work",
    id: "work",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>(navItems[0].id);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const onScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <nav className="z-20 overflow-hidden fixed inset-0 h-12 backdrop-blur-md border-b border-border px-8 lg:px-12 flex items-center justify-between">
      <motion.img
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        src="/logo.png"
        alt="Logo"
        className="h-full"
      />
      <ul className="max-sm:hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-8">
        {navItems.map((item, i) => {
          return (
            <motion.li
              initial={{ y: "120%", opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              key={item.id}
              className="relative"
            >
              <a
                className={cn(
                  `text-zinc-400 hover:text-foreground transition-colors duration-300 font-bold`
                )}
                href={`#${item.id}`}
              >
                {item.title}
              </a>
              {item.id === activeSection && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-px bg-primary-gradient"
                />
              )}
            </motion.li>
          );
        })}
      </ul>

      <Button className="max-lg:hidden" asChild variant="outline">
        <motion.a
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          href="#contact"
        >
          Transcribe Today
        </motion.a>
      </Button>
    </nav>
  );
};

export default Navbar;
