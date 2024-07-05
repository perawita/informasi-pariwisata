"use client";

import React, { useState } from "react";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu"; // Adjust imports as per your actual file structure
import { cn } from "@/utils/cn";

interface HeaderProps {
  data?: { href: string; name: string }[];
}

export function Header({ data }: HeaderProps) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" data={data} /> 
      <p className="text-black dark:text-white">
        {/* The Navbar will show on top of the page */}
      </p>
    </div>
  );
}

interface NavbarProps {
  className?: string;
  data?: { href: string; name: string }[];
}

function Navbar({ className, data }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {data?.map((item, index) => (
          <HoveredLink key={index} href={item.href}>
            {item.name}
          </HoveredLink>
        ))}
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
