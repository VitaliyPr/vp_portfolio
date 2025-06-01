"use client";

import ResentProjects from "@/components/ResentProjects";
import Footer from "@/components/Footer";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";
import { FaAngleLeft  } from 'react-icons/fa6'

export default function PortfolioPage() {
  return (
    <main className="relative bg-deepgreen-background flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Link href="/">
          <div className="fixed top-6 left-6 z-[999]">
            <MagicButton
              title="Home"
              icon={<FaAngleLeft  />}
              position="left"
            />
          </div>
        </Link>
        <ResentProjects 
          title="From idea to code — " 
          highlighted="see for yourself!" 
          showButton={false} 
          lazy={true}
          initialCount={6}
          layoutCss="max-xl:justify-center gap-x-[10vw] lg:gap-x-[6vw] xl:gap-x-12"
          cardCss="w-[80vw] md:w-[36vw] xl:w-[358px] min-h-[26rem] md:min-h-[43vh] lg:min-h-[31rem] xl:min-h-[30.5rem]"
          imageCss="w-[80vw] md:w-[36vw] xl:w-[358px] h-[13rem] md:h-[20vh] lg:h-[16rem] xl:h-[15.5rem]"
          />
        <Footer />
      </div>
    </main>
  );
}
