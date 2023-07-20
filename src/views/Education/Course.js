import React, { useState, useEffect } from 'react'
import { adminUrl } from '../../RouteDynamic'
import {
  CContainer,
  CRow,
  CCol,
  CButton,
  CFormInput,
  CCard,
  CCardImage,
  CCardBody,
  CCardLink,
  CFormSwitch,
  CPopover,
} from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'

import { cilClone, cilPen, cilTrash, cilCopy, cilScreenSmartphone, cilMenu } from '@coreui/icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

const ReactImg = 'https://miro.medium.com/v2/resize:fit:0/1*y6C4nSvy2Woe0m7bWEn4BA.png'

function Course() {
  document.title = 'Eclass - Course'
  let activeC = 0
  let pendingC = 0
  let paidC = 0
  let freeC = 0
  // set state
  const [courseData, setCourseData] = useState([])
  const [courseDataClon, setCourseDataClon] = useState([])
  const [activeCourse, setActiveCourse] = useState(0)
  const [pendingCourse, setpendingCourse] = useState(0)
  const [paidCourse, setPaidCourse] = useState(0)
  const [freeCourse, setFreeCourse] = useState(0)

  useEffect(() => {
    axios
      .get(`${adminUrl}getCourse`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((data) => {
        const mainCourseData = data.data.data
        setCourseData(mainCourseData)
        for (let item in mainCourseData) {
          if (mainCourseData[item].isActive) {
            let activeCo = (activeC += 1)
            setActiveCourse(activeCo)
          }
          if (mainCourseData[item].paid) {
            const paidCo = (paidC += 1)
            setPaidCourse(paidCo)
          }
          if (!mainCourseData[item].isActive) {
            const inActive = (pendingC += 1)
            setpendingCourse(inActive)
          }
          if (!mainCourseData[item].paid) {
            const freeCo = (freeC += 1)
            setFreeCourse(freeCo)
          }
        }
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
  }, [])

  const forDelete = (e) => {
    const courseId = e.currentTarget.getAttribute('course-id')
    axios
      .post(
        `${adminUrl}deleteCourse`,
        { _id: courseId },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log('some issue ', err)
      })
  }

  const forClonOnClick = (ev) => {
    let courseId = ev.currentTarget.getAttribute('course-id')
    console.log(courseId)
    for (let i in courseData) {
      if (courseData[i]._id === courseId) {
        delete courseData[i]._id
        delete courseData[i].__v
        delete courseData[i].createdAt
        delete courseData[i].updatedAt
        setCourseDataClon(courseData[i])
        axios
          .post(`${adminUrl}addCourse`, courseDataClon, {
            headers: { access_token: localStorage.getItem('access_token') },
          })
          .then((data) => {
            console.log('success')
          })
          .catch((err) => {
            console.log('Some issue ', err)
          })
        break
      }
    }
  }

  console.log(courseDataClon)

  return (
    <div>
      <AuthFun />
      <div>
        <CContainer style={{ backgroundColor: 'white', padding: '20px' }}>
          <CRow className="justify-content-between">
            <CCol xs={4}>
              <CRow className="g-3">
                <CCol xs>
                  <CFormInput aria-label="search" />
                </CCol>
                <CCol xs>
                  <CButton color="primary">Search</CButton>
                </CCol>
              </CRow>
            </CCol>
            <CCol xs={4}>
              <CRow className="justify-content-evenly">
                <CCol xs={6}>
                  <Link to="/education/createcourse">
                    <CButton color="primary">Add Course</CButton>
                  </Link>
                </CCol>
                <CCol xs={4}>
                  <CButton color="warning">Filter</CButton>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <div style={{ margin: '20px 0px', backgroundColor: 'white', padding: '20px 10px' }}>
        <CContainer>
          <CRow>
            <CCol>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-evenly', borderRight: '2px solid grey' }}
              >
                <div>
                  <p>{activeCourse}</p>
                  <p>Active Course</p>
                </div>
                <div>
                  <CIcon icon={cilClone} size="xxl" />
                </div>
              </div>
            </CCol>
            <CCol>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-evenly', borderRight: '2px solid grey' }}
              >
                <div>
                  <p>{pendingCourse}</p>
                  <p>Pending Course</p>
                </div>
                <div>
                  <CIcon icon={cilClone} size="xxl" />
                </div>
              </div>
            </CCol>
            <CCol>
              <div
                className="d-flex"
                style={{ justifyContent: 'space-evenly', borderRight: '2px solid grey' }}
              >
                <div>
                  <p>{freeCourse}</p>
                  <p>Free Course</p>
                </div>
                <div>
                  <CIcon icon={cilClone} size="xxl" />
                </div>
              </div>
            </CCol>
            <CCol>
              <div className="d-flex" style={{ justifyContent: 'space-evenly' }}>
                <div>
                  <p>{paidCourse}</p>
                  <p>Paid Course</p>
                </div>
                <div>
                  <CIcon icon={cilClone} size="xxl" />
                </div>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <div>
        <div>
          <CRow>
            {courseData.map((key, uniqueId) => {
              return (
                <>
                  <CCol xs={4}>
                    <CCard key={uniqueId} style={{ width: '15rem', marginTop: '15px' }}>
                      <CCardImage orientation="top" src={ReactImg} />
                      <div
                        style={{
                          position: 'absolute',
                          padding: '15px',
                          color: 'white',
                          fontSize: '1.2rem',
                        }}
                      >
                        <p>{key.title} </p>
                      </div>
                      <CCardBody>
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                          <p>Type</p>
                          <p>{key.paid ? 'Paid' : 'Free'}</p>
                        </div>
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                          <p>Featured</p>
                          {key.featured ? (
                            <CFormSwitch
                              id="formSwitchCheckChecked"
                              onChange={() => {
                                const featuredData = {
                                  _id: key._id,
                                  featured: false,
                                  DripContent: key.DripContent,
                                  certificateEnable: key.certificateEnable,
                                  appointment: key.appointment,
                                  assignment: key.assignment,
                                  duration: key.duration,
                                  previewVideo: key.previewVideo,
                                  involvementRequest: key.involvementRequest,
                                  isActive: key.isActive,
                                  paid: key.paid,
                                }
                                axios
                                  .post(`${adminUrl}updateCourse`, featuredData, {
                                    headers: { access_token: localStorage.getItem('access_token') },
                                  })
                                  .then((featData) => {
                                    console.log('send successfully ', featData)
                                  })
                                  .catch((e) => {
                                    console.log('some error', e)
                                  })
                              }}
                              defaultChecked
                            />
                          ) : (
                            <CFormSwitch
                              id="formSwitchCheckChecked"
                              onChange={() => {
                                const feData = {
                                  _id: key._id,
                                  featured: true,
                                  DripContent: key.DripContent,
                                  certificateEnable: key.certificateEnable,
                                  appointment: key.appointment,
                                  assignment: key.assignment,
                                  duration: key.duration,
                                  previewVideo: key.previewVideo,
                                  involvementRequest: key.involvementRequest,
                                  isActive: key.isActive,
                                  paid: key.paid,
                                }
                                axios
                                  .post(`${adminUrl}updateCourse`, feData, {
                                    headers: { access_token: localStorage.getItem('access_token') },
                                  })
                                  .then((feaData) => {
                                    console.log('send successfully ', feaData)
                                  })
                                  .catch((e) => {
                                    console.log('some error', e)
                                  })
                              }}
                            />
                          )}
                        </div>
                        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                          <p>Status</p>
                          {key.isActive ? (
                            <CFormSwitch
                              onChange={() => {
                                const isAData = {
                                  _id: key._id,
                                  featured: key.featured,
                                  DripContent: key.DripContent,
                                  certificateEnable: key.certificateEnable,
                                  appointment: key.appointment,
                                  assignment: key.assignment,
                                  duration: key.duration,
                                  previewVideo: key.previewVideo,
                                  involvementRequest: key.involvementRequest,
                                  isActive: false,
                                  paid: key.paid,
                                }
                                axios
                                  .post(`${adminUrl}updateCourse`, isAData, {
                                    headers: { access_token: localStorage.getItem('access_token') },
                                  })
                                  .then((feaData) => {
                                    console.log('send successfully ', feaData)
                                  })
                                  .catch((e) => {
                                    console.log('some error', e)
                                  })
                              }}
                              id="formSwitchCheckChecked"
                              defaultChecked
                            />
                          ) : (
                            <CFormSwitch
                              onChange={() => {
                                const isAcData = {
                                  _id: key._id,
                                  featured: key.featured,
                                  DripContent: key.DripContent,
                                  certificateEnable: key.certificateEnable,
                                  appointment: key.appointment,
                                  assignment: key.assignment,
                                  duration: key.duration,
                                  previewVideo: key.previewVideo,
                                  involvementRequest: key.involvementRequest,
                                  isActive: true,
                                  paid: key.paid,
                                }
                                axios
                                  .post(`${adminUrl}updateCourse`, isAcData, {
                                    headers: { access_token: localStorage.getItem('access_token') },
                                  })
                                  .then((feaData) => {
                                    console.log('send successfully ', feaData)
                                  })
                                  .catch((e) => {
                                    console.log('some error', e)
                                  })
                              }}
                              id="formSwitchCheckChecked"
                            />
                          )}
                        </div>
                      </CCardBody>
                      <hr />
                      <CCardBody>
                        <div
                          style={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                          }}
                        >
                          <CCardLink course-id={key._id}>
                            <Link to={`/education/editcourse/${key._id}`}>
                              <CPopover content="Edit" placement="bottom" trigger="hover">
                                <CIcon icon={cilPen} />
                              </CPopover>
                            </Link>
                          </CCardLink>

                          <CCardLink
                            course-id={key._id}
                            style={{ cursor: 'pointer' }}
                            onClick={forDelete}
                          >
                            <CPopover content="Delete" placement="bottom" trigger="hover">
                              <CIcon icon={cilTrash} />
                            </CPopover>
                          </CCardLink>
                          <CCardLink href="#">
                            <CPopover content="Menu" placement="bottom" trigger="hover">
                              <CIcon icon={cilMenu} />
                            </CPopover>
                          </CCardLink>
                          <CCardLink href="#">
                            <CPopover content="Certificate" placement="bottom" trigger="hover">
                              <CIcon icon={cilScreenSmartphone} />
                            </CPopover>
                          </CCardLink>
                          <CCardLink course-id={key._id} onClick={forClonOnClick}>
                            <CPopover content="Clon" placement="bottom" trigger="hover">
                              <CIcon icon={cilCopy} />
                            </CPopover>
                          </CCardLink>
                        </div>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </>
              )
            })}
          </CRow>
        </div>
      </div>
    </div>
  )
}

export default Course
