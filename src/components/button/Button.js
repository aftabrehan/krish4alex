import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ onClick, children, variant = 'primary', customClass }) => (
  <button
    onClick={onClick}
    className={clsx(stl.btn, stl[variant], customClass)}
  >
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  customClass: PropTypes.string,
}

export default Button
