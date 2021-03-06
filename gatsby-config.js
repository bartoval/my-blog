require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Disassembled`,
    author: `Valerio`,
    about: `I'm a developer who spend most of his time programming in Javascript. I'm curious about new frameworks and technologies and I enjoy make weird experiments to understand them in deep. I embrace the Open source culture and other than I like play football and more in general keep me healthy. 
    Currently I'm working at Red Hat, the company behind the Linux Operating system and OpenShift, as a Senior software engineer in the Middleware Networking team, and I'm focusing building a next gen Console for https://skupper.io.
    Moreover I'm contributing to https://www.patternfly.org, an enterprise and accessible design system.`,
    description: `A Personal Blog about coding, technology, methodologies, algorithms, software engineering, browser, javascript, frontend development, react, vue, node`,
    siteUrl: `https://valeriobartolini.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WDK5B9B",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: true, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },

          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-feed`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Turning coffee into code - Personal Blog Minimal`,
        short_name: `Turning coffee into code`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://valeriobartolini.us18.list-manage.com/subscribe/post?u=42a340e97139b214960187d60&amp;id=232ca250eb',
      },
    }
  ],
};
