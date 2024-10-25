"use client"

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


import React from "react";

export const Navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Projects",
    "Contact"
  ];


  return (
    <NextUINavbar shouldHideOnScroll maxWidth="xl" position="sticky">

      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>

          <p className="font-bold text-inherit">Fabio Tavernini</p>

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/projects" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
          Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                "foreground"
              }
              className="w-full"
              href={item}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </NextUINavbar>
  );
};
