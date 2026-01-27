"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, Settings, LogOut } from "lucide-react";
import Sidebar from "./sidebar";
import { Avatar } from "@/components/ui/avatar";


export default function Navbar({ collapsed, setCollapsed }) {
  return (
    <header className="flex h-14 items-center border-b px-4">
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar collapsed={false} />
        </SheetContent>
      </Sheet>

      {/* Desktop toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden md:inline-flex"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Menu />
      </Button>

      <span className="ml-3 font-semibold">Synk Code</span>

      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar className="h-8 w-8">
                <span className="rounded-full bg-muted flex h-full w-full items-center justify-center text-sm font-medium">
                  JD
                </span>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-semibold">User 1</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
