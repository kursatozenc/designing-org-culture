import { cohorts } from "@/content/cohorts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://designingorgculture.com";

/** Every page, so the consolidated site is what search engines index rather
 *  than the four older ones it replaces. */
export default function sitemap() {
  const pages = [
    "",
    "/cohorts",
    "/rituals",
    "/partners",
    "/people",
    "/framework",
    "/resources",
    ...cohorts.map((c) => `/cohorts/${c.slug}`),
  ];
  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    priority: path === "" ? 1 : 0.8,
  }));
}
