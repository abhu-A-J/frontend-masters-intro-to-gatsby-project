module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.abhushanaj.dev',
    description:
      'Frontend Maters course to understand how to use Gatsby by @jlengstorf',
    title: 'Understanding Gatsby',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: [
    // plugin for adding react-helmet
    'gatsby-plugin-react-helmet',

    // plugin to add file system
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },

    // plugin to create automatic pages from posts folder
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },

    // lugin to start adding mdx
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/BlogLayout.jsx'),
        },
      },
    },

    // plugins to setup image
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
