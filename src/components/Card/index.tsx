"use client";
import { cn } from "@/utilities/ui";
import useClickableCard from "@/utilities/useClickableCard";
import Link from "next/link";
import React, { Fragment } from "react";
import Image from "next/image";

import type { Post, Media } from "@/payload-types";

// import { Media as MediaComponent } from '@/components/Media'
import { User } from "@/payload-types";
// import { Thumbnail } from '@payloadcms/ui'
import { formatDatePretty } from "@/utilities/formatDateTime";

export type CardPostData = Pick<
  Post,
  | "slug"
  | "categories"
  | "meta"
  | "title"
  | "authors"
  | "publishedAt"
  | "populatedAuthors"
  | "heroImage"
>;

export const Card: React.FC<{
  alignItems?: "center";
  className?: string;
  doc?: CardPostData;
  showCategories?: boolean;
  title?: string;
  // author?: string;
  // publishedAt?: string;
}> = (props) => {
  const { card, link } = useClickableCard({});
  const {
    className,
    doc,
    showCategories,
    title: titleFromProps,
    // author,
    // publishedAt,
  } = props;

  const {
    slug,
    categories,
    meta,
    title,
    populatedAuthors,
    publishedAt: publishedAtFromDoc,
  } = doc || {};
  const { description, image: metaImage } = meta || {};

  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0;
  const titleToUse = titleFromProps || title;
  const sanitizedDescription = description?.replace(/\s/g, " "); // replace non-breaking space with white space
  const href = `/blog/${slug}`;

  const populatedAuthor = populatedAuthors?.[0] as User | undefined;
  const authorAvatar = populatedAuthor?.avatar as any;
  const heroImage = doc?.heroImage as Media | undefined;
  const thumbnail =
    heroImage?.sizes?.small?.url || heroImage?.sizes?.thumbnail?.url;

  console.log("Hero Image:", doc?.heroImage);
  console.log("Thumbnail URL:", thumbnail);

  return (
    <article className={cn("hover:cursor-pointer", className)} ref={card.ref}>
      <Link href={href} ref={link.ref}>
        <div className="w-full h-[280px] overflow-hidden relative border border-border rounded-xl">
          {heroImage && typeof heroImage !== "string" && thumbnail && (
            <Image
              src={thumbnail}
              alt={titleToUse || "Hero Image"}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          )}
        </div>
      </Link>
      {/* <div className="relative w-full ">
        {!metaImage && <div className="">No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <MediaComponent resource={metaImage} size="33vw" />
        )}
      </div> */}
      <div className="p-4">
        {showCategories && hasCategories && (
          <div className="uppercase text-sm mb-4">
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === "object") {
                    const { title: titleFromCategory } = category;

                    const categoryTitle =
                      titleFromCategory || "Untitled category";

                    const isLast = index === categories.length - 1;

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <>
            <h3 className="text-lg font-semibold ">
              <Link
                className="not-prose text-primary font-normal"
                href={href}
                ref={link.ref}
              >
                {titleToUse}
              </Link>
            </h3>

            <div className="flex py-2 flex-row gap-2 text-[0.8em] items-center">
              {populatedAuthor?.name && (
                <>
                  {authorAvatar?.url ? (
                    <Image
                      width={24}
                      height={24}
                      src={authorAvatar.url}
                      alt={authorAvatar.alt || populatedAuthor.name}
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <p>No avatar</p>
                  )}
                  <p className="text-primary">{populatedAuthor.name}</p>
                  <span>{"·"}</span>
                </>
              )}

              {publishedAtFromDoc && (
                <p className="text-muted-foreground">
                  {formatDatePretty(publishedAtFromDoc)}
                </p>
              )}
            </div>
          </>
        )}
        {description && (
          <div className="mt-2">
            {description && <p>{sanitizedDescription}</p>}
          </div>
        )}
      </div>
    </article>
  );
};
