import React from 'react'
import './Pagination.css'

const Pagination = () => {
    return (
        <div className='pagination-container flex flex-wrap relative -top-16 left-10 px-96'>
            <a href="#">&laquo;</a>
            <a href="#"className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
        </div>
    )
}

export default Pagination