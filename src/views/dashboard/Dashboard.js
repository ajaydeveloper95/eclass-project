import React, { useEffect, useState } from 'react'
import { adminUrl } from '../../RouteDynamic'
import { CChart } from '@coreui/react-chartjs'
import { Link, useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CWidgetStatsF,
  CCardImage,
  CCardText,
  CCardTitle,
  CBadge,
  CButton,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilPeople,
  cilVoiceOverRecord,
  cilChildFriendly,
  cilSpreadsheet,
  cilDisabled,
  cilStream,
  cilTouchApp,
  cilCommentBubble,
  cilCommentSquare,
  cilZoom,
  cilNotes,
  cilTag,
} from '@coreui/icons'
import axios from 'axios'

const Dashboard = () => {
  document.title = 'Eclass - Dashboard'
  const navigate = useNavigate()

  // for set state for the button next or prev
  const [userdataGet, setuserdataGet] = useState([])
  const [userBtn, setuserBtn] = useState({ name: '', email: '' })
  const [instructorBtn, setinstructorBtn] = useState({ name: '', email: '' })
  const [courseBtn, setcourseBtn] = useState({ title: '', category: '' })
  const [orderBtn, setorderBtn] = useState('')

  // Set The state of the All Varible
  const [getuser, setUser] = useState(0)
  const [instructors, setInstructors] = useState(0)
  const [courses, setCourses] = useState(0)
  const [categories, setCategories] = useState(0)
  const [jitsiMeetings, setJitsiMeetings] = useState(0)
  const [faqs, setFaqs] = useState(0)
  const [pages, setPages] = useState(0)
  const [blogs, setBlogs] = useState(0)
  const [testimonials, setTestimonials] = useState(0)
  const [coupons, setCoupons] = useState(0)
  const [orders, setOrders] = useState(0)
  const [refundOrders, setRefundOrders] = useState(0)
  const [followers, setFollowers] = useState(0)

  // onclick handle
  const recentUsersPrevBtn = () => {
    console.log(userdataGet)
    console.log(userBtn)
  }

  const recentUsersNextBtn = () => {
    console.log('recentUsersNextBtn')
  }

  const recentInstructorsPrevBtn = () => {
    console.log('recentInstructorsPrevBtn')
  }

  const recentInstructorsNextBtn = () => {
    console.log('recentUsersNextBtn')
  }
  const recentCoursesPrevBtn = () => {
    console.log('recentCoursesPrevBtn')
  }

  const recentCoursesNextBtn = () => {
    console.log('recentCoursesNextBtn')
  }
  const recentOrderPrevBtn = () => {
    console.log('recentOrderPrevBtn')
  }

  const recentOrderNextBtn = () => {
    console.log('recentOrderNextBtn')
  }

  // onCilck handle end

  // code for API
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      navigate('/login')
    }

    axios
      .get(`${adminUrl}/getUsers`)
      .then((alluser) => {
        setUser(alluser.data.data.length)
        setuserdataGet(alluser.data.data)
        let userA = alluser.data.data.length - 1
        setuserBtn((value) => ({
          ...value,
          name: alluser.data.data[userA].fName,
          email: alluser.data.data[userA].email,
        }))
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getInstructorList`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((allInstructor) => {
        setInstructors(allInstructor.data.data.length)
        let userA = allInstructor.data.data.length - 1
        setinstructorBtn((value) => ({
          ...value,
          name: allInstructor.data.data[userA].fName,
          email: allInstructor.data.data[userA].email,
        }))
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getBlog`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((allBlog) => {
        setBlogs(allBlog.data.data.length)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getCategory`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((allCata) => {
        setCategories(allCata.data.data.length)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getFaq`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((getfw) => {
        setFaqs(getfw.data.data.length)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getPages`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((pages) => {
        setPages(pages.data.data.length)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getCoupon`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((getcoup) => {
        setCoupons(getcoup.data.data.length)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getTestimonial`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((testmoni) => {
        setTestimonials(testmoni.data.data.length)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getRefundPolicy`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((refundpoli) => {
        setRefundOrders(refundpoli.data.data.length)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    axios
      .get(`${adminUrl}getCourse`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((courcesget) => {
        setCourses(courcesget.data.data.length)
        let courseA = courcesget.data.data.length - 1
        setcourseBtn((value) => ({
          ...value,
          title: courcesget.data.data[courseA].title,
          category: courcesget.data.data[courseA].shortDetail,
        }))
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })
  }, [])
  // API call end

  return (
    <>
      <div>
        <CRow>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/dashboard/user'}>
                  <CIcon icon={cilUser} height={36} />
                </Link>
              }
              title="User"
              value={getuser}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/users/Instructors'}>
                  <CIcon icon={cilVoiceOverRecord} height={36} />
                </Link>
              }
              title="Instructors"
              value={instructors}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/education/course'}>
                  <CIcon icon={cilSpreadsheet} height={36} />
                </Link>
              }
              title="Courses"
              value={courses}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/dashboard/allCategory'}>
                  <CIcon icon={cilStream} height={36} />
                </Link>
              }
              title="Categories"
              value={categories}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/user'}>
                  <CIcon icon={cilTouchApp} height={36} />
                </Link>
              }
              title="Jitsi Meetings"
              value={jitsiMeetings}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/education/reportedquestions'}>
                  <CIcon icon={cilZoom} height={36} />
                </Link>
              }
              title="Faq's"
              value={faqs}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/user'}>
                  <CIcon icon={cilNotes} height={36} />
                </Link>
              }
              title="Pages"
              value={pages}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/user'}>
                  <CIcon icon={cilCommentSquare} height={36} />
                </Link>
              }
              title="Blogs"
              value={blogs}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/dashboard/testimonials'}>
                  <CIcon icon={cilCommentBubble} height={36} />
                </Link>
              }
              title="Testimonials"
              value={testimonials}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/marketing/coupon'}>
                  <CIcon icon={cilTag} height={36} />
                </Link>
              }
              title="Coupons"
              value={coupons}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/user'}>
                  <CIcon icon={cilChildFriendly} height={36} />
                </Link>
              }
              title="Orders"
              value={orders}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/education/allrefundpolicies'}>
                  <CIcon icon={cilDisabled} height={36} />
                </Link>
              }
              title="Refund Orders"
              value={refundOrders}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              icon={
                <Link to={'/marketing/followers'}>
                  <CIcon icon={cilPeople} height={36} />
                </Link>
              }
              title="Followers"
              value={followers}
            />
          </CCol>
        </CRow>
      </div>

      {/* card section  */}
      <div
        className="d-flex"
        style={{ justifyContent: 'space-between', flexWrap: 'wrap', margin: '40px 0px' }}
      >
        <CCard style={{ width: '15rem', textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '1.5rem', margin: 'auto 0px' }}>Recent Users</p>
          <hr />
          <div
            className="d-flex"
            style={{ alignItems: 'center', justifyContent: 'space-evenly', margin: '0px 10px' }}
          >
            <div>
              <CButton onClick={recentUsersPrevBtn} color="light">
                {'<'}
              </CButton>
            </div>
            <CCardImage
              orientation="top"
              src={
                'https://cdn0.iconfinder.com/data/icons/standard-characters/101/mature_male_slicked3-1024.png'
              }
              style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}
            />
            <div>
              <div>
                <CButton onClick={recentUsersNextBtn} color="light">
                  {'>'}
                </CButton>
              </div>
            </div>
          </div>
          <CCardBody>
            <CCardTitle>{userBtn.name}</CCardTitle>
            <CCardText>{userBtn.email}</CCardText>
          </CCardBody>
        </CCard>
        <CCard style={{ width: '15rem', textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '1.5rem', margin: 'auto 0px' }}>Recent Instructors</p>
          <hr />
          <div
            className="d-flex"
            style={{ alignItems: 'center', justifyContent: 'space-evenly', margin: '0px 10px' }}
          >
            <div>
              <CButton onClick={recentInstructorsPrevBtn} color="light">
                {'<'}
              </CButton>
            </div>
            <CCardImage
              orientation="top"
              src={
                'https://cdn0.iconfinder.com/data/icons/standard-characters/101/mature_male_slicked3-1024.png'
              }
              style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}
            />
            <div>
              <CButton onClick={recentInstructorsNextBtn} color="light">
                {'>'}
              </CButton>
            </div>
          </div>
          <CCardBody>
            <CCardTitle>{instructorBtn.name}</CCardTitle>
            <CCardText>{instructorBtn.email}</CCardText>
          </CCardBody>
        </CCard>
        <CCard style={{ width: '15rem', textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '1.5rem', margin: 'auto 0px' }}>Recent Courses</p>
          <hr />
          <div
            className="d-flex"
            style={{ alignItems: 'center', justifyContent: 'space-evenly', margin: '0px 10px' }}
          >
            <div>
              <CButton onClick={recentCoursesPrevBtn} color="light">
                {'<'}
              </CButton>
            </div>
            <CCardImage
              orientation="top"
              src={
                'https://cdn0.iconfinder.com/data/icons/standard-characters/101/mature_male_slicked3-1024.png'
              }
              style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}
            />
            <div>
              <CButton onClick={recentCoursesNextBtn} color="light">
                {'>'}
              </CButton>
            </div>
          </div>
          <CCardBody>
            <CCardTitle>{courseBtn.title}</CCardTitle>
            <CCardText>{courseBtn.category}</CCardText>
          </CCardBody>
        </CCard>
        <CCard style={{ width: '15rem', textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '1.5rem', margin: 'auto 0px' }}>Recent Orders</p>
          <hr />
          <div
            className="d-flex"
            style={{ alignItems: 'center', justifyContent: 'space-evenly', margin: '0px 10px' }}
          >
            <div>
              <CButton onClick={recentOrderPrevBtn} color="light">
                {'<'}
              </CButton>
            </div>
            <CCardImage
              orientation="top"
              src={
                'https://cdn0.iconfinder.com/data/icons/standard-characters/101/mature_male_slicked3-1024.png'
              }
              style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}
            />
            <div>
              <CButton onClick={recentOrderNextBtn} color="light">
                {'>'}
              </CButton>
            </div>
          </div>
          <CCardBody>
            <CCardTitle>{orderBtn}</CCardTitle>
            <CCardText>{orderBtn}</CCardText>
          </CCardBody>
        </CCard>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '15px 10px' }}>
        <div style={{ textAlign: 'start', fontSize: '1.5rem' }}>
          <p>Monthly Registered Users in 2023</p>
        </div>
        <hr />
        <CChart
          type="bar"
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                label: 'Monthly Registered Users',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 100, 40, 10, 9, 30],
              },
            ],
          }}
          labels="months"
        />
      </div>
      <div>
        <CRow className="my-3">
          <CCol xs={8}>
            <div style={{ backgroundColor: 'white', padding: '10px 5px', borderRadius: '10px' }}>
              <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <p>Total Orders in 2023</p>
              </div>
              <hr />
              <CChart
                type="line"
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                  ],
                  datasets: [
                    {
                      label: 'Ordered',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [50, 12, 28, 29, 7, 25, 12, 70, 60, 30, 23, 12],
                    },
                  ],
                }}
              />
            </div>
          </CCol>
          <CCol xs={4}>
            <div style={{ backgroundColor: 'white', padding: '10px 5px', borderRadius: '10px' }}>
              <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <p>Users Distribution</p>
              </div>
              <hr />
              <CChart
                type="doughnut"
                data={{
                  labels: ['Admin', 'Instructor', 'User'],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
                      data: [40, 20, 80],
                    },
                  ],
                }}
              />
            </div>
          </CCol>
        </CRow>
      </div>
      <CRow>
        <CCol>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px 20px' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between', margin: '5px 10px' }}>
              <p>Recent Courses</p>
              <p>...</p>
            </div>
            <hr />
            <div className="d-flex">
              <div style={{ width: '20%', margin: '2px 5px' }}>
                <img
                  src="https://assets.entrepreneur.com/content/3x2/2000/20190326201928-GettyImages-633710081-edit.jpeg"
                  style={{ width: '80px' }}
                />
              </div>
              <div style={{ width: '63%', margin: '2px 5px' }}>
                <p>Shuffle Dance Master Clas...</p>
                <p>The step-by-step system for learning how...</p>
              </div>
              <div style={{ width: '7%', margin: '2px 5px' }}>
                <CBadge color="warning">$299</CBadge>
              </div>
            </div>
            <div className="d-flex">
              <div style={{ width: '20%', margin: '2px 5px' }}>
                <img
                  src="https://elearningindustry.com/wp-content/uploads/2019/08/online-courses-learn-how-to-keep-your-students-engaged.jpg"
                  style={{ width: '80px' }}
                />
              </div>
              <div style={{ width: '63%', margin: '2px 5px' }}>
                <p>Artificial Intelligence C...</p>
                <p>Understand Artificial Intelligence and t...</p>
              </div>
              <div style={{ width: '7%', margin: '2px 5px' }}>
                <CBadge color="warning">$199</CBadge>
              </div>
            </div>
            <div className="d-flex">
              <div style={{ width: '20%', margin: '2px 5px' }}>
                <img
                  src="https://stpaulscmcollege.org/wp-content/uploads/2021/06/how-to-be-successful-with-online-classes.jpg"
                  style={{ width: '80px' }}
                />
              </div>
              <div style={{ width: '63%', margin: '2px 5px' }}>
                <p>Shuffle Dance Master Clas...</p>
                <p>The step-by-step system for learning how...</p>
              </div>
              <div style={{ width: '7%', margin: '2px 5px' }}>
                <CBadge color="warning">$1299</CBadge>
              </div>
            </div>
            <div className="d-flex">
              <div style={{ width: '20%', margin: '2px 5px' }}>
                <img
                  src="https://f.hubspotusercontent10.net/hubfs/6448316/are-free-online-courses-worth-it.jpg"
                  style={{ width: '80px' }}
                />
              </div>
              <div style={{ width: '63%', margin: '2px 5px' }}>
                <p>Social Digital Marketing...</p>
                <p>Learn to build a business, find clients,...</p>
              </div>
              <div style={{ width: '7%', margin: '2px 5px' }}>
                <CBadge color="warning">$2909</CBadge>
              </div>
            </div>
          </div>
        </CCol>
        <CCol>
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '10px 20px' }}>
            <div className="d-flex" style={{ justifyContent: 'space-between', margin: '5px 10px' }}>
              <p>Instructors Request</p>
              <p>...</p>
            </div>
            <hr />
            <div className="d-flex">
              <div style={{ width: '20%', margin: '2px 5px' }}>
                <img
                  src="https://s35764.pcdn.co/wp-content/uploads/2021/10/What-Are-Small-Private-Online-Courses-SPOCs-Feature.jpg.optimal.jpg"
                  style={{ width: '70px' }}
                />
              </div>
              <div style={{ width: '37%', margin: '2px 5px' }}>
                <p>Olaniyan Koalde</p>
                <p>jllk</p>
              </div>
              <div style={{ width: '30%', margin: '2px 5px' }}>
                Resume : <CBadge color="primary">Download</CBadge>
              </div>
            </div>
          </div>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
