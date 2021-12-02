import PropTypes from 'prop-types'
import './profilecard.css'

const ProfileCard = ({ title, setFilter }) => {
  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <img src="image-jeremy.png" alt="" className="profile-card__image" />
        <div className="profile-card__content">
          <p>Report for</p>
          <h1 className="profile-card__title">{title}</h1>
        </div>
      </div>
      <div className="profile-card__menu">
        <button
          type="submit"
          className="profile-card__menu__btn"
          onClick={() =>
            setFilter({
              filter: 'daily',
              name: 'Day'
            })
          }
        >
          Daily
        </button>
        <button
          type="submit"
          className="profile-card__menu__btn"
          onClick={() =>
            setFilter({
              filter: 'weekly',
              name: 'Week'
            })
          }
        >
          Weekly
        </button>
        <button
          type="submit"
          className="profile-card__menu__btn"
          onClick={() =>
            setFilter({
              filter: 'monthly',
              name: 'Month'
            })
          }
        >
          Monthly
        </button>
      </div>
    </div>
  )
}

ProfileCard.propTypes = {
  title: PropTypes.string,
  setFilter: PropTypes.func
}

export default ProfileCard
