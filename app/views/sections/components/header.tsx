"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/#lokasi">Lokasi</HoveredLink>
        <HoveredLink href="/#story">Sejarah</HoveredLink>
        <HoveredLink href="/#most-populer">Wisata</HoveredLink>
        <HoveredLink href="/#">Tiket</HoveredLink>

        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
          </div>
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
      <div className="absolute top-0 left-5">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Company</span>
          <img
            className="h-8 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Lambang_Kabupaten_Lombok_Tengah.gif/118px-Lambang_Kabupaten_Lombok_Tengah.gif"
            alt="Company Logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
