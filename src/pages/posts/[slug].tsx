import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Layout } from "@/components/layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {
        post: undefined,
      },
    };
  }

  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

const PostLayout: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Layout title={post.title} desc="falopa">
      <article className="prose prose-lg">
        <h1>{post.title}</h1>
        <time>{format(parseISO(post.date), "LLLL d, yyyy")}</time>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </Layout>
  );
};

export default PostLayout;
