import React, { useEffect, useState } from 'react'
import Profile from '../Profile';
import Repo from '../Repo';
import SearchBar from '../SearchBar/SearchBar';
import ReactPaginate from 'react-paginate';


const UserDetails = () => {
    const [username, setUsername] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [dataPresent, setDataPresent] = useState(false);
    const handlePageClick = (event) => {
        setPageNumber(event.selected + 1);
    }

    return (
        <>
            <SearchBar setUsername={setUsername} />
            <Profile username={username} setTotalPages={setTotalPages} setDataPresent={setDataPresent} />
            <Repo username={username} pageNumber={pageNumber} />
            {
                dataPresent && <ReactPaginate
                    breakLabel="..."
                    pageCount={totalPages}
                    previousLabel="< previous"
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
                    pageRangeDisplayed={totalPages}
                    marginPagesDisplayed={2}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            }
        </>
    )
}


export default UserDetails