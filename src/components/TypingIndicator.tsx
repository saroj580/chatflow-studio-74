import { Bot } from 'lucide-react';

export function TypingIndicator() {
  return (
    <div className="flex gap-4 justify-start message-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center">
        <Bot className="w-4 h-4 text-accent-primary-foreground" />
      </div>
      
      <div className="max-w-[70%]">
        <div className="bg-message-ai text-message-ai-text border border-border rounded-2xl px-4 py-3">
          <div className="flex gap-1 items-center">
            <div className="w-2 h-2 bg-text-muted rounded-full typing-dots"></div>
            <div className="w-2 h-2 bg-text-muted rounded-full typing-dots"></div>
            <div className="w-2 h-2 bg-text-muted rounded-full typing-dots"></div>
          </div>
        </div>
      </div>
    </div>
  );
}