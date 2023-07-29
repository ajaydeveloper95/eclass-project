import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CSmartTable, CButton, CBadge, CPopover, CAvatar } from '@coreui/react-pro'
import { cilOptions, cilTrash, cilPen, cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CForm,
  CFormSwitch,
  CRow,
  CCol,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CCard,
  CCollapse,
  CFormFeedback,
  CFormSelect,
  CInputGroupText,
  CDropdownItem,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import { adminUrl } from 'src/RouteDynamic'

function Instructors() {
  const [instState, setinstState] = useState([])
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [deleteId, setdeleteId] = useState('')

  const [getdata, setdata] = useState([])
  const [visibleFacebook, setVisibleFacebook] = useState(false)
  const [visibleTwitter, setVisibleTwitter] = useState(false)
  const [visibleLinkedIn, setVisibleLinkedIn] = useState(false)
  const [statusStateManage, setStatusStateManage] = useState('true')
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    axios
      .get(`${adminUrl}getInstructorList`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((instruct) => {
        setinstState(instruct.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [visibleDelete, visibleEdit])

  const ImgAdd = 'https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg'
  let col = []

  for (let key in instState) {
    col[key] = {
      id: key,
      name: `${instState[key].fName} ${instState[key].lName} `,
      InstructoreEmail: `${instState[key].email}`,
      role: `${instState[key].role}`,
      status: instState[key].isActive ? 'Approved' : 'Denied',
      mobileNumber: instState[key].mobileNumber,
      Image: ImgAdd,
      elementID: instState[key]._id,
    }
  }

  const columns = [
    {
      key: 'Image',
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    {
      key: 'name',
      _style: { width: '30%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'InstructoreEmail', filter: false, sorter: false, _style: { width: '40%' } },
    { key: 'status', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]

  const getBadge = (status) => {
    switch (status) {
      case 'Approved':
        return 'success'
      case 'Denied':
        return 'danger'
      default:
        return 'primary'
    }
  }

  const onClickEditCate = (e) => {
    let EditId = e.target.getAttribute('value-get')
    for (let item in instState) {
      if (instState[item]._id === EditId) {
        setdata(instState[item])
        break
      }
    }
    setVisibleEdit(true)
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
      console.log('ajay')
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

  const onClickDeletCate = (e) => {
    let deleteId = e.target.getAttribute('value-get')
    console.log('delete id', deleteId)
    setdeleteId(deleteId)
    setVisibleDelete(true)
  }

  const Deletonpopuphandal = () => {
    console.log('delete handle id', deleteId)
    axios
      .post(
        `${adminUrl}deleteUsers`,
        { _id: deleteId },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((data) => {
        console.log('success')
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
    setVisibleDelete(false)
  }

  return (
    <>
      <AuthFun />
      <div className="background-white-border-radious padding-20px-10px mb-4">
        <div>
          <div className="d-flex justity-content-flex-end">
            <div className="positin-ablsoute-set">
              <CButton color="primary" type="submit" variant="outline">
                <CIcon icon={cilArrowLeft} /> Back
              </CButton>
            </div>
          </div>
        </div>
        <CSmartTable
          activePage={3}
          cleaner
          columns={columns}
          columnSorter
          items={col}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          scopedColumns={{
            Image: (item) => (
              <td>
                <img src={item.Image} style={{ width: '100px' }} />
              </td>
            ),
            InstructoreEmail: (item) => (
              <td>
                <p>
                  {' '}
                  <span className="font-blod">E-mail :</span> {item.InstructoreEmail}
                </p>{' '}
                <p>
                  <span className="font-blod">Mobile No:</span> {item.mobileNumber}
                </p>
              </td>
            ),
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
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
                          value-get={item.elementID}
                          onClick={onClickEditCate}
                          style={{ textDecoration: 'none', color: 'black' }}
                          color="link"
                        >
                          <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                        </CButton>
                        <CButton
                          value-get={item.elementID}
                          onClick={onClickDeletCate}
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
                          <CFormFeedback invalid>Please enter a valid email address.</CFormFeedback>
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
                          <CFormFeedback invalid>Please enter a valid mobile number.</CFormFeedback>
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
                            'Select',
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
                <CButton color="primary" onClick={Deletonpopuphandal}>
                  Yes
                </CButton>
              </CModalFooter>
            </CModal>
          </div>
        </div>
      </div>
    </>
  )
}

export default Instructors
