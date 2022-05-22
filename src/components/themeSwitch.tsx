import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div className="btn-group flex justify-center">
        <button className="btn btn-primary" onClick={() => setTheme("light")}>
          Light Mode
        </button>
        <button className="btn btn-secondary" onClick={() => setTheme("night")}>
          Night Mode
        </button>
        <button className="btn btn-accent" onClick={() => setTheme("mytheme")}>
          Custom Mode
        </button>
      </div>
    </>
  );
};
