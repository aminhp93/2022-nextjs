import * as React from 'react';
import { ILayout } from '@/models/index';

export function EmptyLayout({ children }: ILayout) {
  return <>{children}</>;
}
