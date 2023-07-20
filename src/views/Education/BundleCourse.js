import React, { useEffect, useState } from 'react'
import { adminUrl } from 'src/RouteDynamic'

import { cilPlus, cilOptions, cilTrash, cilPen } from '@coreui/icons'

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
  CModal,
  CMultiSelect,
  CFormTextarea,
  CFormLabel,
  CPopover,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CBadge,
  CModalFooter,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function BundleCourse() {
  document.title = 'Eclass - Bundle Course'
  const [details, setDetails] = useState([])
  const [dataHandle, setDataHandle] = useState([])
  const [courseDataArr, setCourseDataArr] = useState([])
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [bundleDeleteId, setBundleDeleteId] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [bundleCourseData, setBundleCourseData] = useState([])
  const [UpdatedBundle, setUpdatedBundle] = useState([])
  const [stateSubs, setStateSubs] = useState('true')
  const [statePaid, setStatePaid] = useState('true')
  const [stateExpireDur, setStateExpireDur] = useState('true')
  const [stateFeatured, setStateFeatured] = useState('true')
  const [stateStatus, setStateStatus] = useState('true')
  const [visiblePaid, setVisiblePaid] = useState(false)
  const [visibleDurationExpire, setVisibleDurationExpire] = useState(false)
  const [selectedSetupState, setSelectedSetupState] = useState([])

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

    let optionData = []
    // get course data
    axios
      .get(`${adminUrl}getCourse`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((data) => {
        const mainCourseData = data.data.data
        for (let item in mainCourseData) {
          optionData[item] = {
            text: mainCourseData[item].title,
            value: mainCourseData[item]._id,
          }
        }
        setCourseDataArr(optionData)
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
  }, [])

  let col = []
  for (let item in bundleCourseData) {
    col[item] = {
      id: item,
      Image: bundleCourseData[item].image,
      BundleName: bundleCourseData[item].title,
      Details: bundleCourseData[item].shortDetails,
      Status: bundleCourseData[item].isActive,
      Subscription: bundleCourseData[item].paid,
      BundleId: bundleCourseData[item]._id,
      _props: { align: 'middle' },
    }
  }

  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '10%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'BundleName', _style: { width: '30%' } },
    // { key: 'Instructor', sorter: false, _style: { width: '15%' } },
    { key: 'Details', _style: { width: '30%' } },
    // { key: 'Featured', sorter: false, _style: { width: '10%' } },
    { key: 'Status', sorter: false, _style: { width: '15%' } },
    { key: 'Subscription', sorter: false, _style: { width: '15%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
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
  console.log(UpdatedBundle)
  const ForSubscription = (Subscription) => {
    switch (Subscription) {
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
    axios
      .post(`${adminUrl}addBundle`, dataHandle, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        console.log('success')
      })
      .catch((e) => {
        console.log('error')
      })
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

  const onClickEditShowPop = (e) => {
    let bundleEditId = e.target.getAttribute('value-get')
    for (let item in bundleCourseData) {
      if (bundleEditId === bundleCourseData[item]._id) {
        setUpdatedBundle(bundleCourseData[item])
        break
      }
    }
    setVisibleEdit(true)
  }
  const onClickEditPopUp = () => {
    console.log('test')
  }
  const onClickDeletLang = () => {
    axios
      .post(
        `${adminUrl}deleteBundle`,
        { _id: bundleDeleteId },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((result) => {
        console.log('success')
      })
      .catch((e) => {
        console.log('some error', e)
      })
    setVisibleDelete(false)
  }

  const DeleteSeletedAll = () => {
    for (let item in selectedSetupState) {
      axios
        .post(
          `${adminUrl}deleteBundle`,
          { _id: selectedSetupState[item].BundleId },
          {
            headers: { access_token: localStorage.getItem('access_token') },
          },
        )
        .then((result) => {
          console.log('success')
        })
        .catch((e) => {
          console.log('some error', e)
        })
    }
  }

  return (
    <div>
      <AuthFun />
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
                    options={courseDataArr}
                    label="Select Course :"
                    text="Please select Course."
                    onChange={(e) => {
                      let courseArr = e
                      let OnlyGetId = []
                      for (let i in courseArr) {
                        OnlyGetId[i] = courseArr[i].value
                      }
                      const StringArray = OnlyGetId.toString()
                      setDataHandle((value) => ({ ...value, courseId: StringArray }))
                    }}
                  />
                </div>
                <div className="margin-down-and-top">
                  <CFormLabel>Thumbnail :</CFormLabel>
                  <div className="width-dec10 d-flex justify-content-space-evenly margin-down-and-top">
                    <CFormInput
                      className="width-dec10"
                      type="file"
                      size="sm"
                      onChange={(e) => {
                        let imgStore = e.target.files[0]
                        const imgUrlString = URL.createObjectURL(imgStore)
                        setDataHandle((value) => ({ ...value, image: imgUrlString }))
                      }}
                      id="formFileLg"
                    />
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
                        setVisiblePaid(true)
                        setDataHandle((value) => ({ ...value, paid: statePaid }))
                      } else {
                        setStatePaid('true')
                        setVisiblePaid(false)
                        setDataHandle((value) => ({ ...value, paid: statePaid }))
                      }
                    }}
                  />
                  <div className="width-dec10 margin-down-and-top">
                    <CCollapse visible={visiblePaid}>
                      <CFormInput
                        type="text"
                        id="exampleFormControlInput2"
                        label="Price :"
                        placeholder="Set Price"
                        onChange={(e) => {
                          let title = e.target.value
                          setDataHandle((value) => ({ ...value, price: title }))
                        }}
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                      <div className="margin-down-and-top">
                        <CFormInput
                          type="text"
                          id="exampleFormControlInput2"
                          label="Discount Price :"
                          placeholder="Set Discount Price"
                          onChange={(e) => {
                            let title = e.target.value
                            setDataHandle((value) => ({ ...value, discountPrice: title }))
                          }}
                          aria-describedby="exampleFormControlInputHelpInline"
                        />
                      </div>
                    </CCollapse>
                  </div>
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormSwitch
                    id="selettest"
                    label=": Expire Duration"
                    onChange={(e) => {
                      if (stateExpireDur === 'true') {
                        setStateExpireDur('false')
                        setVisibleDurationExpire(true)
                        setDataHandle((value) => ({
                          ...value,
                          duration: stateExpireDur,
                        }))
                      } else {
                        setStateExpireDur('true')
                        setVisibleDurationExpire(false)
                        setDataHandle((value) => ({
                          ...value,
                          duration: stateExpireDur,
                        }))
                      }
                    }}
                  />
                  <div className="width-dec10 margin-down-and-top">
                    <CCollapse visible={visibleDurationExpire}>
                      <CFormInput
                        type="text"
                        id="exampleFormControlInput2"
                        label="Expire Duration :"
                        placeholder="Set Duration"
                        onChange={(e) => {
                          let title = e.target.value
                          setDataHandle((value) => ({ ...value, bundleExpireDuration: title }))
                        }}
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </CCollapse>
                  </div>
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
                <CButton
                  className="mx-3"
                  onClick={DeleteSeletedAll}
                  color="warning"
                  variant="outline"
                >
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
                onSelectedItemsChange={(items) => {
                  // console.log(items)
                  if (items.length !== 0) {
                    setSelectedSetupState(items)
                  } else {
                    setSelectedSetupState([])
                  }
                }}
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={50} height={50} />
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
                  Subscription: (item) => (
                    <td>
                      {ForSubscription(item.Subscription) === 0 ? (
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
                          <CPopover
                            content={
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'start',
                                }}
                              >
                                <CButton
                                  value-get={item.BundleId}
                                  onClick={onClickEditShowPop}
                                  style={{ textDecoration: 'none', color: 'black' }}
                                  color="link"
                                >
                                  <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                                </CButton>
                                <CButton
                                  value-get={item.BundleId}
                                  onClick={(e) => {
                                    let id = e.currentTarget.getAttribute('value-get')
                                    setBundleDeleteId(id)
                                    setVisibleDelete(true)
                                  }}
                                  style={{ textDecoration: 'none', color: 'black' }}
                                  color="link"
                                >
                                  <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>
                                  Delete
                                </CButton>
                              </div>
                            }
                            placement="top"
                          >
                            <CButton color="secondary">
                              <CIcon icon={cilOptions}></CIcon>
                            </CButton>
                          </CPopover>
                        </td>
                      </td>
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
      <div>
        <div>
          {/* edit model  */}
          <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
            <CModalHeader onClose={() => setVisibleEdit(false)}>
              <CModalTitle>Edit Bundle</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div>
                <div className="width-dec10">
                  <CFormInput
                    type="text"
                    value={UpdatedBundle.title}
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
                    options={courseDataArr}
                    label="Select Course :"
                    text="Please select Course."
                    onChange={(e) => {
                      let courseArr = e
                      let OnlyGetId = []
                      for (let i in courseArr) {
                        OnlyGetId[i] = courseArr[i].value
                      }
                      const StringArray = OnlyGetId.toString()
                      setDataHandle((value) => ({ ...value, courseId: StringArray }))
                    }}
                  />
                </div>
                <div className="margin-down-and-top">
                  <CFormLabel>Thumbnail :</CFormLabel>
                  <div className="width-dec10 d-flex justify-content-space-evenly margin-down-and-top">
                    <CFormInput
                      className="width-dec10"
                      type="file"
                      size="sm"
                      onChange={(e) => {
                        let imgStore = e.target.files[0]
                        const imgUrlString = URL.createObjectURL(imgStore)
                        setDataHandle((value) => ({ ...value, image: imgUrlString }))
                      }}
                      id="formFileLg"
                    />
                  </div>
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label="Description :"
                    value={UpdatedBundle.shortDetails}
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
                    value={UpdatedBundle.details}
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
                        setVisiblePaid(true)
                        setDataHandle((value) => ({ ...value, paid: statePaid }))
                      } else {
                        setStatePaid('true')
                        setVisiblePaid(false)
                        setDataHandle((value) => ({ ...value, paid: statePaid }))
                      }
                    }}
                  />
                  <div className="width-dec10 margin-down-and-top">
                    <CCollapse visible={visiblePaid}>
                      <CFormInput
                        type="text"
                        id="exampleFormControlInput2"
                        label="Price :"
                        placeholder="Set Price"
                        onChange={(e) => {
                          let title = e.target.value
                          setDataHandle((value) => ({ ...value, price: title }))
                        }}
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                      <div className="margin-down-and-top">
                        <CFormInput
                          type="text"
                          id="exampleFormControlInput2"
                          label="Discount Price :"
                          placeholder="Set Discount Price"
                          onChange={(e) => {
                            let title = e.target.value
                            setDataHandle((value) => ({ ...value, discountPrice: title }))
                          }}
                          aria-describedby="exampleFormControlInputHelpInline"
                        />
                      </div>
                    </CCollapse>
                  </div>
                </div>
                <div className="width-dec10 margin-down-and-top">
                  <CFormSwitch
                    id="selettest"
                    label=": Expire Duration"
                    onChange={(e) => {
                      if (stateExpireDur === 'true') {
                        setStateExpireDur('false')
                        setVisibleDurationExpire(true)
                        setDataHandle((value) => ({
                          ...value,
                          duration: stateExpireDur,
                        }))
                      } else {
                        setStateExpireDur('true')
                        setVisibleDurationExpire(false)
                        setDataHandle((value) => ({
                          ...value,
                          duration: stateExpireDur,
                        }))
                      }
                    }}
                  />
                  <div className="width-dec10 margin-down-and-top">
                    <CCollapse visible={visibleDurationExpire}>
                      <CFormInput
                        type="text"
                        id="exampleFormControlInput2"
                        label="Expire Duration :"
                        placeholder="Set Duration"
                        onChange={(e) => {
                          let title = e.target.value
                          setDataHandle((value) => ({ ...value, bundleExpireDuration: title }))
                        }}
                        aria-describedby="exampleFormControlInputHelpInline"
                      />
                    </CCollapse>
                  </div>
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
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
                No
              </CButton>
              <CButton color="primary" onClick={onClickEditPopUp}>
                Update
              </CButton>
            </CModalFooter>
          </CModal>
        </div>
        <div>
          {/* delete model  */}
          <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
            <CModalHeader onClose={() => setVisibleDelete(false)}>
              <CModalTitle>Delete</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <p>Do you really want to delete these records? This process cannot be undone.</p>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
                No
              </CButton>
              <CButton color="primary" onClick={onClickDeletLang}>
                Yes
              </CButton>
            </CModalFooter>
          </CModal>
        </div>
      </div>
    </div>
  )
}

export default BundleCourse
