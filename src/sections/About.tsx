const About = () => {
  return (
    <div id='about' className='py-10 scroll-mt-16'>
      <h1 className='text-3xl font-medium tracking-tight text-center pb-15'>
        About Me
      </h1>
      <div className='grid grid-cols-2 gap-10 pb-20'>
        <p className='text-lg'>
          <span className='font-medium text-[var(--dark-four)]'>I began</span>{' '}
          as a general manager at a bakery where I worked with patrons to design
          cakes for special events. I learned how to balance the needs of the
          client with a budget and deliver an experience that left everyone
          happy. I worked with wholesale clients with large event and wedding
          orders and learned how to perform under pressure.
        </p>
        <p className='text-lg'>
          <span className='font-medium text-[var(--dark-four)]'>I am</span>{' '}
          currently developing a creativity-focused social media platform
          inspired by communities like Flickr and Tumblr — spaces where people
          can connect and share authentically. Along the way, I've built
          multiple front-end and full-stack applications that demonstrate my
          ability to design, build, and deliver software from the ground up.
        </p>
      </div>
      <p className='text-lg text-center'>
        <span className='font-medium text-[var(--dark-four)]'>I am</span>{' '}
        excited to collaborate with digitally savvy teams who care about
        thoughtful design and meaningful user experiences. My goal is to build
        tools that help creators express themselves authentically through
        intentional, design-first development.
      </p>
    </div>
  )
}

export default About
