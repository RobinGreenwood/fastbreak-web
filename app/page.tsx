import Image from "next/image";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Home() {
  return (
    <div className="bg-black items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
        {/* <div className="absolute inset-0 block border-b transition-all border-neutral-100 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75"></div> */}
        <div className="mx-auto w-full px-3 relative max-w-screen-lg lg:px-4 xl:px-0">
          <div className="flex h-14 items-center justify-between">
            <div className="grow basis-0">
              <Image
                src="/fastbreak_darkmode.svg"
                alt="Fastbreak Logo"
                width={120}
                height={18}
                priority
              />
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800">
                    Getting started
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <span className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="hidden grow basis-0 justify-end gap-2 lg:flex">
              <a
                href="https://app.formbricks.com/s/cm7uhrjvq0000l703slisrvf8"
                className="transition-all border-black bg-black text-white hover:bg-neutral-800 hover:ring-4 hover:ring-neutral-200 font-semibold flex h-8 items-center rounded-full border px-4 text-sm dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-50 dark:hover:ring-white/10"
              >
                Join beta
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center overflow-hidden md:h-[calc(100vh-100px)] pt-2 mx-auto w-full max-w-5xl px-6 md:max-w-7xl">
        <div className="animate-hero-text-slide-up-fade z-10 flex flex-col items-center justify-center">
          <Image
            src="/cubic_logo.png"
            alt="Fastbreak Logo"
            width={200}
            height={200}
          />

          <div className="flex flex-col mx-auto max-w-3xl text-center">
            <h1 className="text-[5em] leading-[1.1em] font-bold my-3 max-w-2xl">
              Animated titles for startups
            </h1>
            <div className="flex flex-col">
              <p className="text-xl text-gray-400">
                Keep eyeballs stuck on your next ad or product launch video.
              </p>
              <p className="text-xl text-gray-400">
                You control the message.
                <span className="text-gray-200 font-semibold ms-2">
                  We make it look f*cking great.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* <ol className="list-inside list-decimal gap-2 text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="tracking-[-.01em]">Enter a copy/script </li>
          <li className="tracking-[-.01em]">
            Press a button{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              generate
            </code>
          </li>
          <li className="mb-2 tracking-[-.01em]">Export video</li>
        </ol> */}

        <div className="flex gap-4 items-center flex-row sm:flex-row mt-6">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-semibold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join beta
          </a>
          <a>See example</a>
        </div>
      </div>
      <div className="mx-auto w-full px-3 relative max-w-screen-lg lg:px-4 xl:px-0">
        <div className="grid grid-cols-1 items-baseline gap-x-6 gap-y-12 pb-24 pt-24 sm:grid-cols-4">
          <div className="flex flex-col items-start gap-2 text-sm">
            <p className="text-gray-100 font-medium">@ 2025 Fastbreak</p>
            {/* Polyfund / / Hatch / Stash */}
            <p className="text-gray-300">A project by Nectar Labs UG</p>
            <p className="text-gray-300">
              Our mission is to add a little spice to your announcements.
            </p>
          </div>
          <div className="flex flex-inline justify-start col-span-2 items-center gap-2 text-sm">
            <p className="text-gray-400 font-medium">Backed by</p>
            <Image
              width={"12"}
              height={"12"}
              className="w-[130px]"
              src="/techstars-white.svg"
              alt="Techstars logo"
            />
          </div>
          <div className="flex flex-col sm:items-end gap-2 text-sm">
            <a
              href="mailto:robincgreenwood@gmail.com"
              className="text-gray-200 hover:text-gray-600 underline font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
