import PropTypes from 'prop-types'

import './timecard.css'

const TimeCard = ({ title, timeframes, filter }) => {
  let icon = `/icon-${title.toLowerCase().split(' ').join('')}.svg`
  let color = `--${title.toLowerCase().split(' ').join('')}`

  return (
    <div
      className="card"
      style={{
        backgroundColor: `var(${color})`,
        backgroundImage: `url(${icon})`
      }}
    >
      <div className="card__body">
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
        <div className="card__footer">
          <div className="card__current">
            {timeframes[filter.filter].current}hrs
          </div>
          <div className="card__previous">
            Last {filter.name} - {timeframes[filter.filter].previous}hrs
          </div>
        </div>
      </div>
    </div>
  )
}

TimeCard.propTypes = {
  title: PropTypes.string,
  timeFranmes: PropTypes.object,
  filter: PropTypes.object
}

export default TimeCard
