import * as React from 'react';
import { ILayout } from '@/models/index';
import Link from 'next/link';

export function MainLayout({ children }: ILayout) {
  return (
    <div>
      <h1>Mainlayout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
