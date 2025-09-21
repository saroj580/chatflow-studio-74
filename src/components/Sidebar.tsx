import { useState } from 'react';
import { Plus, MessageSquare, Settings, Sun, Moon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

const dummyConversations: Conversation[] = [
  {
    id: '1',
    title: 'Help with React Components',
    lastMessage: 'Thanks for the detailed explanation!',
    timestamp: '2m ago'
  },
  {
    id: '2', 
    title: 'JavaScript Array Methods',
    lastMessage: 'Can you explain map vs forEach?',
    timestamp: '1h ago'
  },
  {
    id: '3',
    title: 'CSS Grid Layout',
    lastMessage: 'How do I center elements?',
    timestamp: '3h ago'
  },
  {
    id: '4',
    title: 'API Integration Best Practices',
    lastMessage: 'What about error handling?',
    timestamp: '1d ago'
  },
  {
    id: '5',
    title: 'TypeScript Generics',
    lastMessage: 'This makes much more sense now',
    timestamp: '2d ago'
  }
];

interface SidebarProps {
  onToggle: () => void;
}

export function Sidebar({ onToggle }: SidebarProps) {
  const [activeConversation, setActiveConversation] = useState('1');
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-full bg-sidebar-background border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-accent-primary" />
            <h1 className="text-lg font-semibold text-text-primary">ChatGPT</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="hover:bg-button-ghost-hover"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
        
        <Button 
          className="w-full bg-button-primary text-button-primary-foreground hover:bg-button-primary/90 transition-smooth"
          size="sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto scrollbar-thin p-2">
        <div className="space-y-1">
          {dummyConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setActiveConversation(conversation.id)}
              className={`w-full text-left p-3 rounded-lg transition-smooth hover:bg-surface-hover group ${
                activeConversation === conversation.id 
                  ? 'bg-surface text-text-primary' 
                  : 'text-text-secondary'
              }`}
            >
              <div className="font-medium text-sm mb-1 truncate">
                {conversation.title}
              </div>
              <div className="text-xs text-text-muted truncate">
                {conversation.lastMessage}
              </div>
              <div className="text-xs text-text-placeholder mt-1">
                {conversation.timestamp}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="text-text-secondary hover:bg-button-ghost-hover hover:text-text-primary"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-text-secondary hover:bg-button-ghost-hover hover:text-text-primary"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}