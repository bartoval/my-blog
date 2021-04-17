import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoGithub,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoGithub />,
    url: 'https://github.com/bayesianforce',
    tooltip: 'Github',
  },
];

interface AboutProps { }

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About Me</h2>
        <p>
          I spend my whole day, practically every day, working with HTML, CSS, and JavaScript,
          dabbling with Node.js and inhaling a wide variety of potentially useless information through a few hundred RSS feeds.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>Hey there, what’s up?</h2>
        <p>
          I'm a Developer focusing on Frontend with some years of experience as a Full Stack.
          My default go-to framework is React but I'm fine with Vue too, however in my opinion having Knowledge about Javascript and Web architectures are more important and give you a flexible mindset.
          I do my best to stay on top of changes in the state of the art so that I can enjoy work that challenges me to learn something new and stretch in a different direction.
        </p>
        <p>
          Ah ok, I also have a MS degree in Computer Engineering... just to find an alternative to Stack Overflow &#128517;.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
