"use client";
import ProjectCard from "@/components/ProjectCard";

const repositories = [
  "rj17313/discord-tts-bot",
  "jaydns/solcompute",
  "RJ17313/YouTube-Py-Downloader",
];

export default function Home() {
  return (
    <main>
      <div className="flex h-64 w-screen items-center justify-center">
        <h1 className="h-24 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-7xl font-bold text-transparent">
          Ryan Jasin
        </h1>
      </div>
      <div className="my-auto flex w-screen items-center justify-center gap-8">
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
