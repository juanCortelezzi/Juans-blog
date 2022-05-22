import type { NextPage } from "next";
import type { ReadingTimeMetadata } from "@/types";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Image from "next/image";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard(post: Post) {
  const metadata = post.readingTime as ReadingTimeMetadata;
  const router = useRouter();
  return (
    <div
      className="card card-compact card-bordered bg-base-300 shadow-xl not-prose rounded-lg cursor-pointer"
      onClick={() => router.push(post.url)}
    >
      <figure className="relative h-72">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </figure>
      <div className="card-body prose-sm">
        <h2 className="card-title">{post.title}</h2>
        <time>
          {format(parseISO(post.date), "LLLL d, yyyy")} - {metadata.text} -{" "}
          {metadata.words} words
        </time>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

const PostsPage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout
      title="JBC - Blog"
      desc="List of all blogs"
      className="w-full prose-sm sm:prose sm:max-w-none"
    >
      <h1>Blog Posts</h1>
      <div className="w-full grid grid-cols-1 gap-8">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </Layout>
  );
};

export default PostsPage;
