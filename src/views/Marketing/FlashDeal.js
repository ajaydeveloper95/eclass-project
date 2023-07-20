import React, { useState, useEffect } from 'react'
import { cilTrash, cilColorBorder, cilPen, cilPlus, cilOptions } from '@coreui/icons'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
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
import axios from 'axios'

function FlashDeal() {
  const [details, setDetails] = useState([])
  const [StatusState, setStatusState] = useState('0')
  const [visible, setVisible] = useState(false)
  const [activeKey, setActiveKey] = useState(1)
  const [requestToInvolvement, setRequestToInvolvement] = useState([])
  const [requestToInvolvementNew, setRequestToInvolvementNew] = useState([])

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columns = [
    { key: 'Number', _style: { width: '10%' } },
    { key: 'Deal_Name', _style: { width: '20%' } },
    { key: 'Start_Date', _style: { width: '20%' } },
    { key: 'End_Date', _style: { width: '20%' } },
    {
      key: 'Image',
      sorter: false,
      _style: { width: '15%' },
      _props: { className: 'fw-semibold' },
    },
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
      Image: Cimg,
      Deal_Name: 'Christmas Sale',
      Start_Date: '2023-05-02 06:08:00',
      End_Date: '2023-05-02 06:08:00',
      Slug: 'Microsoft-excel',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 2,
      Number: 2,
      Image: Cimg,
      Deal_Name: 'Christmas Sale',
      Start_Date: '2023-05-02 06:08:00',
      End_Date: '2023-05-02 06:08:00',
      Slug: '	Flutter',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 3,
      Number: 3,
      Image: Cimg,
      Deal_Name: 'Christmas Sale',
      Start_Date: '2023-05-02 06:08:00',
      End_Date: '2023-05-02 06:08:00',
      Slug: 'React',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 4,
      Number: 4,
      Image: Cimg,
      Deal_Name: 'Christmas Sale',
      Start_Date: '2023-05-02 06:08:00',
      End_Date: '2023-05-02 06:08:00',
      Slug: '	Flutter',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 5,
      Number: 5,
      Image: Cimg,
      Deal_Name: 'Christmas Sale',
      Start_Date: '2023-05-02 06:08:00',
      End_Date: '2023-05-02 06:08:00',
      Slug: 'Microsoft-excel',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 6,
      Number: 6,
      Image: Cimg,
      Deal_Name: 'Christmas Sale',
      Start_Date: '2023-05-02 06:08:00',
      End_Date: '2023-05-02 06:08:00',
      Slug: 'Flutter',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 7,
      Number: 7,
      Image: Cimg,
      Deal_Name: 'Christmas Sale',
      Start_Date: '2023-05-02 06:08:00',
      End_Date: '2023-05-02 06:08:00',
      Slug: 'Flutter',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 8,
      Number: 8,
      Image: Cimg,
      Deal_Name: 'Christmas Sale',
      Start_Date: '2023-05-02 06:08:00',
      End_Date: '2023-05-02 06:08:00',
      Slug: 'Microsoft-excel',
      Status: 'true',
      Featured: 'true',
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

  return (
    <>
      <div className="background-white-border-radious">
        <div className="container">
          <div className="row">
            <h6 className="mt-4">All Flash Deals</h6>
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
                                    value-get={item.elementId}
                                    onClick={onClickEditCate}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                    color="link"
                                  >
                                    <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                                  </CButton>
                                  <CButton
                                    value-get={item.elementId}
                                    onClick={onClickDeletCate}
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
    </>
  )
}

export default FlashDeal
