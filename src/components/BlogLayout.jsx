import * as React from 'react';
import { Link } from 'gatsby';

/* Components */
import Layout from './Layout';

export default function BlogLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;

  return (
    <Layout title={title} description={description}>
      {children}
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      <Link to="/">&larr; Back</Link>
    </Layout>
  );
}
