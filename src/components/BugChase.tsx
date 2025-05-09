import { useState, useEffect, useRef } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [bugRotation, setBugRotation] = useState(0);

  // Initialize bug counter from localStorage
  useEffect(() => {
    const savedBugs = localStorage.getItem('bugsFound');
    if (savedBugs) {
      setBugsFound(Number.parseInt(savedBugs, 10));
    }
  }, []);

  // Randomly show the bug (every 10-30 seconds)
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const showBug = () => {
      if (!bugVisible && !messageVisible && Math.random() < 0.7) {
        // 70% chance to show a bug
        const edge = Math.floor(Math.random() * 4);
        let x = 0,
          y = 0,
          dirX = 0,
          dirY = 0;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        switch (edge) {
          case 0:
            x = Math.floor(Math.random() * (viewportWidth - 100)) + 50;
            y = 0;
            dirX = Math.random() > 0.5 ? 1 : -1;
            dirY = 1;
            break;
          case 1:
            x = viewportWidth;
            y = Math.floor(Math.random() * (viewportHeight - 100)) + 50;
            dirX = -1;
            dirY = Math.random() > 0.5 ? 1 : -1;
            break;
          case 2:
            x = Math.floor(Math.random() * (viewportWidth - 100)) + 50;
            y = viewportHeight;
            dirX = Math.random() > 0.5 ? 1 : -1;
            dirY = -1;
            break;
          case 3:
            x = 0;
            y = Math.floor(Math.random() * (viewportHeight - 100)) + 50;
            dirX = 1;
            dirY = Math.random() > 0.5 ? 1 : -1;
            break;
        }
        setBugPosition({ x, y });
        setBugDirection({ x: dirX, y: dirY });
        setBugVisible(true);
        setTimeout(() => {
          setBugVisible(false);
        }, 10000);
      }
      // Schedule next bug appearance randomly between 10-30 seconds
      const nextDelay = Math.floor(Math.random() * 20000) + 10000;
      timeout = setTimeout(showBug, nextDelay);
    };
    showBug();
    return () => clearTimeout(timeout);
  }, [bugVisible, messageVisible]);

  // Animate bug movement (speed increases with bugsFound, rotates on corner touch)
  useEffect(() => {
    if (!bugVisible || messageVisible) return;
    let animationFrame: number;
    const moveBug = () => {
      if (bugRef.current && containerRef.current) {
        const speed = 0.7 + Math.min(bugsFound * 0.2, 4); // Start slow, max out at 4.7
        let newX = bugPosition.x + bugDirection.x * speed;
        let newY = bugPosition.y + bugDirection.y * speed;
        const bugSize = 24; // Smaller bug
        let touchedCorner = false;
        if (newX <= 0 || newX >= window.innerWidth - bugSize) {
          setBugDirection((prev) => ({ ...prev, x: -prev.x }));
          touchedCorner = true;
        }
        if (newY <= 0 || newY >= window.innerHeight - bugSize) {
          setBugDirection((prev) => ({ ...prev, y: -prev.y }));
          touchedCorner = true;
        }
        if (touchedCorner) {
          setBugRotation((prev) => prev + 90);
        }
        newX = Math.max(0, Math.min(newX, window.innerWidth - bugSize));
        newY = Math.max(0, Math.min(newY, window.innerHeight - bugSize));
        setBugPosition({ x: newX, y: newY });
      }
      animationFrame = requestAnimationFrame(moveBug);
    };
    animationFrame = requestAnimationFrame(moveBug);
    return () => cancelAnimationFrame(animationFrame);
  }, [bugVisible, bugPosition, bugDirection, messageVisible, bugsFound]);

  // Handle bug click
  const catchBug = () => {
    if (!bugVisible) return;
    setBugVisible(false);
    const randomIndex = Math.floor(Math.random() * debuggingMessages.length);
    setCurrentMessage(debuggingMessages[randomIndex]);
    setMessageVisible(true);
    const newCount = bugsFound + 1;
    setBugsFound(newCount);
    localStorage.setItem('bugsFound', newCount.toString());
    setTimeout(() => {
      setMessageVisible(false);
    }, 1000);
  };

  return (
    <div
      ref={containerRef}
      className={`bug-chase-container pointer-events-none ${
        messageVisible ? 'blur-sm transition-all duration-300' : ''
      }`}
    >
      {/* The bug */}
      {bugVisible && (
        <div
          ref={bugRef}
          className='fixed z-[9999] cursor-pointer pointer-events-auto'
          style={{
            left: `${bugPosition.x}px`,
            top: `${bugPosition.y}px`,
            fontSize: 24, // Smaller bug
            filter: 'drop-shadow(0 2px 8px #0008)',
            userSelect: 'none',
            transition: 'transform 0.2s',
            transform: `rotate(${bugRotation}deg)`,
          }}
          onClick={catchBug}
          tabIndex={0}
          role='button'
          aria-label='Catch the bug'
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              padding: 2,
              borderRadius: 8,
              background: 'rgba(0,0,0,0.15)',
            }}
          >
            🐛
          </span>
        </div>
      )}

      {/* Message popup */}
      {messageVisible && (
        <div className='fixed z-[9999] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
          <div className='bg-[#222] text-white px-4 py-2 rounded-lg shadow-lg text-base font-medium animate-fade-out'>
            {currentMessage}
          </div>
        </div>
      )}

      {/* Bug counter (only if at least one bug fixed) */}
      {bugsFound > 0 && (
        <div
          className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] pointer-events-auto select-none flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#23272f] via-[#222] to-[#23272f] shadow-lg border border-[#4FC3F7] rounded-full backdrop-blur-md'
          style={{ fontFamily: 'inherit', minWidth: 160 }}
        >
          <span className='text-[#4FC3F7] text-lg font-bold'>🐛</span>
          <span className='text-white text-base font-semibold tracking-wide'>
            Bugs fixed:
          </span>
          <span className='text-[#4FC3F7] text-xl font-extrabold ml-1 drop-shadow'>
            {bugsFound}
          </span>
        </div>
      )}
    </div>
  );
}
