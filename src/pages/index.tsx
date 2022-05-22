import type { NextPage } from "next";
import { Layout } from "@/components/layout";

const Home: NextPage = () => {
  return (
    <Layout
      title="JBC"
      desc="The JBC blog landing page"
      className="w-full prose-sm sm:prose sm:max-w-none"
    >
      <h1>
        Hey, I&apos;m <span className="text-primary">Juan Cortelezzi</span>
      </h1>
      <p>
        I&apos;m a self taught web developer, currently studying software
        engeneering at UADE University. You&apos;ve found my personal slice of
        the internet, feel free to look around.
      </p>
      <p>
        In this page you will be able to see my current projects by clicking on
        the <span className="text-primary">Github</span> link up top, as well as
        taking a look at my latest posts/tutorials on the{" "}
        <span className="text-primary">Blog</span> link besides the projects one
      </p>
    </Layout>
  );
};

export default Home;
