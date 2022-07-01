import { Box, Container, Divider } from '@mui/material';
import * as React from 'react';
import { MainLayout } from '@/components/layout';
import Link from 'next/link';
import { PostItem } from '@/components/blog';
import { GetStaticProps } from 'next';
import { getPostList } from '@/utils';

export interface IBlogProps {
  posts: any[];
}

export default function Blog({ posts }: IBlogProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <PostItem post={post} />
                  </a>
                </Link>
                <Divider sx={{ my: 3 }} />
              </li>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

Blog.Layout = MainLayout;

export const getStaticProps: GetStaticProps<IBlogProps> = async () => {
  const postList = await getPostList();
  return {
    props: {
      posts: postList,
    },
  };
};
