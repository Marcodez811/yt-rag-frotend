"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImportSourceDialog } from "@/components/import-source-dialog";
import {
  BookOpen,
  FileText,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CoursePage() {
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [isSourcesPanelCollapsed, setIsSourcesPanelCollapsed] = useState(false);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] bg-background">
      {/* Sources Panel */}
      <div
        className={cn(
          "flex flex-col border-r transition-all duration-300",
          isSourcesPanelCollapsed ? "w-14" : "w-80"
        )}
      >
        <div className="flex h-14 items-center justify-between border-b">
          <h2
            className={cn(
              "font-semibold px-4 transition-opacity duration-300",
              isSourcesPanelCollapsed ? "opacity-0" : "opacity-100"
            )}
          >
            Sources
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="min-w-[56px]"
            onClick={() => setIsSourcesPanelCollapsed(!isSourcesPanelCollapsed)}
          >
            {isSourcesPanelCollapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div
          className={cn(
            "p-4 overflow-hidden transition-opacity duration-300",
            isSourcesPanelCollapsed ? "opacity-0" : "opacity-100"
          )}
        >
          <Button
            className="w-full justify-start gap-2"
            variant="outline"
            onClick={() => setImportDialogOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Add source
          </Button>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <Upload className="mx-auto h-8 w-8 opacity-50" />
            <p className="mt-2">
              Upload PDFs, videos, or paste URLs to add learning materials
            </p>
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      <div className="flex flex-1 flex-col">
        <div className="flex h-14 items-center border-b px-4">
          {/* <Button
            variant="ghost"
            size="icon"
            className={cn("mr-2", !isSourcesPanelCollapsed && "hidden")}
            onClick={() => setIsSourcesPanelCollapsed(false)}
          >
            <PanelLeftOpen className="h-4 w-4" />
          </Button> */}
          <h2 className="font-semibold">Chat</h2>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <Upload className="h-12 w-12 text-muted-foreground/50" />
            <p className="text-lg font-medium">Add a source to get started</p>
            <p className="text-sm text-muted-foreground">
              Upload your learning materials or paste URLs to begin the
              conversation
            </p>
            <Button onClick={() => setImportDialogOpen(true)}>
              Upload a source
            </Button>
          </div>
        </div>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input placeholder="Ask a question about your sources..." />
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              Ask
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Panel */}
      <div className="w-80 border-l">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="font-semibold">Quick Creation</h2>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <Button className="justify-start" variant="outline">
            <BookOpen className="mr-2 h-4 w-4" />
            Generate Summary
          </Button>
          <Button className="justify-start" variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Generate Quiz
          </Button>
        </div>
      </div>

      <ImportSourceDialog
        open={importDialogOpen}
        onOpenChange={setImportDialogOpen}
      />
    </div>
  );
}
