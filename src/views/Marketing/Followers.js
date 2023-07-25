import React, { useState } from 'react'
import {} from '@coreui/icons'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'
import { cilTrash, cilColorBorder, cilArrowLeft } from '@coreui/icons'
import {
  CSmartTable,
  CButton,
  CImage,
  CFormSwitch,
  CPopover,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

function Followers() {
  const [activeKey, setActiveKey] = useState(1)
  const [activeTab, setActiveTab] = useState(0)
  // const [details, setDetails] = useState([])
  const [StatusState, setStatusState] = useState('0')
  const [visible, setVisible] = useState(false)
  // const [requestToInvolvement, setRequestToInvolvement] = useState([])
  // const [requestToInvolvementNew, setRequestToInvolvementNew] = useState([])

  // const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columnsNew = [
    { key: 'Number', _style: { width: '15%' } },
    { key: 'User', sorter: false, _style: { width: '35%' }, _props: { className: 'fw-semibold' } },
    { key: 'Email', _style: { width: '35%' } },
  ]

  const usersDataNew = [
    {
      id: 1,
      Number: 1,
      User: 'Ankit',
      Email: 'kabra4215@gmail.com',
    },
    {
      id: 2,
      Number: 2,
      User: 'Ankit',
      Email: 'kabra4215@gmail.com',
    },
    {
      id: 3,
      Number: 3,
      User: 'Ankit',
      Email: 'kabra4215@gmail.com',
    },
    {
      id: 4,
      Number: 4,
      User: 'Ankit',
      Email: 'kabra4215@gmail.com',
    },
    {
      id: 5,
      Number: 5,
      User: 'Ankit',
      Email: 'kabra4215@gmail.com',
    },
    {
      id: 6,
      Number: 6,
      User: 'Ankit',
      Email: 'kabra4215@gmail.com',
    },
    {
      id: 7,
      Number: 7,
      User: 'Ankit',
      Email: 'kabra4215@gmail.com',
    },
    {
      id: 8,
      Number: 8,
      User: 'Ankit',
      Email: 'kabra4215@gmail.com',
    },
  ]

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const onClickEditLang = (e) => {
    const clickEdit = e.currentTarget.getAttribute('value-get')
    console.log(clickEdit)
  }

  const onClickDeletLang = (e) => {
    console.log('delet on click handle')
  }

  const ForFeatured = (Featured) => {
    switch (Featured) {
      case 'true':
        return 1
      case 'false':
        return 0
      default:
        return -1
    }
  }

  const ForStatus = (Status) => {
    switch (Status) {
      case 'true':
        return 1
      case 'false':
        return 0
      default:
        return -1
    }
  }

  return (
    <>
      <AuthFun />
      <div className="background-color-and-padding mb-4">
        <div className="display-flex-justify-space-between-padding">
          <CNav variant="pills" role="tablist">
            <CNavItem>
              <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
                Followers
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
                Followings
              </CNavLink>
            </CNavItem>
          </CNav>
          <div>
            <CButton color="primary" type="submit" variant="outline">
              <CIcon icon={cilArrowLeft} /> Back
            </CButton>
          </div>
        </div>
        <CTabContent className="mt-4">
          <CTabPane role="tabpanel" aria-labelledby="Orders-tab" visible={activeKey === 1}>
            <div className="container">
              <div className="row">
                <hr />
                <div className="margin-down-and-top">
                  <div className="background-white-border-radious">
                    <div className="display-flex-justify-space-between-padding"></div>
                    <div>
                      <CSmartTable
                        activePage={3}
                        cleaner
                        clickableRows
                        columns={columnsNew}
                        columnSorter
                        items={usersDataNew}
                        itemsPerPageSelect
                        itemsPerPage={10}
                        pagination
                        scopedColumns={{
                          Icon: (item) => (
                            <td>
                              <CImage rounded thumbnail src={item.Icon} width={50} height={50} />
                            </td>
                          ),
                          Image: (item) => (
                            <td>
                              <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                            </td>
                          ),
                          Status: (item) => (
                            <td>
                              {ForStatus(item.Status) === 1 ? (
                                <CFormSwitch
                                  valid
                                  id="formSwitchCheckChecked"
                                  onChange={(e) => {
                                    setStatusState('false')
                                  }}
                                  defaultChecked
                                />
                              ) : (
                                <CFormSwitch
                                  valid
                                  id="formSwitchCheckChecked"
                                  onChange={(e) => {
                                    setStatusState('true')
                                  }}
                                />
                              )}
                            </td>
                          ),
                          Featured: (item) => (
                            <td>
                              {ForFeatured(item.Featured) === 1 ? (
                                <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                              ) : (
                                <CFormSwitch id="formSwitchCheckChecked" />
                              )}
                            </td>
                          ),
                          show_details: (item) => {
                            return (
                              <td className="py-2">
                                <CPopover
                                  content={
                                    <CModal visible={visible} onClose={() => setVisible(false)}>
                                      <CModalHeader onClose={() => setVisible(false)}>
                                        <CModalTitle>Modal title</CModalTitle>
                                      </CModalHeader>
                                      <CModalBody>
                                        <p>ANkit</p>
                                      </CModalBody>
                                      <CModalFooter>
                                        <CButton
                                          color="secondary"
                                          onClick={() => setVisible(false)}
                                        >
                                          Close
                                        </CButton>
                                        <CButton color="primary">Save changes</CButton>
                                      </CModalFooter>
                                    </CModal>
                                  }
                                  placement="top"
                                >
                                  <CButton color="secondary" onClick={() => setVisible(!visible)}>
                                    <CIcon icon={cilColorBorder}></CIcon>
                                  </CButton>
                                </CPopover>
                              </td>
                            )
                          },
                        }}
                        selectable
                        sorterValue={{ column: 'Request', state: 'asc' }}
                        tableFilter
                        tableFilterLabel="Search :"
                        tableFilterPlaceholder="Type.."
                        tableHeadProps={{
                          color: 'success',
                        }}
                        tableProps={{
                          striped: true,
                          hover: true,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refund-tab" visible={activeKey === 2}>
            <div className="container">
              <div className="row">
                <hr />
                <div className="margin-down-and-top">
                  <div className="background-white-border-radious">
                    <div className="display-flex-justify-space-between-padding"></div>
                    <div>
                      <CSmartTable
                        activePage={3}
                        cleaner
                        clickableRows
                        columns={columnsNew}
                        columnSorter
                        items={usersDataNew}
                        itemsPerPageSelect
                        itemsPerPage={10}
                        pagination
                        scopedColumns={{
                          Icon: (item) => (
                            <td>
                              <CImage rounded thumbnail src={item.Icon} width={50} height={50} />
                            </td>
                          ),
                          Image: (item) => (
                            <td>
                              <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                            </td>
                          ),
                          Status: (item) => (
                            <td>
                              {ForStatus(item.Status) === 1 ? (
                                <CFormSwitch
                                  valid
                                  id="formSwitchCheckChecked"
                                  onChange={(e) => {
                                    setStatusState('false')
                                  }}
                                  defaultChecked
                                />
                              ) : (
                                <CFormSwitch
                                  valid
                                  id="formSwitchCheckChecked"
                                  onChange={(e) => {
                                    setStatusState('true')
                                  }}
                                />
                              )}
                            </td>
                          ),
                          Featured: (item) => (
                            <td>
                              {ForFeatured(item.Featured) === 1 ? (
                                <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                              ) : (
                                <CFormSwitch id="formSwitchCheckChecked" />
                              )}
                            </td>
                          ),
                          show_details: (item) => {
                            return (
                              <td className="py-2">
                                <CPopover
                                  content={
                                    <CModal visible={visible} onClose={() => setVisible(false)}>
                                      <CModalHeader onClose={() => setVisible(false)}>
                                        <CModalTitle>Modal title</CModalTitle>
                                      </CModalHeader>
                                      <CModalBody>
                                        <p>ANkit</p>
                                      </CModalBody>
                                      <CModalFooter>
                                        <CButton
                                          color="secondary"
                                          onClick={() => setVisible(false)}
                                        >
                                          Close
                                        </CButton>
                                        <CButton color="primary">Save changes</CButton>
                                      </CModalFooter>
                                    </CModal>
                                  }
                                  placement="top"
                                >
                                  <CButton color="secondary" onClick={() => setVisible(!visible)}>
                                    <CIcon icon={cilColorBorder}></CIcon>
                                  </CButton>
                                </CPopover>
                              </td>
                            )
                          },
                        }}
                        selectable
                        sorterValue={{ column: 'Request', state: 'asc' }}
                        tableFilter
                        tableFilterLabel="Search :"
                        tableFilterPlaceholder="Type.."
                        tableHeadProps={{
                          color: 'success',
                        }}
                        tableProps={{
                          striped: true,
                          hover: true,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

export default Followers
