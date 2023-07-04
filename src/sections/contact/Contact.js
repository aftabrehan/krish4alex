import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'
import Toast from 'components/toast'

import EmailIcon from 'assets/svg/email.svg'
import WhatsAppIcon from 'assets/svg/whatsapp.svg'
import MessengerIcon from 'assets/svg/messenger.svg'
import ArrowDotIcon from 'assets/svg/arrow-dot.svg'
import SendIcon from 'assets/svg/send.svg'
import SpinnerIcon from 'assets/svg/spinner.svg'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Contact.module.scss'

const Contact = () => {
  const [animation, setAnimation] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [variant, setVariant] = useState('success')

  const motionProps = getCommonMotionProps(animation, setAnimation)

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
      link: 'https://www.facebook.com/messages/t/100010212429617',
    },
  ]

  const handleSubmit = async e => {
    e.preventDefault()

    setIsLoading(true)

    const values = { name, email, message }

    const { status } = await fetch(
      'https://krish4alex-api.web.app/v1/messages',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    )

    if (status === 200) setVariant('success')
    else setVariant('warning')

    setShowToast(true)
    setIsLoading(false)
    setTimeout(() => setShowToast(false), 5000)
  }

  return (
    <section className={stl.container}>
      <div className={stl.left}>
        <motion.h3 {...motionProps}>Talk to me on:</motion.h3>

        <div className={stl.otherOptions}>
          {otherOptions.map(({ icon, label, value, link }, i) => (
            <Link key={i} href={link}>
              <a target="_blank">
                <motion.div
                  {...motionProps}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * i }}
                  className={stl.optionCard}
                >
                  {icon}
                  <span className={stl.label}>{label}</span>
                  <span className={stl.value}>{value}</span>
                  <span className={stl.btn}>
                    with me
                    <ArrowDotIcon />
                  </span>
                </motion.div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className={stl.right}>
        <motion.h3 {...motionProps}>Let&apos;s talk!</motion.h3>

        <form
          onSubmit={handleSubmit}
          className={clsx(stl.form, isLoading && stl.disabledForm)}
        >
          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={stl.fieldBox}
          >
            <input
              placeholder="your name"
              type="text"
              name={name}
              onChange={e => setName(e.target.value)}
              required
              className={stl.input}
            />
            <p>I could use this to address you.</p>
          </motion.div>

          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={stl.fieldBox}
          >
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
          </motion.div>

          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={stl.fieldBox}
          >
            <textarea
              placeholder="your message"
              name={message}
              onChange={e => setMessage(e.target.value)}
              required
              className={stl.textarea}
            />
            <p>Your message matters. Make it short and impactful!</p>
          </motion.div>

          <Button customClass={stl.submitBtn}>
            Send Message {isLoading ? <SpinnerIcon /> : <SendIcon />}
          </Button>
        </form>
      </div>

      <Toast isOpen={showToast} setIsOpen={setShowToast} variant={variant} />
    </section>
  )
}

export default Contact
