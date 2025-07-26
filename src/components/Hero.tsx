'use client';

import { useState, useEffect } from 'react';
import { Play, Download, Upload } from 'lucide-react';

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const codeLines = [
    'void oracode() {',
    '  child.study();',
    '  child.grow();',
    '  child.build();',
    '}'
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine];
        
        if (!isDeleting && currentChar <= line.length) {
          setTypingText(codeLines.slice(0, currentLine).join('\n') + 
            (currentLine > 0 ? '\n' : '') + line.substring(0, currentChar));
          currentChar++;
        } else if (currentChar === line.length + 1) {
          currentLine++;
          currentChar = 0;
        }
        
        if (currentLine === codeLines.length) {
          setTimeout(() => {
            currentLine = 0;
            currentChar = 0;
          }, 3000);
        }
      }
    };

    const interval = setInterval(typeWriter, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Ora<span className="text-primary">code</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                code that shapes minds, not just machines
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
                <Play className="h-5 w-5 mr-2" />
                Start Learning
              </button>
              
              <button className="flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105 font-semibold text-lg">
                <Upload className="h-5 w-5 mr-2" />
                Submit Your Project
              </button>
              
              <button className="flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
                <Download className="h-5 w-5 mr-2" />
                Download App
              </button>
            </div>
          </div>

          {/* Right side - Animated Code Editor */}
          <div className="relative float-animation">
            <div className="bg-card border rounded-2xl shadow-2xl overflow-hidden">
              {/* Window controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  oracode.js
                </div>
                <div className="w-12"></div>
              </div>

              {/* Line numbers and code */}
              <div className="flex min-h-[300px]">
                <div className="bg-muted/30 px-4 py-6 border-r">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="text-muted-foreground text-sm font-mono leading-6">
                      {num}
                    </div>
                  ))}
                </div>
                
                <div className="flex-1 p-6 font-mono text-sm">
                  <pre className="text-foreground leading-6">
                    <code>
                      <span className="text-purple-500">void</span>{' '}
                      <span className="text-blue-500">oracode</span>
                      <span className="text-foreground">()</span>{' '}
                      <span className="text-foreground">{'{'}</span>
                      {'\n'}
                      {'  '}
                      <span className="text-foreground">child.</span>
                      <span className="text-green-500">study</span>
                      <span className="text-foreground">();</span>
                      {'\n'}
                      {'  '}
                      <span className="text-foreground">society.</span>
                      <span className="text-green-500">grow</span>
                      <span className="text-foreground">();</span>
                      {'\n'}
                      {'  '}
                      <span className="text-foreground">world.</span>
                      <span className="text-green-500">prosper</span>
                      <span className="text-foreground">();</span>
                      {'\n'}
                      <span className="text-foreground">{'}'}</span>
                      <span className="inline-block w-2 h-5 bg-primary ml-1 animate-pulse"></span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-muted border-t text-xs text-muted-foreground font-mono flex justify-between">
                <span>Ready</span>
                <span>JavaScript • UTF-8 • LF</span>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}