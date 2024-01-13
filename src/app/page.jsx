"use client";
import ProjectCard from "@/components/ProjectCard";
import useSWR from "swr";

const repositories = ["rj17313/discord-tts-bot"];

export default function Home() {
  return (
    <main>
      <div>
        {repositories.forEach((repository) => {
          <ProjectCard repositoryName={repository}></ProjectCard>;
        })}
      </div>
    </main>
  );
}
