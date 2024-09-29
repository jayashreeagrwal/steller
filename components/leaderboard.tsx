// import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    // DialogFooter,
    DialogHeader,
    DialogTitle,
    // DialogTrigger,
  } from "@/components/ui/dialog"


  export const Leaderboard = () => {
    return (
      <Dialog>
        {/* <DialogTrigger asChild>
          <Button variant="outline">How to Play</Button>
        </DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>steller!</DialogTitle>
            <DialogDescription>
              Name the stars in a constellation to navigate from the Starting Point to the Ending Point. Try to get there in the fewest guesses!
            </DialogDescription>
          </DialogHeader>
          <div>
          </div>
          {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    );
  };
  // export default Leaderboard;