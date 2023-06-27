export const getCommonMotionProps = (animation, setAnimation) => {
  return {
    onViewportEnter: () => setAnimation(true),
    initial: { translateY: '50%', opacity: 0 },
    animate: {
      translateY: animation ? 0 : '100%',
      opacity: animation ? 1 : 0,
    },
    transition: { duration: 0.5, delay: 0.1 },
  }
}

export const getScaleMotionProps = (animation, setAnimation) => {
  return {
    onViewportEnter: () => setAnimation(true),
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: animation ? 1 : 0,
      opacity: animation ? 1 : 0,
    },
    transition: { duration: 0.5, delay: 0.1 },
  }
}

export const getSlideMotionProps = (animation, setAnimation) => {
  return {
    onViewportEnter: () => setAnimation(true),
    initial: { translateX: '50%', opacity: 0 },
    animate: {
      translateX: animation ? 0 : '100%',
      opacity: animation ? 1 : 0,
    },
    transition: { duration: 0.5, delay: 0.1 },
  }
}
