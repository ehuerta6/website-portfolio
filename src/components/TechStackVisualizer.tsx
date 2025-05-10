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
    <>
      {/* Overlay for blur and dim */}
      <div
        className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300'
        onClick={onClose}
      />
      {/* Centered Modal */}
      <div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'>
        <div className='max-w-lg w-full pointer-events-auto'>
          <div className='bg-[#181f2a]/95 border border-primary/20 rounded-2xl shadow-2xl p-8 relative animate-pop-in'>
            <button
              className='absolute top-4 right-4 text-white/60 hover:text-white text-xl font-bold focus:outline-none'
              onClick={onClose}
              aria-label='Close tech stack'
            >
              <X className='w-5 h-5' />
            </button>
            <h2 className='text-2xl font-bold mb-1 text-white text-center'>
              Portfolio Tech Stack
            </h2>
            <p className='text-muted-foreground mb-6 text-sm text-center'>
              You found the secret section! Here&apos;s what powers this
              portfolio website.
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
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                <TechPill
                  icon={<Globe className='w-5 h-5' />}
                  label='Next.js'
                />
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
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
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
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
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
    </>
  );
}

function TechPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className='flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg bg-[#101522] border border-white/10 text-white/90 text-xs font-semibold shadow-sm min-w-[90px]'>
      <span className='flex items-center justify-center w-6 h-6'>{icon}</span>
      <span className='text-center'>{label}</span>
    </div>
  );
}
