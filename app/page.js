import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";

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
      projects {
        id
        title
        description
        link
      }
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
  const {
    allBlogs: blogs,
    home: { title, subtitle, projects },
  } = await performRequest({ query: HOME_PAGE_QUERY });

  return (
    <main>
      <Header title={title} content={subtitle} />
      <Writing blogs={blogs} />
      <Projects projects={projects} />
    </main>
  );
}
