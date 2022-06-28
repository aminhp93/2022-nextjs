import * as React from 'react';
import { ILayout } from '@/models/index';
import Link from 'next/link';

export function AdminLayout({ children }: ILayout) {
  return (
    <div>
      <h1>Adminlayout</h1>
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
