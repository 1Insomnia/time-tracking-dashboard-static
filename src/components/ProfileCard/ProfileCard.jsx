import React from 'react'
import PropTypes from 'prop-types'
import './profilecard.css'

const ProfileCard = ({ title }) => {
  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <img src="image-jeremy.png" alt="" className="profile-card__image" />
        <div className="profile-card__content">
          <p>Report for</p>
          <h1 className="profile-card__title">{title}</h1>
        </div>
      </div>
      <form className="profile-card__menu">
        <button type="submit" className="profile-card__menu__btn">
          Daily
        </button>
        <button type="submit" className="profile-card__menu__btn">
          Weekly
        </button>
        <button type="submit" className="profile-card__menu__btn">
          Monthly
        </button>
      </form>
    </div>
  )
}

ProfileCard.propTypes = {
  title: PropTypes.string
}

export default ProfileCard
