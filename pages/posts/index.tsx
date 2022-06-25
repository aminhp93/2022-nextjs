import * as React from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import axios from 'axios';

export interface IProps {
  posts: any;
}

export default function PostList({ posts }: IProps) {
  console.log(posts);
  const router = useRouter();

  const handleClickPush = () => {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    });
  };
  console.log('client');

  return (
    <div>
      PostList
      <div>
        <Link href="/posts/create">
          <a>Test link</a>
        </Link>
      </div>
      <div>
        <Button onClick={handleClickPush}>Use router push</Button>
      </div>
      {posts.map((i) => {
        return <div key={i.id}>{i.id}</div>;
      })}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('static props');
  const res: any = await axios({
    url: `https://testapi.io/api/aminhp93/resource/note/`,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    method: 'GET',
  });
  console.log(res.data);
  return {
    props: {
      posts: res.data.data,
    },
  };
};

// export const getServerSideProps = () => {};
