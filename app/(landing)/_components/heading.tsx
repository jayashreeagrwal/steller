import { HowToPlay } from "@/components/how-to-play";
import { Leaderboard } from  "@/components/leaderboard";
import { PlayMore } from "@/components/play-more";
import { TeleClick } from "@/components/telescope";
// import { PlayAgain } from "@/components/play-again";
import { Telescope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from  "next/image";
import { useScrollTop } from "@/hooks/useScrollTop";

const Heading = () => {
  const scrolled = useScrollTop();
  return (
      <nav
      className={`sticky top-0 z-50 flex justify-between w-full p-6 ${scrolled ? 'border-b shadow-sm' : ''}`}>

     <TeleClick />
      <div className="flex w-full items-center gap-x-4 px-3 ml-2">
      <Telescope size={40} />
      <h1>steller!</h1>
          </div>
          {/* Navbar>>> */}
          <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
            <Leaderboard />
            <PlayMore />
            <HowToPlay />
          </div>
        </nav>
          );
        };

export default Heading;


  {/* Reload
                  <Dialog>
                  <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                  <RefreshCcw />
                  </Button>
                  </DialogTrigger>
                  Content
                  </Dialog>
                  Reload End */}