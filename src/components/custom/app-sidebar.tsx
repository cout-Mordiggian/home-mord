"use client";

import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../ui/mode-toggle";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu className="text-xs">
          <Image
            src="/favicon.ico"
            alt="DHMIS"
            width={32}
            height={32}
            className="rounded-full self-center"
          />{" "}
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {state === "expanded" && "Select"}
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>mord</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>idk</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel className="text-md font-semibold pl-0.5 justify-center text-lg">
                    Ctrl + b
                  </SidebarGroupLabel>
                  <SidebarSeparator className="ml-0 my-1.5" />
                  <SidebarGroupContent>
                    <SidebarMenu className="gap-y-0">
                      {items.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-5">
                          <SidebarMenuButton asChild className="text-lg">
                            <a href={item.url}>
                              <item.icon />
                              <span className="text-xs">{item.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                  <ModeToggle />
                </SidebarGroup>
              </SidebarContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </Sidebar>
  );
}
