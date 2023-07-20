import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { CFormSelect, CFormInput } from '@coreui/react'
import { CForm, CFormTextarea } from '@coreui/react-pro'
import { CButton, CFormSwitch } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { CLoadingButton } from '@coreui/react-pro'
import { cilTrash, cilColorBorder, cilPen, cilPlus } from '@coreui/icons'
import {
  CSmartTable,
  CImage,
  CPopover,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'

function AffiliateAndWallet() {
  const [details, setDetails] = useState([])
  const [StatusState, setStatusState] = useState('0')
  const [visible, setVisible] = useState(false)
  const [activeKey, setActiveKey] = useState(1)
  const [selectedTab, setSelectedTab] = useState(0)
  const [test, setTest] = useState('')
  const [testOne, setTestOne] = useState('')
  const [testTwo, setTestTwo] = useState('')
  const [activeTab, setActiveTab] = useState(0)

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columns = [
    { key: 'Number', _style: { width: '10%' } },
    {
      key: 'User',
      sorter: false,
      _style: { width: '15%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Type', _style: { width: '20%' } },
    { key: 'Amount', _style: { width: '15%' } },
    { key: 'Payment_Gateway', _style: { width: '20%' } },
    { key: 'Details', _style: { width: '15%' } },
  ]

  const usersData = [
    {
      id: 1,
      Number: 1,
      User: 'Jack',
      Type: 'Credit',
      Amount: 100,
      Payment_Gateway: 'Razorpay',
      Details: 'Razorpay',
    },
    {
      id: 2,
      Number: 2,
      User: 'Jack',
      Type: 'Credit',
      Amount: 100,
      Payment_Gateway: 'Razorpay',
      Details: 'Razorpay',
    },
    {
      id: 3,
      Number: 3,
      User: 'Jack',
      Type: 'Credit',
      Amount: 100,
      Payment_Gateway: 'Razorpay',
      Details: 'Razorpay',
    },
    // {
    //   id: 4,
    //   Number: 4,
    //   User: 'Jack',
    //   Type: 'Credit',
    //   Amount: 100,
    //   Payment_Gateway: 'Razorpay',
    //   Details: 'Razorpay',
    // },
    // {
    //   id: 5,
    //   Number: 5,
    //   User: 'Jack',
    //   Type: 'Credit',
    //   Amount: 100,
    //   Payment_Gateway: 'Razorpay',
    //   Details: 'Razorpay',
    //   Status: 'true',
    // },
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

  const onClickEditCate = (e) => {
    let EditId = e.target.getAttribute('value-get')
  }

  const onClickDeletCate = (e) => {
    console.log('t')
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
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const deleteSelectedOnChange = () => {
    console.log('t')
  }

  const CategoryFormSubmit = () => {
    console.log('t')
  }

  return (
    <>
      <div className="background-color-and-padding mb-4">
        <div className="display-flex-justify-space-between-padding"></div>
        <CNav variant="pills" role="tablist">
          <CNavItem>
            <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
              Affiliate
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
              Wallet Settings
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeKey === 3} onClick={() => setActiveKey(3)}>
              Wallet Transactions
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent className="mt-4">
          <CTabPane role="tabpanel" aria-labelledby="Orders-tab" visible={activeKey === 1}>
            <div className="container">
              <hr />
              <h4>Affiliate</h4>
              <hr />
              <div className="row">
                <div className="col-3">
                  <h6>Referral Code Length:</h6>
                  <CFormInput type="number" aria-label="default input example" />
                </div>
                <div className="col-3">
                  <h6>Point per referral:</h6>
                  <CFormInput type="number" aria-label="default input example" />
                </div>
                <div className="col-6"></div>
                <div className="col-6">
                  <div className="mb-3 mt-3">
                    <h3>Front Settings</h3>
                    <CFormInput type="file" id="formFileMultiple" label="Image" multiple />
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-editor">
                    <span>
                      <h1>One</h1>
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <h6 className="mt-2">Status:</h6>
                  <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                  <CLoadingButton color="info" timeout={2000} className="Onebtn mt-3">
                    Reset
                  </CLoadingButton>
                  <CLoadingButton
                    color="success"
                    variant="outline"
                    timeout={2000}
                    className="Twobtn mt-3"
                  >
                    Update
                  </CLoadingButton>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refund-tab" visible={activeKey === 2}>
            <div className="container">
              <hr />
              <h4>Wallet Settings</h4>
              <hr />
              <div className="row">
                <div className="col-12">
                  <h6 className="mt-2">Status:</h6>
                  <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                  <h5 className="mt-4">Enable Payment Gateways For Wallet:</h5>
                </div>
                <div className="col-3">
                  <h6 className="mt-2">Status:</h6>
                  <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                </div>
                <div className="col-3">
                  <h6 className="mt-2">Status:</h6>
                  <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                </div>
                <div className="col-3">
                  <h6 className="mt-2">Status:</h6>
                  <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                </div>
                <div className="col-12">
                  <CLoadingButton color="info" timeout={2000} className="Onebtn mt-3">
                    Reset
                  </CLoadingButton>
                  <CLoadingButton
                    color="success"
                    variant="outline"
                    timeout={2000}
                    className="Twobtn mt-3"
                  >
                    Update
                  </CLoadingButton>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refundtwo-tab" visible={activeKey === 3}>
            <div className="container">
              <hr />
              <div className="row">
                <h6>Request To Involve</h6>
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
                                  <CModal visible={visible} onClose={() => setVisible(false)}>
                                    <CModalHeader onClose={() => setVisible(false)}>
                                      <CModalTitle>Modal title</CModalTitle>
                                    </CModalHeader>
                                    <CModalBody>
                                      <p>Ankit</p>
                                    </CModalBody>
                                    <CModalFooter>
                                      <CButton color="secondary" onClick={() => setVisible(false)}>
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
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

export default AffiliateAndWallet
