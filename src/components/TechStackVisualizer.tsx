import React from 'react';
import {
  X,
  Globe,
  Code2,
  BadgePercent,
  Paintbrush,
  Terminal,
  Github,
  Package2,
  FileCode2,
  Sparkles,
} from 'lucide-react';

interface TechStackVisualizerProps {
  show: boolean;
  onClose: () => void;
}

export default function TechStackVisualizer({
  show,
  onClose,
}: TechStackVisualizerProps) {
  if (!show) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-end justify-end pointer-events-none'>
      <div className='m-6 max-w-lg w-full pointer-events-auto'>
        <div className='bg-background/95 border border-primary/20 rounded-2xl shadow-2xl p-8 relative animate-pop-in'>
          <button
            className='absolute top-4 right-4 text-muted-foreground hover:text-accent transition-colors'
            onClick={onClose}
            aria-label='Close tech stack'
          >
            <X className='w-5 h-5' />
          </button>
          <h2 className='text-2xl font-bold mb-1 text-white'>
            Portfolio Tech Stack
          </h2>
          <p className='text-muted-foreground mb-6 text-sm'>
            You found the secret section! Here&apos;s what powers this portfolio
            website.
          </p>

          {/* Frontend Framework */}
          <div className='mb-5'>
            <div className='flex items-center gap-2 mb-2'>
              <span className='text-accent'>
                <Code2 size={18} />
              </span>
              <h3 className='font-semibold text-base text-white'>
                Frontend Framework
              </h3>
            </div>
            <div className='flex flex-wrap gap-3'>
              <TechPill icon={<Globe className='w-5 h-5' />} label='Next.js' />
              <TechPill icon={<Code2 className='w-5 h-5' />} label='React' />
              <TechPill
                icon={<BadgePercent className='w-5 h-5' />}
                label='TypeScript'
              />
            </div>
          </div>

          {/* Styling */}
          <div className='mb-5'>
            <div className='flex items-center gap-2 mb-2'>
              <span className='text-accent'>
                <Paintbrush size={18} />
              </span>
              <h3 className='font-semibold text-base text-white'>Styling</h3>
            </div>
            <div className='flex flex-wrap gap-3'>
              <TechPill
                icon={<Sparkles className='w-5 h-5' />}
                label='Tailwind CSS'
              />
              <TechPill
                icon={<Terminal className='w-5 h-5' />}
                label='shadcn/ui'
              />
              <TechPill
                icon={<Paintbrush className='w-5 h-5' />}
                label='CSS Animations'
              />
            </div>
          </div>

          {/* Development Tools */}
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <span className='text-accent'>
                <Terminal size={18} />
              </span>
              <h3 className='font-semibold text-base text-white'>
                Development Tools
              </h3>
            </div>
            <div className='flex flex-wrap gap-3'>
              <TechPill
                icon={<FileCode2 className='w-5 h-5' />}
                label='VS Code'
              />
              <TechPill icon={<Github className='w-5 h-5' />} label='Git' />
              <TechPill icon={<Package2 className='w-5 h-5' />} label='npm' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101522] border border-white/10 text-white/90 text-sm font-medium shadow-sm'>
      <span className='flex items-center justify-center w-5 h-5'>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
