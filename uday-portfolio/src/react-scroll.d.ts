// src/react-scroll.d.ts
declare module 'react-scroll' {
    import * as React from 'react';
  
    export const Link: React.FC<{
      to: string;
      smooth?: boolean;
      duration?: number;
      className?: string;
      children: React.ReactNode;
    }>;
  
    // Add other exports if necessary
  }
  