"use client";
import ProjectCard from "@/components/ProjectCard";
import useSWR from "swr";

const repositories = [
  "rj17313/discord-tts-bot",
  "jaydns/solcompute",
  "RJ17313/YouTube-Py-Downloader",
];

export default function Home() {
  return (
    <main>
      <div className="flex gap-8">
        {repositories.map((repository) => {
          return (
            <ProjectCard
              key={repository}
              repositoryName={repository}
            ></ProjectCard>
          );
        })}
      </div>
    </main>
  );
}
