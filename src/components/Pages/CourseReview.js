import React, { useState } from 'react'
import {
  CCardBody,
  CCollapse,
  CButton,
  CImage,
  CFormSwitch,
  CSmartTable,
  CPopover,
} from '@coreui/react-pro'
import { cilPlus, cilTrash, cilOptions, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import AuthFun from './AuthFunction/AuthFun'
function CourseReview() {
  document.title = 'Eclass - CourseReview'
  const [details, setDetails] = useState([])
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'
  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Title', _style: { width: '45%' } },
    { key: 'Instructor', sorter: false, _style: { width: '20%' } },
    { key: 'Featured', sorter: false, _style: { width: '20%' } },
    { key: 'Status', sorter: false, _style: { width: '20%' } },
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
      id: 0,
      Image: Cimg,
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Guest',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Member',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Staff',
      Featured: 'true',
      Status: 'false',
      // _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
      _props: { align: 'middle' },
    },
    // { id: 3, name: 'Chetan Mohamed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // {
    //   id: 4,
    //   name: 'Derick Maximinus',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // {
    //   id: 7,
    //   name: 'Avram Tarasios',
    //   registered: '2022/02/07',
    //   role: 'Staff',
    //   status: 'Banned',
    //   _props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, name: 'Quintin Ed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', role: 'Member', status: 'Pending' },
    // { id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // {
    //   id: 12,
    //   name: 'Nehemiah Tatius',
    //   registered: '2022/02/07',
    //   role: 'Staff',
    //   status: 'Banned',
    //   _selected: true,
    // },
    // { id: 13, name: 'Ebbe Gemariah', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // {
    //   id: 14,
    //   name: 'Eustorgios Amulius',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 16, name: 'Pompeius René', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    // {
    //   id: 18,
    //   name: 'Micheal Mercurius',
    //   registered: '2022/02/07',
    //   role: 'Admin',
    //   status: 'Inactive',
    // },
    // {
    //   id: 19,
    //   name: 'Ganesha Dubhghall',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 21, name: 'Vishnu Serghei', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    // { id: 23, name: 'Aulus Agmundr', registered: '2022/01/01', role: 'Member', status: 'Pending' },
    // {
    //   id: 42,
    //   name: 'Ford Prefect',
    //   registered: '2001/05/25',
    //   role: 'Alien',
    //   status: "Don't panic!",
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
  return (
    <div className="background-white-border-radious">
      <AuthFun />
      <div className="display-flex-justify-space-between-padding">
        <div>
          <p className="text-weight-1-3rem">All Coupons</p>
        </div>
        <div>
          <CButton className="mx-3" color="success" variant="outline">
            <CIcon icon={cilPlus}></CIcon> Add Coupon
          </CButton>
          <CButton className="mx-3" color="warning" variant="outline">
            <CIcon icon={cilTrash}></CIcon> Delete Selected
          </CButton>
        </div>
      </div>
      <hr />
      <div className="padding-20px-10px">
        <CSmartTable
          activePage={3}
          cleaner
          clickableRows
          columns={columns}
          // columnFilter
          columnSorter
          items={usersData}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
            Image: (item) => (
              <td>
                <CImage rounded thumbnail src={item.Image} width={100} height={100} />
              </td>
            ),
            Status: (item) => (
              <td>
                {ForStatus(item.Status) === 0 ? (
                  <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                ) : (
                  <CFormSwitch id="formSwitchCheckChecked" />
                )}
              </td>
            ),
            Featured: (item) => (
              <td>
                {ForFeatured(item.Featured) === 0 ? (
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
                          <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                        </CButton>
                        <CButton
                          value-get={item.langId}
                          // onClick={onClickDeletLang}
                          style={{ textDecoration: 'none', color: 'black' }}
                          color="link"
                        >
                          <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
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
          sorterValue={{ column: 'name', state: 'asc' }}
          tableFilter
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
  )
}

export default CourseReview
