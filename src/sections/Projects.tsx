import { projectList } from '../data/projectList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  return (
    <div id='projects' className='py-10 scroll-mt-16'>
      <h1 className='text-3xl text-center md:pb-15'>Projects</h1>
      <div>
        {projectList.map((project) => (
          <div
            key={project.id}
            className='flex flex-col-reverse md:grid md:grid-cols-2 gap-6 pb-20'
          >
            <div className='w-full h-auto'>
              <img
                src={project.imageUrl}
                alt={project.name}
                className='w-full h-auto object-cover rounded-md'
              />
            </div>
            <div className='flex flex-col justify-center md:items-start items-center'>
              <h2 className='text-xl font-semibold mb-2 text-center md:text-left'>
                {project.name}
              </h2>
              <p className='text-sm text-[var(--dark-four)] mb-2 text-center md:text-left'>
                <span className='text-[var(--dark-three)]'>Made with:</span>{' '}
                <span className='font-medium'>{project.tools}</span>
              </p>
              <p className='text-left text-sm'>{project.description}</p>
              <div className='flex'>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-3 text-[var(--dark-three)]'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
