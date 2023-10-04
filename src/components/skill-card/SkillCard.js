import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './SkillCard.module.scss'

const SkillCard = ({ index, title, description, customClass }) => {
  return (
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.leftTopEllipse} />
      <div className={stl.leftBottomEllipse} />
      <div className={stl.leftBottomSmallEllipse} />
      <div className={stl.rightBottomEllipse} />

      <h3 className={stl.title}>
        <span>{index}</span>
        <br />
        {title}
      </h3>
      <p className={stl.description}>{description}</p>
    </div>
  )
}

SkillCard.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customClass: PropTypes.string,
}

export default SkillCard
