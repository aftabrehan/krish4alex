import { useEffect, useState } from 'react'
import clsx from 'clsx'

import stl from './Pagination.module.scss'

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [pages, setPages] = useState([])

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
    <ul className={stl.pagination}>
      {pages.map(page => (
        <li
          key={page}
          className={clsx(page === currentPage && stl.active)}
          onClick={() => handlePageChange(page)}
        >
          {page === currentPage ? '●' : '○'}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
