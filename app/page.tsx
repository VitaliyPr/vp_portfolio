"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import ResentProjects from "@/components/ResentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-deepgreen-background flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <ResentProjects
          title="A small selection of"
          highlighted="recent projects"
          showButton={true}
          lazy={false}
          initialCount={4}
          layoutCss="justify-center gap-x-[10vw] lg:gap-x-[6vw] xl:gap-x-24"
          cardCss="w-[80vw] md:w-[36vw] xl:w-[535px] min-h-[26rem] md:min-h-[43vh] lg:min-h-[31rem] xl:min-h-[34rem]"
          imageCss="w-[80vw] md:w-[36vw] xl:w-[535px] h-[13rem] md:h-[20vh] lg:h-[16rem] xl:h-[19rem]"
        />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
