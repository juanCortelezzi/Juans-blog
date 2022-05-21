import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import { ThemeChanger } from "@/components/themeSwitch";
import { useToggle } from "@/hooks/useToggle";

const Home: NextPage = () => {
  const [isShowing, toggleShow] = useToggle();

  return (
    <Layout
      title="Frontend Testing"
      desc="Simple Frontend template, just Ctrl + c and Ctrl + v"
      className="prose prose-lg prose-h1:my-8 mx-auto"
    >
      <h1>Frontend Testing</h1>
      <h2>Theme changing</h2>
      <ThemeChanger />
      <button onClick={toggleShow} className="btn btn-primary">
        toggle
      </button>
      {isShowing && <p>I'm hidden</p>}
    </Layout>
  );
};

export default Home;
