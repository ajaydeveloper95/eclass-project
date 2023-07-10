import React, { useState } from 'react'
import { commonUrl } from '../../RouteDynamic'
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
  CCardBody,
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
            <p className="text-weight-1-3rem Font-bold">Personal Details :</p>
            <CCol md={3} className="my-2">
              <CFormLabel>
                First Name
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
                type="text"
                onChange={(e) => {
                  setdata((values) => ({ ...values, fname: e.target.value }))
                }}
                feedbackValid="Looks good!"
                id="validationCustom01"
                placeholder="Enter First Name"
                required
              />
            </CCol>
            <CCol md={3} className="my-2">
              <CFormLabel>
                Last Name
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
                type="text"
                onChange={(e) => {
                  setdata((values) => ({ ...values, lname: e.target.value }))
                }}
                feedbackValid="Looks good!"
                id="validationCustom02"
                placeholder="Enter Last Name"
                required
              />
            </CCol>
            <CCol md={3} className="my-2">
              <CFormLabel htmlFor="validationCustomemail">
                E-mail
                <CBadge
                  color="transprent"
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
                  feedbackValid="Please right mail."
                  placeholder="Enter Mail-id"
                  id="validationCustomemail"
                  required
                />
              </CInputGroup>
            </CCol>
            <CCol md={3} className="my-2">
              <CFormLabel>
                Mobile Number
                <CBadge
                  color="transprent"
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
                text="Password Should Be Minimum 6 Characters"
                placeholder="Enter Your Password"
                onChange={(e) => {
                  setdata((values) => ({ ...values, password: e.target.value }))
                }}
                feedbackValid="Looks good!"
                required
              />
            </CCol>
            <CCol md={3} className="my-2">
              <CFormLabel>
                Conform Password
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
                placeholder="Enter same password again"
                feedbackValid="Looks good!"
                required
              />
            </CCol>
            <CCol xs={12} className="my-2">
              <CFormTextarea
                id="exampleFormControlTextarea1"
                label="Example textarea"
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
                aria-describedby="validationCustom06Feedback"
                feedbackInvalid="Please provide a valid city."
                id="validationCustom06"
                label="State"
                required
              />
            </CCol>
            <CCol md={3} className="my-2">
              <CFormInput
                aria-describedby="validationCustom04Feedback"
                feedbackInvalid="Please select a valid state."
                id="validationCustom04"
                onChange={(e) => {
                  setdata((values) => ({ ...values, city: e.target.value }))
                }}
                label="City"
                required
              ></CFormInput>
            </CCol>
            <CCol md={3} className="my-2">
              <CFormInput
                type="text"
                onChange={(e) => {
                  setdata((values) => ({ ...values, pinCode: e.target.value }))
                }}
                aria-describedby="validationCustom05Feedback"
                feedbackInvalid="Please provide a valid zip."
                id="validationCustom05"
                label="Pin Code"
                required
              />
            </CCol>
            <CCol xs={3} className="my-2">
              <CFormLabel>Avater Upload :</CFormLabel>
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
                <CDropdownToggle href="#" color="secondary">
                  Add Social Link
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
                <div className="width-30-percent">
                  <CCollapse visible={visibleFacebook}>
                    <CCard className="mt-3">
                      <CRow>
                        <CCol xs={9}>
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
                <div className="width-30-percent">
                  <CCollapse visible={visibleLinkedIn}>
                    <CCard className="mt-3">
                      <CRow>
                        <CCol xs={9}>
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
                <div className="width-30-percent">
                  <CCollapse visible={visibleTwitter}>
                    <CCard className="mt-3">
                      {/* <CCardBody> */}
                      <CRow>
                        <CCol xs={9}>
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
