import * as React from 'react';
import { ILayout } from '@/models/index';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

export function MainLayout({ children }: ILayout) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
