import {
  Globe,
  Database,
  Terminal,
  Table,
  BarChart3,
  Code,
  BarChart,
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
    { name: 'SQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
  ];

  const devSkills = [
    { name: 'React', icon: Code },
    { name: 'Next.js', icon: Code },
    { name: 'TypeScript', icon: Code },
  ];

  const analysisSkills = [
    { name: 'Data Viz', icon: BarChart },
    { name: 'Statistics', icon: BarChart },
    { name: 'Python', icon: BarChart },
  ];

  return (
    <section id='skills' className='py-12 px-4'>
      <div className='container mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold mb-3'>Skills</h2>
          <p className='text-lg text-white/70 max-w-xl mx-auto'>
            My <span className='text-primary font-bold'>technical toolkit</span>{' '}
            for building and analyzing modern web applications.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Data & Databases */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3 mb-4'>
              <Database className='h-6 w-6 text-primary' />
              <h3 className='text-xl font-bold'>Data & Databases</h3>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
              {dataSkills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'
                >
                  <skill.icon className='h-4 w-4 text-primary' />
                  <span className='text-sm font-bold'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3 mb-4'>
              <Code className='h-6 w-6 text-primary' />
              <h3 className='text-xl font-bold'>Development</h3>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
              {devSkills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'
                >
                  <skill.icon className='h-4 w-4 text-primary' />
                  <span className='text-sm font-bold'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3 mb-4'>
              <BarChart className='h-6 w-6 text-primary' />
              <h3 className='text-xl font-bold'>Analysis</h3>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
              {analysisSkills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-2 p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'
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
