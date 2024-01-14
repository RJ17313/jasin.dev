import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Skeleton,
} from "@nextui-org/react";
import Circle from "./Circle";
import useSWR from "swr";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";
import { useTheme } from "next-themes";

export default function ProjectCard(props) {
  const { resolvedTheme } = useTheme();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${props.repositoryName}`,
    fetcher,
  );

  if (isLoading) return <LoadingCard />;
  if (error) return <ErrorCard />;
  return (
    <Card
      className="max-w-64 duration-[15ms] hover:-translate-y-4 hover:scale-105"
      isPressable
      isBlurred
      onPress={() => window.open(`https://github.com/${props.repositoryName}`)}
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <Image
            isBlurred
            alt="GitHub Logo"
            src={
              resolvedTheme === "dark"
                ? "github-mark-white.svg"
                : "github-mark.svg"
            }
            className="h-8 w-8"
          ></Image>
          <p className="font-bold">{data.name}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{data.description}</p>
      </CardBody>
      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1">
            <Circle
              language={data.language}
              className={`shadow-lg shadow-yellow-400/70`}
            />
            <p>{data.language}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              alt="Star Icon"
              src="star.svg"
              className="h-5 w-5"
              isBlurred
            ></Image>
            <p className="font-bold">{data.stargazers_count}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
