import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function MessageInput({ onSendMessage, disabled }: MessageInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-3">
      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
          disabled={disabled}
          className={`
            w-full min-h-[44px] max-h-[120px] py-3 px-4 pr-12
            bg-input-background border border-input-border rounded-2xl
            text-text-primary placeholder:text-text-placeholder
            focus:outline-none focus:ring-2 focus:ring-input-focus focus:border-transparent
            resize-none transition-smooth
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        />
      </div>
      
      <Button
        type="submit"
        disabled={!message.trim() || disabled}
        className="w-11 h-11 rounded-full bg-accent-primary hover:bg-accent-primary/90 text-accent-primary-foreground disabled:opacity-50 transition-smooth"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}