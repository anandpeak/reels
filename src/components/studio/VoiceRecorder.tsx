
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Square, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";

interface VoiceRecorderProps {
  onRecordComplete: (audioBlob: Blob) => void;
}

const VoiceRecorder = ({ onRecordComplete }: VoiceRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };
      
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        onRecordComplete(audioBlob);
        audioChunksRef.current = [];
      };
      
      audioChunksRef.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
      
      // Start timer
      let seconds = 0;
      timerRef.current = window.setInterval(() => {
        seconds++;
        setRecordingTime(seconds);
        if (seconds >= 60) { // Max 60 seconds
          stopRecording();
        }
      }, 1000);
      
    } catch (err) {
      toast({
        title: "Permission denied",
        description: "Please allow microphone access to record your voice.",
        variant: "destructive",
      });
      console.error("Error accessing microphone:", err);
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      
      // Clear timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };
  
  const resetRecording = () => {
    setAudioURL(null);
    setRecordingTime(0);
  };
  
  const formatTime = (seconds: number): string => {
    return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center space-y-4">
        {isRecording ? (
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-pulse text-red-500">
                <Mic className="h-6 w-6" />
              </div>
              <span className="text-lg">{formatTime(recordingTime)}</span>
            </div>
            <Progress value={(recordingTime / 60) * 100} />
            <Button 
              variant="destructive" 
              className="w-full" 
              onClick={stopRecording}
            >
              <Square className="h-4 w-4 mr-2" />
              Stop Recording
            </Button>
          </div>
        ) : audioURL ? (
          <div className="space-y-4 w-full">
            <audio src={audioURL} controls className="w-full" />
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={resetRecording}
              >
                Record Again
              </Button>
            </div>
          </div>
        ) : (
          <Button 
            variant="outline" 
            size="lg"
            className="w-full h-16"
            onClick={startRecording}
          >
            <Mic className="h-5 w-5 mr-2" />
            Record Your Voice
          </Button>
        )}
      </div>
    </div>
  );
};

export default VoiceRecorder;
