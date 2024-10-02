

import { HowToPlay } from "@/components/how-to-play";
// import { Learderboard } from  "@/components/leaderboard";
// import { PlayMore } from "@/components/play-more";
import { Telescope, Award, CircleHelp, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from  "next/image";
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
      className={`sticky top-0 z-50 flex justify-between w-full p-6 ${scrolled ? 'border-b shadow-sm' : ''}`}
    >      <Button variant="outline" size="lg" asChild>
        <Link href="/james-webb-telescope">Explore the James Webb Telescope</Link>
      </Button>
      <div className="flex w-full items-center gap-x-4 px-3">
      <h1><Telescope size={36} /></h1>
      <h1>steller!</h1>
          </div>
          {/* Navbar>>> */}
          <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">

                  <Dialog>
                  <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                  <Award />
                  </Button>
                  </DialogTrigger>
                  {/* Content */}
                  </Dialog>



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


                  {/* Play More */}
                  <Dialog>
                  <DialogTrigger asChild>
                  <Button variant="ghost" size="icon"><Telescope />
                  </Button>
                  </DialogTrigger>
                        {/* Content  */}
                  </Dialog>
                  
                  <HowToPlay />


          </div>
        </nav>
          );
        };

export default Heading;
