import Post from "@/components/Post";
import Footer from "@/components/Footer";
import Link from "next/link";

import { notFound } from "next/navigation";
import { Image, toNextMetadata } from "react-datocms";
import { performRequest } from "@/lib/datocms";
import { getReadingTime, getDateTimeFormat } from "@/lib/utils";
import { responsiveImageFragment, metaTagsFragment } from "@/lib/fragments";

const BLOG_PAGE_QUERY = `
  query PageContent($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
      blog(filter: { slug: { eq: $slug } }) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          id
          title
          slug
          content
          _firstPublishedAt
          featuredimage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
      }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`;

export async function generateMetadata({ params }) {
  const { blog, site } = await performRequest({
    query: BLOG_PAGE_QUERY,
    variables: {
      slug: params.slug,
    },
  });

  if (!blog) return notFound();

  return toNextMetadata([...site.favicon, ...blog.seo]);
}

export default async function Page({ params }) {
  const { blog, site } = await performRequest({
    query: BLOG_PAGE_QUERY,
    variables: {
      slug: params.slug,
    },
  });

  if (!blog) return notFound();

  return (
    <>
      <h1
        className="
          text-4xl
          font-bold
          leading-tight
          mb-4
          "
      >
        {blog.title}
      </h1>
      <div className="mb-4 flex justify-between">
        <div
          className="dark:text-neutral-400  
          text-neutral-500 "
        >
          <span>{getDateTimeFormat(blog._firstPublishedAt)}</span>
          <span className="mx-2">•</span>
          <span>{getReadingTime(blog.content)} min read</span>
        </div>
        <Link
          href="/"
          className="border-b-[1px] dark:text-neutral-400 dark:border-neutral-500 dark:hover:border-neutral-300 dark:hover:text-neutral-300 
          text-neutral-500 hover:border-neutral-600 hover:text-neutral-600
          border-neutral-400 
          transition-colors duration-200 ease-in-out"
        >
          Back
        </Link>
      </div>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image data={blog.featuredimage.responsiveImage} />
      <Post>
        <div
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </Post>
      <Footer />
    </>
  );
}
