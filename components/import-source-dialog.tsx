import { Bot, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

interface ImportSourceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImportSourceDialog({
  open,
  onOpenChange,
}: ImportSourceDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <DialogTitle>Add sources</DialogTitle>
          </div>
          <DialogDescription>
            Sources let obot.ai base its responses on your learning materials.
            (Examples: lecture notes, research papers, textbook PDFs, YouTube
            lectures)
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Tabs defaultValue="upload">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload files</TabsTrigger>
              <TabsTrigger value="url">Add URL</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="mt-4">
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
                <Upload className="mb-4 h-8 w-8 text-muted-foreground" />
                <div className="text-center">
                  <p>
                    Drag & drop or{" "}
                    <Button variant="link" className="px-1">
                      choose file
                    </Button>{" "}
                    to upload
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Supported file types: PDF, txt
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="url" className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-medium">YouTube URL</label>
                <div className="mt-1.5 flex gap-2">
                  <Input placeholder="https://youtube.com/..." />
                  <Button>Add</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Separator className="my-4" />

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            <span>Source limit</span>
          </div>
          <span>0 / 50</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
