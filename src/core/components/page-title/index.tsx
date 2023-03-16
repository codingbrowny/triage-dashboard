import React, { ReactElement } from 'react'

const PageHeader = ({title, children}: {title: string, children?:ReactElement}) => {
  return (
    <div className='flex items-center justify-between flex-wrap gap-4 px-2 sm:px-3 md:px-5 py-5'>
        <h1 className="text-3xl font-semibold text-gray-600">{title}</h1>
        <div className="content">{children}</div>
    </div>
  )
}

export default PageHeader