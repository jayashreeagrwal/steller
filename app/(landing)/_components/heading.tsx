'use client';

// import { Help } from "./_components/how-to-play";
// import {  } from "@radix-ui/react-icons";
import { Telescope } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
  

const Heading = () => {
  return (


    <nav
          className={cn(
            "sticky inset-x-0 top-0 z-50 mx-auto flex w-full items-center bg-background p-6 dark:bg-[rgb(31,31,31)]",
          )}
        >
          <Button variant="outline" size="lg" asChild>
        <Link href="/james-webb-telescope"> Explore the James Webb Telescope</Link>
      </Button>
      <div className="flex w-full items-center gap-x-4 px-4">
      <h1><Telescope /></h1>
      <h1>steller!</h1>
          </div>
          <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
                  <Button variant="ghost" size="sm">
                  <RefreshCcw />
                  </Button>
                  <Button variant="ghost" size="sm">
                  <Telescope />
                  </Button>
                  <Button variant="ghost" size="sm">
                  <CircleHelp />
                  </Button>
          </div>
        </nav>
          );
        };

export default Heading;
