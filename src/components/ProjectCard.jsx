import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import Circle from "./Circle";
import useSWR from "swr";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";

export default function ProjectCard(props) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/${props.repositoryName}`,
    fetcher,
  );

  if (isLoading) return <LoadingCard />;
  if (error) return <ErrorCard />;
  return (
    <Card
      as={Link}
      href={`https://github.com/${props.repositoryName}`}
      target="_blank"
      className="min-w-64 max-w-64 duration-[15ms] hover:-translate-y-4 hover:scale-105"
      isPressable
      isHoverable
      isBlurred
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <Image
            isBlurred
            alt="GitHub Logo"
            src="github-mark.svg"
            className="h-8 w-8 dark:invert"
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
