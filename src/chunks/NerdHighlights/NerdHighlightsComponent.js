import React from 'react'
import { Link } from 'gatsby'

import { HighlightsComponent, Highlight } from '../../components/highlights/HighlightsComponent'

import securityIcon from '../../img/icon-security.svg'
import globalIcon from '../../img/icon-global.svg'
import permissionsIcon from '../../img/icon-permissions.svg'

const NerdHighlightsComponent = () => {
  return (
    <HighlightsComponent>
      <Highlight title="Security" icon={securityIcon}>
        <p>
          Your content is yours alone. We ensure it’s encrypted in transit, and in our database.
          Read about our <Link to="/security">security practices and promises</Link>
        </p>
      </Highlight>
      <Highlight title="Global Media CDN" icon={globalIcon}>
        <p>
          Images, videos, and other assets you upload are available on a global CDN, ready to be
          embedded anywhere
        </p>
      </Highlight>
      <Highlight title="Permissions" icon={permissionsIcon}>
        <p>
          Control which projects are accessible to everyone on your team, and add members to
          specific private projects.
        </p>
      </Highlight>
    </HighlightsComponent>
  )
}

NerdHighlightsComponent.propTypes = {
}

export default NerdHighlightsComponent
