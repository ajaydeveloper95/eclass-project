import React, { useState } from 'react'
import { CAlert } from '@coreui/react-pro'
import { cilCheckCircle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import PropTypes from 'prop-types'

function AlertFeat(props) {
  const { visible, work } = props
  const [visibleStatus, setVisibleStatus] = useState(props.visible)

  setTimeout(() => {
    setVisibleStatus(false)
  }, 2000)

  return (
    <div>
      <div className="for-test">
        <CAlert
          visible={visibleStatus}
          color="success"
          dismissible
          className="d-flex align-items-center cAlert-custom-class-set-fit"
          onClose={() => setVisibleStatus(false)}
        >
          <CIcon icon={cilCheckCircle} className="flex-shrink-0 me-2" width={24} height={24} />
          <div>Element {work} Successfully</div>
        </CAlert>
      </div>
    </div>
  )
}

export default AlertFeat

AlertFeat.propTypes = {
  work: PropTypes.string,
  visible: PropTypes.bool,
}
