import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ onClick, customClass, children }) => (
  <button onClick={onClick} className={clsx(stl.btn, customClass)}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
}

export default Button
