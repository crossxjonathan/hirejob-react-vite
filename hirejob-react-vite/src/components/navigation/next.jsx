import React from 'react'
import './next.css'

const Next = () => {
    return (
        <div class="nextbutton">
            <button type="button"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 transition duration-300">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
                <span class="sr-only">nextbutton</span>
            </button>
        </div>
    )
}

export default Next