import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

/* COmponenst */
import Seo from './Seo';

export default function Layout({
  children,
  title = false,
  image = false,
  description = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
