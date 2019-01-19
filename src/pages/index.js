import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Writing from '../sections/Writing';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Writing />
  </Layout>
);

export default IndexPage;
