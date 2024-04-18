import React from 'react'
import './searchBar.css'
import Lined from '../../assets/icon/Line 2.png';
import Search from '../../assets/icon/Rectangle 619.png';

const SearchBar = ({ classname }) => {
    const handleClick = () => {
        console.log('searching!!');
    };

    return (
        <div className={`${classname}`}>
            <div className='search-container'>
                <div className='text-search'>
                    <form className="searchField max-w-md px-4">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search for any skill"
                                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                            />
                            <div className="category">
                                <select id="categoryDropdown">
                                    <option value="" disabled>kategori</option>
                                    <option value="option1">HTML & CSS</option>
                                    <option value="option2">Golang</option>
                                    <option value="option3">JavaScript</option>
                                </select>
                            </div>
                            <div className='Lined-container'>
                                <img src={Lined} alt="Lined" />
                            </div>
                            <div className='search-button cursor-pointer' onClick={handleClick}>
                                <img src={Search} alt="search-button" />
                                <p>Search</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar