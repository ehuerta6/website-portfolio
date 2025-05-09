import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='w-full bg-[#030712] py-4 px-6 border-t border-white/5'>
      <div className='max-w-7xl mx-auto flex items-center justify-between gap-4'>
        {/* Left: Logo and Name */}
        <div className='flex items-center gap-2'>
          <Code className='h-5 w-5 text-[#4FC3F7]' />
          <button
            onClick={scrollToTop}
            className='font-bold text-white text-base hover:text-[#4FC3F7] transition-colors focus:outline-none'
            aria-label='Go to top'
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            DevPortfolio
          </button>
        </div>
        {/* Center: Copyright and Secret */}
        <div className='flex-1 flex flex-col items-center text-xs md:text-sm'>
          <div>
            <span className='text-white/70'>© 2025 </span>
            <a
              href='https://linkedin.com/in/emilianohuerta'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#4FC3F7] hover:underline font-medium'
            >
              Emiliano Huerta
            </a>
            <span className='text-white/70'>. All rights reserved.</span>
          </div>
          <span className='italic text-white/30 text-xs mt-0.5'>
            Pst... there's a secret somewhere. And watch out for bugs!
          </span>
        </div>
        {/* Right: Social Icons */}
        <div className='flex items-center gap-5'>
          <a
            href='https://github.com/emilianohuerta'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <Github className='h-5 w-5 text-white hover:text-[#4FC3F7] transition-colors' />
          </a>
          <a
            href='https://linkedin.com/in/emilianohuerta'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <Linkedin className='h-5 w-5 text-white hover:text-[#4FC3F7] transition-colors' />
          </a>
          <a href='mailto:hello@example.com' aria-label='Email'>
            <Mail className='h-5 w-5 text-white hover:text-[#4FC3F7] transition-colors' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
