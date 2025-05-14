"use client";

import { useState } from "react";
import { ServerNavigation } from "@/components/server-navigation";
import { ChannelSidebar } from "@/components/channel-sidebar";
import { MainContent } from "@/components/main-content";
import { RightPanel } from "@/components/right-panel";
import { Menu, Search, MessageSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FourCircleIcon, PingIcon, RingIcon } from "@/assets/icons";
import { BackgroundImg } from "@/assets/images";
import { cn } from "@/lib/utils";

const icons = [
  <PingIcon className="h-5 w-5 text-[#B9BBBE] hover:text-white cursor-pointer" />,
  <MessageSquareIcon className="h-5 w-5 text-[#B9BBBE] hover:text-white cursor-pointer" />,
  <>
    <RingIcon className="h-5 w-5 text-[#B9BBBE] hover:text-white cursor-pointer" />
    <span className="absolute -top-0 -right-0 bg-[#99F9EA] w-[10px] h-[10px] rounded-[90px] text-white text-xs flex items-center justify-center"></span>
  </>,
  <FourCircleIcon className="h-5 w-5 text-[#B9BBBE] hover:text-white cursor-pointer" />,
];

export function Dashboard() {
  const [showChannels, setShowChannels] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(3);
  return (
    <div className="flex h-screen bg-[#161D22] text-white overflow-hidden">
      <ServerNavigation />
      <div
        className={`h-full bg-[#242832] md:w-56 md:block ${
          showChannels ? "fixed inset-y-0 left-[90px] w-56 z-20" : "hidden"
        }`}
      >
        <ChannelSidebar />
      </div>

      {/* Main Content Area */}
      <div
        className="flex-1 flex flex-col overflow-hidden"
        style={{
          backgroundImage: `url(${BackgroundImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <header className="h-12 min-h-[60px] flex items-center px-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setShowChannels(!showChannels)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center w-[calc(100%-18rem)] justify-between">
            <div className="flex items-center">
              <h1 className="font-overium font-semibold text-lg"># Valorant</h1>
            </div>

            <Search className="h-5 w-5 text-[#B9BBBE] hover:text-white cursor-pointer" />
          </div>

          <div className="ml-auto flex items-center gap-3">
            {icons.map((icon, index) => (
              <div
              key={index}
                className={cn(
                  "bg-[#161D22] w-[48px] h-[48px] gap-[10px] rounded-full p-[12px] flex items-center justify-center relative",
                  selectedIcon === index && "bg-[#99F9EA]"
                )}
                onClick={() => setSelectedIcon(index)}
              >
                {icon}
              </div>
            ))}
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          <MainContent />

          {/* Right Panel - Collapsible on mobile */}
          <div
            className={`md:w-[18rem] md:block  ${
              showRightPanel ? "fixed inset-y-0 right-0 w-60 z-20" : "hidden"
            }`}
          >
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
