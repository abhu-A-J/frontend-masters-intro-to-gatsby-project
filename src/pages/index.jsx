import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

/* Components */
import Layout from '../components/Layout';

/* Styling */
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query getAllBlogs {
      allMdx {
        nodes {
          id
          slug
          frontmatter {
            title
            date(fromNow: true)
          }
        }
      }
    }
  `);

  const posts = data?.allMdx?.nodes;

  return (
    <>
      <Layout>
        <div className={imageWrapper}>
          <StaticImage
            src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
            alt="Alternate text for the image"
            width={300}
            height={300}
            placeholder="dominantColor"
          />
        </div>
        <h1>Index page</h1>
        <Link to="/about">About page</Link>
        <h2>Check all my recent blogs</h2>
        <ul style={{ display: 'block' }}>
          {posts.map((post) => {
            return (
              <li key={post.id} style={{ marginTop: '10px' }}>
                <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
                <small>Posted: {post.frontmatter.date}</small>
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}
