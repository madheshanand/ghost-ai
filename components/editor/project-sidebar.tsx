"use client";

import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-12 z-40 flex h-[calc(100vh-3rem)] w-80 flex-col border-r border-surface-border bg-surface transition-transform duration-200",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
          <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 p-4">
          <Tabs defaultValue="my-projects" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="my-projects" className="flex-1">My Projects</TabsTrigger>
              <TabsTrigger value="shared" className="flex-1">Shared</TabsTrigger>
            </TabsList>
            <TabsContent value="my-projects" className="mt-4">
              <p className="text-center text-sm text-copy-muted">No projects yet</p>
            </TabsContent>
            <TabsContent value="shared" className="mt-4">
              <p className="text-center text-sm text-copy-muted">No shared projects yet</p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-surface-border p-4">
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
