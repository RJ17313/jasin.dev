"use client";
import ProjectCard from "@/components/ProjectCard";
import useSWR from "swr";

const repositories = ["rj17313/discord-tts-bot"];

const fetcher = (url) => fetch(url).then((res) => res.json());

function GitHubAPI(repository) {
  const { data, error } = useSWR(
    `https://api.github.com/repos/${repository}`,
    fetcher,
  );
  return { data, error };
}

export default function Home() {
  return (
    <main>
      <div>
        {repositories.forEach((repository) => {
          const { data, error } = GitHubAPI(repository);
          console.log(data.name);
        })}
        <ProjectCard
          title="discord-tts-bot"
          description="A discord bot that speaks in tts in a voice channel"
          primaryLanguage="JavaScript"
          stars="2"
        ></ProjectCard>
      </div>
    </main>
  );
}
