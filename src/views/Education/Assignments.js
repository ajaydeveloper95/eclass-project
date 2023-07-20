import React, { useState } from 'react'
import { CCardBody, CCollapse } from '@coreui/react-pro'
import { cilOptions, cilPlus, cilPen } from '@coreui/icons'
import { cilTrash } from '@coreui/icons'

import {
  CSmartTable,
  CButton,
  CFormSwitch,
  CFormInput,
  CForm,
  CRow,
  CCol,
  CFormLabel,
  CPopover,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { element } from 'prop-types'
import axios from 'axios'
import { adminUrl } from 'src/RouteDynamic'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function Assignments() {
  document.title = 'Eclass - Assignments'
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'id',
      sorter: false,
      _style: { width: '5%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Course', _style: { width: '65%' } },
    {
      key: 'ViewAssignment',
      label: 'ViewAssignment',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]
  const usersData = [
    { id: 0, Course: 'John Doe', ViewAssignment: 'Pending' },
    {
      id: 1,
      Course: 'Samppa Nori',
      ViewAssignment: 'Active',
      _props: { align: 'middle' },
    },
  ]
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

  document.title = 'Eclass - All Category'
  const [CateInfo, setCateInfo] = useState([])
  const [dataSetup, setDataSetup] = useState([])
  const [seletedSetup, setSelectedSetupState] = useState([])
  const [deleteCateId, setDeleteCateId] = useState([])
  const [StatusState, setStatusState] = useState('0')
  const [featureState, setFeatureState] = useState('0')
  const [visible, setVisible] = useState(false)
  const [updateField, setUpdateField] = useState([])
  const [featuredStateManage, setFeaturedStateManage] = useState('true')
  const [statusStateManage, setStatusStateManage] = useState('true')
  const [slugSet, setSlugSet] = useState(' ')
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const CategoryFormSubmit = () => {
    axios
      .post(`${adminUrl}addCategory`, dataSetup, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        console.log('success')
      })
      .catch((e) => {
        console.log('error')
      })
  }

  return (
    <div>
      <AuthFun />
      <CRow>
        <CCol xs={4}>
          <div className="background-white-border-radious padding-20px-10px mb-4">
            <div>
              <p className="text-weight-1-3rem">Add New Assignments</p>
            </div>
            <hr />
            <CForm>
              <div className="width-dec10">
                <CFormInput
                  type="text"
                  id="exampleFormControlInput2"
                  label="Name :"
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
                  onChange={(e) => {
                    let slugDataSet = e.target.value
                    setDataSetup((value) => ({ ...value, slug: slugDataSet }))
                    setSlugSet(setDataSetup.slug)
                  }}
                  label="Slug :"
                  placeholder="Please-enter-slug"
                  text='The "slug" is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.'
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
              <div className="margin-down-and-top">
                <CFormLabel>Thumbnail :</CFormLabel>
                <div className="d-flex justify-content-space-evenly margin-down-and-top">
                  <CFormInput
                    onChange={(e) => {
                      let Image = e.target.files[0]
                      setDataSetup((value) => ({ ...value, image: URL.createObjectURL(Image) }))
                    }}
                    className="width-dec10"
                    type="file"
                    size="fit"
                    id="formFileLg"
                  />
                </div>
                <div className="margin-down-and-top">
                  <CFormLabel>Icon :</CFormLabel>
                  <div className="d-flex justify-content-space-evenly margin-down-and-top">
                    <CFormInput
                      className="width-dec10"
                      onChange={(e) => {
                        let IconImg = e.target.files[0]
                        setDataSetup((value) => ({ ...value, icon: URL.createObjectURL(IconImg) }))
                      }}
                      type="file"
                      size="fit"
                      id="formFileLg"
                    />
                  </div>
                </div>
                <div className="d-flex margin-down-and-top">
                  <div className="margin-right-40px">
                    <CFormLabel>Featured :</CFormLabel>
                    <CFormSwitch
                      onChange={(e) => {
                        if (featuredStateManage) {
                          setFeaturedStateManage('false')
                          setDataSetup((value) => ({ ...value, isFeatured: featuredStateManage }))
                        }
                        if (featuredStateManage === 'false') {
                          setFeaturedStateManage('true')
                          setDataSetup((value) => ({ ...value, isFeatured: featuredStateManage }))
                        }
                      }}
                      id="formSwitchCheckChecked"
                    />
                  </div>
                  <div>
                    <CFormLabel>Status :</CFormLabel>
                    <CFormSwitch
                      onChange={(e) => {
                        if (statusStateManage) {
                          setStatusStateManage('false')
                          setDataSetup((value) => ({ ...value, isActive: statusStateManage }))
                        }
                        if (statusStateManage === 'false') {
                          setStatusStateManage('true')
                          setDataSetup((value) => ({ ...value, isActive: statusStateManage }))
                        }
                      }}
                      id="formSwitchCheckChecked"
                    />
                  </div>
                </div>
                <div className="margin-down-and-top">
                  <CButton onClick={CategoryFormSubmit} color="primary">
                    Create
                  </CButton>
                </div>
              </div>
            </CForm>
          </div>
        </CCol>
        <CCol>
          <div className="background-white-border-radious padding-20px-10px ">
            <div className="display-flex-justify-space-between-padding">
              <div>
                <p className="text-weight-1-3rem">All Assignments</p>
              </div>
            </div>
            <hr />
            <CSmartTable
              columns={columns}
              items={usersData}
              //   columnFilter
              columnSorter
              scopedColumns={{
                ViewAssignment: (item) => {
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
                              value-get={item.langId}
                              // onClick={onClickEditLang}
                              style={{ textDecoration: 'none', color: 'black' }}
                              color="link"
                            >
                              <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                            </CButton>
                            <CButton
                              value-get={item.langId}
                              // onClick={onClickDeletLang}
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
              pagination
              tableProps={{
                striped: true,
                hover: true,
              }}
            />
          </div>
        </CCol>
      </CRow>
    </div>
  )
}

export default Assignments
