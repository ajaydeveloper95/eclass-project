import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react-pro'

function Order() {
  const [activeKey, setActiveKey] = useState(1)

  return (
    <>
      <div className="background-white-border-radious">
        <div className="display-flex-justify-space-between-padding">
          <div>
            <p className="text-weight-1-3rem">Orders</p>
          </div>
          <div>
            <CButton
              className="mx-3"
              href="/education/bundleform"
              color="primary"
              variant="outline"
            >
              <CIcon icon={cilPlus} /> Enroll User
            </CButton>
            <CButton className="mx-3" color="primary" variant="outline">
              <CIcon icon={cilPlus}></CIcon> Export Offline Payments
            </CButton>
          </div>
        </div>
        <hr />
        <CNav variant="pills" role="tablist">
          <CNavItem>
            <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
              Orders
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
              Refund Orders
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="Orders-tab" visible={activeKey === 1}>
            <div className="container">
              <h1> One </h1>
              <h1> ajay </h1>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refund-tab" visible={activeKey === 2}>
            <div className="container">
              <h1> Two </h1>
            </div>
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

export default Order
