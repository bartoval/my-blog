import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
  </Layout>
);

export default IndexPage;
