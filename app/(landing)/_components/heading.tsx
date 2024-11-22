import { HowToPlay } from "@/components/how-to-play";
import { Leaderboard } from  "@/components/leaderboard";
import { PlayMore } from "@/components/play-more";
import { Telescope, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/useScrollTop";

// const Heading = () => {
//   const scrolled = useScrollTop();
//   return (
//       <nav
//       className={`sticky dark:bg-[#0A0A0A] z-50 flex justify-between w-full p-6 ${scrolled ? 'border-b shadow-sm' : ''}`}>
//       <div className="flex w-full items-center gap-x-4 px-2">
//       <Telescope size={40} />
//       <h1 style={{fontSize: "26px"}}>Stellar!</h1>
//           </div>
//           {/* <TeleClick /> */}
//           {/* Navbar>>> */}
//           <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
//             <Leaderboard />
//             <Button variant="ghost" size="icon">
//             <MessageCircleMore size={30}/>
//             </Button>
//             {/* <Reload /> */}
//             <PlayMore />
//             <HowToPlay />
//           </div>
//         </nav>
//           );
//         };
// export default Heading;
const Heading = () => {
  const scrolled = useScrollTop();
  return (
    <nav
      className={`sticky dark:bg-[#0A0A0A] z-50 w-full p-6 ${
        scrolled ? 'border-b shadow-sm' : ''
      }`}
    >
      {/* Title Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-between w-full gap-4">
        {/* Title */}
        <div className="flex items-center gap-x-4">
          <Telescope size={40} />
          <h1 style={{ fontSize: '26px', textAlign: 'center' }}>Stellar!</h1>
        </div>

        {/* Buttons Section (for large screens, remains inline with the title) */}
        <div className="hidden md:flex items-center gap-4">
          <Leaderboard />
          <Button variant="ghost" size="icon">
            <MessageCircleMore size={30} />
          </Button>
          <PlayMore />
          <HowToPlay />
        </div>
      </div>

      {/* Buttons Section for Small Screens */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-4">
        <Leaderboard />
        <Button variant="ghost" size="icon">
          <MessageCircleMore size={30} />
        </Button>
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