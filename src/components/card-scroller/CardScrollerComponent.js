import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Img from 'gatsby-image'

import { uuid } from '../../scripts/utilities'

import './CardScrollerComponent.scss'

const CardScrollerComponent = ({ className, items, title }) => {
  const cardScrollerClasses = cx({
    'card-scroller': true,
    [className]: className,
  })
  return (
    <section className={cardScrollerClasses}>
      {title &&
      <div className="container">
        <h2 className="card-scroller__title">{title}</h2>
      </div>
      }
      <div className="container container--with-scroller">
        <div className="card-scroller__scroller">
          <ol className="card-scroller__list">
            {items.map((item) => {
              const key = `card-${uuid()}`
              return (
                <li key={key} className="card-scroller__list-item">
                  <a className="card-scroller__item" href={item.url} target="_blank" rel="noreferrer">
                    <div className="card-scroller__image">
                      {typeof item.image === 'object' &&
                      <Img fluid={item.image} alt={item.image.name} />
                      }
                      {typeof item.image === 'string' &&
                      <img src={item.image} width="320" height="402" alt={item.image.name} />
                      }
                    </div>
                    <div className="card-scroller__content">
                      <h3 className="card-scroller__item-title">{item.title}</h3>
                      {item.description &&
                      <p>{item.description}</p>
                      }
                    </div>
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

CardScrollerComponent.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  title: PropTypes.string,
}

export default CardScrollerComponent
