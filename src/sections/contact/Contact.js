import { useState } from 'react'
import Link from 'next/link'

import Button from 'components/button'

import EmailIcon from 'assets/svg/email.svg'
import WhatsAppIcon from 'assets/svg/whatsapp.svg'
import MessengerIcon from 'assets/svg/messenger.svg'
import ArrowDotIcon from 'assets/svg/arrow-dot.svg'
import SendIcon from 'assets/svg/send.svg'

import stl from './Contact.module.scss'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const otherOptions = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'amitsharma4a3@gmail.com',
      link: 'mailto:amitsharma4a3@gmail.com',
    },
    {
      icon: <WhatsAppIcon />,
      label: 'Whatsapp',
      value: '+91 9110091981',
      link: 'https://wa.me/+919110091981',
    },
    {
      icon: <MessengerIcon />,
      label: 'Messanger',
      value: 'user.1023...',
      link: 'https://www.facebook.com/messages/t/100016657608835',
    },
  ]

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <section className={stl.container}>
      <div className={stl.left}>
        <h3>Talk to me on:</h3>

        <div className={stl.otherOptions}>
          {otherOptions.map(({ icon, label, value, link }, i) => (
            <Link key={i} href={link}>
              <a className={stl.optionCard} target="_blank">
                {icon}
                <span className={stl.label}>{label}</span>
                <span className={stl.value}>{value}</span>
                <span className={stl.btn}>
                  with me
                  <ArrowDotIcon />
                </span>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className={stl.right}>
        <h3>Let&apos;s talk!</h3>

        <form onSubmit={handleSubmit} className={stl.form}>
          <div className={stl.fieldBox}>
            <input
              placeholder="your name"
              type="text"
              name={name}
              onChange={e => setName(e.target.value)}
              required
              className={stl.input}
            />
            <p>I could use this to address you.</p>
          </div>

          <div className={stl.fieldBox}>
            <input
              placeholder="your email"
              type="email"
              name={email}
              onChange={e => setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              className={stl.input}
            />
            <p>
              Your email is safe with me. I&apos;ll never share it with anyone.
            </p>
          </div>

          <div className={stl.fieldBox}>
            <textarea
              placeholder="your message"
              name={message}
              onChange={e => setMessage(e.target.value)}
              required
              className={stl.textarea}
            />
            <p>Your message matters. Make it short and impactful!</p>
          </div>

          <Button customClass={stl.submitBtn}>
            Send Message <SendIcon />
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
