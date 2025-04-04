import React, { useContext, useState } from 'react';
import './Home.css';
import { DataContext } from '../../App';

const Home = () => {
  const { data, loading, error, onNavigate } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / postsPerPage);
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const date = new Date().toLocaleDateString();

  const handleClick = (id) => {
    onNavigate(id);
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const Loading = () => {
    return <div className='loading'>Loading...</div>;
  };

  const ErrorPage = ({ error }) => {
    return <div className='error'>{error}</div>;
  };

  // Generate page numbers with dots
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Adjust as needed
    
    // Always show first page
    pageNumbers.push(
      <button
        key={1}
        onClick={() => changePage(1)}
        className={currentPage === 1 ? 'active' : ''}
      >
        1
      </button>
    );

    // Add dots if needed
    if (currentPage > maxVisiblePages - 1) {
      pageNumbers.push(<span key="dots1">...</span>);
    }

    // Calculate range of pages to show
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    // Add dots if needed
    if (currentPage < totalPages - 2) {
      pageNumbers.push(<span key="dots2">...</span>);
    }

    // Always show last page if there's more than 1 page
    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => changePage(totalPages)}
          className={currentPage === totalPages ? 'active' : ''}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className='home'>
      {loading && <Loading />}
      {error && <ErrorPage error={error} />}
      
      <div className='posts-grid-container'>
        {currentPosts.map((post) => (
          <div key={post.id} className='post'>
            <p className='update'>update</p>
            <h2 onClick={() => handleClick(post.id)} className='post-title'>
              {post.title}
            </h2>
            <p className='blur-text'>
              {date} - by opeSm - <span>Leave a Comment</span>
            </p>
            <p className='body-text'>{post.body}</p>
            <button className='read-more' onClick={() => handleClick(post.id)}>
              Read more
            </button>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className='pagination'>
        <button 
          onClick={() => changePage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Prev
        </button>
        
        {renderPageNumbers()}
        
        <button 
          onClick={() => changePage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;