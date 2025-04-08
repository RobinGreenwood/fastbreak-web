'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import type { SerializedHeadingNode, SerializedTextNode } from '@payloadcms/richtext-lexical'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  const headerContent = richText?.root.children.find((child) => child.type === 'heading') as
    | SerializedHeadingNode
    | undefined
  const otherContent = richText?.root.children.filter((child) => child.type !== 'heading')

  return (
    <div className="relative flex items-center justify-center text-white" data-theme="dark">
      <div className="flex flex-col justify-center items-center">
        <div className="w-44 select-none items-center mb-8">
          {media && typeof media === 'object' && (
            <Media fill={false} imgClassName="z-10 object-cover" priority resource={media} />
          )}
        </div>
        <div className="flex flex-col gap-6 container mb-8 z-10 relative items-center justify-center max-w-[44rem] text-center">
          {headerContent?.children?.[0] && (
            <h1 className="effect-font-hero effect-font-gradient text-4xl sm:text-6xl font-medium">
              {(headerContent.children[0] as SerializedTextNode).text}
            </h1>
          )}

          {otherContent && otherContent.length > 0 && richText && (
            <RichText
              data={{ ...richText, root: { ...richText.root, children: otherContent } }}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink className="rounded-full" size={'lg'} {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
