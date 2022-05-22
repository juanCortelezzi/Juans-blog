import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ReadingTimeMetadata } from "@/types";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, Post } from "contentlayer/generated";
import { Layout } from "@/components/layout";
import { Image } from "@/components/image";

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
  const MDXContent = useMDXComponent(post.body.code);
  const metadata = post.readingTime as ReadingTimeMetadata;
  return (
    <Layout title={post.title} desc="falopa">
      <article className="prose-sm sm:prose">
        <h1 className="mb-2">{post.title}</h1>
        <time>
          {format(parseISO(post.date), "LLLL d, yyyy")} - {metadata.text} -{" "}
          {metadata.words} words
        </time>
        <p>{post.description}</p>
        <Image src={post.image} alt={`Post thumbnail ${post.image}`} />
        <MDXContent components={{ Image }} />
      </article>
    </Layout>
  );
};

export default PostLayout;
