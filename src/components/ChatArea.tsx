import { useState, useRef, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatMessage } from './ChatMessage';
import { MessageInput } from './MessageInput';
import { TypingIndicator } from './TypingIndicator';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

const dummyMessages: Message[] = [
  {
    id: '1',
    content: 'Hi! Can you help me understand React hooks better?',
    sender: 'user',
    timestamp: '10:30 AM'
  },
  {
    id: '2',
    content: 'Of course! React hooks are functions that let you use state and other React features without writing a class. The most common hooks are useState and useEffect.\n\nHere\'s a simple example:\n\n```javascript\nimport { useState, useEffect } from \'react\';\n\nfunction MyComponent() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n  \n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}\n```\n\nWould you like me to explain any specific hook in more detail?',
    sender: 'ai',
    timestamp: '10:31 AM'
  },
  {
    id: '3',
    content: 'That\'s helpful! Can you explain useEffect in more detail?',
    sender: 'user',
    timestamp: '10:32 AM'
  }
];

interface ChatAreaProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function ChatArea({ sidebarOpen, onToggleSidebar }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're asking about: "${content}". This is a simulated response. In a real implementation, this would be connected to an AI service like OpenAI's API.`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-border bg-background">
        {!sidebarOpen && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="mr-3 hover:bg-button-ghost-hover"
          >
            <Menu className="w-4 h-4" />
          </Button>
        )}
        <div className="flex-1">
          <h2 className="text-lg font-medium text-text-primary">Chat</h2>
          <p className="text-sm text-text-muted">Ask me anything</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-background">
        <MessageInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
}