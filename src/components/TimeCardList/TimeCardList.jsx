import React from 'react'
import './timecardlist.css'
import TimeCard from '../TimeCard/TimeCard'

const TimeCardList = ({ dataSet, filter }) => {
  return (
    <div className="time-card-list">
      {dataSet.map(values => (
        <TimeCard {...values} filter={filter} key={values.title} />
      ))}
    </div>
  )
}

export default TimeCardList
