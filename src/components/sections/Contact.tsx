import { Download, Send, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import React, { useState } from 'react';

type EasterEggMode = 'none' | 'johnpork' | 'chico' | 'troll';

type ContactProps = {
  easterEgg: EasterEggMode;
  triggerEasterEgg: (mode: EasterEggMode) => void;
};

const Contact = ({ easterEgg, triggerEasterEgg }: ContactProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = name.trim().toLowerCase();
    const em = email.trim().toLowerCase();
    const sub = subject.trim().toLowerCase();
    const msg = message.trim().toLowerCase();
    if (
      n === 'john pork' &&
      em === 'johnpork@gmail.com' &&
      sub === 'incoming call' &&
      msg === 'answer'
    ) {
      triggerEasterEgg('johnpork');
    } else if (
      n === 'chico lachowski' &&
      em === 'chicolachowski@gmail.com' &&
      sub === 'mewing time' &&
      msg === 'time to looksmaxx'
    ) {
      triggerEasterEgg('chico');
    } else if (
      n === 'troll face' &&
      em === 'trollface@gmail.com' &&
      sub === 'phonked' &&
      msg === 'time to be phonked'
    ) {
      triggerEasterEgg('troll');
    } else {
      triggerEasterEgg('none');
    }
    // ...existing submit logic if any...
  };

  return (
    <section id='contact' className='py-10'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>Get In Touch</h2>
          <p className='text-base font-medium text-white/70 max-w-xl mx-auto mb-4'>
            Have a <span className='text-primary'>project</span> in mind?{' '}
            <span className='text-primary'>Let's work together!</span>
          </p>
        </div>

        {/* Contact Container */}
        <div className='flex flex-col md:flex-row rounded-xl border border-white/10 overflow-hidden max-w-5xl mx-auto'>
          {/* Left Side - Contact Information */}
          <div className='bg-[#0B111E] flex-1 p-6 flex flex-col justify-between'>
            <div>
              <h3 className='text-xl font-semibold text-[#4FC3F7] mb-4'>
                Contact Information
              </h3>
              <div className='space-y-5'>
                <div className='flex items-center gap-3'>
                  <Mail className='h-6 w-6 text-[#4FC3F7]' />
                  <div>
                    <span className='block font-medium text-white leading-tight'>
                      Email
                    </span>
                    <a
                      href='mailto:emihuerta288@gmail.com'
                      className='text-white/80 text-base font-normal hover:text-[#4FC3F7] transition-colors'
                    >
                      emihuerta288@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <Linkedin className='h-6 w-6 text-[#4FC3F7]' />
                  <div>
                    <span className='block font-medium text-white leading-tight'>
                      LinkedIn
                    </span>
                    <a
                      href='https://linkedin.com/in/emihuerta288'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white/80 text-base font-normal hover:text-[#4FC3F7] transition-colors'
                    >
                      linkedin.com/in/emihuerta288
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <Github className='h-6 w-6 text-[#4FC3F7]' />
                  <div>
                    <span className='block font-medium text-white leading-tight'>
                      GitHub
                    </span>
                    <a
                      href='https://github.com/ehuerta6'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white/80 text-base font-normal hover:text-[#4FC3F7] transition-colors'
                    >
                      github.com/ehuerta6
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant='outline'
              className='btn-transparent w-full mt-6 flex items-center justify-between'
            >
              <span className='font-medium'>Download Resume</span>
              <Download className='h-4 w-4 ml-2' />
            </Button>
          </div>

          {/* Right Side - Contact Form */}
          <div className='bg-[#030712] flex-1 p-6 border-l border-white/10'>
            <h3 className='text-xl font-semibold text-[#4FC3F7] mb-4'>
              Send a Message
            </h3>

            <form
              className='space-y-4 text-base font-normal text-white/80'
              onSubmit={handleSubmit}
            >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='name' className='form-label'>
                    Your name
                  </label>
                  <Input
                    id='name'
                    type='text'
                    placeholder='Your name'
                    className='form-input'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor='email' className='form-label'>
                    Your email
                  </label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Your email'
                    className='form-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor='subject' className='form-label'>
                  Subject
                </label>
                <Input
                  id='subject'
                  type='text'
                  placeholder='Subject'
                  className='form-input'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='message' className='form-label'>
                  Your message
                </label>
                <Textarea
                  id='message'
                  placeholder='Your message'
                  className='form-input min-h-[100px]'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button
                type='submit'
                className='btn-transparent w-full flex items-center justify-center'
              >
                <Send className='mr-2 h-4 w-4' />
                <span className='font-medium'>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
