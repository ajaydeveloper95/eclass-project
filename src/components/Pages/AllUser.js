import React, { useState, useEffect } from 'react'
import { adminUrl } from '../../RouteDynamic'
import { CSmartTable, CButton, CImage, CFormSwitch, CPopover } from '@coreui/react-pro'
import { cilLockLocked, cilOptions, cilTrash, cilPen, cilZoom } from '@coreui/icons'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import VerifyUserComponent from 'src/views/Education/VerifyUserComponent'
import BlockUserComponent from 'src/views/Education/BlockUserComponent'

import {
  CCardBody,
  CCollapse,
  CRow,
  CCol,
  CFormInput,
  CForm,
  CFormSelect,
  CBadge,
  CInputGroupText,
  CInputGroup,
  CDatePicker,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function AllUser() {
  document.title = 'Eclass - All User'
  const [userState, setUserState] = useState([])
  const [SwitchSetup, setSwitchSetup] = useState('Alluser')
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleView, setVisibleView] = useState(false)
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  useEffect(() => {
    axios
      .get(`${adminUrl}getUsers`)
      .then((alluser) => {
        setUserState(alluser.data.data)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })
  }, [])

  let col = []
  let colStudent = []
  let colInstructores = []
  let colAdmin = []

  let colStudentNumber = 0
  let colInstructoresNumber = 0
  let colAdminNumber = 0
  for (let key in userState) {
    if (userState[key].role === 'ADMIN') {
      colAdmin[colAdminNumber] = {
        id: colAdminNumber,
        ProfilePhoto: Cimg,
        UserDetails: `${userState[key].fName} ${userState[key].lName} `,
        UserEmail: `${userState[key].email}`,
        UserMobile: `${userState[key].mobileNumber}`,
        role: `${userState[key].role}`,
        LoginAsUser: '',
        status: `${userState[key].isActive}`,
        _props: { align: 'middle' },
      }
      colAdminNumber++
    }

    if (userState[key].role === 'STUDENT') {
      colStudent[colStudentNumber] = {
        id: colStudentNumber,
        ProfilePhoto: Cimg,
        UserDetails: `${userState[key].fName} ${userState[key].lName} `,
        UserEmail: `${userState[key].email}`,
        UserMobile: `${userState[key].mobileNumber}`,
        role: `${userState[key].role}`,
        LoginAsUser: '',
        status: `${userState[key].isActive}`,
        _props: { align: 'middle' },
      }
      colStudentNumber++
    }

    if (userState[key].role === 'INSTRUCTOR') {
      colInstructores[colInstructoresNumber] = {
        id: colInstructoresNumber,
        ProfilePhoto: Cimg,
        UserDetails: `${userState[key].fName} ${userState[key].lName} `,
        UserEmail: `${userState[key].email}`,
        UserMobile: `${userState[key].mobileNumber}`,
        role: `${userState[key].role}`,
        LoginAsUser: '',
        status: `${userState[key].isActive}`,
        _props: { align: 'middle' },
      }
      colInstructoresNumber++
    }

    col[key] = {
      id: key,
      ProfilePhoto: Cimg,
      UserDetails: `${userState[key].fName} ${userState[key].lName} `,
      UserEmail: `${userState[key].email}`,
      UserMobile: `${userState[key].mobileNumber}`,
      role: `${userState[key].role}`,
      LoginAsUser: '',
      status: `${userState[key].isActive}`,
      _props: { align: 'middle' },
    }
  }

  const onClickEditPopUp = () => {
    console.log('Ankit update')
  }

  const onClickEditShowStudent = (e) => {
    let couponId = e.target.getAttribute('value-get')
    setVisibleEdit(true)
  }

  const onClickDeletLangStudent = () => {
    setVisibleDelete(true)
  }

  const onclickviewstudent = () => {
    setVisibleView(true)
  }

  const onClickEditShowInstructors = (e) => {
    let couponId = e.target.getAttribute('value-get')
    setVisibleEdit(true)
  }

  const onClickDeletLangInstructors = () => {
    setVisibleDelete(true)
  }

  const onclickviewInstructors = () => {
    setVisibleView(true)
  }

  const onClickEditShowAdmin = (e) => {
    let couponId = e.target.getAttribute('value-get')
    setVisibleEdit(true)
  }

  const onClickDeletLangAdmin = () => {
    setVisibleDelete(true)
  }

  const onclickviewAdmin = () => {
    setVisibleView(true)
  }

  const onClickDeletLang = () => {
    console.log('All sections data funcation')
  }

  const onclickEditalluser = () => {
    setVisibleEdit(true)
  }

  const onclickDeletealluser = () => {
    setVisibleDelete(true)
  }

  const onclickViewalluser = () => {
    setVisibleView(true)
  }

  const columns = [
    {
      key: 'ProfilePhoto',
      _style: { width: '15%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'UserDetails', _style: { width: '40%' } },
    { key: 'role', _style: { width: '15%' } },
    { key: 'LoginAsUser', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'status', filter: false, sorter: false, _style: { width: '20%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '10%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]

  const onClickEditLang = (e) => {
    const clickEdit = e.currentTarget.getAttribute('value-get')
  }

  const getBadge = (status) => {
    switch (status) {
      case 'true':
        return 0
      case 'false':
        return 1
      default:
        return -1
    }
  }

  switch (SwitchSetup) {
    case 'students':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              active
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Students</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add Students
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
              </div>
            </div>
            <div className="padding-20px-10px">
              <CSmartTable
                activePage={3}
                cleaner
                clickableRows
                columns={columns}
                columnSorter
                items={colStudent}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  ProfilePhoto: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.ProfilePhoto} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        {' '}
                        <span className="font-blod">Name : </span> {item.UserDetails}
                      </p>
                      <p>
                        {' '}
                        <span className="font-blod">Email : </span> {item.UserEmail}
                      </p>
                      <p>
                        {' '}
                        <span className="font-blod">Mobile : </span> {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                                alignItems: 'start',
                              }}
                            >
                              <CButton
                                value-get={item.couponDataId}
                                onClick={onClickEditShowStudent}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.couponDataId}
                                onClick={(e) => {
                                  // let CouponIdGet = e.target.getAttribute('value-get')
                                  // setCouponId(CouponIdGet)
                                  setVisibleDelete(true)
                                }}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onclickviewstudent}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
          <div>
            <div>
              {/* edit model  */}
              <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                <CModalHeader onClose={() => setVisibleEdit(false)}>
                  <CModalTitle>Edit Coupon</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.couponCode}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, couponCode: e.target.value }))
                        // }}
                        label="Coupon Code"
                        placeholder="Coupon Code"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.amount}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                        // }}
                        label="Amount"
                        placeholder="Enter Amount"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.maxUsageLimit}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, maxUsageLimit: e.target.value }))
                        // }}
                        label="Max-Usage"
                        placeholder="Enter Max Usage"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.discountType}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, discountType: e.target.value }))
                        // }}
                        label="Details"
                        placeholder="Enter Details"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                  </div>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickEditPopUp}>
                    Update
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
            <div>
              {/* delete model  */}
              <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
                <CModalHeader onClose={() => setVisibleDelete(false)}>
                  <CModalTitle>Delete</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <p>Do you really want to delete these records? This process cannot be undone.</p>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickDeletLang}>
                    Yes
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
            <div>
              {/* View model  */}
              <CModal visible={visibleView} onClose={() => setVisibleView(false)}>
                <CModalHeader onClose={() => setVisibleDelete(false)}>
                  <CModalTitle>View</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <p>This is a View Modal</p>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickDeletLang}>
                    Yes
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
          </div>
        </div>
      )
    case 'instructors':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              active
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Instructors</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add Instructors
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
              </div>
            </div>
            <div className="padding-20px-10px">
              <CSmartTable
                activePage={3}
                cleaner
                clickableRows
                columns={columns}
                columnSorter
                items={colInstructores}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  ProfilePhoto: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.ProfilePhoto} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span>
                        {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                                alignItems: 'start',
                              }}
                            >
                              <CButton
                                value-get={item.langId}
                                onClick={onClickEditShowInstructors}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLangInstructors}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onclickviewInstructors}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
          <div>
            <div>
              {/* edit model  */}
              <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                <CModalHeader onClose={() => setVisibleEdit(false)}>
                  <CModalTitle>Edit Coupon</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.couponCode}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, couponCode: e.target.value }))
                        // }}
                        label="Coupon Code"
                        placeholder="Coupon Code"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.amount}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                        // }}
                        label="Amount"
                        placeholder="Enter Amount"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.maxUsageLimit}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, maxUsageLimit: e.target.value }))
                        // }}
                        label="Max-Usage"
                        placeholder="Enter Max Usage"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.discountType}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, discountType: e.target.value }))
                        // }}
                        label="Details"
                        placeholder="Enter Details"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                  </div>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickEditPopUp}>
                    Update
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
            <div>
              {/* delete model  */}
              <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
                <CModalHeader onClose={() => setVisibleDelete(false)}>
                  <CModalTitle>Delete</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <p>Do you really want to delete these records? This process cannot be undone.</p>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickDeletLang}>
                    Yes
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
            <div>
              {/* View model  */}
              <CModal visible={visibleView} onClose={() => setVisibleView(false)}>
                <CModalHeader onClose={() => setVisibleDelete(false)}>
                  <CModalTitle>View</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <p>This is a View Modal</p>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickDeletLang}>
                    Yes
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
          </div>
        </div>
      )
    case 'admins':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              active
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Admins</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add Admin
                </CButton>
              </div>
            </div>
            <div className="padding-20px-10px">
              <CSmartTable
                activePage={3}
                cleaner
                clickableRows
                columns={columns}
                columnSorter
                items={colAdmin}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  ProfilePhoto: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.ProfilePhoto} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span> {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                                alignItems: 'start',
                              }}
                            >
                              <CButton
                                value-get={item.langId}
                                onClick={onClickEditShowAdmin}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLangAdmin}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onclickviewAdmin}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
          <div>
            <div>
              {/* edit model  */}
              <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                <CModalHeader onClose={() => setVisibleEdit(false)}>
                  <CModalTitle>Edit Coupon</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.couponCode}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, couponCode: e.target.value }))
                        // }}
                        label="Coupon Code"
                        placeholder="Coupon Code"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.amount}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                        // }}
                        label="Amount"
                        placeholder="Enter Amount"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.maxUsageLimit}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, maxUsageLimit: e.target.value }))
                        // }}
                        label="Max-Usage"
                        placeholder="Enter Max Usage"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.discountType}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, discountType: e.target.value }))
                        // }}
                        label="Details"
                        placeholder="Enter Details"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                  </div>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickEditPopUp}>
                    Update
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
            <div>
              {/* delete model  */}
              <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
                <CModalHeader onClose={() => setVisibleDelete(false)}>
                  <CModalTitle>Delete</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <p>Do you really want to delete these records? This process cannot be undone.</p>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickDeletLang}>
                    Yes
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
            <div>
              {/* View model  */}
              <CModal visible={visibleView} onClose={() => setVisibleView(false)}>
                <CModalHeader onClose={() => setVisibleDelete(false)}>
                  <CModalTitle>View</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <p>This is a View Modal</p>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickDeletLang}>
                    Yes
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
          </div>
        </div>
      )
    case 'Alluser':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              active
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Users</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add User
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
                <CButton className="margin-right" color="success" variant="outline">
                  Import
                </CButton>
              </div>
            </div>
            <div className="padding-20px-10px">
              <CSmartTable
                activePage={3}
                cleaner
                clickableRows
                columns={columns}
                columnSorter
                items={col}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  ProfilePhoto: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.ProfilePhoto} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span>
                        {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                                alignItems: 'start',
                              }}
                            >
                              <CButton
                                value-get={item.langId}
                                onClick={onclickEditalluser}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onclickDeletealluser}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onclickViewalluser}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
          <div>
            <div>
              {/* edit model  */}
              <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                <CModalHeader onClose={() => setVisibleEdit(false)}>
                  <CModalTitle>Edit Coupon</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.couponCode}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, couponCode: e.target.value }))
                        // }}
                        label="Coupon Code"
                        placeholder="Coupon Code"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.amount}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                        // }}
                        label="Amount"
                        placeholder="Enter Amount"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.maxUsageLimit}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, maxUsageLimit: e.target.value }))
                        // }}
                        label="Max-Usage"
                        placeholder="Enter Max Usage"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                    <div className="width-dec10 mt-2">
                      <CFormInput
                        type="text"
                        // value={updateCoupon.discountType}
                        // onChange={(e) => {
                        //   setUpdateCoupon((value) => ({ ...value, discountType: e.target.value }))
                        // }}
                        label="Details"
                        placeholder="Enter Details"
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </div>
                  </div>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickEditPopUp}>
                    Update
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
            <div>
              {/* delete model  */}
              <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
                <CModalHeader onClose={() => setVisibleDelete(false)}>
                  <CModalTitle>Delete</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <p>Do you really want to delete these records? This process cannot be undone.</p>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickDeletLang}>
                    Yes
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
            <div>
              {/* View model  */}
              <CModal visible={visibleView} onClose={() => setVisibleView(false)}>
                <CModalHeader onClose={() => setVisibleDelete(false)}>
                  <CModalTitle>View</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <p>This is a View Modal</p>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                    No
                  </CButton>
                  <CButton color="primary" onClick={onClickDeletLang}>
                    Yes
                  </CButton>
                </CModalFooter>
              </CModal>
            </div>
          </div>
        </div>
      )
    case 'Verify':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              active
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>Verify Users</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add User
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
                <CButton className="margin-right" color="success" variant="outline">
                  Import
                </CButton>
              </div>
            </div>
            <div className="padding-20px-10px">
              <VerifyUserComponent />
            </div>
          </div>
        </div>
      )
    case 'Blocked':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              active
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>Blocked Users</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add User
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
                <CButton className="margin-right" color="success" variant="outline">
                  Import
                </CButton>
              </div>
            </div>
            <div className="padding-20px-10px">
              <BlockUserComponent />
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton className="margin-right" active color="primary" variant="outline">
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Users</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add User
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
                <CButton className="margin-right" color="success" variant="outline">
                  Import
                </CButton>
              </div>
            </div>
            <div className="padding-20px-10px">
              <CSmartTable
                activePage={3}
                cleaner
                clickableRows
                columns={columns}
                columnSorter
                items={col}
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  ProfilePhoto: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.ProfilePhoto} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span>
                        {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                                alignItems: 'start',
                              }}
                            >
                              <CButton
                                value-get={item.langId}
                                onClick={onClickEditLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
      )
  }
}

export default AllUser
