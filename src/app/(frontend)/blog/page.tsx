import type { Metadata } from "next/types";

import { CollectionArchive } from "@/components/CollectionArchive";
import { PageRange } from "@/components/PageRange";
import { Pagination } from "@/components/Pagination";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import PageClient from "./page.client";

export const revalidate = 3600; // 1 hour

export default async function Page() {
  try {
    const payload = await getPayload({ config: configPromise });

    const posts = await payload.find({
      collection: "posts",
      depth: 1,
      limit: 12,
      overrideAccess: false,
      select: {
        title: true,
        slug: true,
        categories: true,
        meta: true,
        authors: true,
        publishedAt: true,
        heroImage: true,
      },
    });

    return (
      <div className="pt-24 pb-24">
        <PageClient />
        <div className="container mb-16">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="effect-font-hero effect-font-gradient font-medium text-2xl md:text-5xl">
              Blog
            </h1>
          </div>
        </div>

        <div className="container mb-8">
          <PageRange
            collection="posts"
            currentPage={posts.page}
            limit={12}
            totalDocs={posts.totalDocs}
          />
        </div>

        <CollectionArchive posts={posts.docs} />

        <div className="container">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} />
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return (
      <div className="pt-24 pb-24">
        <div className="container">
          <h1 className="text-2xl font-bold">Error loading blog posts</h1>
          <p className="mt-4">Please try again later.</p>
        </div>
      </div>
    );
  }
}

export function generateMetadata(): Metadata {
  return {
    title: `Fastbreak Blog`,
  };
}
