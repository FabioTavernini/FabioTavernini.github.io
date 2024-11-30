"use client";




import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();  // To get the current path and set active link

const getLinkColor = (href: string) => {
  // If href is "/", check for exact match
  if (href === "/") {
    return pathname === "/" ? "primary" : "foreground";
  }
  // For other paths, check if href is included in pathname
  return pathname.includes(href) ? "primary" : "foreground";
};
  // Menu items for mobile menu
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Section: Brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            <Avatar className="mr-2" size="sm" src="/images/portrait.webp"/> Fabio Tavernini</Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Section: Navbar items for desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.path}>
            <Link href={item.path} color={getLinkColor(item.path)}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu: Navbar items for small screens */}
      <NavbarMenu className="min-h-[100vh]">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link
              href={item.path}
              color={getLinkColor(item.path)}
              className="w-full"
              size="lg"
              onPress={() => setIsMenuOpen(false)} // Close the menu when clicking a link
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

