"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({ sidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <nav className="flex h-12 items-center justify-between border-b border-surface-border bg-surface px-4">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div />
      <div />
    </nav>
  );
}
