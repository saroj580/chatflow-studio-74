import { ThemeProvider } from '@/components/ThemeProvider';
import { ChatLayout } from '@/components/ChatLayout';

const Index = () => {
  return (
    <ThemeProvider>
      <ChatLayout />
    </ThemeProvider>
  );
};

export default Index;
