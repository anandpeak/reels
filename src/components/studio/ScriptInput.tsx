
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ScriptInputProps {
  onScriptChange: (script: string) => void;
}

const ScriptInput = ({ onScriptChange }: ScriptInputProps) => {
  const [script, setScript] = useState("");
  const maxChars = 500;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setScript(value);
      onScriptChange(value);
    }
  };

  const examples = [
    "Hello everyone! Today I want to share three tips that transformed my social media strategy and boosted my engagement by 200%.",
    "Did you know that 80% of people struggle with time management? Here's how I organize my day for maximum productivity.",
    "I've discovered a game-changing technique for content creators. Let me show you how it works in just 60 seconds."
  ];

  const useExample = (example: string) => {
    setScript(example);
    onScriptChange(example);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Label htmlFor="script">Your Script</Label>
        <span className="text-xs text-muted-foreground">
          {script.length}/{maxChars} characters
        </span>
      </div>
      <Textarea
        id="script"
        placeholder="Type or paste your script here..."
        className="min-h-[200px] resize-none"
        value={script}
        onChange={handleChange}
      />
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Need inspiration? Try one of these examples:</p>
        <div className="grid gap-2">
          {examples.map((example, idx) => (
            <Button
              key={idx}
              variant="outline"
              className="h-auto py-2 px-3 justify-start font-normal text-left text-sm"
              onClick={() => useExample(example)}
            >
              {example.substring(0, 60)}...
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScriptInput;
