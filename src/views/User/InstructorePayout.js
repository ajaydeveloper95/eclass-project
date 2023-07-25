import React, { useState } from 'react'
import { CSmartTable, CButton, CCollapse, CCardBody, CAvatar } from '@coreui/react-pro'
import {} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { cilOptions, cilArrowLeft } from '@coreui/icons'
import { CPopover } from '@coreui/react-pro'
import { cilTrash, cilPen, cilZoom } from '@coreui/icons'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { CFormSelect, CFormInput } from '@coreui/react'
import { CForm, CFormTextarea } from '@coreui/react-pro'
import { CFormSwitch } from '@coreui/react-pro'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function InstructorePayout() {
  const [details, setDetails] = useState([])
  const [StatusState, setStatusState] = useState('0')
  const [visible, setVisible] = useState(false)
  const [activeKey, setActiveKey] = useState(1)
  const [selectedTab, setSelectedTab] = useState(0)
  const [test, setTest] = useState('')
  const [testOne, setTestOne] = useState('')
  const [testTwo, setTestTwo] = useState('')
  const [activeTab, setActiveTab] = useState(0)

  const columns = [
    {
      key: 'instructor',
      _style: { width: '55%' },
    },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '30%' },
      filter: false,
      sorter: false,
    },
  ]
  const usersData = [
    {
      id: 1,
      instructor: 'Samppa Nori',
    },
    {
      id: 2,
      instructor: 'Estavan Lykos',
    },
    {
      id: 3,
      instructor: 'Chetan Mohamed',

      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
      _selected: true,
    },
    {
      id: 4,
      instructor: 'Derick Maximinus',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 5,
      instructor: 'Friderik Dávid',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
    },
    {
      id: 6,
      instructor: 'Yiorgos Avraamu',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 7,
      instructor: 'Avram Tarasios',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
      _selected: true,
    },
    {
      id: 8,
      instructor: 'Quintin Ed',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 9,
      instructor: 'Enéas Kwadwo',
      avatar: '9.jpg',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 10,
      instructor: 'Agapetus Tadeáš',
      avatar: '10.jpg',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
    },
    {
      id: 11,
      instructor: 'Carwyn Fachtna',
      avatar: '11.jpg',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 12,
      instructor: 'Nehemiah Tatius',
      avatar: '12.jpg',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
      _selected: true,
    },
    {
      id: 13,
      instructor: 'Ebbe Gemariah',
      avatar: '13.jpg',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 14,
      instructor: 'Eustorgios Amulius',
      avatar: '14.jpg',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 15,
      instructor: 'Leopold Gáspár',
      avatar: '15.jpg',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
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

  return (
    <>
      <AuthFun />
      <div className="background-color-and-padding mb-4">
        <div className="display-flex-justify-space-between-padding">
          <CNav variant="pills" role="tablist">
            <CNavItem>
              <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
                Payout Setting
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
                Payout
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
            <div className="background-color-and-padding">
              <div className="container">
                <div className="row">
                  <hr />
                  <div className="col-3">
                    <h6>Instructor Revenue in %</h6>
                    <CFormInput
                      type="number"
                      placeholder="Default input"
                      aria-label="default input example"
                    />
                  </div>
                  <div className="col-3">
                    <h6>Instructor Revenue in %</h6>
                    <CFormInput
                      type="number"
                      placeholder="Default input"
                      aria-label="default input example"
                    />
                  </div>
                  <div className="col-2">
                    <h6>Paytm Enable:</h6>
                    <CFormSwitch size="xl" label="" id="formSwitchCheckDefaultXL" />
                  </div>
                  <div className="col-2">
                    <h6>PayPal Enable:</h6>
                    <CFormSwitch size="xl" label="" id="formSwitchCheckDefaultXL" />
                  </div>
                  <div className="col-2">
                    <h6>Bank Transfer Enable:</h6>
                    <CFormSwitch size="xl" label="" id="formSwitchCheckDefaultXL" />
                  </div>

                  <div className="col-12"></div>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refund-tab" visible={activeKey === 2}>
            <div className="container">
              <div className="row">
                <hr />
                <div className="col-md-3">
                  <CNav variant="pills" className="flex-column">
                    <CNavItem>
                      <CNavLink active={activeTab === 0} onClick={() => handleTabClick(0)}>
                        Pending Payout
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink active={activeTab === 1} onClick={() => handleTabClick(1)}>
                        Completed Payout
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                </div>
                <div className="col-md-9">
                  <CTabContent activetab={activeTab}>
                    <CTabPane visible={activeTab === 0}>
                      <div className="container">
                        <div className="row">
                          <div className="">
                            <CSmartTable
                              activePage={2}
                              cleaner
                              clickableRows
                              columns={columns}
                              columnSorter
                              footer
                              items={usersData}
                              itemsPerPageSelect
                              itemsPerPage={5}
                              pagination
                              onFilteredItemsChange={(items) => {
                                console.log(items)
                              }}
                              onSelectedItemsChange={(items) => {
                                console.log(items)
                              }}
                              scopedColumns={{
                                avatar: (item) => (
                                  <td>
                                    <CAvatar src={`/images/avatars/${item.avatar}`} />
                                  </td>
                                ),
                                show_details: (item) => {
                                  return (
                                    <td>
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
                                              onClick={onClickEditLang}
                                              style={{ textDecoration: 'none', color: 'black' }}
                                              color="link"
                                            >
                                              <CIcon
                                                style={{ margin: '0px 10px' }}
                                                icon={cilPen}
                                              ></CIcon>
                                              Edit
                                            </CButton>
                                            <CButton
                                              value-get={item.langId}
                                              onClick={onClickDeletLang}
                                              style={{ textDecoration: 'none', color: 'black' }}
                                              color="link"
                                            >
                                              <CIcon
                                                style={{ margin: '0px 10px' }}
                                                icon={cilTrash}
                                              ></CIcon>
                                              Delete
                                            </CButton>
                                            <CButton
                                              value-get={item.langId}
                                              onClick={onClickDeletLang}
                                              style={{ textDecoration: 'none', color: 'black' }}
                                              color="link"
                                            >
                                              <CIcon
                                                style={{ margin: '0px 10px' }}
                                                icon={cilZoom}
                                              ></CIcon>
                                              View
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
                                details: (item) => {
                                  return (
                                    <CCollapse visible={details.includes(item.id)}>
                                      <CCardBody className="p-3">
                                        <h4>{item.username}</h4>
                                        <p className="text-muted">User since: {item.registered}</p>
                                        <CButton size="sm" color="info">
                                          User Settings
                                        </CButton>
                                        <CButton size="sm" color="danger" className="ml-1">
                                          Delete
                                        </CButton>
                                      </CCardBody>
                                    </CCollapse>
                                  )
                                },
                              }}
                              selectable
                              sorterValue={{ column: 'status', state: 'asc' }}
                              tableFilter
                              tableProps={{
                                className: 'add-this-class',
                                responsive: true,
                                striped: true,
                                hover: true,
                              }}
                              tableBodyProps={{
                                className: 'align-middle',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane visible={activeTab === 1}>
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h6>Enable Inner Border:</h6>
                            <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                          </div>
                          <div className="col-6 mt-3">
                            <h6> Outer Border width</h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: '10px', value: '1' },
                                { label: '11px', value: '2' },
                                { label: '11px', value: '3' },
                                { label: '12px', value: '4' },
                                { label: '13px', value: '5' },
                                { label: '14px', value: '6' },
                                { label: '15px', value: '7', disabled: true },
                              ]}
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Outer Border Color:</h6>
                            <CFormInput
                              type="color"
                              id="exampleColorInput"
                              defaultValue="#563d7c"
                              title="Choose your color"
                            />
                          </div>
                        </div>

                        <div className="d-grid gap-2 d-md-block mt-4">
                          <CButton color="primary">Save</CButton>
                        </div>
                      </div>
                    </CTabPane>
                  </CTabContent>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refundtwo-tab" visible={activeKey === 3}>
            <div className="container">
              <hr />
              <div className="row">
                <div className="col-6">
                  <h4>Certificate Verify</h4>
                </div>
                <div className="col-6">
                  <div className="d-grid gap-2 d-md-block float-end">
                    <CButton color="primary">Reset</CButton>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-6 mb-3">
                  <h6>Enter Certificate Serial Number:*</h6>
                  <CFormInput type="number" aria-label="default input example" />
                </div>
                <div className="col-1">
                  <div className="d-grid gap-2 d-md-block mt-4 float-end">
                    <CButton color="primary">Verify</CButton>
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

export default InstructorePayout
