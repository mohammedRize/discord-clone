"use client";

import type React from "react";

import { useState } from "react";
import { Search, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Thumbnails } from "@/assets/icons";

export function RightPanel() {
  const [activeTab, setActiveTab] = useState("club");

  const clubs = [
    {
      id: 1,
      name: "Angry EA Sharks",
      status: "online",
      avatar: "#99F9EA",
      tag: "UTC/GMT +2",
      verified: true,
    },
    {
      id: 2,
      name: "We Scale Late",
      status: "online",
      avatar: "#E67E22",
      tag: "UTC/GMT +2",
      verified: true,
    },
    {
      id: 3,
      name: "Baron Thieves",
      status: "online",
      avatar: "#E91E63",
      tag: "UTC/GMT +2",
      verified: true,
    },
    {
      id: 4,
      name: "Tiltproof-ish",
      status: "online",
      avatar: "#6D6E6E",
      tag: "UTC/GMT +1",
      verified: true,
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Clutch or Kick?! INSANE Valorant Moments You Need to See!",
      thumbnail: Thumbnails,
      description:
        "Some insane clutches of the most intense Valorant plays in clutch...",
    },
    {
      id: 2,
      title: "Valorant | Late Night Ranked Grind",
      thumbnail: Thumbnails,
      description:
        "Join us for a late night's session of ranked. Let's climb together!",
    },
    {
      id: 3,
      title: "Valorant | Duelist Only Mayhem",
      thumbnail: Thumbnails,
      description:
        "What happens when everyone instalocks duelists? Pure chaos!",
    },
  ];

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="p-3 bg-[#161D22] rounded-tl-[30px] rounded-bl-[30px] border-b border-[#202225]">
        <h2 className="font-overium font-semibold text-lg mb-3 ml-3">Finder</h2>

        <div className="flex gap-1 mb-3">
          <TabButton
            active={activeTab === "group"}
            onClick={() => setActiveTab("group")}
          >
            Group
          </TabButton>
          <TabButton
            active={activeTab === "club"}
            onClick={() => setActiveTab("club")}
          >
            Club
          </TabButton>
          <TabButton
            active={activeTab === "tournament"}
            onClick={() => setActiveTab("tournament")}
          >
            Tournament
          </TabButton>
        </div>

        <div className="relative mb-3">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[#72767D]" />
          <Input
            placeholder="Search by club name"
            className="pl-8 bg-[#161D22] border-none text-white placeholder:text-[#72767D] focus-visible:ring-0 h-9"
          />
        </div>

        <div className="space-y-2 max-h-[240px] overflow-y-auto">
          {clubs.map((club) => (
            <ClubItem key={club.id} club={club} />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 bg-[#161D22] rounded-tl-[30px] rounded-bl-[30px] ">
        <h2 className="font-overium font-semibold text-lg mb-3 ml-3">Feed</h2>

        <div className="space-y-3">
          {videos.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "pt-[3px] pr-4 pb-[3px] pl-4 rounded-[50px] bg-[#242832] border border-[#FFFFFF1A] text-white text-xs font-semibold font-medium text-xs leading-[100%] text-center align-middle text-[#88898A]",
        active ? "bg-[#99F9EA] text-[#161D22]" : "bg-[#161D22] "
      )}
    >
      {children}
    </button>
  );
}

function ClubItem({ club }: { club: any }) {
  return (
    <div className="flex items-center border border-white/10 bg-[#161D22] rounded-[20px] p-3">
      <div className="relative">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#202225] font-overium font-semibold"
          style={{ backgroundColor: club.avatar }}
        >
          {club.name.charAt(0)}
        </div>
        {club.verified && (
          <div className="absolute -bottom-1 -right-1 bg-[#99F9EA] text-[#202225] rounded-full w-4 h-4 flex items-center justify-center text-xs">
            ✓
          </div>
        )}
      </div>

      <div className="ml-2 flex-1 min-w-0">
        <div className="font-overium text-sm font-semibold truncate">
          {club.name}
        </div>
        <div className="text-xs text-[#96999e] truncate">
          <span className="inline-block mr-1">🌐</span> {club.tag}
        </div>
      </div>

      <Button
        size="sm"
        className="py-[8px] px-[12px] rounded-[100px] border border-[#99F9EA] bg-[#242832] text-[#99F9EA] font-normal text-[12px] leading-[15px]"
      >
        Join now
      </Button>
    </div>
  );
}

function VideoItem({ video }: { video: any }) {
  return (
    <div className="flex  overflow-hidden border border-[#32383D] bg-[#161D22] p-[10px] items-center justify-center padding-[5px] rounded-[20px]">
      <div className="basis-[40%] relative">
        <video.thumbnail />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center">
            <Youtube className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      <div className="basis-[60%] p-3">
        <h3 className="font-medium text-[14px] leading-[18px] align-middle text-white ">
          {video.title}
        </h3>
        <p className="font-[Oxanium] font-normal text-[10px] leading-[13px] align-middle text-[#6D6E6E]">
          {video.description}
        </p>
      </div>
    </div>
  );
}
