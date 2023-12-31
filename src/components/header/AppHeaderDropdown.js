import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CAvatar,
  // CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import {
  // cilBell,
  // cilCreditCard,
  // cilCommentSquare,
  // cilEnvelopeOpen,
  // cilFile,
  cilLockLocked,
  // cilSettings,
  // cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const onLogout = () => {
    localStorage.setItem('access_token', '')
    navigate('/login')
  }

  return (
    <CDropdown variant="nav-item" alignment="end">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0">
        {/* <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 fw-semibold py-2">
          Account
        </CDropdownHeader> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info-gradient" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success-gradient" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger-gradient" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning-gradient" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        <CDropdownHeader className="bg-light dark:bg-white dark:bg-opacity-10 fw-semibold py-2">
          ADMIN
        </CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        {/* <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary-gradient" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary-gradient" className="ms-2">
            42
          </CBadge>
        </CDropdownItem> */}
        <CDropdownDivider />
        <CDropdownItem onClick={onLogout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
