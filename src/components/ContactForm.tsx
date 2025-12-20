import { useEffect, useState, type FormEvent } from 'react'
import type { Contact } from '../types'

type ContactFormProps = {
  initialValues?: Contact
  onSubmit: (data: Contact) => Promise<void> | void
}

const ContactForm = ({ initialValues, onSubmit }: ContactFormProps) => {
  const [name, setName] = useState(initialValues?.name ?? '')
  const [email, setEmail] = useState(initialValues?.email ?? '')
  const [message, setMessage] = useState(initialValues?.message ?? '')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setError('')
  }, [name, email, message])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!name || !email || !message) {
      setError('Please fill out all of the fields')
      return
    }

    setIsLoading(true)

    try {
      const payload: Contact = { name, email, message }
      await onSubmit(payload)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      {/* NAME */}
      <div>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full border rounded p-2'
          placeholder='Name'
          required
        />
      </div>

      {/* EMAIL */}
      <div>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full border rounded p-2'
          placeholder='Email'
          required
        />
      </div>

      {/* MESSAGE */}
      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full border rounded p-2 min-h-32'
          placeholder='Message'
          required
        />
      </div>

      {error && <p className='text-sm text-red-400'>{error}</p>}

      <div className='flex justify-center'>
        <button
          type='submit'
          disabled={isLoading}
          className='px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
