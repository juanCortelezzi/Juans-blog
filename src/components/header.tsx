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

const buttons = [
  { text: "Home", href: "/", id: 1 },
  { text: "Blog", href: "/posts", id: 2 },
];

export const Header = ({ className }: HeaderProps) => {
  const router = useRouter();

  return (
    <header className={`navbar mb-5 p-0 sm:mb-10 ${className && className}`}>
      <div className="navbar-start">
        <div className="ml-[-1rem] inline-flex">
          {buttons.map((button) => (
            <div key={button.id}>
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
      </div>
      <div className="navbar-end">
        <ThemeMenu />
      </div>
    </header>
  );
};
