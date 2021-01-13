import React from 'react'
import PropTypes from 'prop-types'

import './HighlightsComponent.scss'

export const HighlightsComponent = ({ children }) => {
  return (
    <section className="highlights">
      <div className="container">
        <ul className="highlights__list">
          {children}
        </ul>
      </div>
    </section>
  )
}

HighlightsComponent.propTypes = {
  children: PropTypes.node,
}

export const Highlight = ({ children, icon, title }) => {
  return (
    <li className="highlights__item">
      {icon &&
      <div className="highlights__icon">
        <img src={icon} width="52" height="52" alt={`${title} icon`} />
      </div>
      }
      {title &&
      <h3 className="highlights__title">{title}</h3>
      }
      {children &&
      <div className="highlights__content">
        {children}
      </div>
      }
    </li>
  )
}

Highlight.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  title: PropTypes.string,
}
