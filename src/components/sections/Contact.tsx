import { Download, Send, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const Contact = () => {
  return (
    <section id='contact' className='py-16'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-3'>Get In Touch</h2>
          <p className='text-base text-white/60'>
            Have a project in mind? Let's work together!
          </p>
        </div>

        {/* Contact Container */}
        <div className='flex flex-col md:flex-row rounded-xl border border-white/10 overflow-hidden max-w-5xl mx-auto'>
          {/* Left Side - Contact Information */}
          <div className='bg-[#0B111E] flex-1 p-8 flex flex-col justify-between'>
            <div>
              <h3 className='text-xl font-bold text-[#4FC3F7] mb-8'>
                Contact Information
              </h3>
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <Mail className='h-6 w-6 text-[#4FC3F7]' />
                  <div>
                    <span className='block font-bold text-white leading-tight'>
                      Email
                    </span>
                    <a
                      href='mailto:hello@example.com'
                      className='text-white/80 text-sm hover:text-[#4FC3F7] transition-colors'
                    >
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <Linkedin className='h-6 w-6 text-[#4FC3F7]' />
                  <div>
                    <span className='block font-bold text-white leading-tight'>
                      LinkedIn
                    </span>
                    <a
                      href='https://linkedin.com/in/emilianohuerta'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white/80 text-sm hover:text-[#4FC3F7] transition-colors'
                    >
                      linkedin.com/in/emilianohuerta
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <Github className='h-6 w-6 text-[#4FC3F7]' />
                  <div>
                    <span className='block font-bold text-white leading-tight'>
                      GitHub
                    </span>
                    <a
                      href='https://github.com/emilianohuerta'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white/80 text-sm hover:text-[#4FC3F7] transition-colors'
                    >
                      github.com/emilianohuerta
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant='outline'
              className='btn-transparent w-full mt-8 flex items-center justify-between'
            >
              <span className='font-semibold'>Download Resume</span>
              <Download className='h-4 w-4 ml-2' />
            </Button>
          </div>

          {/* Right Side - Contact Form */}
          <div className='bg-[#030712] flex-1 p-8 border-l border-white/10'>
            <h3 className='text-xl font-bold text-[#4FC3F7] mb-8'>
              Send a Message
            </h3>

            <form className='space-y-5'>
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
                />
              </div>
              <div>
                <label htmlFor='message' className='form-label'>
                  Your message
                </label>
                <Textarea
                  id='message'
                  placeholder='Your message'
                  className='form-input min-h-[120px]'
                />
              </div>
              <Button
                type='submit'
                className='btn-transparent w-full flex items-center justify-center'
              >
                <Send className='mr-2 h-4 w-4' />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
