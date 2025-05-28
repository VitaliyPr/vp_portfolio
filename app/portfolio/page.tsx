import Footer from "@/components/Footer";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";
import { FaAngleLeft  } from 'react-icons/fa6'

import dynamic from "next/dynamic";

const ResentProjects = dynamic(() => import("@/components/ResentProjects"), {
  ssr: false,
});

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
          cardWidth="sm:w-[350px] w-[80vw]"
          />
        <Footer />
      </div>
    </main>
  );
}
