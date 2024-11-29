"use client";




import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();  // To get the current path and set active link

  // Helper function to check if a link is active
  const getLinkColor = (href: string) => (pathname === href ? "primary" : "foreground");

  // Menu items for mobile menu
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* Left Section: Brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Fabio Tavernini</p>
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

