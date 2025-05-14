import type React from "react";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import ValorantImage from "@/assets/images/valorant.png";
import {
  AnnouncmentsIcon,
  ClubIcon,
  DisableTagIcon,
  PeopleIcon,
  RulesIcon,
  ValoarantIcon,
} from "@/assets/icons";
import { Separator } from "./ui/separator";

export function ChannelSidebar() {
  return (
    <div className="h-full flex flex-col ">
      <div
        className="w-full min-h-[178px] rounded bg-cover bg-center"
        style={{ backgroundImage: `url(${ValorantImage.src})` }}
      >
        <div className="h-12 min-h-[8px] shadow-md px-3 flex items-center bg-white/5 backdrop-blur-sm gap-2">
          <div className="flex gap-[10px] items-center">
            <ValoarantIcon className="w-[24px] h-[24px]" />
            <h2 className="font-overium font-semibold text-base leading-5 truncate">
              Valorant
            </h2>
          </div>

          <div className="flex items-center gap-1">
            <PeopleIcon />
            <p className="font-oxanium font-normal text-xs leading-[15px] tracking-normal align-middle">
              259
            </p>
          </div>
          <div className="flex items-center gap-1">
            <ClubIcon />
            <p className="font-oxanium font-normal text-xs leading-[15px] tracking-normal align-middle">
              8
            </p>
          </div>
          <ChevronDown className="ml-auto h-5 w-5 opacity-70" />
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[#88898A]" />
          <Input
            placeholder="Browse Channels"
            className="pl-8 bg-[#242832] border-none text-white placeholder:text-[#88898A] focus-visible:ring-0 h-8  font-oxanium font-normal text-base leading-5 tracking-normal align-middle"
          />
        </div>
      </div>
      <Separator
        className="border-b border-solid mt-2"
        style={{ borderBottomColor: "#32383D" }}
      />
      {/* Channels */}
      <div className="flex-1 overflow-y-auto p-2">
        <ChannelItem icon={<RulesIcon />} name="Rules" />
        <ChannelItem icon={<AnnouncmentsIcon />} name="Announcements" />
        <Separator
          className="border-b border-solid mt-2"
          style={{ borderBottomColor: "#32383D" }}
        />
        <div className="mt-4 mb-1 px-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h3 className="font-medium text-base leading-5 align-middle text-white">
                Channels
              </h3>
            </div>
            <button className="text-[#96999e] hover:text-white">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <ChannelCategory name="Gaming Rooms" expanded={true}>
          <ChannelItem
            icon={<DisableTagIcon />}
            name="Valorant Mena"
            indented
          />
          <ChannelItem
            icon={<DisableTagIcon />}
            name="Valorant Saudi"
            indented
          />
          <ChannelItem
            icon={<DisableTagIcon />}
            name="Valorant Egypt"
            indented
          />
        </ChannelCategory>
      </div>
    </div>
  );
}

function ChannelItem({
  icon,
  name,
  active = false,
  indented = false,
}: {
  icon: React.ReactNode;
  name: string;
  active?: boolean;
  indented?: boolean;
}) {
  return (
    <div
      className={cn(
        "group px-2 py-1.5 rounded flex items-center text-[#96999e] hover:text-[#99F9EA] hover:bg-[#161D22] cursor-pointer",
        active && "text-[#99F9EA] bg-[#161D22] hover:text-[#99F9EA]",
        indented && "ml-2"
      )}
    >
      <div className="text-[#96999e] group-hover:text-[#99F9EA] mr-1.5">
        {icon}
      </div>
      <span className="font-oxanium font-normal text-base leading-5 tracking-normal align-middle ">
        {name}
      </span>
    </div>
  );
}

function ChannelCategory({
  name,
  children,
  expanded = false,
}: {
  name: string;
  children: React.ReactNode;
  expanded?: boolean;
}) {
  return (
    <div className="mb-2">
      <div className="flex items-center px-2 py-1 cursor-pointer justify-between">
        <h3 className="font-medium text-sm leading-5 align-middle text-white">
          {name}
        </h3>
        <ChevronDown
          className={cn(
            "h-3 w-3 mr-1 transition-transform",
            !expanded && "-rotate-90"
          )}
        />
      </div>
      {expanded && <div className="mt-1">{children}</div>}
    </div>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
