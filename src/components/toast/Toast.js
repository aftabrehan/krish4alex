import PropTypes from 'prop-types'
import clsx from 'clsx'

import Dialog from 'components/dialog'

import SuccessIcon from 'assets/svg/success.svg'
import WarningIcon from 'assets/svg/warning.svg'
import SuccessArtIcon from 'assets/svg/success-art.svg'
import WarningArtIcon from 'assets/svg/warning-art.svg'
import CrossIcon from 'assets/svg/cross.svg'

import stl from './Toast.module.scss'

const Toast = ({ isOpen, setIsOpen, variant = 'success' }) => {
  return (
    <Dialog
      isOpen={isOpen}
      close={() => setIsOpen(false)}
      customClass={clsx(stl.toast, stl[variant])}
    >
      <div className={stl.icons}>
        <div className={stl.icon}>
          {variant === 'success' ? <SuccessIcon /> : <WarningIcon />}
        </div>
        <div className={stl.art}>
          {variant === 'success' ? <SuccessArtIcon /> : <WarningArtIcon />}
        </div>
      </div>
      <div className={stl.textBox}>
        <h4>{variant === 'success' ? 'Well done!' : 'Warning!'}</h4>
        <p>
          {variant === 'success'
            ? 'You successfully send this important message.'
            : 'Sorry! There was a problem with your request.'}
        </p>
      </div>

      <button className={stl.crossBtn} onClick={() => setIsOpen(false)}>
        <CrossIcon />
      </button>
    </Dialog>
  )
}

Toast.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning']),
}

export default Toast
