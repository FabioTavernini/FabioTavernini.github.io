"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation"; // Make sure you are using this hook
import React from "react";

export const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <NextUINavbar shouldHideOnScroll maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Fabio Tavernini</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined} // Consistently set aria-current
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href} isActive={pathname === item.href}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              onClick={() => setIsMenuOpen(false)} // Close the menu when an item is clicked
              aria-current={pathname === item.href ? "page" : undefined} // Ensure consistency
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
