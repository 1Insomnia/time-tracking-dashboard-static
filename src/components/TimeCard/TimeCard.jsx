import React from 'react'
import PropTypes from 'prop-types'

import './timecard.css'

const TimeCard = ({ title, icon, color, timeframes }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <button className="card__button">
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="card__body">
        <div className="card__current">{timeframes.daily.current}</div>
        <div className="card__previous">{timeframes.daily.previous}</div>
      </div>
    </div>
  )
}

TimeCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  timeFranmes: PropTypes.object
}

export default TimeCard
