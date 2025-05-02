
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface MediaUploadProps {
  type: "image" | "video";
  onUpload: (file: File) => void;
}

const MediaUpload = ({ type, onUpload }: MediaUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = (file: File) => {
    const isImage = file.type.match('image.*');
    const isVideo = file.type.match('video.*');
    
    if (type === 'image' && !isImage) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }
    
    if (type === 'video' && !isVideo) {
      toast({
        title: "Invalid file type",
        description: "Please upload a video file.",
        variant: "destructive",
      });
      return;
    }
    
    setFile(file);
    const fileUrl = URL.createObjectURL(file);
    setPreview(fileUrl);
    onUpload(file);
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <Label htmlFor={`${type}-upload`}>
        {type === "image" ? "Upload your photo" : "Upload your video"}
      </Label>
      
      {!file ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all",
            dragActive ? "border-primary bg-primary/5" : "border-border",
            "hover:border-primary hover:bg-primary/5"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="h-10 w-10 text-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            Drag and drop your {type}, or click to select
          </p>
          <Input
            ref={inputRef}
            id={`${type}-upload`}
            type="file"
            accept={type === "image" ? "image/*" : "video/*"}
            onChange={handleChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden border">
          {type === "image" ? (
            <img
              src={preview!}
              alt="Preview"
              className="w-full h-64 object-cover"
            />
          ) : (
            <video
              src={preview!}
              controls
              className="w-full h-64 object-cover"
            />
          )}
          <Button
            size="icon"
            variant="destructive"
            className="absolute top-2 right-2"
            onClick={removeFile}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default MediaUpload;
