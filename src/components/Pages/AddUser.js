import React, { useState } from 'react'
import { commonUrl } from '../../RouteDynamic'
import { cilOptions, cilPlus, cilPen, cilArrowLeft } from '@coreui/icons'
import { CFormFeedback } from '@coreui/react-pro'

import {
  CButton,
  CCol,
  CFormLabel,
  CFormCheck,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CCollapse,
  CAvatar,
  CBadge,
  CCard,
  CDropdownItem,
  CRow,
  CPopover,
  CFormTextarea,
  CFormSwitch,
} from '@coreui/react-pro'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'

function AddUser() {
  document.title = 'Eclass - Add User'
  const [data, setdata] = useState({})
  const [visibleFacebook, setVisibleFacebook] = useState(false)
  const [visibleTwitter, setVisibleTwitter] = useState(false)
  const [visibleLinkedIn, setVisibleLinkedIn] = useState(false)
  const [statusStateManage, setStatusStateManage] = useState('true')
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    // // send data to api
    axios
      .post(`${commonUrl}signup`, {
        fName: data.fname,
        lName: data.lname,
        email: data.email,
        mobileNumber: data.mobileNumber,
        role: data.role,
        address: {
          address: data.address,
          country: data.country,
          state: data.state,
          city: data.city,
          pinCode: data.pinCode,
          image: data.image,
        },
        faceBookUrl: data.faceBookUrl,
        tweeterUrl: data.tweeterUrl,
        youtubeUrl: data.youtubeUrl,
        linkedInUrl: data.linkedInUrl,
        password: data.password,
      })
      .then((respons) => {
        console.log(respons)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  console.log(data)

  return (
    <div>
      <>
        <CForm
          className=" g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CRow className="background-grey-form-border-radious-padding">
            <div className="display-flex-justify-space-between-padding">
              <p className="text-weight-1-3rem Font-bold">Personal Details :</p>
              <div>
                <CButton color="primary" type="submit" variant="outline">
                  <CIcon icon={cilArrowLeft} /> Back
                </CButton>
              </div>
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
                onChange={(e) => {
                  setdata((values) => ({ ...values, fname: e.target.value }))
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
                onChange={(e) => {
                  setdata((values) => ({ ...values, lname: e.target.value }))
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
            <CCol md={3} className="my-2">
              <CFormLabel>
                Password
                <CBadge
                  color="transprent"
                  textColor="danger"
                  className="form-badget-class"
                  shape="rounded"
                >
                  *
                </CBadge>
              </CFormLabel>
              <CFormInput
                type="password"
                text="Password Should Be Minimum 8 Characters"
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setdata((values) => ({ ...values, password: e.target.value }))
                }}
                feedbackValid="Looks good!"
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

              <div>
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
                            onChange={(e) => {
                              setdata((values) => ({ ...values, faceBookUrl: e.target.value }))
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
                              <CPopover content="Delete" placement="bottom" trigger="hover">
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
                            onChange={(e) => {
                              setdata((values) => ({ ...values, linkedInUrl: e.target.value }))
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
                              <CPopover content="Delete" placement="bottom" trigger="hover">
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
                            onChange={(e) => {
                              setdata((values) => ({ ...values, tweeterUrl: e.target.value }))
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
                              <CPopover content="Delete" placement="bottom" trigger="hover">
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
              <CButton color="primary" type="submit">
                Create
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </>
    </div>
  )
}

export default AddUser
