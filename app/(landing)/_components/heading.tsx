"use client";

import { useState } from "react";
import {
  Telescope,
  MessageCircleMore,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HowToPlay } from "@/components/how-to-play";
import { Leaderboard } from "@/components/leaderboard";
import { PlayMore } from "@/components/play-more";
import { useScrollTop } from "@/hooks/useScrollTop";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Heading = () => {
  const scrolled = useScrollTop();

  return (
    <TooltipProvider>
      <nav
        className={`sticky border-b border-[#151F28] z-50 w-full p-3 bg-background ${
          scrolled ? "border-b shadow-sm" : ""
        }`}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between w-full">
          {/* Left: Logo */}
          <div className="flex items-center gap-x-2">
            <Telescope size={35} />
            <h1 className="text-xl font-semibold">Celestral!</h1>
          </div>

          {/* Right: Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Leaderboard />
                </div>
              </TooltipTrigger>
              <TooltipContent>Leaderboard</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MessageCircleMore size={30} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Feedback</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <PlayMore />
                </div>
              </TooltipTrigger>
              <TooltipContent>Play More</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <HowToPlay />
                </div>
              </TooltipTrigger>
              <TooltipContent>How to Play</TooltipContent>
            </Tooltip>
          </div>

          {/* Right: Mobile Menu Trigger */}
          <div className="md:hidden">
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="ghost" size="icon">
        <Menu size={28} />
      </Button>
    </DrawerTrigger>

    <DrawerContent>
      <div className="flex flex-col items-center justify-center gap-4 py-6 text-center text-sm">
        {/* Leaderboard with label */}
        <div className="flex flex-col items-center gap-1">
          <Leaderboard />
          <span>Leaderboard</span>
        </div>

        {/* Feedback icon with label */}
        <div className="flex flex-col items-center gap-1">
          <Button variant="ghost" size="icon">
            <MessageCircleMore size={30} />
          </Button>
          <span>Feedback</span>
        </div>

        {/* Play More with label */}
        <div className="flex flex-col items-center gap-1">
          <PlayMore />
          <span>Play More</span>
        </div>

        {/* How to Play with label */}
        <div className="flex flex-col items-center gap-1">
          <HowToPlay />
          <span>How to Play</span>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</div>

        </div>
      </nav>
    </TooltipProvider>
  );
};

export default Heading;
