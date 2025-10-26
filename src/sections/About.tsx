const About = () => {
  return (
    <div id='about' className='py-10 scroll-mt-16'>
      <h1 className='text-3xl text-center pb-15'>About Me</h1>
      <div className='grid grid-cols-2 gap-10 pb-20'>
        <p className='text-sm'>
          <span className='font-medium text-[var(--dark-four)]'>I began</span>{' '}
          as a general manager at a bakery where I worked with patrons to design
          cakes for their special events. I learned how to balance the needs of
          the client with a budget and deliver an experience that left everyone
          happy. I worked with wholesale clients with large event and wedding
          orders and learned how to perform under pressure.
        </p>
        <p className='text-sm'>
          <span className='font-medium text-[var(--dark-four)]'>I am</span>{' '}
          currently working on finishing a meta front end certification program.
          I've created various front end and full stack applications to
          highlight my abilities behind the console. I'm also working on helping
          the smaller business in my lovely neighborhood of Bridgeport.
        </p>
      </div>
      <p className='text-sm text-center'>
        <span className='font-medium text-[var(--dark-four)]'>I hope to</span>{' '}
        finish creating my 'user database meets social media app' for people
        living with hemophilia, a stressful and at times debilitating disease
        which affects the life of about 1 in 5000 people worldwide. I'd like to
        create useful features and environments for people who are immobile and
        dealing with isolation
      </p>
    </div>
  )
}

export default About
