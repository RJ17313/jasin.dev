import { Button, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ChangeTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Button
        color="primary"
        variant="light"
        className="h-10 w-fit min-w-0"
        onClick={() => {
          if (resolvedTheme === "dark") return setTheme("light");
          return setTheme("dark");
        }}
      >
        <Image
          isBlurred
          alt="Sun icon"
          src={resolvedTheme === "dark" ? "sun.svg" : "moon.svg"}
          className="h-6 w-6"
        ></Image>
      </Button>
    </div>
  );
}
