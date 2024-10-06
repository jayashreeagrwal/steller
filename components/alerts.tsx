import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
// import { Button } from "@/components/ui/button"
import Link from "next/link"


export function YouLost() {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Stellar!</AlertDialogTitle>
          <AlertDialogDescription>
            You lost! The shortest solution to the problem was startPoint&gt;star1&gt;star2&gt;endPoint
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>New Game</AlertDialogCancel>
          <AlertDialogAction asChild>
          <Link href="/james-webb-telescope">Cancel</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}


