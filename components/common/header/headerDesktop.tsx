import * as React from 'react';
import { Box } from '@mui/material';
export interface IHeaderDesktopProps {}

export default function HeaderDesktop(props: IHeaderDesktopProps) {
  return <Box display={{ xs: 'none', lg: 'block' }}>HeaderDesktop</Box>;
}
