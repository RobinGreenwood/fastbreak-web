// import { cn } from "@/utilities/ui";
import Link from "next/link";
import React from "react";

import type { Page, Post } from "@/payload-types";

import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Image from "next/image";

type NavMenuType = {
  items: {
    link: {
      type?: ("reference" | "custom") | null;
      newTab?: boolean | null;
      reference?:
        | {
            relationTo: "pages";
            value: number | Page;
          }
        | {
            relationTo: "posts";
            value: number | Post;
          }
        | null;
      url?: string | null;
      label: string;
    };
    id?: string | null;
  }[];
};

export const NavMenu: React.FC<NavMenuType> = ({ items }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-4 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="col-span-1">
                <ul className="space-y-4">
                  {items
                    .filter(
                      (item) => item.link.reference?.relationTo === "posts"
                    )
                    .map((item, i) => (
                      <li key={i}>
                        <NavigationMenuLink
                          asChild
                          className="rounded-xl w-12 max-w-12"
                        >
                          <a
                            href={
                              (typeof item.link.reference?.value === "object" &&
                              item.link.reference?.value !== null &&
                              "slug" in item.link.reference.value
                                ? `/blog/${item.link.reference.value.slug}`
                                : "#") as string
                            }
                            target={item.link.newTab ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="rounded-xl w-12 max-w-12"
                          >
                            <div className="relative flex h-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md">
                              <div className="mb-2 text-sm font-medium mx-2 py-2">
                                {item.link.label}
                              </div>
                              <Image
                                className="relative "
                                height={100}
                                src="/assets/Intro-lines.png"
                                alt="Techstars"
                                width={100}
                              />
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="col-span-1">
                <ul className="space-y-4 mt-3">
                  {items
                    .filter(
                      (item) => item.link.reference?.relationTo === "pages"
                    )
                    .map((item, i) => (
                      <li key={i}>
                        <ListItem
                          className="text-muted-foreground hover:text-primary font-normal"
                          href={
                            (typeof item.link.reference?.value === "object" &&
                            item.link.reference?.value !== null &&
                            "slug" in item.link.reference.value
                              ? `/${item.link.reference.value.slug}`
                              : "#") as string
                          }
                          title={item.link.label}
                        />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
