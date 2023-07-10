import React, { useEffect, useState } from 'react'
import { adminUrl } from 'src/RouteDynamic'

import { cilPlus, cilOptions, cilTrash } from '@coreui/icons'

import {
  CSmartTable,
  CButton,
  CCardBody,
  CCollapse,
  CImage,
  CRow,
  CCol,
  CForm,
  CFormInput,
  CFormSwitch,
  CFormSelect,
  CMultiSelect,
  CFormTextarea,
  CFormLabel,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import axios from 'axios'

function BundleCourse() {
  document.title = 'Eclass - Bundle Course'
  const [details, setDetails] = useState([])
  const [dataHandle, setDataHandle] = useState([])
  const [bundleCourseData, setBundleCourseData] = useState([])
  const [stateSubs, setStateSubs] = useState('true')
  const [statePaid, setStatePaid] = useState('true')
  const [stateExpireDur, setStateExpireDur] = useState('true')
  const [stateFeatured, setStateFeatured] = useState('true')
  const [stateStatus, setStateStatus] = useState('true')

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  // useeffect hook
  useEffect(() => {
    axios
      .get(`${adminUrl}getBundle`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        setBundleCourseData(result.data.data)
      })
      .catch((e) => {
        console.log('some error', e)
      })
  }, [])

  console.log(bundleCourseData)

  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'BundleName', _style: { width: '20%' } },
    // { key: 'Instructor', sorter: false, _style: { width: '15%' } },
    { key: 'Slug', _style: { width: '20%' } },
    // { key: 'Featured', sorter: false, _style: { width: '10%' } },
    { key: 'Status', sorter: false, _style: { width: '10%' } },
    { key: 'Subscription', sorter: false, _style: { width: '10%' } },
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
      BundleName: 'good',
      Instructor: 'Guest',
      Slug: 'Learn Microsoft Excel Beginner',
      Featured: 'true',
      Status: 'false',
      Subscription: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      BundleName: 'good',
      Instructor: 'Member',
      Slug: 'Learn Microsoft Excel Beginner',
      Featured: 'true',
      Status: 'false',
      Subscription: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      BundleName: 'good',
      Instructor: 'Staff',
      Slug: 'Learn Microsoft Excel Beginner',
      Featured: 'true',
      Status: 'false',
      Subscription: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Image: Cimg,
      BundleName: 'good',
      Instructor: 'Staff',
      Slug: 'Learn Microsoft Excel Beginner',
      Featured: 'true',
      Status: 'false',
      Subscription: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      Image: Cimg,
      BundleName: 'good',
      Instructor: 'Staff',
      Slug: 'Learn Microsoft Excel Beginner',
      Featured: 'true',
      Status: 'false',
      Subscription: 'false',
      _props: { align: 'middle' },
    },
  ]
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
  console.log(dataHandle)
  const ForFeatured = (Featured) => {
    switch (Featured) {
      case 'true':
        return 1
      case 'false':
        return 0
      default:
        return -1
    }
  }
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

  const onSubmitBundle = () => {
    console.log('good')
  }

  const options = [
    {
      value: 0,
      text: 'Angular',
    },
    {
      value: 1,
      text: 'Bootstrap',
    },
    {
      value: 2,
      text: 'React.js',
    },
    {
      value: 3,
      text: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          text: 'Django',
        },
        {
          value: 5,
          text: 'Laravel',
        },
        {
          value: 6,
          text: 'Node.js',
        },
      ],
    },
  ]
  return (
    <div>
      <CRow>
        <CCol xs={4}>
          <div className="background-white-border-radious padding-20px-10px ">
            <div>
              <p className="text-weight-1-3rem">Add New Bundle</p>
            </div>
            <hr />
            <div>
              <CForm>
                <div className="width-dec10">
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput2"
                    label="Bundle Name :"
                    placeholder="Bundle Name"
                    onChange={(e) => {
                      let title = e.target.value
                      setDataHandle((value) => ({ ...value, title: title }))
                    }}
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CMultiSelect
                    options={options}
                    label="Select Course :"
                    text="Please select Course."
                  />
                </div>
                <div className="margin-down-and-top">
                  <CFormLabel>Thumbnail :</CFormLabel>
                  <div className="d-flex justify-content-space-evenly margin-down-and-top">
                    <CFormInput className="width-dec10" type="file" size="sm" id="formFileLg" />
                  </div>
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label="Description :"
                    rows={3}
                    onChange={(e) => {
                      setDataHandle((value) => ({ ...value, shortDetails: e.target.value }))
                    }}
                    placeholder="Please Enter Detailed Description"
                  ></CFormTextarea>
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label="Detail :"
                    rows={3}
                    onChange={(e) => {
                      setDataHandle((value) => ({ ...value, details: e.target.value }))
                    }}
                    placeholder="Please Enter More Detail"
                  ></CFormTextarea>
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormSwitch
                    id="selettest"
                    label=": Subscription"
                    onChange={(e) => {
                      if (stateSubs === 'true') {
                        setStateSubs('false')
                        setDataHandle((value) => ({ ...value, subscription: stateSubs }))
                      } else {
                        setStateSubs('true')
                        setDataHandle((value) => ({ ...value, subscription: stateSubs }))
                      }
                    }}
                  />
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormSwitch
                    id="selettest"
                    label=": Paid"
                    onChange={(e) => {
                      if (statePaid === 'true') {
                        setStatePaid('false')
                        setDataHandle((value) => ({ ...value, paid: statePaid }))
                      } else {
                        setStatePaid('true')
                        setDataHandle((value) => ({ ...value, paid: statePaid }))
                      }
                    }}
                  />
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormSwitch
                    id="selettest"
                    label=": Expire Duration"
                    onChange={(e) => {
                      if (stateExpireDur === 'true') {
                        setStateExpireDur('false')
                        setDataHandle((value) => ({
                          ...value,
                          bundleExpireDuration: stateExpireDur,
                        }))
                      } else {
                        setStateExpireDur('true')
                        setDataHandle((value) => ({
                          ...value,
                          bundleExpireDuration: stateExpireDur,
                        }))
                      }
                    }}
                  />
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormSwitch
                    id="selettest"
                    label=": Featured"
                    onChange={(e) => {
                      if (stateFeatured === 'true') {
                        setStateFeatured('false')
                        setDataHandle((value) => ({
                          ...value,
                          featured: stateFeatured,
                        }))
                      } else {
                        setStateFeatured('true')
                        setDataHandle((value) => ({
                          ...value,
                          featured: stateFeatured,
                        }))
                      }
                    }}
                  />
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormSwitch
                    id="selettest"
                    label=": Status"
                    onChange={(e) => {
                      if (stateStatus === 'true') {
                        setStateStatus('false')
                        setDataHandle((value) => ({
                          ...value,
                          isActive: stateStatus,
                        }))
                      } else {
                        setStateStatus('true')
                        setDataHandle((value) => ({
                          ...value,
                          isActive: stateStatus,
                        }))
                      }
                    }}
                  />
                </div>
                <div className="width-dec10 margin-down-and-top d-flex justify-content-space-evenly">
                  <CButton color="danger" size="sm" variant="outline">
                    Reset
                  </CButton>
                  <CButton color="primary" onClick={onSubmitBundle} size="sm" variant="outline">
                    Create
                  </CButton>
                </div>
              </CForm>
            </div>
          </div>
        </CCol>
        <CCol xs={8}>
          <div className="background-white-border-radious">
            <div className="display-flex-justify-space-between-padding">
              <div>
                <p className="text-weight-1-3rem">All Bundles</p>
              </div>
              <div>
                <CButton
                  className="mx-3"
                  href="/education/bundleform"
                  color="success"
                  variant="outline"
                >
                  <CIcon icon={cilPlus} /> Add Bundle
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
                items={usersData}
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
                  Featured: (item) => (
                    <td>
                      {ForFeatured(item.Featured) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  show_details: (item) => {
                    return (
                      <td className="py-2">
                        <td>
                          <CButton
                            color="dark"
                            variant="outline"
                            onClick={() => {
                              toggleDetails(item.id)
                            }}
                          >
                            <CIcon icon={cilOptions} />
                          </CButton>
                        </td>
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
        </CCol>
      </CRow>
    </div>
  )
}

export default BundleCourse
