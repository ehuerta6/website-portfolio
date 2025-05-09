'use client';

import { useState, useEffect, useRef } from 'react';
import { Check, X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechStackVisualizer from './TechStackVisualizer';

// Funny debugging messages that will appear when catching a bug
const debuggingMessages = [
  'You found a bug! If only fixing real bugs was this easy...',
  "Bug caught! This one didn't even require a 3-hour debugging session!",
  'Nice catch! If only my code reviews went this smoothly.',
  'Bug eliminated! No Stack Overflow required this time.',
  'Got it! That was easier than finding a missing semicolon.',
  'Bug squashed! No need to reboot your computer this time.',
  'Caught in the act! If only all bugs announced themselves like this.',
  "Good eye! You'd make a great QA engineer.",
  'Bug intercepted! No need for console.log() spam today.',
  "Gotcha! This bug didn't even have time to mutate the state.",
  'Bug fixed! And it only took one click, not three days of debugging.',
  'Found it! No need to blame it on a browser-specific issue this time.',
  'Bug neutralized! Your rubber duck would be proud.',
  "Caught! This one didn't even make it to production.",
  'Nice reflexes! You caught it before it could nest in your codebase.',
];

export default function BugChase() {
  const [bugVisible, setBugVisible] = useState(false);
  const [bugPosition, setBugPosition] = useState({ x: 0, y: 0 });
  const [bugDirection, setBugDirection] = useState({ x: 1, y: 0 }); // Initial direction: right
  const [messageVisible, setMessageVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [bugsFound, setBugsFound] = useState(0);
  const bugRef = useRef<HTMLDivElement>(null);
  const [showTechStack, setShowTechStack] = useState(false);

  // Initialize bug counter from localStorage
  useEffect(() => {
    const savedBugs = localStorage.getItem('bugsFound');
    if (savedBugs) {
      setBugsFound(Number.parseInt(savedBugs, 10));
    }
  }, []);

  // Randomly show the bug
  useEffect(() => {
    const showBug = () => {
      if (!bugVisible && !messageVisible && Math.random() < 0.3) {
        // 30% chance to show a bug
        // Random position along the edges of the viewport
        const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
        let x = 0,
          y = 0;
        let dirX = 0,
          dirY = 0;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        switch (edge) {
          case 0: // Top edge
            x = Math.floor(Math.random() * (viewportWidth - 100)) + 50;
            y = 0;
            dirX = Math.random() > 0.5 ? 1 : -1;
            dirY = 1;
            break;
          case 1: // Right edge
            x = viewportWidth;
            y = Math.floor(Math.random() * (viewportHeight - 100)) + 50;
            dirX = -1;
            dirY = Math.random() > 0.5 ? 1 : -1;
            break;
          case 2: // Bottom edge
            x = Math.floor(Math.random() * (viewportWidth - 100)) + 50;
            y = viewportHeight;
            dirX = Math.random() > 0.5 ? 1 : -1;
            dirY = -1;
            break;
          case 3: // Left edge
            x = 0;
            y = Math.floor(Math.random() * (viewportHeight - 100)) + 50;
            dirX = 1;
            dirY = Math.random() > 0.5 ? 1 : -1;
            break;
        }

        setBugPosition({ x, y });
        setBugDirection({ x: dirX, y: dirY });
        setBugVisible(true);

        // Hide bug after some time if not caught
        setTimeout(() => {
          setBugVisible(false);
        }, 10000); // Bug disappears after 10 seconds if not caught
      }
    };

    // Show bug at random intervals
    const interval = setInterval(showBug, 20000); // Check every 20 seconds

    // Initial check
    showBug();

    return () => clearInterval(interval);
  }, [bugVisible, messageVisible]);

  // Animate bug movement
  useEffect(() => {
    if (!bugVisible || messageVisible) return;

    const moveBug = () => {
      // Speed increases with bugsFound
      const speed = 2 + Math.min(bugsFound, 20) * 0.5;
      // Update position based on direction
      let newX = bugPosition.x + bugDirection.x * speed;
      let newY = bugPosition.y + bugDirection.y * speed;

      // Check boundaries and change direction if needed
      const bugSize = 30; // Approximate size of the bug emoji

      let newDirX = bugDirection.x;
      let newDirY = bugDirection.y;

      if (newX <= 0 || newX >= window.innerWidth - bugSize) {
        newDirX = -newDirX;
        newX = Math.max(0, Math.min(newX, window.innerWidth - bugSize));
      }

      if (newY <= 0 || newY >= window.innerHeight - bugSize) {
        newDirY = -newDirY;
        newY = Math.max(0, Math.min(newY, window.innerHeight - bugSize));
      }

      setBugDirection({ x: newDirX, y: newDirY });
      setBugPosition({ x: newX, y: newY });
    };

    const animationFrame = requestAnimationFrame(moveBug);
    return () => cancelAnimationFrame(animationFrame);
  }, [bugVisible, bugPosition, bugDirection, messageVisible, bugsFound]);

  // Handle bug click
  const catchBug = () => {
    if (!bugVisible) return;

    // Hide bug
    setBugVisible(false);

    // Show random message
    const randomIndex = Math.floor(Math.random() * debuggingMessages.length);
    setCurrentMessage(debuggingMessages[randomIndex]);
    setMessageVisible(true);

    // Update bug counter
    const newCount = bugsFound + 1;
    setBugsFound(newCount);
    localStorage.setItem('bugsFound', newCount.toString());

    // Hide message after some time
    setTimeout(() => {
      setMessageVisible(false);
    }, 5000);
  };

  return (
    <div className='bug-chase-container'>
      {/* The bug */}
      {bugVisible && (
        <div
          ref={bugRef}
          className='fixed z-50 cursor-pointer transform transition-transform duration-300 hover:scale-125'
          style={{
            left: `${bugPosition.x}px`,
            top: `${bugPosition.y}px`,
            transform: `rotate(${
              Math.atan2(bugDirection.y, bugDirection.x) * (180 / Math.PI)
            }deg)`,
          }}
          onClick={catchBug}
          onKeyDown={(e) => e.key === 'Enter' && catchBug()}
          tabIndex={0}
          role='button'
          aria-label='Catch the bug'
        >
          <div className='text-2xl animate-wiggle select-none'>🐛</div>
        </div>
      )}

      {/* Message popup */}
      {messageVisible && (
        <div className='fixed top-1/4 left-1/2 transform -translate-x-1/2 z-50 animate-pop-in'>
          <div className='bg-card border rounded-lg shadow-lg p-4 max-w-md'>
            <div className='flex items-start gap-3'>
              <div className='bg-green-100 dark:bg-green-900/30 p-2 rounded-full'>
                <Check className='h-5 w-5 text-green-600 dark:text-green-400' />
              </div>
              <div className='flex-1'>
                <h3 className='font-medium text-lg'>Bug Caught!</h3>
                <p className='text-muted-foreground mt-1'>{currentMessage}</p>
              </div>
              <Button
                variant='ghost'
                size='icon'
                className='h-6 w-6 rounded-full opacity-70 hover:opacity-100 transition-opacity'
                onClick={() => setMessageVisible(false)}
                aria-label='Close message'
              >
                <X className='h-3 w-3' />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Bug counter */}
      <div className='fixed bottom-4 left-4 z-40 transition-all duration-300 transform opacity-100 translate-y-0'>
        <Button
          variant='outline'
          size='sm'
          className='gap-2 text-xs rounded-full px-3 border-primary/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm'
          disabled
        >
          <span className='text-sm'>🐛</span>
          <span>{bugsFound}</span>
          <span className='sr-only'>bugs found</span>
        </Button>
      </div>

      {/* Tech Stack Floating Button */}
      <div className='fixed bottom-4 right-4 z-50'>
        <Button
          variant='outline'
          size='icon'
          className='rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 shadow-lg'
          onClick={() => setShowTechStack(true)}
          aria-label='Show tech stack'
        >
          <Info className='w-5 h-5 text-accent' />
        </Button>
      </div>

      {/* Tech Stack Modal/Container */}
      <TechStackVisualizer
        show={showTechStack}
        onClose={() => setShowTechStack(false)}
      />
    </div>
  );
}
