import { Box } from '@mui/material';
import * as React from 'react';
import { MainLayout } from '@/components/layout';

export interface IBlogProps {}

export default function Blog(props: IBlogProps) {
  return <Box>Blog</Box>;
}

Blog.Layout = MainLayout;
