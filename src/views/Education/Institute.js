import React, { useState, useEffect } from 'react'
import { adminUrl } from 'src/RouteDynamic'
import axios from 'axios'

import {
  CSmartTable,
  CButton,
  CModal,
  CModalHeader,
  CPopover,
  CImage,
  CModalTitle,
  CModalFooter,
  CModalBody,
  CRow,
  CFormTextarea,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CBadge,
  CFormLabel,
  CMultiSelect,
} from '@coreui/react-pro'
import { cilPlus, cilOptions, cilTrash, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function Institute() {
  document.title = 'Eclass - Institutes'
  const [instuteData, setInstuteData] = useState([])
  const [instuteDataRender, setInstuteDataRender] = useState([])
  const [instuteDataGet, setInstuteDataGet] = useState([])
  const [instuteIdDelete, setInstuteDeleteId] = useState('')
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '10%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'InstituteName', _style: { width: '25%' } },
    { key: 'Details', sorter: false, _style: { width: '25%' } },
    { key: 'Skills', _style: { width: '30%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]

  useEffect(() => {
    axios
      .get(`${adminUrl}getInstitute`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((data) => {
        const mainCourseData = data.data.data
        setInstuteData(mainCourseData)
        let coldata = []
        for (let item in mainCourseData) {
          coldata[item] = {
            id: item,
            InstituteName: mainCourseData[item].instituteName,
            Details: {
              Contact: mainCourseData[item].mobile,
              About: mainCourseData[item].about,
            },
            Skills: mainCourseData[item].skills,
            instuteId: mainCourseData[item]._id,
            _props: { align: 'middle' },
          }
        }
        setInstuteDataRender(coldata)
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
  }, [])
  const usersData = [
    {
      id: 0,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      Verify: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    // { id: 3, name: 'Chetan Mohamed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // {
    //   id: 4,
    //   name: 'Derick Maximinus',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // {
    //   id: 7,
    //   name: 'Avram Tarasios',
    //   registered: '2022/02/07',
    //   role: 'Staff',
    //   status: 'Banned',
    //   _props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, name: 'Quintin Ed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', role: 'Member', status: 'Pending' },
    // { id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // {
    //   id: 12,
    //   name: 'Nehemiah Tatius',
    //   registered: '2022/02/07',
    //   role: 'Staff',
    //   status: 'Banned',
    //   _selected: true,
    // },
    // { id: 13, name: 'Ebbe Gemariah', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // {
    //   id: 14,
    //   name: 'Eustorgios Amulius',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 16, name: 'Pompeius René', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    // {
    //   id: 18,
    //   name: 'Micheal Mercurius',
    //   registered: '2022/02/07',
    //   role: 'Admin',
    //   status: 'Inactive',
    // },
    // {
    //   id: 19,
    //   name: 'Ganesha Dubhghall',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 21, name: 'Vishnu Serghei', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    // { id: 23, name: 'Aulus Agmundr', registered: '2022/01/01', role: 'Member', status: 'Pending' },
    // {
    //   id: 42,
    //   name: 'Ford Prefect',
    //   registered: '2001/05/25',
    //   role: 'Alien',
    //   status: "Don't panic!",
    // },
  ]

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

  const onClickEditLang = (e) => {
    const clickEdit = e.currentTarget.getAttribute('value-get')
    setVisibleEdit(!visibleEdit)
    console.log(clickEdit)
  }

  const InstituteFormSubmit = () => {
    axios
      .post(`${adminUrl}addInstitute`, instuteDataGet, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((data) => {
        console.log('success')
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
  }

  const onClickDeletLang = (e) => {
    axios
      .post(
        `${adminUrl}deleteInstitute`,
        { _id: instuteIdDelete },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((data) => {
        console.log('success')
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
    setVisibleDelete(!visibleDelete)
  }

  console.log(instuteDataGet)

  return (
    <div className="margin-bottom-down-20px">
      <CRow>
        <CCol xs={3}>
          <div className="background-white-border-radious padding-20px-10px">
            <div>
              <p className="text-weight-1-3rem">Add Institutes</p>
            </div>
            <hr />
            <div>
              <CForm className=" g-3 needs-validation">
                <CRow>
                  <div className="my-2">
                    <CFormLabel>
                      Institute Name:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        let data = e.target.value
                        setInstuteDataGet((values) => ({ ...values, instituteName: data }))
                      }}
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      placeholder="Enter Institute Name"
                      required
                    />
                  </div>
                  <div className="my-2">
                    <CFormLabel>
                      Slug:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        setInstuteDataGet((values) => ({ ...values, slug: e.target.value }))
                      }}
                      placeholder="Enter-Slug-Here"
                      required
                    />
                  </div>
                  <div className="my-2">
                    <CFormLabel>Logo :</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        type="file"
                        onChange={(e) => {
                          let data = e.target.files[0]
                          setInstuteDataGet((values) => ({
                            ...values,
                            logo: URL.createObjectURL(data),
                          }))
                        }}
                      />
                    </CInputGroup>
                  </div>
                  <div className="my-2">
                    <CFormLabel>
                      Email:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        setInstuteDataGet((values) => ({ ...values, email: e.target.value }))
                      }}
                      placeholder="Enter Email."
                      required
                    />
                  </div>
                  <div className="my-2">
                    <CFormLabel>
                      Mobile:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        setInstuteDataGet((values) => ({ ...values, mobile: e.target.value }))
                      }}
                      placeholder="Enter Mobile Number"
                      required
                    />
                  </div>
                  <div className="my-2">
                    <CFormLabel>Address:</CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        setInstuteDataGet((values) => ({ ...values, address: e.target.value }))
                      }}
                      placeholder="Enter Address"
                      required
                    />
                  </div>
                  <div className="my-2">
                    <CFormLabel>Affiliated By:</CFormLabel>
                    <CMultiSelect
                      options={options}
                      onChange={(e) => {
                        let obj = Object.assign({}, e)
                        let uploadStingAff = JSON.stringify(obj)
                        setInstuteDataGet((values) => ({ ...values, affilatedBy: uploadStingAff }))
                      }}
                    />
                  </div>
                  <div className="my-2">
                    <CFormLabel>
                      Skills:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CMultiSelect
                      options={options}
                      onChange={(e) => {
                        let obj = Object.assign({}, e)
                        let uploadSting = JSON.stringify(obj)
                        setInstuteDataGet((values) => ({
                          ...values,
                          skills: uploadSting,
                        }))
                      }}
                    />
                  </div>
                  <div className="my-2">
                    <CFormLabel>About:</CFormLabel>
                    <CFormTextarea
                      rows={5}
                      onChange={(e) => {
                        setInstuteDataGet((values) => ({ ...values, about: e.target.value }))
                      }}
                    />
                  </div>
                </CRow>
              </CForm>
            </div>
            <div className="margin-down-and-top">
              <CButton onClick={InstituteFormSubmit} color="primary">
                Create
              </CButton>
            </div>
          </div>
        </CCol>
        <CCol>
          <div className="background-white-border-radious">
            <div className="display-flex-justify-space-between-padding">
              <div>
                <p className="text-weight-1-3rem">Institutes</p>
              </div>
              <div>
                <CButton
                  className="mx-3"
                  href="/education/bundleform"
                  color="success"
                  variant="outline"
                >
                  <CIcon icon={cilPlus} /> Add Institutes
                </CButton>
                <CButton className="mx-3" color="warning" variant="outline">
                  <CIcon icon={cilPlus}></CIcon> Import
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
                items={instuteDataRender}
                itemsPerPageSelect
                itemsPerPage={10}
                pagination
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={50} height={50} />
                    </td>
                  ),
                  Details: (item) => (
                    <td>
                      <p>Contact : {item.Details.Contact}</p>
                      <p>About : {item.Details.About}</p>
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
                              }}
                            >
                              <CButton
                                value-get={item.instuteId}
                                onClick={onClickEditLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.instuteId}
                                onClick={(e) => {
                                  const instuteIdGet = e.target.getAttribute('value-get')
                                  setInstuteDeleteId(instuteIdGet)
                                  setVisibleDelete(!visibleDelete)
                                }}
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
            <CButton onClick={onClickDeletLang} color="primary">
              Yes
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
      <div>
        {/* edit model  */}
        <CModal size="xl" visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
          <CModalHeader onClose={() => setVisibleEdit(false)}>
            <CModalTitle>Edit Institute</CModalTitle>
          </CModalHeader>
          <CModalBody className="background-grey-form">
            <div>
              <CForm className=" g-3 needs-validation">
                <CRow>
                  <CCol md={3} className="my-2">
                    <CFormLabel>
                      Institute Name:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        // setdata((values) => ({ ...values, fname: e.target.value }))
                        console.log('test')
                      }}
                      feedbackValid="Looks good!"
                      id="validationCustom01"
                      placeholder="Enter Institute Name"
                      required
                    />
                  </CCol>
                  <CCol md={3} className="my-2">
                    <CFormLabel>
                      Slug:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        // setdata((values) => ({ ...values, fname: e.target.value }))
                        console.log('test')
                      }}
                      placeholder="Enter-Slug-Here"
                      required
                    />
                  </CCol>
                  <CCol xs={3} className="my-2">
                    <CFormLabel>Logo :</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        type="file"
                        onChange={(e) => {
                          // setdata((values) => ({ ...values, image: e.target.value }))
                          console.log('test')
                        }}
                        id="inputGroupFile02"
                      />
                    </CInputGroup>
                  </CCol>
                  <CCol md={3} className="my-2">
                    <CFormLabel>
                      Email:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        // setdata((values) => ({ ...values, fname: e.target.value }))
                        console.log('test')
                      }}
                      placeholder="Enter Email."
                      required
                    />
                  </CCol>
                  <CCol md={3} className="my-2">
                    <CFormLabel>
                      Mobile:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        // setdata((values) => ({ ...values, fname: e.target.value }))
                        console.log('test')
                      }}
                      placeholder="Enter Mobile Number"
                      required
                    />
                  </CCol>
                  <CCol md={6} className="my-2">
                    <CFormLabel>Address:</CFormLabel>
                    <CFormInput
                      type="text"
                      onChange={(e) => {
                        // setdata((values) => ({ ...values, fname: e.target.value }))
                        console.log('test')
                      }}
                      placeholder="Enter Address"
                      required
                    />
                  </CCol>
                  <CCol md={3} className="my-2">
                    <CFormLabel>Affiliated By:</CFormLabel>
                    <CMultiSelect options={options} />
                  </CCol>
                  <CCol md={3} className="my-2">
                    <CFormLabel>
                      Skills:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CMultiSelect options={options} />
                  </CCol>
                  <CCol md={9} className="my-2">
                    <CFormLabel>
                      About:
                      <CBadge
                        color="transprent"
                        textColor="danger"
                        className="form-badget-class"
                        shape="rounded"
                      >
                        *
                      </CBadge>
                    </CFormLabel>
                    <CFormTextarea rows={5}></CFormTextarea>
                  </CCol>
                </CRow>
              </CForm>
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
              Close
            </CButton>
            <CButton color="primary">Update</CButton>
          </CModalFooter>
        </CModal>
      </div>
    </div>
  )
}

export default Institute
