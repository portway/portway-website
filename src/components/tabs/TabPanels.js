import React from 'react'
import PropTypes from 'prop-types'

const TabPanels = ({ activePanel, children }) => {
  return (
    <section className="tab-panels">
      {React.Children.map(children, (panel, index) => (
        React.cloneElement(panel, {
          hidden: activePanel !== index,
        })
      ))}
    </section>
  )
}

TabPanels.propTypes = {
  activePanel: PropTypes.number.isRequired,
  children: PropTypes.node,
}

TabPanels.defaultProps = {
  activePanel: 0
}

export default TabPanels
