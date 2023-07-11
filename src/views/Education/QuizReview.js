import React, { useState } from 'react'

import { CSmartTable, CCardBody, CCollapse } from '@coreui/react-pro'

import {
  CButton,
  CImage,
  CFormSwitch,
  CFormInput,
  CForm,
  CRow,
  CCol,
  CFormTextarea,
  CFormSelect,
  CFormLabel,
  CPopover,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { element } from 'prop-types'
import axios from 'axios'
import { adminUrl } from 'src/RouteDynamic'

function QuizReview() {
  document.title = 'Eclass - Quiz Review'
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'Course',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'UserName', _style: { width: '20%' } },
    { key: 'Topic', _style: { width: '20%' } },
    { key: 'Question', sorter: false, _style: { width: '20%' } },
    { key: 'Answer', sorter: false, _style: { width: '20%' } },
    {
      key: 'show_details',
      label: 'View',
      _style: { width: '20%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]
  const usersData = [
    {
      id: 0,
      Course: 'Cimg',
      UserName: 'good',
      Topic: 'good',
      Question: 'true',
      Answer: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Course: 'Cimg',
      UserName: 'good',
      Topic: 'good',
      Question: 'true',
      Answer: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Course: 'Cimg',
      UserName: 'good',
      Topic: 'good',
      Question: 'true',
      Answer: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Course: 'Cimg',
      UserName: 'good',
      Topic: 'good',
      Question: 'true',
      Answer: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      Course: 'Cimg',
      UserName: 'good',
      Topic: 'good',
      Question: 'true',
      Answer: 'false',
      _props: { align: 'middle' },
    },
  ]
  const ForStatus = (Answer) => {
    switch (Answer) {
      case 'true':
        return 1
      case 'false':
        return 0
      default:
        return -1
    }
  }

  const ForFeatured = (Question) => {
    switch (Question) {
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

  console.log(dataSetup)

  return (
    <div>
      <CRow>
        <CCol xs={4}>
          <div className="background-white-border-radious padding-20px-10px mb-4">
            <div>
              <p className="text-weight-1-3rem">Add New Quiz</p>
            </div>
            <hr />
            <CForm>
              <div className="width-dec10">
                <CFormInput
                  type="text"
                  id="exampleFormControlInput2"
                  label="Name :"
                  placeholder="Please Enter Quiz Name"
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
          <div className="background-white-border-radious">
            <div className="display-flex-justify-space-between-padding">
              <div>
                <p className="text-weight-1-3rem">All Quiz Reviews</p>
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
                className="float-end"
                scopedColumns={{
                  Answer: (item) => (
                    <td>
                      {ForStatus(item.Answer) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  Question: (item) => (
                    <td>
                      {ForFeatured(item.Question) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
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
          </div>
        </CCol>
      </CRow>
    </div>
  )
}

export default QuizReview
