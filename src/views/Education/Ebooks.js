import React, { useState } from 'react'

import { CSmartTable, CButton, CCardBody, CCollapse, CBadge } from '@coreui/react-pro'
import { cilOptions, cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function Ebooks() {
  return (
    <div className="background-white-border-radious">
      <div className="display-flex-justify-space-between-padding">
        <div className=".text-weight-1-3rem">
          <p className="text-weight-1-3rem">Ebook Adding Form</p>
        </div>
        <div>
          <CButton className="mx-3" href="/education/bundleform" color="success" variant="outline">
            <CIcon icon={cilPlus} /> Create A New Role
          </CButton>
          <CButton className="mx-3" href="/education/bundleform" color="success" variant="outline">
            <CIcon icon={cilPlus} /> Create A New Role
          </CButton>
        </div>
      </div>
      <hr />
      <div className="padding-20px-10px">
        <h1></h1>
      </div>
    </div>
  )
}

export default Ebooks
