import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import {
  ColorSwatchIcon,
  MoonIcon,
  SunIcon,
  CogIcon,
} from "@heroicons/react/outline";

type Props = {
  buttonSize?: "btn-xs" | "btn-sm" | "btn-md" | "btn-lg" | "btn-xl";
};

export function ThemeMenu({ buttonSize = "btn-sm" }: Props) {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Menu as="div" className="dropdown dropdown-end not-prose">
      <Menu.Button className={`btn btn-ghost btn-square ${buttonSize}`}>
        <ColorSwatchIcon />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="dropdown-content menu p-2 shadow bg-base-300 rounded-box gap-2"
      >
        <Menu.Item as="li">
          {({ active }) => (
            <a
              className={`btn btn-ghost btn-square ${buttonSize} ${
                active && "btn-active"
              }`}
              onClick={() => setTheme("light")}
            >
              <SunIcon />
            </a>
          )}
        </Menu.Item>
        <Menu.Item as="li">
          {({ active }) => (
            <a
              className={`btn btn-ghost btn-square ${buttonSize} ${
                active && "btn-active"
              }`}
              onClick={() => setTheme("night")}
            >
              <MoonIcon />
            </a>
          )}
        </Menu.Item>
        <Menu.Item as="li">
          {({ active }) => (
            <a
              className={`btn btn-ghost btn-square ${buttonSize} ${
                active && "btn-active"
              }`}
              onClick={() => setTheme("mytheme")}
            >
              <CogIcon />
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}