import React from 'react'
import PropTypes from 'prop-types'

const TabPanel = ({ children, className, hidden, id, labelledBy }) => {
  return (
    <div
      aria-labelledby={labelledBy}
      className={className}
      hidden={hidden}
      id={id}
      role="tabpanel"
      tabIndex={hidden ? null : -1}
    >
      {children}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelledBy: PropTypes.string.isRequired,
}

TabPanel.defaultPropos = {
  hidden: true
}

export default TabPanel
