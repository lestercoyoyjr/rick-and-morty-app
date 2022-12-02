import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePreviousPage = () => {
        onPrevious();
    }
    const handleNextPage = () => {
        onNext();
    }
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {
                    prev ? (
                        <li className='page-item'>
                            <button className='page-link' onClick={handlePreviousPage}>Previous</button>
                        </li>
                    )
                    :
                    null
                }
                {
                    next ? (
                        <li className='page-item'>
                            <button className='page-link' onClick={handleNextPage}>Next</button>
                        </li>
                    )
                    :
                    null
                }
            </ul>
        </nav>
    )
}

export default Pagination