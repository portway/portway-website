import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TabList = ({ children, onChange }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <ul className="tablist" role="tablist">
      {React.Children.map(children, (tab, index) => (
        <li className="tablist__item" role="presentation">
          {React.cloneElement(tab, {
            onClick: (e) => {
              e.preventDefault()
              setActiveTab(index)
              onChange(index)
            },
            selected: activeTab === index
          })}
        </li>
      ))}
    </ul>
  )
}

TabList.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
}

export default TabList
