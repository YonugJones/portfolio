import heroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='py-10'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 items-center'>
        <div>
          <h2 className='text-lg text-[var(--dark-three)]'>
            Hello! My name is
          </h2>
          <h1 className='text-4xl font-medium'>Peter 'PK' Kerfoot</h1>
          <h2 className='text-xl mt-2 font-medium text-[var(--dark-four)]'>
            Web Developer • UX/UI Designer
          </h2>
          <p className='mt-4 text-sm'>
            I am a front-end web developer fascinated with feelings,
            connectivity, and textures. Based in Chicago, my background in
            managing a custom bakery and designing special event cakes taught me
            the power of storytelling through theme and design. This, combined
            with a love of math and problem-solving, lead me to software
            development where I can now focus that energy on user experience
          </p>
        </div>
        <div className='w-[200px] h-[200px] mx-auto md:w-[300px] md:h-[300px]'>
          <img
            src={heroImage}
            alt='Picture of Peter Kerfoot'
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
