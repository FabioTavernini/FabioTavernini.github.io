"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Avatar
} from "@nextui-org/react";

// Define the menu items
const menuItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Nav() {
  // Use useReducer to toggle the menu state
  const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);
  const pathname = usePathname();

  // Helper function to determine active link color
  const getLinkColor = (href: string) => (pathname === href ? "primary" : "foreground");

  return (
    <Navbar shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* Left section with brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden pointer-events-none" // Adding pointer-events-none to this element
        />
        <NavbarBrand>
          <Avatar size="md" src="/images/portrait.webp" className="mr-5" />
          <Link href="/" className="font-bold text-inherit">
            Fabio Tavernini
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Center section with links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.path}>
            <Link href={item.path} color={getLinkColor(item.path)}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right section for mobile menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              className="w-full"
              href={item.path}
              color={getLinkColor(item.path)}
              size="lg"
              onPress={() => setIsMenuOpen()} // Close the menu on link press
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
