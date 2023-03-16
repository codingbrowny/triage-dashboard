import React from 'react'
import Statistics from '../statistics'

const StatHeader = () => {
  return (
    <div className='flex justify-between items-center gap-5 md:gap-6 flex-wrap md:flex-nowrap px-2 md:px-0'>
        <Statistics title='Cases' value={'203'} color={'from-primary/50 to-primary'} />
        <Statistics title={'Pending Cases'} value={'123'} color={'from-app-yellow/50 to-app-yellow'} />
        <Statistics title={'Doctors'} value={'102'} color={'from-app-blue/50 to-app-blue'} />
        <Statistics title={'Subscribers'} value={'78'} color={'from-app-red/50 to-app-red'} />
    </div>
  )
}

export default StatHeader