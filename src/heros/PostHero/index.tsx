// import { formatDateTime } from 'src/utilities/formatDateTime'
import React from "react";
import type { Post } from "@/payload-types";
import { Media } from "@/components/Media";
import { formatAuthors } from "@/utilities/formatAuthors";
import { formatDateFull } from "@/utilities/formatDateTime";
import Image from "next/image";

export const PostHero: React.FC<{
  post: Post;
}> = ({ post }) => {
  const {
    categories,
    heroImage,
    populatedAuthors,
    publishedAt,
    title,
    subtitel,
  } = post;
  const authorAvatar = populatedAuthors?.[0]?.avatar as any;

  const hasAuthors =
    populatedAuthors &&
    populatedAuthors.length > 0 &&
    formatAuthors(populatedAuthors) !== "";

  return (
    <div className="container flex flex-col items-center min-h-96 ">
      <div className="w-full lg:grid lg:grid-cols-[1fr_48rem_1fr] py-4">
        <div className="col-start-2 col-span-[48rem] flex flex-col items-center gap-6">
          {publishedAt && (
            <p className="text-xs text-muted-foreground">
              {formatDateFull(publishedAt)}
            </p>
          )}
          <div className="flex flex-col gap-2">
            <h1 className="effect-font-hero effect-font-gradient font-medium text-2xl md:text-5xl">
              {title}
            </h1>
            <h3 className="text-lg font-light text-muted-foreground">
              {subtitel}
            </h3>
          </div>
          {hasAuthors && (
            <div className="flex flex-row gap-2 items-center">
              {authorAvatar?.url && (
                <Image
                  src={authorAvatar.url}
                  width={24}
                  height={24}
                  alt={authorAvatar.alt || populatedAuthors?.[0]?.name}
                  className="w-6 h-6 rounded-full"
                />
              )}
              <p className="text-sm text-muted-foreground">
                {formatAuthors(populatedAuthors)}
              </p>
            </div>
          )}
        </div>

        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <div className="uppercase text-sm mb-6">
            {categories?.map((category, index) => {
              if (typeof category === "object" && category !== null) {
                const { title: categoryTitle } = category;

                const titleToUse = categoryTitle || "Untitled category";

                const isLast = index === categories.length - 1;

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <div className="w-4xl max-w-4xl border border-border rounded-xl overflow-hidden mb-12">
        {heroImage && typeof heroImage !== "string" && (
          <Media
            priority
            imgClassName="-z-10"
            className="max-w-4xl"
            resource={heroImage}
          />
        )}
        {/* <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" /> */}
      </div>
    </div>
  );
};
