import React from 'react'

function Title({ text, color, sortDes }) {
    return (
        <>
            <h2 className='text-4xl font-bold text-dark dark:text-light mb-5'>{text} <span className='text-blue dark:text-blue'>{color}</span></h2>
            <p className='text-center text-gray-600 dark:text-gray-300 mb-12'>{sortDes}</p>
        </>)
}

export default Title