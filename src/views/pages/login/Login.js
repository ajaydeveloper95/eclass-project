import React, { useState } from 'react'
import { commonUrl } from '../../../RouteDynamic'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  // CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'

const Login = () => {
  const [input, setInput] = useState({})
  const navigate = useNavigate()
  const onSubmit = () => {
    axios
      .post(`${commonUrl}login`, input)
      .then((respons) => {
        console.log(respons)
        const { data } = respons
        let Token = data.data.accessToken
        console.log(Token)
        localStorage.setItem('access_token', data.data.accessToken)
        navigate('/dashboard')
      })
      .catch((err) => {
        // console.log(err)
        alert('Some Internal Server Error')
      })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <input
                        type="text"
                        onChange={(e) => {
                          setInput((values) => ({ ...values, email: e.target.value }))
                        }}
                        placeholder="Username"
                      />
                      {/* <CFormInput placeholder="Username" autoComplete="username" /> */}
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <input
                        type="password"
                        onChange={(e) => {
                          setInput((values) => ({ ...values, password: e.target.value }))
                        }}
                        placeholder="Password"
                      ></input>
                      {/* <CFormInput
                        className="logpassword"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      /> */}
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={onSubmit} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
