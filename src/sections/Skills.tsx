import { skillList } from '../data/skillList'

const Skills = () => {
  return (
    <div id='skills' className='pt-10 pb-15 scroll-mt-16'>
      <h1 className='text-3xl text-center pb-15'>Skills</h1>
      <div className='grid grid-cols-3 gap-6'>
        {skillList.map((skill) => (
          <div key={skill.id} className='flex flex-col items-center'>
            <img src={skill.icon} alt={skill.name} className='w-12 h-12' />
            <p className='mt-2 text-sm'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
