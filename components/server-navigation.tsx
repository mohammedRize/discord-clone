import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/icons/logo";
import {
  DashboardIcon,
  FederationsIcon,
  GamesIcon,
  GroupFinderIcon,
  LeagueIcon,
  UnionIcon,
} from "@/assets/icons";
import PlayersIcon from "@/assets/icons/players";
import { TournamentsIcon } from "@/assets/icons/tournaments";
import AvatarUrl from "@/assets/images/avatar.jpg";
import Image from "next/image";

export function ServerNavigation() {
  const navigationItems = [
    {
      id: "dashboard",
      icon: <DashboardIcon />,
      label: "Dashboard",
      active: true,
    },
    { id: "players", icon: <PlayersIcon />, label: "Players" },
    { id: "clubs", icon: <UnionIcon />, label: "Clubs" },
    {
      id: "federations",
      icon: <FederationsIcon />,
      label: "Federations",
    },
    {
      id: "tournaments",
      icon: <TournamentsIcon />,
      label: "Tournaments",
    },
    { id: "league", icon: <LeagueIcon />, label: "League" },
    {
      id: "group-finder",
      icon: <GroupFinderIcon />,
      label: "Group Finder",
    },
    { id: "games", icon: <GamesIcon />, label: "Games" },
  ];

  return (
    <div className="w-[90px] bg-[#202225] flex flex-col items-center py-3 overflow-y-auto">
      <div className="mb-4 flex flex-col items-center">
        <Logo />

        <span className="sidebar-label text-[#96999e]">Home</span>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 w-full flex flex-col items-center gap-5">
        {navigationItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </div>

      {/* Bottom Items */}
      <div className="mt-auto pt-4 w-full flex flex-col items-center gap-5">
        <NavItem
          item={{
            id: "settings",
            icon: <Settings className="h-5 w-5" />,
            label: "Settings",
          }}
        />
        <div className="flex flex-col items-center">
          <Image
            src={AvatarUrl}
            alt="avatar"
            className="w-10 h-10 rounded-full bg-[#E67E22] flex items-center justify-center text-white mb-1"
          />
          <span className="sidebar-label text-[#96999e]">Profile</span>
        </div>
      </div>
    </div>
  );
}

function NavItem({ item }: { item: any }) {
  return (
    <div className="relative group w-full flex flex-col items-center">
      <div>{item.icon}</div>
      <span
        className={cn(
          "sidebar-label transition-colors",
          item.active ? "text-white" : "text-[#96999e] group-hover:text-white"
        )}
      >
        {item.label}
      </span>

      {/* Active Indicator */}
      {item.active && (
        <div className="absolute left-0 top-1/4 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
      )}
    </div>
  );
}
