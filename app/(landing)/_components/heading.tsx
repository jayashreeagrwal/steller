

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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"


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
                  <Button variant="ghost" size="icon">
                  <Telescope />
                  </Button>
                  </DialogTrigger>
                        {/* Content  */}
                  </Dialog>
                  {/* Play More End */}


                  {/* How to play */}
                  <Dialog>
      <DialogTrigger asChild>
    <Button variant="ghost" size="icon"><CircleHelp /></Button>
      </DialogTrigger>
      <DialogContent className="grid">
        <DialogHeader className="items-start">
          <DialogTitle className="mb-2"><h1>How to play</h1></DialogTitle>
          {/* <DialogDescription className="scroll-py-1.5 justify-start items-start"> */}
            Name the stars in a constellation to navigate from the Starting Point to the Ending Point. Try to get there in the fewest guesses!
          {/* </DialogDescription> */}
        </DialogHeader>
{/* Accordion */}
<div>
          <Accordion type="single" collapsible className="w-full mb-3">
      <AccordionItem value="item-1">
        <AccordionTrigger>Scoring</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Something</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Credits & Thanks</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
</div>
{/* Accordian End */}
        Want to know more?
      </DialogContent>
    </Dialog>
{/* How To Play End */}


          </div>
        </nav>
          );
        };

export default Heading;
