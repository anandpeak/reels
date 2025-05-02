
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import MediaUpload from "@/components/studio/MediaUpload";
import VoiceRecorder from "@/components/studio/VoiceRecorder";
import ScriptInput from "@/components/studio/ScriptInput";
import ReelPreview from "@/components/studio/ReelPreview";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Studio = () => {
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [script, setScript] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined);
  const [mediaType, setMediaType] = useState<"image" | "video">("image");
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!mediaFile) {
      toast({ 
        title: "Media Required", 
        description: "Please upload a photo or video first.", 
        variant: "destructive" 
      });
      return;
    }

    if (!audioBlob) {
      toast({ 
        title: "Voice Required", 
        description: "Please record your voice sample first.", 
        variant: "destructive" 
      });
      return;
    }

    if (!script) {
      toast({ 
        title: "Script Required", 
        description: "Please enter a script for your reel.", 
        variant: "destructive" 
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation process with timeout
    setTimeout(() => {
      const mockVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-woman-standing-in-a-modern-coffee-shop-4877-large.mp4";
      setVideoUrl(mockVideoUrl);
      setIsGenerating(false);
      
      toast({
        title: "Reel Generated!",
        description: "Your reel has been successfully created.",
      });
    }, 5000); // Simulate 5 second generation time
  };

  const isGenerateDisabled = !mediaFile || !audioBlob || !script || isGenerating;

  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Create Your Reel</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <Tabs defaultValue="image">
                  <TabsList className="mb-4">
                    <TabsTrigger value="image" onClick={() => setMediaType("image")}>
                      Upload Photo
                    </TabsTrigger>
                    <TabsTrigger value="video" onClick={() => setMediaType("video")}>
                      Upload Video
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="image">
                    <MediaUpload 
                      type="image" 
                      onUpload={(file) => setMediaFile(file)} 
                    />
                  </TabsContent>
                  <TabsContent value="video">
                    <MediaUpload 
                      type="video" 
                      onUpload={(file) => setMediaFile(file)} 
                    />
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-medium mb-4">Voice Sample</h2>
                <VoiceRecorder onRecordComplete={(blob) => setAudioBlob(blob)} />
              </div>
              
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-medium mb-4">Script</h2>
                <ScriptInput onScriptChange={(text) => setScript(text)} />
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                disabled={isGenerateDisabled}
                onClick={handleGenerate}
              >
                {isGenerating ? (
                  <>Generating Your Reel...</>
                ) : (
                  <>Generate Reel</>
                )}
              </Button>
            </div>
            
            {/* Right Column: Preview */}
            <div className="lg:col-span-5">
              <ReelPreview isGenerating={isGenerating} videoUrl={videoUrl} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Studio;
