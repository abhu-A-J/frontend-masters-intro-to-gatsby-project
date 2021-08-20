import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

/* Components */
import Layout from '../../components/Layout';

export const query = graphql`
  query getSanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      date(fromNow: true)
      youtubeID
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;
  return (
    <Layout title={episode.title} description={episode.description}>
      <GatsbyImage image={getImage(episode.image.asset)} />
      <h1>{episode.title}</h1>
      <p>
        (Posted on {episode.date}) - {episode.description}
      </p>
    </Layout>
  );
}
