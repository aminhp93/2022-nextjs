import * as React from 'react';
import { useRouter } from 'next/router';

export interface IPostProps {}

export default function Post(props: IPostProps) {
  const router = useRouter();
  console.log(router);
  return <div>Post</div>;
}
