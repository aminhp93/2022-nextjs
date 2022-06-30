import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from './_app';
import { FeaturedWorks, RecentPosts, Hero } from '@/components/home';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
