import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="About Me"
        description="Se. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
