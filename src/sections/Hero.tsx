import heroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div id='hero' className='py-25 scroll-mt-16'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_300px] gap-20 items-center'>
        <div>
          <h2 className='text-xl text-[var(--dark-three)]'>
            Hello! My name is
          </h2>
          <h1 className='text-6xl font-medium'>Peter 'PK' Kerfoot</h1>
          <h2 className='text-2xl mt-2 font-medium text-[var(--dark-four)]'>
            Web Developer • UX/UI Designer
          </h2>
          <p className='mt-4 text-lg'>
            I am a front-end web developer specializing in React, TypeScript,
            and modern UI architecture while creating responsive web
            applications. I'm fascinated with feelings, connectivity, and
            textures. Along with a love of math and problem-solving, the
            universe showed me an opportunity to combine those elements into a
            career.
          </p>
        </div>
        <div className='w-full h-full object-cover rounded-full shadow-[0_4px_10px_var(--dark-four)] hover:shadow-[0_8px_20px_var(--dark-four)] transition-shadow duration-300'>
          <img
            src={heroImage}
            alt='Picture of Peter Kerfoot'
            className='w-full h-full object-cover rounded-full shadow-[0_4px_10px_var(--dark-four)]'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
