"use client";
import ResentProjects from "./ResentProjects";

export default function ProjectsMain() {
  return (
    <ResentProjects
      title="A small selection of"
      highlighted="recent projects"
      showButton={true}
      lazy={false}
      initialCount={4}
      cardWidth="sm:w-[570px] w-[80vw]"
    />
  );
}
