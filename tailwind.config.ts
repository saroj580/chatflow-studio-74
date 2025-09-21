import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Surface colors
        surface: "hsl(var(--surface))",
        "surface-hover": "hsl(var(--surface-hover))",
        
        // Sidebar colors
        "sidebar-background": "hsl(var(--sidebar-background))",
        "sidebar-border": "hsl(var(--sidebar-border))",
        
        // Message colors
        "message-user": "hsl(var(--message-user))",
        "message-user-text": "hsl(var(--message-user-text))",
        "message-ai": "hsl(var(--message-ai))",
        "message-ai-text": "hsl(var(--message-ai-text))",
        
        // Button colors
        "button-primary": "hsl(var(--button-primary))",
        "button-primary-foreground": "hsl(var(--button-primary-foreground))",
        "button-secondary": "hsl(var(--button-secondary))",
        "button-secondary-foreground": "hsl(var(--button-secondary-foreground))",
        "button-ghost-hover": "hsl(var(--button-ghost-hover))",
        
        // Accent colors
        "accent-primary": "hsl(var(--accent-primary))",
        "accent-primary-foreground": "hsl(var(--accent-primary-foreground))",
        "accent-muted": "hsl(var(--accent-muted))",
        
        // Input colors
        "input-border": "hsl(var(--input-border))",
        "input-background": "hsl(var(--input-background))",
        "input-focus": "hsl(var(--input-focus))",
        
        // Text colors
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",
        "text-placeholder": "hsl(var(--text-placeholder))",
        
        // Status colors
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        destructive: "hsl(var(--destructive))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeInUp": {
          from: { 
            opacity: "0", 
            transform: "translateY(10px)" 
          },
          to: { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "slideInRight": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeInUp": "fadeInUp 0.3s ease-out",
        "slideInRight": "slideInRight 0.3s ease-out",
        "pulse": "pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
