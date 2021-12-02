import React from 'react'
import './timecard.css'
import TimeCard from '../TimeCard/TimeCard'

const TimeCardList = ({ dataSet }) => {
  return (
    <div className="time-card-list">
      {dataSet.map(values => (
        <TimeCard {...values} key={values.title} />
      ))}
    </div>
  )
}

export default TimeCardList
