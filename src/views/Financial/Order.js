import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
// import { cilPlus } from '@coreui/icons'
// import CIcon from '@coreui/icons-react'
import { cilTrash, cilOptions, cilPen, cilPlus } from '@coreui/icons'
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
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function Order() {
  const [activeKeyOne, setActiveKeyOne] = useState(1)
  const [details, setDetails] = useState([])
  const [StatusState, setStatusState] = useState('0')
  const [visible, setVisible] = useState(false)
  const [activeKey, setActiveKey] = useState(1)

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

  const columns = [
    { key: 'Number', _style: { width: '10%' } },
    {
      key: 'User',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Payment_Details', _style: { width: '25%' } },
    { key: 'Status', sorter: false, _style: { width: '10%' } },
    { key: 'Subscription_Status', _style: { width: '20%' } },
    { key: 'Declined', sorter: false, _style: { width: '15%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]

  const usersData = [
    {
      id: 1,
      Number: 1,
      User: 'User: Wasim waakram1111@gmail.com Course: The Complete WordPress Development Course',
      Payment_Details: 'TransactionId: PaymentMethod: Admin Enroll TotalAmount:',
      Status: 'true',
      Subscription_Status: '',
      Declined: '',
    },
    {
      id: 2,
      Number: 2,
      User: 'User: Wasim waakram1111@gmail.com Course: The Complete WordPress Development Course',
      Payment_Details: 'TransactionId: PaymentMethod: Admin Enroll TotalAmount:',
      Status: 'true',
      Subscription_Status: '',
      Declined: '',
    },
    {
      id: 3,
      Number: 3,
      User: 'User: Wasim waakram1111@gmail.com Course: The Complete WordPress Development Course',
      Payment_Details: 'TransactionId: PaymentMethod: Admin Enroll TotalAmount:',
      Status: 'true',
      Subscription_Status: '',
      Declined: '',
    },
    {
      id: 4,
      Number: 4,
      User: 'User: Wasim waakram1111@gmail.com Course: The Complete WordPress Development Course',
      Payment_Details: 'TransactionId: PaymentMethod: Admin Enroll TotalAmount:',
      Status: 'true',
      Subscription_Status: '',
      Declined: '',
    },
    {
      id: 5,
      Number: 5,
      User: 'User: Wasim waakram1111@gmail.com Course: The Complete WordPress Development Course',
      Payment_Details: 'TransactionId: PaymentMethod: Admin Enroll TotalAmount:',
      Status: 'true',
      Subscription_Status: '',
      Declined: '',
    },
    {
      id: 6,
      Number: 6,
      User: 'User: Wasim waakram1111@gmail.com Course: The Complete WordPress Development Course',
      Payment_Details: 'TransactionId: PaymentMethod: Admin Enroll TotalAmount:',
      Status: 'true',
      Subscription_Status: '',
      Declined: '',
    },
    {
      id: 7,
      Number: 7,
      User: 'User: Wasim waakram1111@gmail.com Course: The Complete WordPress Development Course',
      Payment_Details: 'TransactionId: PaymentMethod: Admin Enroll TotalAmount:',
      Status: 'true',
      Subscription_Status: '',
      Declined: '',
    },
    {
      id: 8,
      Number: 8,
      User: 'User: Wasim waakram1111@gmail.com Course: The Complete WordPress Development Course',
      Payment_Details: 'TransactionId: PaymentMethod: Admin Enroll TotalAmount:',
      Status: 'true',
      Subscription_Status: '',
      Declined: '',
    },
  ]

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
            <CNavLink active={activeKeyOne === 1} onClick={() => setActiveKeyOne(1)}>
              Orders
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeKeyOne === 2} onClick={() => setActiveKeyOne(2)}>
              Refund Orders
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="Orders-tab" visible={activeKeyOne === 1}>
            <div className="container">
              <hr />
              <div className="row">
                <h6 className="mt-4">All Orders</h6>
              </div>
              <hr />
              <div className="margin-down-and-top">
                <div className="background-white-border-radious">
                  <div className="display-flex-justify-space-between-padding"></div>
                  <div className="padding-20px-10px">
                    <CSmartTable
                      activePage={3}
                      cleaner
                      clickableRows
                      columns={columns}
                      columnSorter
                      items={usersData}
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
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'start',
                                    }}
                                  >
                                    <CButton
                                      value-get={item.langId}
                                      // onClick={onClickEditLang}
                                      style={{ textDecoration: 'none', color: 'black' }}
                                      color="link"
                                    >
                                      <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>
                                      Edit
                                    </CButton>
                                    <CButton
                                      value-get={item.langId}
                                      // onClick={onClickDeletLang}
                                      style={{ textDecoration: 'none', color: 'black' }}
                                      color="link"
                                    >
                                      <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>
                                      Delete
                                    </CButton>
                                  </div>
                                }
                                placement="top"
                              >
                                <CButton color="secondary">
                                  <CIcon icon={cilOptions}></CIcon>
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
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refund-tab" visible={activeKeyOne === 2}>
            <div className="container">
              <hr />
              <div className="row">
                <h6 className="mt-4">All Refund Order</h6>
              </div>
              <hr />
              <div className="margin-down-and-top">
                <div className="background-white-border-radious">
                  <div className="display-flex-justify-space-between-padding"></div>
                  <div className="padding-20px-10px">
                    <CSmartTable
                      activePage={3}
                      cleaner
                      clickableRows
                      columns={columns}
                      columnSorter
                      items={usersData}
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
                                  <div
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'start',
                                    }}
                                  >
                                    <CButton
                                      value-get={item.langId}
                                      // onClick={onClickEditLang}
                                      style={{ textDecoration: 'none', color: 'black' }}
                                      color="link"
                                    >
                                      <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>
                                      Edit
                                    </CButton>
                                    <CButton
                                      value-get={item.langId}
                                      // onClick={onClickDeletLang}
                                      style={{ textDecoration: 'none', color: 'black' }}
                                      color="link"
                                    >
                                      <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>
                                      Delete
                                    </CButton>
                                  </div>
                                }
                                placement="top"
                              >
                                <CButton color="secondary">
                                  <CIcon icon={cilOptions}></CIcon>
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
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

export default Order
