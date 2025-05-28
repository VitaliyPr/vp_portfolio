
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

        <Footer />
      </div>
    </main>
  );
}
