import { NextPage } from 'next';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
  return <div>ABout</div>;
};

About.Layout = MainLayout;

export default About;
