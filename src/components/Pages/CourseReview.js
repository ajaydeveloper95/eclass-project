import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  CCardBody,
  CCollapse,
  CButton,
  CImage,
  CFormSwitch,
  CSmartTable,
  CPopover,
  CRow,
  CCol,
  CForm,
  CFormSelect,
  CFormLabel,
} from '@coreui/react-pro'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CModalFooter,
} from '@coreui/react'
import { cilPlus, cilTrash, cilOptions, cilPen, cilArrowLeft } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import AuthFun from './AuthFunction/AuthFun'
import { adminUrl } from 'src/RouteDynamic'

function CourseReview() {
  document.title = 'Eclass - CourseReview'
  const [details, setDetails] = useState([])
  const [formData, setFormData] = useState([])
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [courseOptionData, setCourseOptionData] = useState([])
  const [instructorOptionData, setinstructorOptionData] = useState([])

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'
  const courseSelectOption = []
  const instructorSelectOption = []
  useEffect(() => {
    axios
      .get(`${adminUrl}getCourse`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((data) => {
        const mainCourseData = data.data.data
        for (let item in mainCourseData) {
          courseSelectOption[item] = {
            label: mainCourseData[item].title,
            value: mainCourseData[item]._id,
          }
        }
        setCourseOptionData(courseSelectOption)
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })

    // instructore api call
    axios
      .get(`${adminUrl}getInstructorList`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((data) => {
        const mainInstructorData = data.data.data
        console.log(mainInstructorData)
        for (let item in mainInstructorData) {
          instructorSelectOption[item] = {
            label: `${mainInstructorData[item].fName} ${mainInstructorData[item].lName}`,
            value: mainInstructorData[item]._id,
          }
        }
        setinstructorOptionData(instructorSelectOption)
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
  }, [])

  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Title', _style: { width: '35%' } },
    { key: 'Instructor', sorter: false, _style: { width: '20%' } },
    { key: 'Featured', sorter: false, _style: { width: '15%' } },
    { key: 'Status', sorter: false, _style: { width: '30%' } },
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
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Guest',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Member',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Staff',
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
    // let Reviewid = e.target.getAttribute('value-get')
    setVisibleEdit(true)
  }

  const onClickDeletLang = (e) => {
    setVisibleDelete(true)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    axios
      .post(`${adminUrl}addCourseReview`, formData, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then(() => {
        console.log('success')
      })
      .catch((err) => {
        console.log('Some Issue', err)
      })
  }
  console.log(formData)

  const onClickEditPopUp = (e) => {}
  return (
    <>
      <AuthFun />
      <CRow>
        <CCol>
          <div className="background-white-border-radious padding-10px-10px">
            <div>
              <p className="text-weight-1-3rem">Add Course Review</p>
              <hr />
            </div>
            <div>
              <CForm onSubmit={handleSubmitForm}>
                <div className="margin-down-and-top width-dec10">
                  <CFormLabel>Title: </CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="Enter Title"
                    onChange={(e) => {
                      setFormData((value) => ({ ...value, title: e.target.value }))
                    }}
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="margin-down-and-top width-dec10">
                  <CFormLabel>Select Course: </CFormLabel>
                  <CFormSelect
                    aria-label="Default select example"
                    onChange={(e) => {
                      setFormData((value) => ({ ...value, courseId: e.target.value }))
                    }}
                    options={courseOptionData}
                  />
                </div>
                <div className="mb-3 margin-down-and-top width-dec10">
                  <CFormLabel>Image: </CFormLabel>
                  <CFormInput
                    type="file"
                    onChange={(e) => {
                      let img = e.target.files[0]
                      setFormData((value) => ({ ...value, Image: URL.createObjectURL(img) }))
                    }}
                    id="formFile"
                  />
                </div>
                <div className="margin-down-and-top width-dec10">
                  <CFormLabel>Instructor: </CFormLabel>
                  <CFormSelect
                    aria-label="Default select example"
                    onChange={(e) => {
                      setFormData((value) => ({ ...value, Instructor: e.target.value }))
                    }}
                    options={instructorOptionData}
                  />
                </div>
                <div className="margin-down-and-top width-dec10">
                  <div className="d-flex gap-set-between-1rem">
                    <CFormLabel>Featured: </CFormLabel>
                    <CFormSwitch
                      id="formSwitchCheckChecked"
                      onChange={(e) => {
                        setFormData((value) => ({ ...value, Featured: 'true' }))
                      }}
                    />
                  </div>
                  <div className="d-flex gap-set-between-1rem">
                    <CFormLabel>Status: </CFormLabel>
                    <CFormSwitch
                      id="formSwitchCheckChecked"
                      onChange={(e) => {
                        setFormData((value) => ({ ...value, isActive: 'true' }))
                      }}
                    />
                  </div>
                </div>
                <div className="margin-down-and-top width-dec10">
                  <CButton type="submit" color="primary">
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
                <p className="text-weight-1-3rem">Course Review</p>
              </div>
              <div>
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
                }}
                selectable
                sorterValue={{ column: 'name', state: 'asc' }}
                tableFilter
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
              <CModalTitle>Edit Coupon</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div>
                <div className="width-dec10 mt-2">
                  <div className="mb-3">
                    <CFormInput
                      type="file"
                      id="formFile"
                      label="Image"
                      // value={updateCource.name}
                      // onChange={(e) => {
                      // setUpdateCource((value) => ({ ...value, name: e.target.value }))
                    />
                  </div>
                </div>
                <div className="width-dec10 mt-2">
                  <CFormInput
                    type="text"
                    // value={updateCource.name}
                    // onChange={(e) => {
                    //   setUpdateCource((value) => ({ ...value, name: e.target.value }))
                    // }}
                    label="Title"
                    placeholder="Enter Title"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <CFormInput
                    type="text"
                    // value={updateCource.name}
                    // onChange={(e) => {
                    //   setUpdateCource((value) => ({ ...value, name: e.target.value }))
                    // }}
                    label="Instructor"
                    placeholder="Enter Instructor"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <h6>Featured</h6>
                  <CFormSwitch label="Featured" id="formSwitchCheckDefault" />
                </div>
                <div className="width-dec10 mt-2">
                  <h6>Status</h6>
                  <CFormSwitch label="Status" id="formSwitchCheckDefault" />
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
    </>
  )
}

export default CourseReview
