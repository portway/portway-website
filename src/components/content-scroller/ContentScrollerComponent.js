import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Img from 'gatsby-image'

import { uuid } from '../../scripts/utilities'

import blobStrokeImage from '../../img/blob-stroke.svg'
import './ContentScrollerComponent.scss'

const ContentScrollerComponent = ({ className, items, title }) => {
  const [itemsWithId, setItemsWithId] = useState([])
  const [selectedItemId, setSelectedItemId] = useState(null)
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)

  const listRef = useRef()

  useEffect(() => {
    const itemMap = items.map((item) => {
      item.id = uuid()
      return item
    })
    setSelectedItemId(itemMap[0].id)
    setItemsWithId(itemMap)
  }, [items, setItemsWithId])

  const keydownHandler = useCallback((e) => {
    if (e.keyCode === 39 || e.keyCode === 37) {
      let tempIndex = selectedItemIndex
      // Right arrow
      if (e.keyCode === 39) {
        tempIndex++
        if (tempIndex >= itemsWithId.length) tempIndex = 0
      }
      // Left arrow
      if (e.keyCode === 37) {
        tempIndex--
        if (tempIndex < 0) tempIndex = itemsWithId.length - 1
      }
      // Now set the selectedItem to the item selected and focus it manually
      setSelectedItemIndex(tempIndex)
      setSelectedItemId(itemsWithId[tempIndex].id)
      document.querySelector(`#tab-${itemsWithId[tempIndex].id}`).focus()
    }
  }, [itemsWithId, selectedItemIndex])

  useEffect(() => {
    if (listRef.current) {
      const tempRef = listRef.current
      tempRef.addEventListener('keydown', keydownHandler, { passive: false })
      return () => {
        tempRef.removeEventListener('keydown', keydownHandler, { passive: false })
      }
    }
  }, [keydownHandler])

  const contentScrollerClasses = cx({
    'content-scroller': true,
    [className]: className
  })

  return (
    <section className={contentScrollerClasses}>
      {title &&
      <>
        <div className="container">
          {typeof title === 'string' &&
          <h2 className="content-scroller__title">{title}</h2>
          }
          {typeof title !== 'string' &&
          <div className="content-scroller__title">
            {title}
          </div>
          }
        </div>
        <div className="container container--with-scroller">
          <div
            className="content-scroller__scroller"
            role="tablist"
            aria-label="Content tabs"
            ref={listRef}
            tabIndex={0}
          >
            <ol className="content-scroller__list">
              {itemsWithId.map((item, index) => {
                return (
                  <li key={`tab-${item.id}`}>
                    <button
                      aria-controls={`panel-${item.id}`}
                      aria-selected={selectedItemId === item.id}
                      className="content-scroller__item"
                      id={`tab-${item.id}`}
                      onClick={(e) => {
                        setSelectedItemId(item.id)
                        setSelectedItemIndex(index)
                        listRef.current.scrollTo({
                          top: 0,
                          left: e.currentTarget.offsetLeft - 50,
                          behavior: 'smooth'
                        })
                      }}
                      role="tab"
                      tabIndex={selectedItemId === item.id ? 0 : -1}
                    >
                      {item.title}
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
        <div className="content-scroller__content container">
          {itemsWithId.map((item, index) => {
            let sources = []
            if (item.imageLight && item.imageDark) {
              sources = [
                item.imageLight.childImageSharp.fluid,
                {
                  ...item.imageDark.childImageSharp.fluid,
                  media: `(prefers-color-scheme: dark)`
                }
              ]
            }
            return (
              <div
                aria-labelledby={`tab-${item.id}`}
                className="content-scroller__panel"
                hidden={item.id !== selectedItemId}
                id={`panel-${item.id}`}
                key={`panel-${item.id}`}
                role="tabpanel"
                tabIndex="0"
              >
                {item.description &&
                <div className="content-scroller__description">
                  {item.description}
                </div>
                }
                {sources.length > 0 &&
                <div className="content-scroller__image">
                  <Img fluid={sources} loading="eager" />
                  <div className="content-scroller__background">
                    <img src={blobStrokeImage} width="554" height="546" alt="Blob artwork" />
                  </div>
                </div>
                }
              </div>
            )
          })}
        </div>
      </>
      }
    </section>
  )
}

ContentScrollerComponent.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default ContentScrollerComponent
