"use client";

import { useState } from "react";
import { Paperclip, Smile, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "./ui/separator";
import { GIFIcon, StickerIcon } from "@/assets/icons";

export function MainContent() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      user: "Alexandra Tillman",
      avatar: "#E67E22",
      time: "05/06/2023 12:50 PM",
      content: "yo anyone on for comp tonight? need 1 for full 5-stack 🔥",
      reactions: [{ emoji: "❤️", count: 2 }],
    },
    {
      id: 2,
      user: "Sam McDermott",
      avatar: "#99F9EA",
      time: "05/06/2023 12:50 PM",
      content: "depends... are we playing seriously or just for fun",
      reactions: [
        { emoji: "👍", count: 1 },
        { emoji: "❤️", count: 2 },
      ],
    },
    {
      id: 3,
      user: "Alexandra Tillman",
      avatar: "#E67E22",
      time: "05/06/2023 12:50 PM",
      content: "serious. trying to hit plat this act 🎮",
    },
    {
      id: 4,
      user: "Sam McDermott",
      avatar: "#99F9EA",
      time: "05/06/2023 12:50 PM",
      content:
        "count me in! I'll lock Jett as usual 😎\nalso anyone seen the new bundle?? the finisher is insane 🔥",
      reactions: [{ emoji: "👍", count: 1 }],
    },
    {
      id: 5,
      user: "Alexandra Tillman",
      avatar: "#E67E22",
      time: "05/06/2023 12:50 PM",
      content: "YES the sound effects are sooo clean but 7k VP is wild 🤑",
    },
    {
      id: 6,
      user: "Sam McDermott",
      avatar: "#99F9EA",
      time: "05/06/2023 12:50 PM",
      content: "I'll join if I don't have to play smokes again pls 😭",
      reactions: [{ emoji: "❤️", count: 2 }],
    },
    {
      id: 7,
      user: "Alexandra Tillman",
      avatar: "#E67E22",
      time: "05/06/2023 12:50 PM",
      content:
        "fine fine, I'll smoke 💨 just don't wall me off again like last game",
    },
    {
      id: 8,
      user: "Sam McDermott",
      avatar: "#99F9EA",
      time: "05/06/2023 12:50 PM",
      content: "that was ONCE 😂",
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="flex items-center max-w-full gap-3">
          <Separator className="border border-[#32383D] shrink" />
          <div className="text-center text-sm text-[#96999e] text-nowrap">
            June 06, 2023
          </div>
          <Separator className="border border-[#32383D] shrink" />
        </div>

        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-[#161D22] rounded-[26px] p-[16px] mx-1 my-2">
        <div className=" flex items-center gap-2 ">
          <Button
            variant="ghost"
            size="icon"
            className="w-[48px] h-[48px] rounded-[100px] bg-[#32383D]"
          >
            <Paperclip className="h-5 w-5" />
          </Button>

          <div className="basis-full flex py-[10px] px-[10px]   rounded-[10px] border bg-[#242832] border-none text-white placeholder:text-[#72767D] focus-visible:ring-0  border-[#32383D]">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#242832] border border-transparent focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent text-white placeholder:text-[#72767D]"
            />

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-[20px] w-[20px] text-[#B9BBBE]"
              >
                <GIFIcon className="h-[20px] w-[20px]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-[#B9BBBE]"
              >
                <StickerIcon className="h-[20px] w-[20px]" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-[#B9BBBE]"
              >
                <Smile className="h-[20px] w-[20px]" />
              </Button>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="bg-[#99F9EA] w-[48px] h-[48px] gap-[10px] rounded-[100px] text-black"
          >
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

function MessageItem({ message }: { message: any }) {
  return (
    <div className="flex group">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-[#202225] flex-shrink-0"
        style={{ backgroundColor: message.avatar }}
      >
        {message.user.charAt(0)}
      </div>
      <div className="ml-4 flex-1 min-w-0">
        <div className="flex items-center">
          <span className="font-overium font-semibold text-base text-[#E67E22]">
            {message.user}
          </span>
          <span className="ml-2 text-xs text-[#96999e]">{message.time}</span>
        </div>
        <div className="mt-0.5 font-overium text-sm whitespace-pre-line">
          {message.content}
        </div>
        {message.reactions && (
          <div className="mt-2 flex gap-2">
            {message.reactions.map((reaction: any, index: number) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#242832] border border-[#161D22] hover:border-[#6D6E6E] cursor-pointer"
              >
                <span>{reaction.emoji}</span>
                <span className="text-xs">{reaction.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
