const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a onClick={() => currentPage > 1 && paginate(currentPage - 1)} href='!#' className='page-link'>
            &laquo;
          </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <a onClick={() => currentPage < totalPages && paginate(currentPage + 1)} href='!#' className='page-link'>
            &raquo;
          </a>
        </li>
      </ul>
      <div className="total-pages">
        Total {totalItems} results
      </div>
    </nav>
  );
};

export default Pagination;
