import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="text-lg">
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout
      title="Frontend Testing"
      desc="Simple Frontend template, just Ctrl + c and Ctrl + v"
      className="w-full prose prose-lg"
    >
      <h1>Frontend Testing</h1>
      <p>
        This is a blog site, here you will find all sorts of dumb shit that I
        write. In this case, this is dummy text, which means I am writting it in
        order to fill the screen with non sense.
      </p>
      <h2>Posts available</h2>
      <div>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
