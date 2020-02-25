
import { Row, Col, Carousel } from 'antd';
import 'antd/dist/antd.css';

import Head from "next/head";
import Link from "next/link";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const AppName = "EnergyAcupuncture";

const Index = () => (
  <div>
    <Head>
      <title>{AppName}</title>
    </Head>

    <Header appName={AppName} />
    <Body appName={AppName} />
    <Footer appName={AppName} />
  </div>
);

export default Index;