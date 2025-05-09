import {
  Globe,
  Database,
  Terminal,
  Table,
  BarChart3,
  Code,
} from 'lucide-react';

const Skills = () => {
  const webDevSkills = [
    { name: 'JavaScript', icon: Globe },
    { name: 'React', icon: Code },
    { name: 'Next.js', icon: Terminal },
    { name: 'TypeScript', icon: Code },
    { name: 'Node.js', icon: Terminal },
    { name: 'Firebase', icon: Database },
    { name: 'HTML', icon: Globe },
    { name: 'CSS', icon: Globe },
    { name: 'Tailwind CSS', icon: Globe },
  ];

  const dataSkills = [
    { name: 'Python', icon: Terminal },
    { name: 'SQL', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Supabase', icon: Database },
    { name: 'Pandas', icon: Table },
    { name: 'Tableau', icon: BarChart3 },
    { name: 'R', icon: Terminal },
    { name: 'Excel', icon: Table },
  ];

  return (
    <section id='skills' className='py-24 px-6'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>Skills & Expertise</h2>
          <p className='text-lg text-muted-foreground'>
            Technologies and tools I{' '}
            <span className='text-primary font-bold'>work</span> with
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Web Development */}
          <div className='space-y-6'>
            <div className='flex items-center gap-3 mb-6'>
              <Globe className='h-6 w-6 text-primary' />
              <h3 className='text-2xl font-bold'>Web Development</h3>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {webDevSkills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'
                >
                  <skill.icon className='h-4 w-4 text-primary' />
                  <span className='text-sm font-bold'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data & Databases */}
          <div className='space-y-6'>
            <div className='flex items-center gap-3 mb-6'>
              <Database className='h-6 w-6 text-primary' />
              <h3 className='text-2xl font-bold'>Data & Databases</h3>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {dataSkills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'
                >
                  <skill.icon className='h-4 w-4 text-primary' />
                  <span className='text-sm font-bold'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
