import * as React from 'react';
import { Link } from 'gatsby';

export default function AboutPage() {
  return (
    <main>
      <h1>This is the about page</h1>
      <Link to="/" activeClassName="active">
        Go to home
      </Link>
    </main>
  );
}
