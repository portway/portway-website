import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ children, className, href, id, label, onClick, selected }) => {
  return (
    <a
      aria-label={label}
      aria-selected={selected}
      className={className}
      href={href}
      id={id}
      onClick={onClick}
      role="tab"
      tabIndex={selected ? null : -1}
    >
      {children}
    </a>
  )
}

Tab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
}

export default Tab
