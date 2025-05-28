"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import Image from "next/image";

type ResentProjectsProps = {
  title?: string;
  highlighted?: string;
  showButton?: boolean;
  lazy?: boolean;
  initialCount?: number;
  cardWidth?: string;
};

const ResentProjects = ({
  title = "A small selection of",
  highlighted = "recent projects",
  showButton = true,
  lazy = false,
  initialCount = 4,
  cardWidth = "sm:w-[570px] w-[80vw]"
}: ResentProjectsProps) => {
  const LOAD_MORE_COUNT = 3;

  const [visibleCount, setVisibleCount] = useState(lazy ? initialCount : initialCount);

  useEffect(() => {
    if (!lazy) return;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;

      // Захищене звернення до document.body.offsetHeight
      const documentHeight =
        typeof document !== "undefined" && document.body
          ? document.body.offsetHeight
          : 0;

      if (scrollPosition >= documentHeight - 100 && visibleCount < projects.length) {
        setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, projects.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, lazy]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  const displayedProjects = lazy
    ? sortedProjects.slice(0, visibleCount)
    : sortedProjects.slice(0, initialCount);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {title} <span className="text-deepgreen-accent">{highlighted}</span>
      </h1>

      <div className="flex flex-wrap items-center p-4 gap-x-24 gap-y-8 mt-10">
        {displayedProjects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className={`h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center ${cardWidth}`}
          >
            <PinContainer title={link} href={link}>
              <div
                className={`relative flex items-center justify-center ${cardWidth} overflow-hidden h-[30vh] mb-10`}
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="bg-img" layout="fill" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-deepgreen-accent">Live Site</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {showButton && (
        <Link href="/portfolio">
          <MagicButton title="All my Work" icon={<FaLocationArrow />} position="right" />
        </Link>
      )}
    </div>
  );
};

export default ResentProjects;
