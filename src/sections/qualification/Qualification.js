import Image from 'next/image'

import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'
import QualificationArt from 'assets/png/qualification-art.png'

import stl from './Qualification.module.scss'

const Qualification = () => {
  return (
    <section className={stl.section} id="qualificationSection">
      <div className={stl.heading}>
        <h3>
          <span>#</span>Qualification
        </h3>
        <Image src={HorizontalOrangeLine} alt="horizontal-orange-line" />
      </div>

      <div className={stl.content}>
        <Image src={QualificationArt} alt="qualification-art" />
      </div>
    </section>
  )
}

export default Qualification
