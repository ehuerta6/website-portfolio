import {
  Globe,
  Database,
  Terminal,
  Table,
  BarChart3,
  Code,
  BarChart,
  FileText,
} from 'lucide-react';

const webDevSkills = [
  { name: 'JavaScript', icon: Code },
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Code },
  { name: 'Firebase', icon: Code },
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Code },
  { name: 'Tailwind CSS', icon: Code },
];

const dataSkills = [
  { name: 'Python', icon: Database },
  { name: 'SQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Supabase', icon: Database },
  { name: 'Pandas', icon: BarChart3 },
  { name: 'Tableau', icon: BarChart3 },
  { name: 'R', icon: BarChart3 },
  { name: 'Excel', icon: FileText },
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

const Skills = () => {
  return (
    <section id='skills' className='py-16 px-4'>
      <div className='container mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>
            Skills &amp; Expertise
          </h2>
          <p className='text-base font-medium text-white/70'>
            <span className='text-primary'>Technologies</span> and{' '}
            <span className='text-primary'>tools</span> I work with
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Web Development */}
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <Globe className='h-6 w-6 text-[#4FC3F7]' />
              <h3 className='text-xl font-semibold text-[#4FC3F7]'>
                Web Development
              </h3>
            </div>
            <div className='border-t border-white/10 mb-6' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {webDevSkills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-3 px-4 py-3 border border-white/10 rounded-lg bg-transparent'
                >
                  <skill.icon className='h-5 w-5 text-[#4FC3F7]' />
                  <span className='text-base font-normal text-white/80'>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Data & Databases */}
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <Database className='h-6 w-6 text-[#4FC3F7]' />
              <h3 className='text-xl font-semibold text-[#4FC3F7]'>
                Data &amp; Databases
              </h3>
            </div>
            <div className='border-t border-white/10 mb-6' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {dataSkills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-3 px-4 py-3 border border-white/10 rounded-lg bg-transparent'
                >
                  <skill.icon className='h-5 w-5 text-[#4FC3F7]' />
                  <span className='text-base font-normal text-white/80'>
                    {skill.name}
                  </span>
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
