import { ThemeMenu } from "@/components/themeMenu";
import Link from "next/link";
import { useRouter } from "next/router";

type HeaderProps = {
  className?: string;
};

type ButtonProps = {
  text: string;
  href: string;
  active?: boolean;
};

const ButtonLink = ({ text, href, active = false }: ButtonProps) => (
  <Link href={href} passHref>
    <button
      className={`btn btn-sm btn-ghost normal-case text-xl ${
        !active && "font-normal"
      }`}
    >
      {text}
    </button>
  </Link>
);

export const Header = ({ className }: HeaderProps) => {
  const router = useRouter();

  const buttons = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/posts" },
  ];

  return (
    <header className={`navbar mb-10 p-0 ${className && className}`}>
      <div className="navbar-start space-x-1 ml-[-0.70rem]">
        {buttons.map((button) => (
          <ButtonLink
            key={`${button.text}-${button.href}`}
            text={button.text}
            href={button.href}
            active={router.pathname === button.href}
          />
        ))}
        <a
          href="https://github.com/juancortelezzi"
          rel="noreferrer"
          target="_blank"
        >
          <button className="btn btn-sm btn-ghost normal-case text-xl font-normal">
            Github
          </button>
        </a>
      </div>
      <div className="navbar-end">
        <ThemeMenu />
      </div>
    </header>
  );
};
