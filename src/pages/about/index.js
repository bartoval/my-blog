/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
/* App imports */
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Utils from '../../utils';
import * as style from './index.module.less';

const About = ({ data: { profilePhoto, skillIcons, toolIcons } }) => {
  return (
    <Layout>
      <SEO
        title="About"
        description="A brief summary of this blog and my developer work"
        path="about"
      />
      <div className={style.container}>
        <div className={style.photo}>
          <Img fluid={profilePhoto.childImageSharp.fluid} />
        </div>
        <div className={style.content}>
          <h1>Heyo folks</h1>
          <p>
            I'm a Web and Mobile Developer,
            <br />
            I spend my whole day, practically every day, working with HTML, CSS,
            and JavaScript; dabbling with Node.js
            and inhaling a wide variety of potentially useless information
            through a few hundred RSS feeds.
            <br />
            I do my best to stay on top of changes in the state of the art so
            that I can enjoy work that challenges me to learn something new and
            stretch in a different direction.
            <br />
            I build Websites and Mobile Apps ... I do it well.
            <br />
          </p>
          <br />
          <h3>That's what I like</h3>
          <ImageList edges={skillIcons.edges} />
          <h3>Tools</h3>
          <ImageList edges={toolIcons.edges} />
        </div>
      </div>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    skillIcons: PropTypes.object.isRequired,
    toolIcons: PropTypes.object.isRequired,
  }),
};

const ImageList = ({ edges }) => (
  <div className={style.iconsContainer}>
    {edges
      .sort((edgeA, edgeB) =>
        edgeA.node.name.toLowerCase() > edgeB.node.name.toLowerCase() ? 1 : -1,
      )
      .map(({ node: { name, childImageSharp } }) => (
        <div className={style.iconWrapper} key={name}>
          <Img
            fixed={childImageSharp.fixed}
            alt={name + ' logo'}
            title={name}
          />
          <label>
            {iconsNameMap[name] ? iconsNameMap[name] : Utils.capitalize(name)}
          </label>
        </div>
      ))}
  </div>
);

ImageList.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    skillIcons: allFile(filter: { dir: { regex: "/about/skills$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    toolIcons: allFile(filter: { dir: { regex: "/about/tools$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;
// Use to set specific icons names
const iconsNameMap = {
  css: 'CSS',
  html: 'HTML',
  jquery: 'JQuery',
  nodejs: 'Node.js',
  vuejs: 'Vue.js',
  gruntjs: 'Grunt.js',
};

export default About;
