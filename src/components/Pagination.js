import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <a style={{fontFamily:"Arial"}}>Trang: </a>
        {pageNumbers.map(number => (
            <a href={'./journallist'+number} className='page-link' >
              {number+'   '}
            </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;