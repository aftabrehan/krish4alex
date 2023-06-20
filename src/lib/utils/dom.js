export const scrollToSection = sectionId => {
  const section = document.getElementById(sectionId)
  if (section) {
    const yOffset = -75 // adjust as needed to account for any fixed headers or other elements
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export const scrollToTop = id => {
  const element = document.getElementById(id)
  if (element) {
    const scrollDuration = 250 // Duration of the scroll animation in milliseconds
    const scrollStep = -element.scrollTop / (scrollDuration / 15) // Distance to scroll on each step

    const scrollInterval = setInterval(() => {
      if (element.scrollTop !== 0) {
        element.scrollTop += scrollStep
      } else {
        clearInterval(scrollInterval)
      }
    }, 15)
  }
}
