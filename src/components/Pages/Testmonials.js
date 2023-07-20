import React, { useState } from 'react'
import { CSmartTable, CButton, CImage, CFormSwitch, CCardBody, CCollapse } from '@coreui/react-pro'
import { adminUrl } from '../../RouteDynamic'
import { cilPlus, cilTrash, cilStar } from '@coreui/icons'
import { useEffect } from 'react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import AuthFun from './AuthFunction/AuthFun'

function Testmonials() {
  document.title = 'Eclass - Testmonials'
  const [details, setDetails] = useState([])
  const [testState, settestState] = useState([])
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'
  useEffect(() => {
    axios
      .get(`${adminUrl}getTestimonial`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((testmoni) => {
        settestState(testmoni.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  let col = []

  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '30%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'ClientName', _style: { width: '30%' } },
    { key: 'Rating', sorter: false, _style: { width: '25%' } },
    { key: 'Status', sorter: false, _style: { width: '15%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]

  const usersData = [
    {
      id: 0,
      Image: Cimg,
      ClientName: 'good',
      Rating: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      ClientName: 'good',
      Rating: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      ClientName: 'good',
      Rating: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Image: Cimg,
      ClientName: 'good',
      Rating: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      Image: Cimg,
      ClientName: 'good',
      Rating: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
  ]

  for (let key in testState) {
    col[key] = {
      id: key,
      Image: `${testState[key].Image}`,
      ClientName: `${testState[key].name}`,
      Rating: `${testState[key].rating}`,
      Status: `${testState[key].isActive}`,
      Action: `${testState[key].designation}`,
      _props: { align: 'middle' },
    }
  }

  const ForStatus = (Status) => {
    switch (Status) {
      case 'true':
        return 1
      case 'false':
        return 0
      default:
        return -1
    }
  }

  const ForRating = (Rating) => {
    switch (Rating) {
      case '1':
        return 1
      case '2':
        return 1
      case '3':
        return 3
      case '4':
        return 4
      default:
        return 5
    }
  }

  console.log(col)

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  return (
    <div className="background-white-border-radious">
      <AuthFun />
      <div className="display-flex-justify-space-between-padding">
        <p className="text-weight-1-3rem">All Testimonials</p>
        <div>
          <CButton className="mx-3" href="/education/bundleform" color="success" variant="outline">
            <CIcon icon={cilPlus} /> Add Testimonials
          </CButton>
          <CButton className="mx-3" color="warning" variant="outline">
            <CIcon icon={cilTrash}></CIcon> Delete Selected
          </CButton>
        </div>
      </div>
      <hr />
      <div className="padding-20px-10px">
        <CSmartTable
          activePage={3}
          cleaner
          clickableRows
          elementCover
          columns={columns}
          columnSorter
          items={col}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
            Image: (item) => (
              <td>
                <CImage rounded thumbnail src={item.Image} width={100} height={100} />
              </td>
            ),
            Status: (item) => (
              <td>
                {ForStatus(item.Status) === 0 ? (
                  <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                ) : (
                  <CFormSwitch id="formSwitchCheckChecked" />
                )}
              </td>
            ),
            Rating: (item) => (
              <td>
                <CIcon icon={cilStar} />
              </td>
            ),
            show_details: (item) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(item.id)
                    }}
                  >
                    {details.includes(item.id) ? 'Hide' : 'Show'}
                  </CButton>
                </td>
              )
            },
            details: (item) => {
              return (
                <CCollapse visible={details.includes(item.id)}>
                  <CCardBody className="p-3">
                    <h4>{item.username}</h4>
                    <p className="text-muted">User since: {item.registered}</p>
                    <CButton size="sm" color="info">
                      User Settings
                    </CButton>
                    <CButton size="sm" color="danger" className="ml-1">
                      Delete
                    </CButton>
                  </CCardBody>
                </CCollapse>
              )
            },
          }}
          selectable
          sorterValue={{ column: 'BundleName', state: 'asc' }}
          tableFilter
          tableFilterLabel="Search :"
          tableFilterPlaceholder="Type.."
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
  )
}

export default Testmonials
