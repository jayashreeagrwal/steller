import { Button } from "@/components/ui/button";
import { Telescope } from "lucide-react";
// import Link from "next/link";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    // DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  export const PlayMore = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon"><Telescope size={30}/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Stellar! game modes</DialogTitle>
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
          <div>
            <div>
              Play more of Stellar! in the practice mode or try the weekly challenge.
            </div>
          </div>
          {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    );
  };
