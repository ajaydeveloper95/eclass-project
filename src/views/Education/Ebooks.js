import React, { useState, useEffect } from 'react'
import { adminUrl } from '../../RouteDynamic'
import { CSmartTable, CCollapse, CBadge } from '@coreui/react-pro'
import { cilOptions, cilPlus, cilClearAll } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
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
import { cilClone, cilPen, cilTrash, cilCopy, cilScreenSmartphone, cilMenu } from '@coreui/icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

const ReactImg = 'https://miro.medium.com/v2/resize:fit:0/1*y6C4nSvy2Woe0m7bWEn4BA.png'
const ReactImgone =
  'https://eclass.mediacity.co.in/demo/public/images/user_img/1675157596image-handsome-happy-guy-christmas-sweater-smiling-looking-camera-celebrating-xmas-holidays-standing-red-background.jpg'

function Ebooks() {
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

  return (
    <>
      <AuthFun />
      <div className="background-white-border-radious mb-3">
        <div className="display-flex-justify-space-between-padding">
          <div className=".text-weight-1-3rem">
            <p className="text-weight-1-3rem">Ebook Adding Form</p>
          </div>
          <div>
            <CButton
              className="mx-3"
              href="/education/bundleform"
              color="success"
              variant="outline"
            >
              <CIcon icon={cilPlus} /> Create A New Role
            </CButton>
            <CButton
              className="mx-3"
              href="/education/bundleform"
              color="success"
              variant="outline"
            >
              <CIcon icon={cilPlus} /> Create A New Role
            </CButton>
          </div>
        </div>
        <hr />
        <div className="padding-20px-10px">
          <div>
            <CRow>
              {courseData.map((key, uniqueId) => {
                return (
                  <>
                    <CCol xs={4}>
                      <CCard key={uniqueId} style={{ marginBottom: '20px' }}>
                        <CCardImage orientation="top" src={ReactImg} />
                        <div
                          style={{
                            position: 'absolute',
                            padding: '15px',
                            color: 'white',
                            fontSize: '1.2rem',
                            margin: '32px 95px',
                          }}
                        >
                          <p>{key.title}</p>​<p>{key.title}</p>
                        </div>
                        <CCardBody>
                          <CCardImage
                            orientation="center"
                            src={ReactImgone}
                            className="Round-img"
                          />
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
                                      headers: {
                                        access_token: localStorage.getItem('access_token'),
                                      },
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
                                      headers: {
                                        access_token: localStorage.getItem('access_token'),
                                      },
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
                                      headers: {
                                        access_token: localStorage.getItem('access_token'),
                                      },
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
                                      headers: {
                                        access_token: localStorage.getItem('access_token'),
                                      },
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
                              <CPopover content="Edit" placement="bottom" trigger="hover">
                                <CIcon icon={cilPen} />
                              </CPopover>
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
                            <CCardLink course-id={key._id} onClick={forClonOnClick}>
                              <CPopover content="Read" placement="bottom" trigger="hover">
                                <CIcon icon={cilClearAll} />
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
    </>
  )
}

export default Ebooks
