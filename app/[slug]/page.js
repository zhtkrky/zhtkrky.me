import Post from "@/components/Post";
import { AnimatedLinkButton } from "@/components/ui/Button";
import ZoomIn from "@/components/animations/ZoomIn";
import FadeUp from "@/components/animations/FadeUp";

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
  const {
    blog: { title, _firstPublishedAt, content, featuredimage },
  } = await performRequest({
    query: BLOG_PAGE_QUERY,
    variables: {
      slug: params.slug,
    },
  });

  if (!content) return notFound();

  return (
    <>
      <div className="mb-16">
        <FadeUp>
          <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
          <div className="mb-2">
            <div className="dark:text-neutral-400 text-neutral-500">
              <span>{getDateTimeFormat(_firstPublishedAt)}</span>
              <span className="mx-2">•</span>
              <span>{getReadingTime(content)} min read</span>
            </div>
          </div>
          <ZoomIn>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image className="rounded-none md:rounded-md" data={featuredimage.responsiveImage} />
          </ZoomIn>
          <Post>
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </Post>
        </FadeUp>
        <AnimatedLinkButton content="Back to Home" link="/" />
      </div>
    </>
  );
}
