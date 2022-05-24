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
    <button className={`btn btn-ghost normal-case ${!active && "font-normal"}`}>
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
    <header className={`navbar mb-5 p-0 sm:mb-10 ${className && className}`}>
      <div className="navbar-start ml-[-0.70rem]">
        {buttons.map((button) => (
          <div key={`${button.text}-${button.href}`}>
            <ButtonLink
              text={button.text}
              href={button.href}
              active={router.pathname === button.href}
            />
          </div>
        ))}
        <div>
          <a
            href="https://github.com/juancortelezzi"
            rel="noreferrer"
            target="_blank"
          >
            <button className="btn btn-ghost font-normal normal-case">
              Github
            </button>
          </a>
        </div>
      </div>
      <div className="navbar-end">
        <ThemeMenu />
      </div>
    </header>
  );
};
