import Post from "@/components/Post";
import Button from "@/components/ui/Button";
import ZoomIn from "@/components/animations/ZoomIn";
import FadeUp from "@/components/animations/FadeUp";

import { notFound } from "next/navigation";
import { Image, toNextMetadata } from "react-datocms";
import { performRequest } from "@/lib/datocms";
import { getReadingTime, getDateTimeFormat } from "@/lib/utils";
import { responsiveImageFragment, metaTagsFragment } from "@/lib/fragments";
import { backIcon } from "@/lib/icons";

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
      <div className="mb-16">
        <div className="mb-8 flex items-center justify-start">
          <Button link="/"> {backIcon} Back to Home</Button>
        </div>

        <FadeUp>
          <h1
            className="
          text-4xl
          font-bold
          leading-tight
          my-4
          "
          >
            {blog.title}
          </h1>
          <div className="mb-2">
            <div className="dark:text-neutral-400 text-neutral-500">
              <span>{getDateTimeFormat(blog._firstPublishedAt)}</span>
              <span className="mx-2">•</span>
              <span>{getReadingTime(blog.content)} min read</span>
            </div>
          </div>
          <ZoomIn>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image className="rounded-md" data={blog.featuredimage.responsiveImage} />
          </ZoomIn>
          <Post>
            <div
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
          </Post>
        </FadeUp>
      </div>
    </>
  );
}
