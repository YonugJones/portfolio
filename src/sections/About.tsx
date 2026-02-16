const About = () => {
  return (
    <div id='about' className='py-10 scroll-mt-16'>
      <h1 className='text-3xl font-medium tracking-tight text-center pb-15'>
        About Me
      </h1>
      <div className='grid grid-cols-2 gap-10 pb-20'>
        <p className='text-lg'>
          <span className='font-medium text-[var(--dark-four)]'>I began</span>{' '}
          my path as a general manager at a bakery, where I worked closely with
          clients to design custom cakes for large events and weddings. That
          experience taught me how to balance creative vision with real
          constraints — timelines, budgets, and client expectations — while
          delivering results under pressure.
        </p>
        <p className='text-lg'>
          <span className='font-medium text-[var(--dark-four)]'>Today</span> I'm
          a front-end developer focused on building responsive, user-centered
          web applications. I'm currently developing a creativity-focused social
          media platform inspired by early community-driven spaces like Flickr
          and Tumblr. Along the way, I've built multiple front-end and
          full-stack applications that demonstrate my ability to design,
          implement, and deploy modern web software.
        </p>
      </div>
      <p className='text-lg text-center'>
        <span className='font-medium text-[var(--dark-four)]'>I'm</span>{' '}
        especially interested in building tools that help people express
        themselves meaningfully online. I enjoy working at the intersection of
        design and engineering — creating thoughtful, intuitive interfaces
        backed by clean, maintainable code.
      </p>
    </div>
  )
}

export default About
