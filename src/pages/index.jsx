import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query getSiteTitle {
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
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello Frontend Master</h1>

        <Link to="/about" activeClassName="active">
          Go to about
        </Link>
      </main>
    </>
  );
}