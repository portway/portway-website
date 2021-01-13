import React from 'react'
import PropTypes from 'prop-types'

import './ContentScrollerComponent.scss'

const ContentScrollerComponent = ({ title }) => {
  return (
    <section className="content-scroller">
      {title &&
      <div className="container">
        <h2 className="content-scroller__title">{title}</h2>
      </div>
      }
    </section>
  )
}

ContentScrollerComponent.propTypes = {
  title: PropTypes.string,
}

export default ContentScrollerComponent
