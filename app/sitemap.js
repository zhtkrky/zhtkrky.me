import { performRequest } from "@/lib/datocms";

const URL = "https://zhtkrky.me";

const HOME_PAGE_QUERY = `
  query {
    allBlogs(orderBy: _createdAt_DESC) {
      id
      slug
      _firstPublishedAt
    }
  }
`;

export default async function sitemap() {
  const { allBlogs } = await performRequest({ query: HOME_PAGE_QUERY });

  const posts = allBlogs.map(({ slug, _firstPublishedAt }) => ({
    url: `${URL}/${slug}`,
    changeFreq: "daily",
    lastModified: _firstPublishedAt,
  }));

  const routes = [""].map((route) => ({
    url: `${URL}${route}`,
    changeFreq: "daily",
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
