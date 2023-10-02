import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Pagination.module.scss'

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [animation, setAnimation] = useState(false)
  const [pages, setPages] = useState([])

  const motionProps = getCommonMotionProps(animation, setAnimation)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const generatePages = () => {
    const pagesArray = []
    for (let i = 1; i <= totalPages; i++) pagesArray.push(i)

    setPages(pagesArray)
  }

  const handlePageChange = page => {
    if (page !== currentPage) onPageChange(page)
  }

  useEffect(() => {
    generatePages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPage])

  return (
    <motion.ul {...motionProps} className={stl.pagination}>
      {pages.map(page => (
        <li
          key={page}
          className={clsx(page === currentPage && stl.active)}
          onClick={() => handlePageChange(page)}
        >
          {page === currentPage ? '●' : '○'}
        </li>
      ))}
    </motion.ul>
  )
}

export default Pagination
