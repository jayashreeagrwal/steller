import { Button } from "@/components/ui/button";
import {Award} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Skeleton } from "@/components/ui/skeleton";
  export const Leaderboard = () => {
    return (
      <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Award size={30}/>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Celestral!</DialogTitle>
            <DialogDescription>
              Todays Leaderboard.
            </DialogDescription>
          </DialogHeader>

    <div className="flex items-center space-x-4">
      <Skeleton
        className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"
      />
      <div className="space-y-2">
        <Skeleton
          className="h-4 w-80 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded"
        />
        <Skeleton
          className="h-4 w-60 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 rounded"
        />
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Skeleton
        className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"
      />
      <div className="space-y-2">
        <Skeleton
          className="h-4 w-80 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded"
        />
        <Skeleton
          className="h-4 w-60 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 rounded"
        />
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Skeleton
        className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"
      />
      <div className="space-y-2">
        <Skeleton
          className="h-4 w-80 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded"
        />
        <Skeleton
          className="h-4 w-60 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 rounded"
        />
      </div>
    </div>
              {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
      </div>
    );
  };
