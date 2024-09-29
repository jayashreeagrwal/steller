'use client';

import { HowToPlay } from "@/components/how-to-play";
// import { Learderboard } from  "@/components/leaderboard";
// import { PlayMore } from "@/components/play-more";
import { Telescope, Award, CircleHelp, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from  "next/image";
// import {  } from "@radix-ui/react-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { LeaderBoard } from './leaderboard.svg';
// import { MdLeaderboard } from "react-icons/md";
// import { IoMdPodium } from "react-icons/io";
import { useScrollTop } from "@/hooks/useScrollTop";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const Heading = () => {
  const scrolled = useScrollTop();
  return (
<nav
      className={cn(
        "sticky inset-x-0 top-0 z-50 mx-auto flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]",
        scrolled && "border-b shadow-sm",
      )}
    >          <Button variant="outline" size="lg" asChild>
        <Link href="/james-webb-telescope">Explore the James Webb Telescope</Link>
      </Button>
      <div className="flex w-full items-center gap-x-4 px-4">
      <h1><Telescope size={36} /></h1>
      <h1>steller!</h1>
          </div>
          <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
                  <Button variant="ghost" size="icon">
                  <Award size={24} />
                  </Button>
                  <Button variant="ghost" size="icon">
                  <RefreshCcw />
                  </Button>
                   <Link href="/practice">
                  <Button variant="ghost" size="icon">
                  <Telescope />
                  </Button></Link>
                  <Button variant="ghost" size="icon"><CircleHelp /></Button>

      {/* <DialogTrigger asChild>
        <HowToPlay  mode="modal">
                      <Button variant="ghost" size="icon"><CircleHelp /></Button>
        </HowToPlay>
      </DialogTrigger> */}


          </div>
        </nav>
          );
        };

export default Heading;
