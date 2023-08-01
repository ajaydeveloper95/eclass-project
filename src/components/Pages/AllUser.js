import React, { useState, useEffect } from 'react'
import { adminUrl } from '../../RouteDynamic'
import { CSmartTable, CButton, CImage, CFormSwitch, CPopover } from '@coreui/react-pro'
import { cilLockLocked, cilOptions, cilTrash, cilPen, cilZoom, cilArrowLeft } from '@coreui/icons'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import VerifyUserComponent from 'src/views/Education/VerifyUserComponent'
import BlockUserComponent from 'src/views/Education/BlockUserComponent'

import {
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CRow,
  CCol,
  CFormLabel,
  CBadge,
  CFormTextarea,
  CInputGroup,
  CCard,
  CCollapse,
  CFormFeedback,
  CAvatar,
  CFormSelect,
  CInputGroupText,
  CDropdownItem,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function AllUser() {
  document.title = 'Eclass - All User'
  const [userState, setUserState] = useState([])
  const [getdata, setdata] = useState([])
  const [SwitchSetup, setSwitchSetup] = useState('Alluser')
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleView, setVisibleView] = useState(false)
  const [deleteIdSetup, setDeleteIdSetup] = useState('')
  const [editElement, seteditElement] = useState([])
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'
  const [visibleFacebook, setVisibleFacebook] = useState(false)
  const [visibleTwitter, setVisibleTwitter] = useState(false)
  const [visibleLinkedIn, setVisibleLinkedIn] = useState(false)
  const [statusStateManage, setStatusStateManage] = useState('true')
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    axios
      .get(`${adminUrl}getUsers`)
      .then((alluser) => {
        setUserState(alluser.data.data)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })
  }, [visibleDelete, visibleEdit])

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
        AdminId: `${userState[key]._id}`,
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
        StudentId: `${userState[key]._id}`,
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
        InstructoresId: `${userState[key]._id}`,
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
      AllUserId: `${userState[key]._id}`,
      _props: { align: 'middle' },
    }
  }

  const handleSubmitUpdate = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === true) {
      event.preventDefault()
      event.stopPropagation()
      // api call if validation is success
      let pushData = {
        _id: getdata._id,
        isActive: getdata.isActive,
        fName: getdata.fName,
        lName: getdata.lName,
        role: getdata.role,
        email: getdata.email,
        mobileNumber: getdata.mobileNumber,
        // linkedInUrl: getdata.linkedInUrl,
        // tweeterUrl: getdata.tweeterUrl,
        // faceBookUrl: getdata.faceBookUrl,
      }

      axios
        .post(`${adminUrl}updateUsers`, pushData, {
          headers: { access_token: localStorage.getItem('access_token') },
        })
        .then((result) => {
          console.log('success')
        })
        .catch((e) => {
          console.log('some issue ', e)
        })
      setVisibleEdit(false)
    } else {
      alert('Fill required Field')
    }
    setValidated(true)
  }

  const onClickEditPopUp = () => {
    console.log('Ankit update')
  }

  const onClickEditShowStudent = (e) => {
    let StudentId = e.target.getAttribute('value-get')
    for (let item in userState) {
      if (userState[item]._id === StudentId) {
        setdata(userState[item])
        break
      }
    }
    setVisibleEdit(true)
  }

  const onClickDeletLangStudent = (e) => {
    let StudentId = e.target.getAttribute('value-get')
    setDeleteIdSetup(StudentId)
    setVisibleDelete(true)
  }

  const onclickviewstudent = (e) => {
    let viewStudentId = e.target.getAttribute('value-get')
    console.log('view studnet id ', viewStudentId)
    setVisibleView(true)
  }

  const onClickEditShowInstructors = (e) => {
    let InstructoresId = e.target.getAttribute('value-get')
    for (let item in userState) {
      if (userState[item]._id === InstructoresId) {
        setdata(userState[item])
        break
      }
    }
    setVisibleEdit(true)
  }

  const onClickDeletLangInstructors = (e) => {
    let InstructoresId = e.target.getAttribute('value-get')
    setDeleteIdSetup(InstructoresId)
    setVisibleDelete(true)
  }

  const onclickviewInstructors = (e) => {
    let InstructoresId = e.target.getAttribute('value-get')
    console.log('InstructoresId view id ', InstructoresId)
    setVisibleView(true)
  }

  const onClickEditShowAdmin = (e) => {
    let AdminId = e.target.getAttribute('value-get')
    for (let item in userState) {
      if (userState[item]._id === AdminId) {
        setdata(userState[item])
        break
      }
    }
    setVisibleEdit(true)
  }

  const onClickDeletLangAdmin = (e) => {
    let AdminId = e.target.getAttribute('value-get')
    setDeleteIdSetup(AdminId)
    setVisibleDelete(true)
  }

  const onclickviewAdmin = (e) => {
    let AdminId = e.target.getAttribute('value-get')
    console.log('admin id view id ', AdminId)
    setVisibleView(true)
  }

  const onClickDeletLang = () => {
    // set delete api
    console.log(deleteIdSetup, 'id set')
    axios
      .post(
        `${adminUrl}deleteUsers`,
        { _id: deleteIdSetup },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((data) => {
        console.log('success')
        setDeleteIdSetup('')
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
    setVisibleDelete(false)
  }

  const onclickEditalluser = (e) => {
    let editAllId = e.target.getAttribute('value-get')
    for (let item in userState) {
      if (userState[item]._id === editAllId) {
        setdata(userState[item])
        break
      }
    }
    setVisibleEdit(true)
  }

  const onclickDeletealluser = (e) => {
    let deleteId = e.target.getAttribute('value-get')
    console.log(deleteId, 'delete id')
    setDeleteIdSetup(deleteId)
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
                                value-get={item.StudentId}
                                onClick={onClickEditShowStudent}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.StudentId}
                                onClick={onClickDeletLangStudent}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.StudentId}
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
              <CModal size="xl" visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                <CModalHeader onClose={() => setVisibleEdit(false)}>
                  <CModalTitle>Edit User</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div>
                    <CForm
                      className=" g-3 needs-validation"
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmitUpdate}
                    >
                      <CRow className="background-grey-form-border-radious-padding">
                        <div className="display-flex-justify-space-between-padding">
                          <p className="text-weight-1-3rem Font-bold">Personal Details :</p>
                        </div>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            First Name
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormInput
                            type="text"
                            value={getdata.fName}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, fName: e.target.value }))
                            }}
                            feedbackValid="Looks good!"
                            id="validationCustom01"
                            placeholder="Enter First Name"
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid first name.</CFormFeedback>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Last Name
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormInput
                            type="text"
                            value={getdata.lName}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, lName: e.target.value }))
                            }}
                            feedbackValid="Looks good!"
                            id="validationCustom02"
                            placeholder="Enter Last Name"
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid last name.</CFormFeedback>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel htmlFor="validationCustomemail">
                            E-mail
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CInputGroupText>@</CInputGroupText>
                            <CFormInput
                              type="email"
                              value={getdata.email}
                              onChange={(e) => {
                                setdata((values) => ({ ...values, email: e.target.value }))
                              }}
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please enter a valid email."
                              placeholder="Enter Mail-id"
                              id="validationCustomemail"
                              required
                            />
                            <CFormFeedback invalid>
                              Please enter a valid email address.
                            </CFormFeedback>
                          </CInputGroup>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Mobile Number
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CFormInput
                              type="text"
                              value={getdata.mobileNumber}
                              onChange={(e) => {
                                setdata((values) => ({ ...values, mobileNumber: e.target.value }))
                              }}
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please choose a username."
                              id="validationCustommobile"
                              placeholder="Enter Mobile No."
                              required
                            />
                            <CFormFeedback invalid>
                              Please enter a valid mobile number.
                            </CFormFeedback>
                          </CInputGroup>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Role Selection
                            <CBadge
                              color="transprent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormSelect
                            aria-label="Default select example"
                            value={getdata.role}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, role: e.target.value }))
                            }}
                            options={[
                              { label: 'ADMIN', value: 'ADMIN' },
                              { label: 'STUDENT', value: 'STUDENT' },
                              { label: 'INSTRUCTOR', value: 'INSTRUCTOR' },
                            ]}
                            required
                          />
                        </CCol>
                        <CCol xs={12} className="my-2">
                          <CFormTextarea
                            id="exampleFormControlTextarea1"
                            label="Example Textarea"
                            placeholder="Enter Details About You..."
                            rows={7}
                            text="Must be 8-20 words long."
                          ></CFormTextarea>
                        </CCol>
                      </CRow>

                      <CRow className="background-grey-form-border-radious-padding my-3">
                        <p className="text-weight-1-3rem Font-bold">Address :</p>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            // value={getdata.address}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, address: e.target.value }))
                            }}
                            aria-describedby="validationCustom040Feedback"
                            id="validationCustom040"
                            placeholder="Enter Address"
                            label="Address"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            onChange={(e) => {
                              setdata((values) => ({ ...values, country: e.target.value }))
                            }}
                            aria-describedby="validationCustom010Feedback"
                            id="validationCustom010"
                            placeholder="Enter country"
                            label="Country"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            // value={getdata.state}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, state: e.target.value }))
                            }}
                            label="State"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            feedbackInvalid="Please select a valid state."
                            onChange={(e) => {
                              setdata((values) => ({ ...values, city: e.target.value }))
                            }}
                            label="City"
                          ></CFormInput>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            onChange={(e) => {
                              setdata((values) => ({ ...values, pinCode: e.target.value }))
                            }}
                            id="validationCustom05"
                            label="Pin Code"
                          />
                        </CCol>
                        <CCol xs={3} className="my-2">
                          <CFormLabel>Avatar Upload :</CFormLabel>
                          <CInputGroup className="mb-3">
                            <CFormInput
                              type="file"
                              onChange={(e) => {
                                setdata((values) => ({ ...values, image: e.target.value }))
                              }}
                              id="inputGroupFile02"
                            />
                          </CInputGroup>
                        </CCol>
                      </CRow>

                      <CRow className="background-grey-form-border-radious-padding my-3">
                        <p className="text-weight-1-3rem Font-bold">Social Profile Link:</p>
                        <CCol md={12} className="my-2">
                          <CDropdown>
                            <CDropdownToggle href="#" color="primary">
                              +
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem
                                onClick={(e) => {
                                  e.preventDefault()
                                  setVisibleFacebook(!visibleFacebook)
                                }}
                              >
                                Facebook URL
                              </CDropdownItem>
                              <CDropdownItem
                                onClick={(e) => {
                                  e.preventDefault()
                                  setVisibleTwitter(!visibleTwitter)
                                }}
                              >
                                Twitter URL
                              </CDropdownItem>
                              <CDropdownItem
                                onClick={(e) => {
                                  // e.preventDefault()
                                  setVisibleLinkedIn(!visibleLinkedIn)
                                }}
                              >
                                LinkedIn URL
                              </CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>

                          <div className="social-profile-link-css">
                            <div className="width-40-percent">
                              <CCollapse visible={visibleFacebook}>
                                <CCard className="mt-3 background-color-transprent">
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.faceBookUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            faceBookUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter FaceBook URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleFacebook(!visibleFacebook)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                </CCard>
                              </CCollapse>
                            </div>
                            <div className="width-40-percent">
                              <CCollapse visible={visibleLinkedIn}>
                                <CCard className="mt-3 background-color-transprent">
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://freelogopng.com/images/all_img/1656994883linkedin-logo-transparent.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.linkedInUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            linkedInUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter LinkedIn URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleLinkedIn(!visibleLinkedIn)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                </CCard>
                              </CCollapse>
                            </div>
                            <div className="width-40-percent">
                              <CCollapse visible={visibleTwitter}>
                                <CCard className="mt-3 background-color-transprent">
                                  {/* <CCardBody> */}
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.tweeterUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            tweeterUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter Twitter URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleTwitter(!visibleTwitter)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                  {/* </CCardBody> */}
                                </CCard>
                              </CCollapse>
                            </div>
                          </div>
                        </CCol>
                      </CRow>
                      <CRow className="my-3">
                        <CCol>
                          <CFormLabel>Status :</CFormLabel>
                          <CFormSwitch
                            onChange={(e) => {
                              if (statusStateManage) {
                                setStatusStateManage('false')
                                setdata((values) => ({ ...values, isActive: statusStateManage }))
                              }
                              if (statusStateManage === 'false') {
                                setStatusStateManage('true')
                                setdata((values) => ({ ...values, isActive: statusStateManage }))
                              }
                            }}
                            id="formSwitchCheckChecked"
                          />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={12} className="my-2">
                          <hr />
                          <CButton color="primary" type="submit">
                            Update
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </div>
                </CModalBody>
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
                  <div>
                    <div className="text-align-center">
                      <CImage
                        rounded
                        thumbnail
                        src="https://eclass.mediacity.co.in/demo/public/images/user_img/1675157596image-handsome-happy-guy-christmas-sweater-smiling-looking-camera-celebrating-xmas-holidays-standing-red-background.jpg"
                        width={100}
                        height={100}
                      />
                      <h4>AdminMediaCity</h4>
                    </div>
                    <div className="d-flex j justify-content-space-evenly">
                      <CButton color="info" variant="ghost">
                        Admin@mediacity.co.in
                      </CButton>
                      <CButton color="success" variant="ghost">
                        +87343242356
                      </CButton>
                    </div>
                    <div>
                      <div className="text-align-center">
                        <p>Addresh : Enter addresh</p>
                        <p>Role : Admin</p>
                      </div>
                    </div>
                  </div>
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
                                value-get={item.InstructoresId}
                                onClick={onClickEditShowInstructors}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.InstructoresId}
                                onClick={onClickDeletLangInstructors}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.InstructoresId}
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
              <CModal size="xl" visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                <CModalHeader onClose={() => setVisibleEdit(false)}>
                  <CModalTitle>Edit User</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div>
                    <CForm
                      className=" g-3 needs-validation"
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmitUpdate}
                    >
                      <CRow className="background-grey-form-border-radious-padding">
                        <div className="display-flex-justify-space-between-padding">
                          <p className="text-weight-1-3rem Font-bold">Personal Details :</p>
                        </div>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            First Name
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormInput
                            type="text"
                            value={getdata.fName}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, fName: e.target.value }))
                            }}
                            feedbackValid="Looks good!"
                            id="validationCustom01"
                            placeholder="Enter First Name"
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid first name.</CFormFeedback>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Last Name
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormInput
                            type="text"
                            value={getdata.lName}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, lName: e.target.value }))
                            }}
                            feedbackValid="Looks good!"
                            id="validationCustom02"
                            placeholder="Enter Last Name"
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid last name.</CFormFeedback>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel htmlFor="validationCustomemail">
                            E-mail
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CInputGroupText>@</CInputGroupText>
                            <CFormInput
                              type="email"
                              value={getdata.email}
                              onChange={(e) => {
                                setdata((values) => ({ ...values, email: e.target.value }))
                              }}
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please enter a valid email."
                              placeholder="Enter Mail-id"
                              id="validationCustomemail"
                              required
                            />
                            <CFormFeedback invalid>
                              Please enter a valid email address.
                            </CFormFeedback>
                          </CInputGroup>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Mobile Number
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CFormInput
                              type="text"
                              value={getdata.mobileNumber}
                              onChange={(e) => {
                                setdata((values) => ({ ...values, mobileNumber: e.target.value }))
                              }}
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please choose a username."
                              id="validationCustommobile"
                              placeholder="Enter Mobile No."
                              required
                            />
                            <CFormFeedback invalid>
                              Please enter a valid mobile number.
                            </CFormFeedback>
                          </CInputGroup>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Role Selection
                            <CBadge
                              color="transprent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormSelect
                            aria-label="Default select example"
                            value={getdata.role}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, role: e.target.value }))
                            }}
                            options={[
                              { label: 'ADMIN', value: 'ADMIN' },
                              { label: 'STUDENT', value: 'STUDENT' },
                              { label: 'INSTRUCTOR', value: 'INSTRUCTOR' },
                            ]}
                            required
                          />
                        </CCol>
                        <CCol xs={12} className="my-2">
                          <CFormTextarea
                            id="exampleFormControlTextarea1"
                            label="Example Textarea"
                            placeholder="Enter Details About You..."
                            rows={7}
                            text="Must be 8-20 words long."
                          ></CFormTextarea>
                        </CCol>
                      </CRow>

                      <CRow className="background-grey-form-border-radious-padding my-3">
                        <p className="text-weight-1-3rem Font-bold">Address :</p>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            // value={getdata.address}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, address: e.target.value }))
                            }}
                            aria-describedby="validationCustom040Feedback"
                            id="validationCustom040"
                            placeholder="Enter Address"
                            label="Address"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            onChange={(e) => {
                              setdata((values) => ({ ...values, country: e.target.value }))
                            }}
                            aria-describedby="validationCustom010Feedback"
                            id="validationCustom010"
                            placeholder="Enter country"
                            label="Country"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            // value={getdata.state}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, state: e.target.value }))
                            }}
                            label="State"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            feedbackInvalid="Please select a valid state."
                            onChange={(e) => {
                              setdata((values) => ({ ...values, city: e.target.value }))
                            }}
                            label="City"
                          ></CFormInput>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            onChange={(e) => {
                              setdata((values) => ({ ...values, pinCode: e.target.value }))
                            }}
                            id="validationCustom05"
                            label="Pin Code"
                          />
                        </CCol>
                        <CCol xs={3} className="my-2">
                          <CFormLabel>Avatar Upload :</CFormLabel>
                          <CInputGroup className="mb-3">
                            <CFormInput
                              type="file"
                              onChange={(e) => {
                                setdata((values) => ({ ...values, image: e.target.value }))
                              }}
                              id="inputGroupFile02"
                            />
                          </CInputGroup>
                        </CCol>
                      </CRow>

                      <CRow className="background-grey-form-border-radious-padding my-3">
                        <p className="text-weight-1-3rem Font-bold">Social Profile Link:</p>
                        <CCol md={12} className="my-2">
                          <CDropdown>
                            <CDropdownToggle href="#" color="primary">
                              +
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem
                                onClick={(e) => {
                                  e.preventDefault()
                                  setVisibleFacebook(!visibleFacebook)
                                }}
                              >
                                Facebook URL
                              </CDropdownItem>
                              <CDropdownItem
                                onClick={(e) => {
                                  e.preventDefault()
                                  setVisibleTwitter(!visibleTwitter)
                                }}
                              >
                                Twitter URL
                              </CDropdownItem>
                              <CDropdownItem
                                onClick={(e) => {
                                  // e.preventDefault()
                                  setVisibleLinkedIn(!visibleLinkedIn)
                                }}
                              >
                                LinkedIn URL
                              </CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>

                          <div className="social-profile-link-css">
                            <div className="width-40-percent">
                              <CCollapse visible={visibleFacebook}>
                                <CCard className="mt-3 background-color-transprent">
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.faceBookUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            faceBookUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter FaceBook URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleFacebook(!visibleFacebook)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                </CCard>
                              </CCollapse>
                            </div>
                            <div className="width-40-percent">
                              <CCollapse visible={visibleLinkedIn}>
                                <CCard className="mt-3 background-color-transprent">
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://freelogopng.com/images/all_img/1656994883linkedin-logo-transparent.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.linkedInUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            linkedInUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter LinkedIn URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleLinkedIn(!visibleLinkedIn)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                </CCard>
                              </CCollapse>
                            </div>
                            <div className="width-40-percent">
                              <CCollapse visible={visibleTwitter}>
                                <CCard className="mt-3 background-color-transprent">
                                  {/* <CCardBody> */}
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.tweeterUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            tweeterUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter Twitter URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleTwitter(!visibleTwitter)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                  {/* </CCardBody> */}
                                </CCard>
                              </CCollapse>
                            </div>
                          </div>
                        </CCol>
                      </CRow>
                      <CRow className="my-3">
                        <CCol>
                          <CFormLabel>Status :</CFormLabel>
                          <CFormSwitch
                            onChange={(e) => {
                              if (statusStateManage) {
                                setStatusStateManage('false')
                                setdata((values) => ({ ...values, isActive: statusStateManage }))
                              }
                              if (statusStateManage === 'false') {
                                setStatusStateManage('true')
                                setdata((values) => ({ ...values, isActive: statusStateManage }))
                              }
                            }}
                            id="formSwitchCheckChecked"
                          />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={12} className="my-2">
                          <hr />
                          <CButton color="primary" type="submit">
                            Update
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </div>
                </CModalBody>
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
                  <div>
                    <div className="text-align-center">
                      <CImage
                        rounded
                        thumbnail
                        src="https://eclass.mediacity.co.in/demo/public/images/user_img/1675157596image-handsome-happy-guy-christmas-sweater-smiling-looking-camera-celebrating-xmas-holidays-standing-red-background.jpg"
                        width={100}
                        height={100}
                      />
                      <h4>AdminMediaCity</h4>
                    </div>
                    <div className="d-flex j justify-content-space-evenly">
                      <CButton color="info" variant="ghost">
                        Admin@mediacity.co.in
                      </CButton>
                      <CButton color="success" variant="ghost">
                        +87343242356
                      </CButton>
                    </div>
                    <div>
                      <div className="text-align-center">
                        <p>Addresh : Enter addresh</p>
                        <p>Role : Admin</p>
                      </div>
                    </div>
                  </div>
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
                                value-get={item.AdminId}
                                onClick={onClickEditShowAdmin}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.AdminId}
                                onClick={onClickDeletLangAdmin}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.AdminId}
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
              <CModal size="xl" visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                <CModalHeader onClose={() => setVisibleEdit(false)}>
                  <CModalTitle>Edit User</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div>
                    <CForm
                      className=" g-3 needs-validation"
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmitUpdate}
                    >
                      <CRow className="background-grey-form-border-radious-padding">
                        <div className="display-flex-justify-space-between-padding">
                          <p className="text-weight-1-3rem Font-bold">Personal Details :</p>
                        </div>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            First Name
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormInput
                            type="text"
                            value={getdata.fName}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, fName: e.target.value }))
                            }}
                            feedbackValid="Looks good!"
                            id="validationCustom01"
                            placeholder="Enter First Name"
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid first name.</CFormFeedback>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Last Name
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormInput
                            type="text"
                            value={getdata.lName}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, lName: e.target.value }))
                            }}
                            feedbackValid="Looks good!"
                            id="validationCustom02"
                            placeholder="Enter Last Name"
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid last name.</CFormFeedback>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel htmlFor="validationCustomemail">
                            E-mail
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CInputGroupText>@</CInputGroupText>
                            <CFormInput
                              type="email"
                              value={getdata.email}
                              onChange={(e) => {
                                setdata((values) => ({ ...values, email: e.target.value }))
                              }}
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please enter a valid email."
                              placeholder="Enter Mail-id"
                              id="validationCustomemail"
                              required
                            />
                            <CFormFeedback invalid>
                              Please enter a valid email address.
                            </CFormFeedback>
                          </CInputGroup>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Mobile Number
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CFormInput
                              type="text"
                              value={getdata.mobileNumber}
                              onChange={(e) => {
                                setdata((values) => ({ ...values, mobileNumber: e.target.value }))
                              }}
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please choose a username."
                              id="validationCustommobile"
                              placeholder="Enter Mobile No."
                              required
                            />
                            <CFormFeedback invalid>
                              Please enter a valid mobile number.
                            </CFormFeedback>
                          </CInputGroup>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Role Selection
                            <CBadge
                              color="transprent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormSelect
                            aria-label="Default select example"
                            value={getdata.role}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, role: e.target.value }))
                            }}
                            options={[
                              { label: 'ADMIN', value: 'ADMIN' },
                              { label: 'STUDENT', value: 'STUDENT' },
                              { label: 'INSTRUCTOR', value: 'INSTRUCTOR' },
                            ]}
                            required
                          />
                        </CCol>
                        <CCol xs={12} className="my-2">
                          <CFormTextarea
                            id="exampleFormControlTextarea1"
                            label="Example Textarea"
                            placeholder="Enter Details About You..."
                            rows={7}
                            text="Must be 8-20 words long."
                          ></CFormTextarea>
                        </CCol>
                      </CRow>

                      <CRow className="background-grey-form-border-radious-padding my-3">
                        <p className="text-weight-1-3rem Font-bold">Address :</p>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            // value={getdata.address}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, address: e.target.value }))
                            }}
                            aria-describedby="validationCustom040Feedback"
                            id="validationCustom040"
                            placeholder="Enter Address"
                            label="Address"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            onChange={(e) => {
                              setdata((values) => ({ ...values, country: e.target.value }))
                            }}
                            aria-describedby="validationCustom010Feedback"
                            id="validationCustom010"
                            placeholder="Enter country"
                            label="Country"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            // value={getdata.state}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, state: e.target.value }))
                            }}
                            label="State"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            feedbackInvalid="Please select a valid state."
                            onChange={(e) => {
                              setdata((values) => ({ ...values, city: e.target.value }))
                            }}
                            label="City"
                          ></CFormInput>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            onChange={(e) => {
                              setdata((values) => ({ ...values, pinCode: e.target.value }))
                            }}
                            id="validationCustom05"
                            label="Pin Code"
                          />
                        </CCol>
                        <CCol xs={3} className="my-2">
                          <CFormLabel>Avatar Upload :</CFormLabel>
                          <CInputGroup className="mb-3">
                            <CFormInput
                              type="file"
                              onChange={(e) => {
                                setdata((values) => ({ ...values, image: e.target.value }))
                              }}
                              id="inputGroupFile02"
                            />
                          </CInputGroup>
                        </CCol>
                      </CRow>

                      <CRow className="background-grey-form-border-radious-padding my-3">
                        <p className="text-weight-1-3rem Font-bold">Social Profile Link:</p>
                        <CCol md={12} className="my-2">
                          <CDropdown>
                            <CDropdownToggle href="#" color="primary">
                              +
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem
                                onClick={(e) => {
                                  e.preventDefault()
                                  setVisibleFacebook(!visibleFacebook)
                                }}
                              >
                                Facebook URL
                              </CDropdownItem>
                              <CDropdownItem
                                onClick={(e) => {
                                  e.preventDefault()
                                  setVisibleTwitter(!visibleTwitter)
                                }}
                              >
                                Twitter URL
                              </CDropdownItem>
                              <CDropdownItem
                                onClick={(e) => {
                                  // e.preventDefault()
                                  setVisibleLinkedIn(!visibleLinkedIn)
                                }}
                              >
                                LinkedIn URL
                              </CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>

                          <div className="social-profile-link-css">
                            <div className="width-40-percent">
                              <CCollapse visible={visibleFacebook}>
                                <CCard className="mt-3 background-color-transprent">
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.faceBookUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            faceBookUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter FaceBook URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleFacebook(!visibleFacebook)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                </CCard>
                              </CCollapse>
                            </div>
                            <div className="width-40-percent">
                              <CCollapse visible={visibleLinkedIn}>
                                <CCard className="mt-3 background-color-transprent">
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://freelogopng.com/images/all_img/1656994883linkedin-logo-transparent.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.linkedInUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            linkedInUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter LinkedIn URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleLinkedIn(!visibleLinkedIn)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                </CCard>
                              </CCollapse>
                            </div>
                            <div className="width-40-percent">
                              <CCollapse visible={visibleTwitter}>
                                <CCard className="mt-3 background-color-transprent">
                                  {/* <CCardBody> */}
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.tweeterUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            tweeterUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter Twitter URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleTwitter(!visibleTwitter)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                  {/* </CCardBody> */}
                                </CCard>
                              </CCollapse>
                            </div>
                          </div>
                        </CCol>
                      </CRow>
                      <CRow className="my-3">
                        <CCol>
                          <CFormLabel>Status :</CFormLabel>
                          <CFormSwitch
                            onChange={(e) => {
                              if (statusStateManage) {
                                setStatusStateManage('false')
                                setdata((values) => ({ ...values, isActive: statusStateManage }))
                              }
                              if (statusStateManage === 'false') {
                                setStatusStateManage('true')
                                setdata((values) => ({ ...values, isActive: statusStateManage }))
                              }
                            }}
                            id="formSwitchCheckChecked"
                          />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={12} className="my-2">
                          <hr />
                          <CButton color="primary" type="submit">
                            Update
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </div>
                </CModalBody>
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
                  <div>
                    <div className="text-align-center">
                      <CImage
                        rounded
                        thumbnail
                        src="https://eclass.mediacity.co.in/demo/public/images/user_img/1675157596image-handsome-happy-guy-christmas-sweater-smiling-looking-camera-celebrating-xmas-holidays-standing-red-background.jpg"
                        width={100}
                        height={100}
                      />
                      <h4>AdminMediaCity</h4>
                    </div>
                    <div className="d-flex j justify-content-space-evenly">
                      <CButton color="info" variant="ghost">
                        Admin@mediacity.co.in
                      </CButton>
                      <CButton color="success" variant="ghost">
                        +87343242356
                      </CButton>
                    </div>
                    <div>
                      <div className="text-align-center">
                        <p>Addresh : Enter addresh</p>
                        <p>Role : Admin</p>
                      </div>
                    </div>
                  </div>
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
                                value-get={item.AllUserId}
                                onClick={onclickEditalluser}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.AllUserId}
                                onClick={onclickDeletealluser}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
                              </CButton>
                              <CButton
                                value-get={item.AllUserId}
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
              <CModal size="xl" visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                <CModalHeader onClose={() => setVisibleEdit(false)}>
                  <CModalTitle>Edit User</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <div>
                    <CForm
                      className=" g-3 needs-validation"
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmitUpdate}
                    >
                      <CRow className="background-grey-form-border-radious-padding">
                        <div className="display-flex-justify-space-between-padding">
                          <p className="text-weight-1-3rem Font-bold">Personal Details :</p>
                        </div>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            First Name
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormInput
                            type="text"
                            value={getdata.fName}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, fName: e.target.value }))
                            }}
                            feedbackValid="Looks good!"
                            id="validationCustom01"
                            placeholder="Enter First Name"
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid first name.</CFormFeedback>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Last Name
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormInput
                            type="text"
                            value={getdata.lName}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, lName: e.target.value }))
                            }}
                            feedbackValid="Looks good!"
                            id="validationCustom02"
                            placeholder="Enter Last Name"
                            required
                          />
                          <CFormFeedback invalid>Please enter a valid last name.</CFormFeedback>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel htmlFor="validationCustomemail">
                            E-mail
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CInputGroupText>@</CInputGroupText>
                            <CFormInput
                              type="email"
                              value={getdata.email}
                              onChange={(e) => {
                                setdata((values) => ({ ...values, email: e.target.value }))
                              }}
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please enter a valid email."
                              placeholder="Enter Mail-id"
                              id="validationCustomemail"
                              required
                            />
                            <CFormFeedback invalid>
                              Please enter a valid email address.
                            </CFormFeedback>
                          </CInputGroup>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Mobile Number
                            <CBadge
                              color="transparent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CInputGroup className="has-validation">
                            <CFormInput
                              type="text"
                              value={getdata.mobileNumber}
                              onChange={(e) => {
                                setdata((values) => ({ ...values, mobileNumber: e.target.value }))
                              }}
                              aria-describedby="inputGroupPrependFeedback"
                              feedbackValid="Please choose a username."
                              id="validationCustommobile"
                              placeholder="Enter Mobile No."
                              required
                            />
                            <CFormFeedback invalid>
                              Please enter a valid mobile number.
                            </CFormFeedback>
                          </CInputGroup>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormLabel>
                            Role Selection
                            <CBadge
                              color="transprent"
                              textColor="danger"
                              className="form-badget-class"
                              shape="rounded"
                            >
                              *
                            </CBadge>
                          </CFormLabel>
                          <CFormSelect
                            aria-label="Default select example"
                            value={getdata.role}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, role: e.target.value }))
                            }}
                            options={[
                              { label: 'ADMIN', value: 'ADMIN' },
                              { label: 'STUDENT', value: 'STUDENT' },
                              { label: 'INSTRUCTOR', value: 'INSTRUCTOR' },
                            ]}
                            required
                          />
                        </CCol>
                        <CCol xs={12} className="my-2">
                          <CFormTextarea
                            id="exampleFormControlTextarea1"
                            label="Example Textarea"
                            placeholder="Enter Details About You..."
                            rows={7}
                            text="Must be 8-20 words long."
                          ></CFormTextarea>
                        </CCol>
                      </CRow>

                      <CRow className="background-grey-form-border-radious-padding my-3">
                        <p className="text-weight-1-3rem Font-bold">Address :</p>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            // value={getdata.address}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, address: e.target.value }))
                            }}
                            aria-describedby="validationCustom040Feedback"
                            id="validationCustom040"
                            placeholder="Enter Address"
                            label="Address"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            onChange={(e) => {
                              setdata((values) => ({ ...values, country: e.target.value }))
                            }}
                            aria-describedby="validationCustom010Feedback"
                            id="validationCustom010"
                            placeholder="Enter country"
                            label="Country"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            // value={getdata.state}
                            onChange={(e) => {
                              setdata((values) => ({ ...values, state: e.target.value }))
                            }}
                            label="State"
                          />
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            feedbackInvalid="Please select a valid state."
                            onChange={(e) => {
                              setdata((values) => ({ ...values, city: e.target.value }))
                            }}
                            label="City"
                          ></CFormInput>
                        </CCol>
                        <CCol md={3} className="my-2">
                          <CFormInput
                            type="text"
                            onChange={(e) => {
                              setdata((values) => ({ ...values, pinCode: e.target.value }))
                            }}
                            id="validationCustom05"
                            label="Pin Code"
                          />
                        </CCol>
                        <CCol xs={3} className="my-2">
                          <CFormLabel>Avatar Upload :</CFormLabel>
                          <CInputGroup className="mb-3">
                            <CFormInput
                              type="file"
                              onChange={(e) => {
                                setdata((values) => ({ ...values, image: e.target.value }))
                              }}
                              id="inputGroupFile02"
                            />
                          </CInputGroup>
                        </CCol>
                      </CRow>

                      <CRow className="background-grey-form-border-radious-padding my-3">
                        <p className="text-weight-1-3rem Font-bold">Social Profile Link:</p>
                        <CCol md={12} className="my-2">
                          <CDropdown>
                            <CDropdownToggle href="#" color="primary">
                              +
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem
                                onClick={(e) => {
                                  e.preventDefault()
                                  setVisibleFacebook(!visibleFacebook)
                                }}
                              >
                                Facebook URL
                              </CDropdownItem>
                              <CDropdownItem
                                onClick={(e) => {
                                  e.preventDefault()
                                  setVisibleTwitter(!visibleTwitter)
                                }}
                              >
                                Twitter URL
                              </CDropdownItem>
                              <CDropdownItem
                                onClick={(e) => {
                                  // e.preventDefault()
                                  setVisibleLinkedIn(!visibleLinkedIn)
                                }}
                              >
                                LinkedIn URL
                              </CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>

                          <div className="social-profile-link-css">
                            <div className="width-40-percent">
                              <CCollapse visible={visibleFacebook}>
                                <CCard className="mt-3 background-color-transprent">
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.faceBookUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            faceBookUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter FaceBook URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleFacebook(!visibleFacebook)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                </CCard>
                              </CCollapse>
                            </div>
                            <div className="width-40-percent">
                              <CCollapse visible={visibleLinkedIn}>
                                <CCard className="mt-3 background-color-transprent">
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://freelogopng.com/images/all_img/1656994883linkedin-logo-transparent.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.linkedInUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            linkedInUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter LinkedIn URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleLinkedIn(!visibleLinkedIn)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                </CCard>
                              </CCollapse>
                            </div>
                            <div className="width-40-percent">
                              <CCollapse visible={visibleTwitter}>
                                <CCard className="mt-3 background-color-transprent">
                                  {/* <CCardBody> */}
                                  <CRow>
                                    <CCol>
                                      <CAvatar src="https://www.freeiconspng.com/thumbs/logo-twitter-png/blue-logo-twitter-birds-emblem-3.png" />
                                    </CCol>
                                    <CCol xs={8}>
                                      <CFormInput
                                        type="text"
                                        value={getdata.tweeterUrl}
                                        onChange={(e) => {
                                          setdata((values) => ({
                                            ...values,
                                            tweeterUrl: e.target.value,
                                          }))
                                        }}
                                        placeholder="Enter Twitter URL"
                                        aria-label="default input example"
                                      />
                                    </CCol>
                                    <CCol>
                                      <div>
                                        <CButton
                                          onClick={(e) => {
                                            e.preventDefault()
                                            setVisibleTwitter(!visibleTwitter)
                                          }}
                                          color="info"
                                          variant="ghost"
                                        >
                                          <CPopover
                                            content="Delete"
                                            placement="bottom"
                                            trigger="hover"
                                          >
                                            <CIcon icon={cilTrash} />
                                          </CPopover>
                                        </CButton>
                                      </div>
                                    </CCol>
                                  </CRow>
                                  {/* </CCardBody> */}
                                </CCard>
                              </CCollapse>
                            </div>
                          </div>
                        </CCol>
                      </CRow>
                      <CRow className="my-3">
                        <CCol>
                          <CFormLabel>Status :</CFormLabel>
                          <CFormSwitch
                            onChange={(e) => {
                              if (statusStateManage) {
                                setStatusStateManage('false')
                                setdata((values) => ({ ...values, isActive: statusStateManage }))
                              }
                              if (statusStateManage === 'false') {
                                setStatusStateManage('true')
                                setdata((values) => ({ ...values, isActive: statusStateManage }))
                              }
                            }}
                            id="formSwitchCheckChecked"
                          />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={12} className="my-2">
                          <hr />
                          <CButton color="primary" type="submit">
                            Update
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </div>
                </CModalBody>
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
                  <div>
                    <div className="text-align-center">
                      <CImage
                        rounded
                        thumbnail
                        src="https://eclass.mediacity.co.in/demo/public/images/user_img/1675157596image-handsome-happy-guy-christmas-sweater-smiling-looking-camera-celebrating-xmas-holidays-standing-red-background.jpg"
                        width={100}
                        height={100}
                      />
                      <h4>AdminMediaCity</h4>
                    </div>
                    <div className="d-flex j justify-content-space-evenly">
                      <CButton color="info" variant="ghost">
                        Admin@mediacity.co.in
                      </CButton>
                      <CButton color="success" variant="ghost">
                        +87343242356
                      </CButton>
                    </div>
                    <div>
                      <div className="text-align-center">
                        <p>Addresh : Enter addresh</p>
                        <p>Role : Admin</p>
                      </div>
                    </div>
                  </div>
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
