"use client";

import React from "react";

import type { Header as HeaderType } from "@/payload-types";

// import { CMSLink } from '@/components/Link'
import { NavMenu } from "@/components/NavMenu";
// import Link from 'next/link'
// import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || [];

  return (
    <nav className="flex gap-3 items-center">
      {/* <NavMenu items={navItems} /> */}
    </nav>
  );
};
