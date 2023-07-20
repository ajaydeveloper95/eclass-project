import React, { useState } from 'react'
import { CChart } from '@coreui/react-chartjs'
import { Link, useNavigate } from 'react-router-dom'
import { CCard, CCardBody, CCol, CRow, CWidgetStatsF, CTable, CButton } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilChartPie,
  cilCash,
  cilLibrary,
  cilTags,
  cibCashapp,
  cilGroup,
} from '@coreui/icons'
import axios from 'axios'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function MarketingDashboard() {
  document.title = 'Eclass - Marketing Dashboard'
  const [userPurch, setUserPurch] = useState(0)
  const [walletAmount, setWalletAmount] = useState(0)
  const [featuredCourse, setFeaturedCourse] = useState(0)
  const [activeCoupen, setActiveCoupen] = useState(0)
  const [totalRevenu, setTotalRevenu] = useState(0)
  const [adminRevenu, setAdminRevenu] = useState(0)
  const [instrurtorRevenu, setInstructorRevenu] = useState(0)
  const columns = [
    {
      key: 'class',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_1',
      label: 'Heading',
      _props: { scope: 'col' },
    },
    {
      key: 'heading_2',
      label: 'Heading',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      class: 'Larry the Bird',
      heading_2: '@twitter',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
  ]
  return (
    <div>
      <AuthFun />
      <div>
        <CRow>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              color="success"
              icon={<CIcon icon={cilGroup} height={34} />}
              title="Users Purchase"
              value={userPurch}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              color="warning"
              icon={<CIcon icon={cilCash} height={34} />}
              title="Wallet Amount"
              value={walletAmount}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              color="secondary"
              icon={<CIcon icon={cilLibrary} height={34} />}
              title="Featured Courses"
              value={featuredCourse}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              color="dark"
              icon={<CIcon icon={cilTags} height={34} />}
              title="Active Coupans"
              value={activeCoupen}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              color="info"
              icon={<CIcon icon={cibCashapp} height={34} />}
              title="Total Revenue"
              value={totalRevenu}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              color="info"
              icon={<CIcon icon={cibCashapp} height={34} />}
              title="Admin Revenue"
              value={adminRevenu}
            />
          </CCol>
          <CCol xs={3}>
            <CWidgetStatsF
              className="mb-3"
              color="info"
              icon={<CIcon icon={cibCashapp} height={34} />}
              title="Instructors Revenue"
              value={instrurtorRevenu}
            />
          </CCol>
        </CRow>
      </div>
      <div className="margin-and-setup background-color-and-padding">
        <div>
          <p>Total Revenue</p>
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
                label: 'My dataset',
                backgroundColor: 'rgba(151, 187, 205, 0.2)',
                borderColor: 'rgba(151, 187, 205, 1)',
                pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                pointBorderColor: '#fff',
                data: [50, 12, 28, 29, 7, 25, 12, 70, 60, 11, 12, 40],
              },
            ],
          }}
        />
      </div>
      <div className="margin-and-setup">
        <CRow>
          <CCol xs={5}>
            <div className="background-color-and-padding">
              <div>
                <p>Class Types</p>
              </div>
              <hr />
              <CChart
                type="doughnut"
                data={{
                  labels: ['Courses', ' Bundle Course', 'Live Meetings'],
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
          <CCol xs={7}>
            <div className="background-color-and-padding">
              <div className="side-dual-content-fit">
                <p>Most Purchased Courses</p>
                <CButton color="success" variant="outline">
                  View All
                </CButton>
              </div>
              <hr />
              <CTable columns={columns} items={items} />
            </div>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default MarketingDashboard
