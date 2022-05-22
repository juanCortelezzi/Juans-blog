import { ThemeMenu } from "@/components/themeMenu";
import Link from "next/link";

type HeaderProps = {
  className?: string;
};

type ButtonProps = {
  text: string;
  href: string;
  active?: boolean;
};

const Button = ({ text, href, active = false }: ButtonProps) => (
  <button
    className={`btn btn-sm btn-ghost normal-case text-xl ${
      !active && "font-normal"
    }`}
  >
    <Link href={href}>
      <a>{text}</a>
    </Link>
  </button>
);

export const Header = ({ className }: HeaderProps) => (
  <header className={`navbar mb-10 p-0 ${className && className}`}>
    <div className="navbar-start space-x-2 ml-[-0.70rem]">
      <Button text="Testing" href="/" active />
      <Button text="Falopa" href="#" />
      <Button text="Saraza" href="#" />
    </div>
    <div className="navbar-end">
      <ThemeMenu />
    </div>
  </header>
);
