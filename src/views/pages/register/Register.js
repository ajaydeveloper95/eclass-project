import React, { useState } from 'react'
import { commonUrl } from '../../../RouteDynamic'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'

const Register = () => {
  const [input, setInput] = useState({})
  const navigate = useNavigate()
  // console.log(input)

  const onSubmit = () => {
    axios
      .post(`${commonUrl}signup`, input)
      .then((respon) => {
        console.log(respon)
        const { data } = respon
        localStorage.setItem('access_token', data.data.accessToken)
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err)
        alert('Some Inter server error')
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        setInput((values) => ({ ...values, fName: e.target.value }))
                      }}
                      placeholder="Firstname"
                      autoComplete="Firstname"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        setInput((values) => ({ ...values, lName: e.target.value }))
                      }}
                      placeholder="Lastname"
                      autoComplete="Lastname"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        setInput((values) => ({ ...values, email: e.target.value }))
                      }}
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>91</CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        setInput((values) => ({ ...values, mobileNumber: e.target.value }))
                      }}
                      placeholder="Mobile Number"
                      autoComplete="MobileNumber"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>R</CInputGroupText>
                    <CFormInput
                      onChange={(e) => {
                        setInput((values) => ({ ...values, role: e.target.value }))
                      }}
                      placeholder="Role In Cap"
                      autoComplete="Role"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      onChange={(e) => {
                        setInput((values) => ({ ...values, password: e.target.value }))
                      }}
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton onClick={onSubmit} color="success">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
