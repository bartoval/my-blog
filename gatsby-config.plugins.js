const feedPlugin = require('./gatsby-config.plugins.feed')

module.exports = [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-less',
  'gatsby-plugin-offline',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'Valerio Bartolini Blog',
      short_name: 'Valerio Bartolini',
      start_url: '/',
      background_color: '#0C2744',
      theme_color: '#0C2744',
      display: 'standalone',
      icon: 'src/images/icon.png', // This path is relative to the root of the site.
      legacy: true, // this will add apple-touch-icon links to <head>. Required for versions prior to iOS 11.3.
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/content`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-132882319-1',
      head: true,
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
            showCaptions: true,
          },
        },
        'gatsby-remark-prismjs',
      ],
    },
  },
  feedPlugin,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-robots-txt`,
]
