import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

import { performRequest } from "@/lib/datocms";
import { metaTagsFragment } from "@/lib/fragments";
import { toNextMetadata } from "react-datocms";

const HOME_PAGE_QUERY = `
  query {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      title
      subtitle
    }
    allBlogs(orderBy: _createdAt_DESC) {
      id
      title
      slug
      excerpt
      _status
      _firstPublishedAt
    }
  }
  ${metaTagsFragment}
`;

export async function generateMetadata() {
  const { site, home } = await performRequest({ query: HOME_PAGE_QUERY });

  return toNextMetadata([...site.favicon, ...home.seo]);
}

export default async function Home() {
  const { allBlogs, home } = await performRequest({ query: HOME_PAGE_QUERY });

  return (
    <main>
      <Header title={home.title} content={home.subtitle} />
      <Writing allBlogs={allBlogs} />
      <Projects />
      <Footer />
    </main>
  );
}
