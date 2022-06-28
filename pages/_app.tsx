import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { EmptyLayout } from '@/components/layout';
import { ILayout } from '@/models/index';

export type NextPageWithLayout = NextPage & {
  Layout?: (props: ILayout) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />)
    </Layout>
  );
}
