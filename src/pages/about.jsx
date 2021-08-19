import * as React from 'react';
import { Link } from 'gatsby';

/* Components */
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <>
      <Layout title="About" description="Learniong Gatsby about page">
        <h1>About page</h1>
        <Link to="/">Back to home page</Link>
      </Layout>
    </>
  );
}
