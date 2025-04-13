import { HowToPlay } from "@/components/how-to-play";
import { Leaderboard } from  "@/components/leaderboard";
import { PlayMore } from "@/components/play-more";
import { Telescope, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/useScrollTop";


const Heading = () => {
  const scrolled = useScrollTop();
  return (
    <nav
      className={`sticky border-b border-[#151F28] z-50 w-full p-3 ${
        scrolled ? 'border-b shadow-sm' : ''
      }`}
    >
      {/* Title Section */}
      <div className="flex flex-col items-center md:flex-row md:justify-between w-full gap-4">
        {/* Title */}
        <div className="flex items-center gap-x-2">
          <Telescope size={35} />
          <h1 style={{ fontSize: '22px', textAlign: 'center' }}>Celestral!</h1>
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