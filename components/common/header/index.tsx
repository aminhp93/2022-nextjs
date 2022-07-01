import * as React from 'react';
import HeaderMobile from '@/components/common/header/headerMobile';
import HeaderDesktop from '@/components/common/header/headerDesktop';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  );
}
