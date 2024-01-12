import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <div>
        <ProjectCard
          title="discord-tts-bot"
          description="A discord bot that speaks in tts in a voice channel"
          primaryLanguage="JavaScript"
        ></ProjectCard>
      </div>
    </main>
  );
}
