import React, { useState } from 'react'
import { cilPlus, cilTrash, cilOptions } from '@coreui/icons'
import { CMultiSelect } from '@coreui/react-pro'
import {
  CSmartTable,
  CButton,
  CCardBody,
  CCollapse,
  CImage,
  CFormSwitch,
  CPopover,
  CRow,
} from '@coreui/react-pro'
import {
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'
import { CForm, CCol, CFormLabel } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilPen, cilArrowLeft } from '@coreui/icons'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'
import { CCol as Col } from '@coreui/react'
import { CInputGroup, CInputGroupText, CFormSelect } from '@coreui/react'

function AllBatches() {
  document.title = 'Eclass - All Batch'
  const [details, setDetails] = useState([])
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)

  const [slugSet, setSlugSet] = useState(' ')
  const [dataSetup, setDataSetup] = useState([])

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'
  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'BatchName', _style: { width: '30%' } },
    { key: 'Featured', sorter: false, _style: { width: '25%' } },
    { key: 'Status', sorter: false, _style: { width: '25%' } },
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
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',

      _props: { align: 'middle' },
    },
    {
      id: 4,
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
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

  const onClickEditLang = (e) => {
    let EditId = e.target.getAttribute('value-get')
    console.log(EditId)
    setVisibleEdit(true)
  }

  const onClickDeletLang = (e) => {
    let DelId = e.target.getAttribute('value-get')
    console.log(DelId)
    setVisibleDelete(true)
  }

  const onClickEditPopUp = () => {
    console.log('Working Done')
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
    <>
      <div>
        <AuthFun />
        <CRow>
          <CCol xs={4}>
            <div className="background-white-border-radious padding-20px-10px mb-4">
              <div>
                <p className="text-weight-1-3rem">Add Batch</p>
              </div>
              <hr />
              <CForm>
                <div className="width-dec10">
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput2"
                    label="Batch Name :"
                    placeholder="Please Enter Assignments Name"
                    onChange={(e) => {
                      let dataInput = e.target.value
                      setDataSetup((value) => ({ ...value, categoryName: dataInput }))
                      let smallCase = dataInput.toLocaleLowerCase().trim()
                      let removeSpace = smallCase.replaceAll(' ', '-')
                      setSlugSet(removeSpace)
                    }}
                    text="The name is how it appears on your Site"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>

                <div className="width-dec10 margin-down-and-top">
                  <CFormInput
                    type="text"
                    id="exampleFormControlInput2"
                    value={slugSet}
                    // onChange={(e) => {
                    //   let slugDataSet = e.target.value
                    //   setDataSetup((value) => ({ ...value, slug: slugDataSet }))
                    //   setSlugSet(setDataSetup.slug)
                    // }}
                    label="Slug :"
                    placeholder="Please-enter-slug"
                    text='The "slug" is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.'
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>

                <div className="margin-down-and-top">
                  <CFormLabel>Image :</CFormLabel>
                  <div className="d-flex justify-content-space-evenly margin-down-and-top">
                    <CFormInput
                      // onChange={(e) => {
                      //   let Image = e.target.files[0]
                      //   setDataSetup((value) => ({ ...value, image: URL.createObjectURL(Image) }))
                      // }}
                      className="width-dec10"
                      type="file"
                      size="fit"
                      id="formFileLg"
                    />
                  </div>
                </div>

                <div className="margin-down-and-top">
                  <CFormLabel>Select Course: *</CFormLabel>
                  <CInputGroup className="mb-3">
                    <CFormSelect id="inputGroupSelect02">
                      <option>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </CInputGroup>
                </div>

                <div>
                  <CMultiSelect
                    options={options}
                    label="Select Users: *"
                    text="Please select your User"
                  />
                </div>

                <div className="margin-down-and-top">
                  <div className="d-flex margin-down-and-top">
                    <div className="margin-right-40px">
                      <CFormLabel>Featured :</CFormLabel>
                      <CFormSwitch
                        // onChange={(e) => {
                        //   if (featuredStateManage) {
                        //     setFeaturedStateManage('false')
                        //     setDataSetup((value) => ({ ...value, isFeatured: featuredStateManage }))
                        //   }
                        //   if (featuredStateManage === 'false') {
                        //     setFeaturedStateManage('true')
                        //     setDataSetup((value) => ({ ...value, isFeatured: featuredStateManage }))
                        //   }
                        // }}
                        id="formSwitchCheckChecked"
                      />
                    </div>
                    <div>
                      <CFormLabel>Status :</CFormLabel>
                      <CFormSwitch
                        // onChange={(e) => {
                        //   // if (statusStateManage) {
                        //   //   setStatusStateManage('false')
                        //   //   setDataSetup((value) => ({ ...value, isActive: statusStateManage }))
                        //   // }
                        //   // if (statusStateManage === 'false') {
                        //   //   setStatusStateManage('true')
                        //   //   setDataSetup((value) => ({ ...value, isActive: statusStateManage }))
                        //   // }
                        // }}
                        id="formSwitchCheckChecked"
                      />
                    </div>
                  </div>
                  <div className="margin-down-and-top">
                    <CButton color="primary">Create</CButton>
                  </div>
                </div>
              </CForm>
            </div>
          </CCol>
          <Col className="background-white-border-radious">
            <div className="display-flex-justify-space-between-padding">
              <div>
                <CButton className="mx-3" color="warning" variant="outline">
                  <CIcon icon={cilTrash}></CIcon> Delete Selected
                </CButton>
              </div>
              <div>
                <CButton color="primary" type="submit" variant="outline">
                  <CIcon icon={cilArrowLeft} /> Back
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
                        <CPopover
                          content={
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'start',
                                alignItems: 'start',
                              }}
                            >
                              <CButton
                                value-get={item.langId}
                                onClick={onClickEditLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>Delete
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
                sorterValue={{ column: 'BatchName', state: 'asc' }}
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
            <div>
              <div>
                {/* edit model  */}
                <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
                  <CModalHeader onClose={() => setVisibleEdit(false)}>
                    <CModalTitle>Edit Batch</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <div>
                      <div className="width-dec10 mt-2">
                        <div className="mb-3">
                          <CFormInput
                            type="file"
                            id="formFile"
                            label="Upload Image"
                            // value={updateCoupon.amount}
                            // onChange={(e) => {
                            //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                            // }}
                          />
                        </div>
                      </div>
                      <div className="width-dec10 mt-2">
                        <CFormInput
                          type="text"
                          // value={updateCoupon.amount}
                          // onChange={(e) => {
                          //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                          // }}
                          label="Batch"
                          placeholder="Enter Batch"
                          aria-describedby="exampleFormControlInputHelpInline"
                        />
                      </div>
                      <div className="width-dec10 mt-2">
                        <h6>Featured</h6>
                        <CFormSwitch
                          id="formSwitchCheckDefault"
                          // value={updateCoupon.amount}
                          // onChange={(e) => {
                          //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                          // }}
                        />
                      </div>
                      <div className="width-dec10 mt-2">
                        <h6>Status</h6>
                        <CFormSwitch
                          id="formSwitchCheckDefault"
                          // value={updateCoupon.amount}
                          // onChange={(e) => {
                          //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                          // }}
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
                    <p>
                      Do you really want to delete these records? This process cannot be undone.
                    </p>
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
          </Col>
        </CRow>
      </div>
    </>
  )
}

export default AllBatches
