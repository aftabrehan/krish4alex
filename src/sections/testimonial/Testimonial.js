import Image from 'next/image'

import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'

import stl from './Testimonial.module.scss'

const Testimonial = () => {
  return (
    <section className={stl.section} id="testimonialSection">
      <div className={stl.heading}>
        <h3>
          <span>#</span>Testimonial
        </h3>
        <Image src={HorizontalOrangeLine} alt="horizontal-orange-line" />
      </div>

      <div className={stl.content}></div>
    </section>
  )
}

export default Testimonial
