import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <main>
      <h1>Hello Frontend Master</h1>

      <Link to="/about" activeClassName="active">
        Go to about
      </Link>
    </main>
  );
}
