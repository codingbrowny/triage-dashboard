import React from 'react'

interface StatComponentInterface {
    /**
     * Title of the stat to render
     */
    title: string,
    /**
     * Value of the stat to render
     */
    value: string | number
    /**
     * Color for setting the gradient background
     */
    color: string
}

const Statistics = ({title, value, color}: StatComponentInterface) => {
  return (
    <div className={`w-full p-4 text-center text-white space-y-6 rounded-lg bg-gradient-to-r ${color}`}>
        <h2 className='text-2xl font-semibold'>{title}</h2>
       <h3 className='text-2xl font-semibold'>{value}</h3>
    </div>
  )
}

export default Statistics