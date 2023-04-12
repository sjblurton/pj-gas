import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string | undefined;
  description?: string | undefined;
}
const removeLeadingSlash = (string: string) =>
  string.charAt(0) === "/" ? string.slice(1) : string;

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const Seo = ({ description, title }: SEOProps) => {
  const { pathname } = useRouter();
  const path =
    pathname === "/"
      ? "Home"
      : capitalizeFirstLetter(removeLeadingSlash(pathname));
  const defaultTitle = "JP Gas and Plumbing, Gas Safe Registered";
  const defaultDescription =
    "Gas Safe Registered, Gas, Heating, and Plumbing in Hull, Hessle, and surrounding areas.";
  const pageTitle = title ? `${path} | ${title}` : `${path} | ${defaultTitle}`;
  const pageDescription = description ? description : defaultDescription;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:locale" content="en_GB" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
