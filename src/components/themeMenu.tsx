import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import {
  ColorSwatchIcon,
  MoonIcon,
  SunIcon,
  SparklesIcon,
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
    <Menu as="div" className="not-prose dropdown dropdown-end">
      <Menu.Button className={`btn btn-ghost btn-square ${buttonSize}`}>
        <ColorSwatchIcon />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="dropdown-content menu rounded-box gap-2 bg-base-300 p-2 shadow"
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
              onClick={() => setTheme("rosepine")}
            >
              <SparklesIcon />
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
