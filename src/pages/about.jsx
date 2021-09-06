import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/* Components */
import Layout from '../components/Layout';

export const query = graphql`
  query cockTailImage {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  const image = getImage(data.file);
  return (
    <>
      <Layout title="About" description="Learniong Gatsby about page">
        <GatsbyImage image={image} alt="Alternative text for image" />
        <h1>About page</h1>
        <Link to="/">Back to home page</Link>
      </Layout>
    </>
  );
}
