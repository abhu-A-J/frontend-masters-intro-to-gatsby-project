import * as React from 'react';
import { Link } from 'gatsby';

/* Components */
import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <>
      <Layout>
        <h1>Index page</h1>
        <Link to="/about">About page</Link>
      </Layout>
    </>
  );
}
