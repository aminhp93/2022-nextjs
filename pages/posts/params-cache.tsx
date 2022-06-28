import { GetServerSidePropsContext } from 'next';
import * as React from 'react';
import axios from 'axios';

export interface IPostCreateProps {
  post: any;
}

export default function PostParamsCache(props: IPostCreateProps) {
  console.log(props);
  return <div>PostParamsCache {props.post?.content}</div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 's-maxage=5');

  await new Promise((res) => setTimeout(res, 3000));

  const postId = context.query.postId;
  if (!postId) {
    return {
      props: {
        query: context.query,
      },
    };
  }

  const res: any = await axios({
    url: `https://testapi.io/api/aminhp93/resource/note/${postId}`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    method: 'GET',
  });
  console.log(res.data);

  return {
    props: {
      query: context.query,
      post: res.data,
    },
  };
}
