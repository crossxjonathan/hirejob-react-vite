import React from 'react'
import './purpleBar.css'

const PurpleBar = ({className}) => {
  return (
    <div className={`purpleBar flex bg-purple-900 px-28 py-5 text-3xl font-semibold mt-3 ${className}`}>
        <h1>Top Jobs</h1>
    </div>
  )
}

export default PurpleBar