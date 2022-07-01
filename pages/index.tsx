import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from './_app';
import { FeaturedWorks, RecentPosts, Hero } from '@/components/home';
import { Box } from '@mui/material';
import { Seo } from '@/components/common';
import BashProfile from '@/pages/bash-profile';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: '2022 nextjs',
          description:
            'Step by step tutorials to build a full CRUD website using NextJS for beginners',
          url: 'https://2022-nextjs-aminhp93.vercel.app/',
          thumbnailUrl:
            'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
        }}
      />
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
    // <BashProfile />
  );
};

Home.Layout = MainLayout;

export default Home;
