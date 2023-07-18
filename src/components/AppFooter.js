import React from 'react'
import { CFooter } from '@coreui/react-pro'

const AppFooter = () => {
  return (
    <>
      <CFooter>
        <div className="float-end ms-auto">
          <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
            E-class
          </a>
          <span className="ms-1">&copy; 2023 Mediacity.</span>
        </div>
        {/* <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>
      </div> */}
      </CFooter>
    </>
  )
}

export default React.memo(AppFooter)
