import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const mission = footerData?.mission || ''
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto bg-background text-white">
      <div className="container py-8 gap-8 grid grid-cols-8 pb-24">
        <div className="flex flex-col justify-start gap-8 md:min-w-[18.75rem] col-span-2">
          <p className="text-sm text-muted-foreground">A project by Nectar Labs UG</p>
          <p className="text-sm text-muted-foreground flex flex-inline gap-1.5 items-center">
            Backed by{' '}
            <span>
              <Image
                src="/assets/techstars-darkmode.svg"
                alt="Techstars"
                width={100}
                height={100}
              />
            </span>
          </p>
          <div className="flex flex-row gap-2">
            <a
              href=""
              className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full hover:bg-slate-3"
            >
              <Image src="/assets/footer-x.svg" alt="LinkedIn" width={32} height={32} />
            </a>
            <a
              href=""
              className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 rounded-full hover:bg-slate-3"
            >
              <Image src="/assets/footer-linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </a>
          </div>
          {/* <p className="text-sm text-muted-foreground">{mission}</p> */}
        </div>

        <nav className="flex flex-col col-span-2 gap-8">
          <p className="text-sm text-secondary-foreground">Resources</p>
          {/* <ThemeSelector /> */}
          {/* <nav className="flex flex-col md:flex-row gap-4"> */}

          {navItems.map(({ link }, i) => {
            return <CMSLink className="text-muted-foreground text-sm" key={i} {...link} />
          })}
          {/* </nav> */}
        </nav>
      </div>
    </footer>
  )
}
