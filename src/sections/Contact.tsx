import ContactForm from '../components/ContactForm'
import type { Contact } from '../types'

const Contact = () => {
  const handleContactSubmit = async (data: Contact) => {
    // Logging message for now
    console.log('Contact form submitted:', data)
  }
  return (
    <section id='contact' className='scroll-mt-16'>
      <h1 className='text-3xl text-center '>Contact</h1>
      <p>
        Got a project in mind, a question about my work, or just want to
        connect? Drop a message below and I'll get back to you!
      </p>
      <ContactForm onSubmit={handleContactSubmit} />
    </section>
  )
}

export default Contact
