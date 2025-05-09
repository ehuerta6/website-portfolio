'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [speed, setSpeed] = useState({ x: 2, y: 2 });
  const [message, setMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(true);
  const [bugsFound, setBugsFound] = useState(0);
  const [bugVisible, setBugVisible] = useState(false);
  const bugTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bugAppearTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showCounter, setShowCounter] = useState(false);

  // Initialize bug counter from localStorage
  useEffect(() => {
    const savedBugs = localStorage.getItem('bugsFound');
    if (savedBugs) {
      setBugsFound(Number.parseInt(savedBugs, 10));
    }
  }, []);

  // Timed bug appearance/disappearance
  useEffect(() => {
    function scheduleBugAppearance() {
      const appearDelay = Math.random() * 20000 + 10000; // 10-30s
      bugAppearTimeoutRef.current = setTimeout(() => {
        // Set random position
        setPosition({
          x: Math.random() * (window.innerWidth - 50),
          y: Math.random() * (window.innerHeight - 50),
        });
        // Set speed based on bugsFound
        const baseSpeed = 2;
        const maxSpeed = 10;
        const increment = 0.5; // speed increase per bug
        const speedMagnitude = Math.min(
          baseSpeed + bugsFound * increment,
          maxSpeed
        );
        const angle = Math.random() * 2 * Math.PI;
        setSpeed({
          x: Math.cos(angle) * speedMagnitude,
          y: Math.sin(angle) * speedMagnitude,
        });
        setBugVisible(true);
        // Schedule disappearance
        const disappearDelay = Math.random() * 5000 + 5000; // 5-10s
        bugTimeoutRef.current = setTimeout(() => {
          setBugVisible(false);
          scheduleBugAppearance();
        }, disappearDelay);
      }, appearDelay);
    }
    // Start the first appearance
    scheduleBugAppearance();
    return () => {
      if (bugTimeoutRef.current) clearTimeout(bugTimeoutRef.current);
      if (bugAppearTimeoutRef.current)
        clearTimeout(bugAppearTimeoutRef.current);
    };
  }, [bugsFound]);

  // Move bug only when visible
  const moveBug = useCallback(() => {
    if (!isMoving || !bugVisible) return;
    setPosition((prev) => {
      const { x, y } = prev;
      let { x: dx, y: dy } = speed;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      let bounced = false;
      if (x + dx >= windowWidth - 50 || x + dx <= 0) {
        dx = -dx;
        bounced = true;
      }
      if (y + dy >= windowHeight - 50 || y + dy <= 0) {
        dy = -dy;
        bounced = true;
      }
      if (bounced) setSpeed({ x: dx, y: dy });
      return {
        x: Math.max(0, Math.min(windowWidth - 50, x + dx)),
        y: Math.max(0, Math.min(windowHeight - 50, y + dy)),
      };
    });
    setRotation((prev) => (prev + 1) % 360);
  }, [speed, isMoving, bugVisible]);

  useEffect(() => {
    if (!bugVisible) return;
    const interval = setInterval(moveBug, 16);
    return () => clearInterval(interval);
  }, [moveBug, bugVisible]);

  const catchBug = () => {
    const randomMessage =
      debuggingMessages[Math.floor(Math.random() * debuggingMessages.length)];
    setMessage(randomMessage);
    setMessageVisible(true);
    setIsMoving(false);

    // Update bug counter
    const newCount = bugsFound + 1;
    setBugsFound(newCount);
    localStorage.setItem('bugsFound', newCount.toString());

    // Show counter if this is the first bug caught
    if (newCount === 1) {
      setShowCounter(true);
    }

    // Reset after message disappears
    setTimeout(() => {
      setMessageVisible(false);
      setIsMoving(true);
      setPosition({
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 50),
      });
    }, 2000);
  };

  // Toggle bug counter visibility
  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    <div className='bug-chase-container'>
      <div
        className='fixed z-50 cursor-pointer select-none animate-wiggle'
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.1s ease-out',
          display: bugVisible ? 'block' : 'none',
        }}
        onClick={catchBug}
      >
        🐛
      </div>

      {messageVisible && (
        <div className='fixed inset-0 flex items-center justify-center z-50 pointer-events-none'>
          <div className='bg-background/80 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg animate-pop-in'>
            <div className='flex items-start gap-3'>
              <div className='bg-green-100 dark:bg-green-900/30 p-2 rounded-full'>
                <Check className='h-5 w-5 text-green-600 dark:text-green-400' />
              </div>
              <div className='flex-1'>
                <h3 className='font-medium text-lg'>Bug Caught!</h3>
                <p className='text-muted-foreground mt-1'>{message}</p>
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

            {/* Show bug counter for first catch */}
            {bugsFound === 1 && (
              <div className='mt-3 pt-3 border-t text-sm text-muted-foreground'>
                <p>
                  You've started your bug collection! Check the bottom-left
                  corner to track your progress.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bug counter */}
      <div
        className={cn(
          'fixed bottom-4 left-4 z-40 transition-all duration-300 transform',
          showCounter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        <Button
          variant='outline'
          size='sm'
          className='gap-2 text-xs rounded-full px-3 border-primary/20 hover:border-primary/50 bg-background/80 backdrop-blur-sm'
          onClick={toggleCounter}
        >
          <span className='text-sm'>🐛</span>
          <span>{bugsFound}</span>
          {!showCounter && <span className='sr-only'>bugs found</span>}
        </Button>
      </div>
    </div>
  );
}
