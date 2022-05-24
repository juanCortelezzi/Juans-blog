import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout
      title="JBC"
      desc="The JBC blog landing page"
      className="prose-sm w-full sm:prose sm:max-w-none"
    >
      <div className="reverse grid gap-10 sm:grid-cols-5 sm:justify-items-center sm:gap-0 md:grid-cols-3">
        <div className="sm:col-span-4 md:col-span-2">
          <h1 className="font-bold">
            Hey, I&apos;m <span className="text-primary">Juan Cortelezzi</span>
          </h1>
          <p>
            I&apos;m a self taught web developer, currently studying software
            engeneering at UADE University. You&apos;ve found my personal slice
            of the internet, feel free to look around.
          </p>
        </div>
        <div className="avatar order-first col-span-1 sm:order-last">
          <div className="relative h-20 w-20 rounded-full sm:h-24 sm:w-24 md:h-28 md:w-28">
            <Image
              src="/profile.jpg"
              alt="profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
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
