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

  export const Leaderboard = () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                  <Award size={30}/>
                  </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Stellar!</DialogTitle>
            <DialogDescription>
              Todays Leaderboard.
            </DialogDescription>
          </DialogHeader>
            {/* <div>
      <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div></div>
        <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div></div>
        <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div></div>
        <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div></div>
        <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div></div>
    </div>
            <div>
                 <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="w-8 h-[250px]" />
        <Skeleton className="w-8 h-[200px]" />
        <Skeleton className="w-8 h-[200px]" />
        <Skeleton className="w-8 h-[200px]" />
        <Skeleton className="w-8 h-[200px]" />
        <Skeleton className="w-8 h-[200px]" />
      </div></div>
</div>
                 <div className="flex items-center space-x-4">
      <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-8 w-20" />           
      <div className="space-y-2">
        <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-8 w-20" /> 
          <div className="space-y-2">
        <Skeleton className="h-20 w-20 rounded-full" />
      <Skeleton className="h-8 w-20" />
      </div>
                     
            </div>
          </div> */}
          {/* <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    );
  };
