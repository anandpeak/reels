
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share, Download, Loader2 } from "lucide-react";

interface ReelPreviewProps {
  isGenerating: boolean;
  videoUrl?: string;
}

const ReelPreview = ({ isGenerating, videoUrl }: ReelPreviewProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (videoUrl) {
      setLoaded(false);
    }
  }, [videoUrl]);

  const handleVideoLoad = () => {
    setLoaded(true);
  };

  const handleDownload = () => {
    if (videoUrl) {
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = 'reelcraft-video.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleShare = () => {
    if (navigator.share && videoUrl) {
      navigator.share({
        title: 'My ReelCraft Video',
        text: 'Check out this video I created with ReelCraft!',
        url: videoUrl,
      })
      .catch((error) => console.log('Error sharing:', error));
    }
  };

  return (
    <Card>
      <CardContent className="p-0">
        <div className="aspect-[9/16] bg-black rounded-t-lg overflow-hidden relative">
          {isGenerating ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
              <Loader2 className="h-10 w-10 animate-spin-slow mb-4" />
              <p className="text-lg font-medium">Generating Your Reel...</p>
              <p className="text-sm text-gray-300 mt-2">This may take a minute or two</p>
            </div>
          ) : videoUrl ? (
            <>
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin-slow" />
                </div>
              )}
              <video 
                src={videoUrl} 
                className="w-full h-full object-cover"
                controls
                onLoadedData={handleVideoLoad}
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
              <p className="text-center px-4">
                Your reel preview will appear here once generated
              </p>
            </div>
          )}
        </div>
        <div className="p-4 space-y-4">
          <h3 className="font-medium">Your Reel</h3>
          {videoUrl && (
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button 
                className="flex-1"
                onClick={handleShare}
              >
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReelPreview;
