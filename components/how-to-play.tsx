import { Button } from "@/components/ui/button";
import {CircleHelp} from "lucide-react";
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



export function HowToPlay() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button variant="ghost" size="icon"><CircleHelp size={30}/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>How to play</DialogTitle>
          <DialogDescription>
            Name the stars in a constellation to navigate from the Starting Point to the Ending Point. Try to get there in the fewest guesses!
          </DialogDescription>
        </DialogHeader>

{/* Accordion */}
<div className="grid gap-4 py-4">
          <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Scoring</AccordionTrigger>
        <AccordionContent>
        Scoring is based on all stars you&apos;ve already guessed, and whether your guess gets you closer to a solution.
        <br></br>        <br></br>
        For a perfect score, guess the shortest path (fewest stars) in order from the Starting Point to the Ending Point.
        <br></br>        <br></br>
        You get +2 points for each star you guess, that is on the shortest path.
        <br></br>        <br></br>
        You get +1 point for each star you guess, that is not on the shortest path but gets you closer to the solution.
        <br></br>        <br></br>
        No points for stars that are not on the shortest path and do not get you closer to the solution.
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
          Steller! uses: Nasa Datasets, Tailwind CSS with Shadcn Library for layout and UI design, recharts for graphic rendering and Lucide for Icons.
          <br></br><br></br>
          Steller! was designed and developed as a part of the Nasa Space Apps Challenge 2024, by Jayashree Agarwal, Jeswin Johnson and Siddhi Dorepalli.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
{/* Accordian End */}


        <DialogFooter>
          Want to know more? Check out the extra info and FAQ page
          <Button variant="outline">FAQ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
