"use client";
import ChangeTheme from "@/components/ChangeTheme";
import ProjectCard from "@/components/ProjectCard";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Code,
  Image,
  Link,
} from "@nextui-org/react";
import { useTheme } from "next-themes";

const repositories = [
  "jaydns/devdock",
  "jaydns/solcompute",
  "rj17313/discord-tts-bot",
];

const prompts = [
  "High School Student",
  "Aspiring Software Engineer",
  "Fullstack Developer",
];

export default function Home() {
  const { resolvedTheme } = useTheme();
  return (
    <main className=" h-screen w-screen bg-[url('/light-background.jpg')] bg-cover dark:bg-[url('/dark-background.jpg')] dark:bg-right-bottom dark:md:bg-top ">
      <div className="flex w-full justify-between gap-2 p-4">
        <div className="flex gap-2">
          <Button
            color={resolvedTheme === "dark" ? "primary" : "secondary"}
            variant="light"
            className="h-10 w-fit min-w-0"
            as={Link}
            target="_blank"
            href="https://github.com/rj17313"
            isExternal
          >
            <Image
              alt="GitHub Logo"
              src="github-mark.svg"
              className="h-6 w-6 dark:invert"
            ></Image>
          </Button>
          <Button
            color={resolvedTheme === "dark" ? "primary" : "secondary"}
            variant="light"
            className="h-10 w-fit min-w-0"
            as={Link}
            href="mailto:ryan@jasin.dev"
          >
            <Image
              src="mail.svg"
              alt="Mail icon"
              className="h-6 w-6 dark:invert"
            ></Image>
          </Button>
        </div>
        <ChangeTheme></ChangeTheme>
      </div>
      <div className="flex h-64 w-screen flex-col items-center justify-center">
        <h1 className="h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 bg-clip-text text-5xl font-bold text-transparent dark:from-primary-400 dark:to-primary-500">
          Ryan Jasin
        </h1>
        <div className="flex flex-col gap-2 md:flex-row">
          {prompts.map((prompt) => {
            return (
              <Code key={prompt} size="md" color="primary">
                {prompt}
              </Code>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-8">
        <Code size="md" color="primary">
          Check out some of my projects
        </Code>
        <Image
          alt="down arrow"
          src="down-arrow.svg"
          className="h-6 w-6 dark:invert"
        ></Image>
      </div>

      <div className="flex overflow-x-auto px-2 md:justify-center">
        <div className="flex h-64 w-fit items-center justify-center gap-12">
          {repositories.map((repository) => {
            return (
              <ProjectCard
                key={repository}
                repositoryName={repository}
              ></ProjectCard>
            );
          })}
          {repositories.length < 6 && (
            <Card
              as={Link}
              href="https://github.com/rj17313"
              target="_blank"
              isBlurred
              isPressable
              isHoverable
              className="min-w-64 max-w-64 p-2 duration-[15ms] hover:-translate-y-4 hover:scale-105"
            >
              <CardHeader className="font-bold">Well...</CardHeader>
              <CardBody>More projects to come later</CardBody>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
