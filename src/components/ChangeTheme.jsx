import { Button, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function ChangeTheme(props) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div>
      <Button
        color={resolvedTheme === "dark" ? "primary" : "secondary"}
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
