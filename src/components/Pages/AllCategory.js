import React, { useState, useEffect } from 'react'
import { cilTrash, cilOptions, cilPen } from '@coreui/icons'
import AuthFun from './AuthFunction/AuthFun'

import {
  CSmartTable,
  CButton,
  CImage,
  CFormSwitch,
  CFormInput,
  CForm,
  CRow,
  CCol,
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

function AllCategory() {
  document.title = 'Eclass - All Category'
  const [CateInfo, setCateInfo] = useState([])
  const [details, setDetails] = useState([])
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
  const columns = [
    {
      key: 'Icon',
      sorter: false,
      _style: { width: '10%' },
      _props: { className: 'fw-semibold' },
    },
    {
      key: 'Image',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'CategoryName', _style: { width: '25%' } },
    { key: 'Slug', _style: { width: '15%' } },
    { key: 'Featured', sorter: false, _style: { width: '15%' } },
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

  useEffect(() => {
    axios
      .get(`${adminUrl}getCategory`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((Category) => {
        let data = Category.data.data
        setCateInfo(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  let col = []

  for (let key in CateInfo) {
    col[key] = {
      id: key,
      Icon: Cimg,
      Image: Cimg,
      CategoryName: `${CateInfo[key].categoryName} `,
      Slug: `${CateInfo[key].slug}`,
      Featured: `${CateInfo[key].isFeatured}`,
      Status: `${CateInfo[key].isActive}`,
      elementId: `${CateInfo[key]._id}`,
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

  // console.log(col)

  const onClickEditCate = (e) => {
    let EditId = e.target.getAttribute('value-get')
    for (let key in col) {
      if (col[key].elementId === EditId) {
        const updateFieldData = col[key]
        setUpdateField(updateFieldData)
        break
      }
    }
    // console.log(EditId)
    setVisible(!visible)
  }

  const onClickDeletCate = (e) => {
    let DeleteId = e.target.getAttribute('value-get')
    axios
      .post(
        'http://localhost:5000/admin/deleteCategory',
        { _id: DeleteId },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((result) => {
        console.log('success')
      })
      .catch((e) => {
        console.log(e)
      })
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

  const deleteSelectedOnChange = () => {
    let DataId = []
    seletedSetup.forEach((element) => {
      DataId.push(element.elementId)
      axios
        .post(
          `${adminUrl}deleteCategory`,
          { _id: element.elementId },
          {
            headers: { access_token: localStorage.getItem('access_token') },
          },
        )
        .then((result) => {
          console.log('success')
        })
        .catch((e) => {
          console.log(e)
        })
    })
    setDeleteCateId(DataId)
  }

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
    <div className="margin-down-and-top">
      <AuthFun />
      <CRow>
        <CCol xs={4}>
          <div className="background-white-border-radious padding-20px-10px ">
            <div>
              <p className="text-weight-1-3rem">Add New Category</p>
            </div>
            <hr />
            <CForm>
              <div className="width-dec10">
                <CFormInput
                  type="text"
                  id="exampleFormControlInput2"
                  label="Name :"
                  placeholder="Please Enter Category Name"
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
        <CCol xs={8}>
          <div className="background-white-border-radious">
            <div className="display-flex-justify-space-between-padding">
              <div>
                <p className="text-weight-1-3rem">All Category</p>
              </div>
              <div>
                <CButton
                  className="mx-3"
                  color="warning"
                  onClick={deleteSelectedOnChange}
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
                onSelectedItemsChange={(items) => {
                  console.log(items)
                  if (items.length !== 0) {
                    setSelectedSetupState(items)
                  } else {
                    setSelectedSetupState([])
                  }
                }}
                items={col}
                itemsPerPageSelect
                itemsPerPage={10}
                pagination
                scopedColumns={{
                  Icon: (item) => (
                    <td>
                      {/* <CImage rounded thumbnail src={item.Icon} width={50} height={50} /> */}
                      <CImage rounded thumbnail src={item.Icon} width={50} height={50} />
                    </td>
                  ),
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                    </td>
                  ),
                  Status: (item) => (
                    <td>
                      {ForStatus(item.Status) === 1 ? (
                        <CFormSwitch
                          valid
                          id="formSwitchCheckChecked"
                          onChange={(e) => {
                            setStatusState('false')
                            console.log('false')
                          }}
                          defaultChecked
                        />
                      ) : (
                        <CFormSwitch
                          valid
                          id="formSwitchCheckChecked"
                          onChange={(e) => {
                            setStatusState('true')
                            console.log(StatusState)
                          }}
                        />
                      )}
                    </td>
                  ),
                  Featured: (item) => (
                    <td>
                      {ForFeatured(item.Featured) === 1 ? (
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
                                value-get={item.elementId}
                                onClick={onClickEditCate}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                              </CButton>
                              <CButton
                                value-get={item.elementId}
                                onClick={onClickDeletCate}
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
                sorterValue={{ column: 'CategoryName', state: 'asc' }}
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
      {/* edit modal start */}
      <div>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Edit Category</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              <div className="width-dec10">
                <CFormInput
                  type="text"
                  value={updateField.CategoryName}
                  onChange={(e) => {
                    setUpdateField((value) => ({ ...value, CategoryName: e.target.value }))
                  }}
                  id="exampleFormControlInput2"
                  label="Name :"
                  placeholder="Please Enter Category Name"
                  text="The name is how it appears on your Site"
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
              <div className="width-dec10 margin-down-and-top">
                <CFormInput
                  type="text"
                  value={updateField.Slug}
                  onChange={(e) => {
                    setUpdateField((value) => ({ ...value, Slug: e.target.value }))
                  }}
                  id="exampleFormControlInput2"
                  label="Slug :"
                  placeholder="please-enter-slug"
                  text='The "slug" is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.'
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
              <div className="margin-down-and-top">
                <CFormLabel>Thumbnail :</CFormLabel>
                <div className="d-flex justify-content-space-evenly margin-down-and-top">
                  <CFormInput className="width-dec10" type="file" size="fit" id="formFileLg" />
                </div>
                <div className="margin-down-and-top">
                  <CFormLabel>Icon :</CFormLabel>
                  <div className="d-flex justify-content-space-evenly margin-down-and-top">
                    <CFormInput className="width-dec10" type="file" size="fit" id="formFileLg" />
                  </div>
                  <div className="d-flex margin-down-and-top">
                    <div className="margin-right-40px">
                      <CFormLabel>Featured :</CFormLabel>
                      <CFormSwitch id="formSwitchCheckChecked" />
                    </div>
                    <div>
                      <CFormLabel>Status :</CFormLabel>
                      <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Update Changes</CButton>
          </CModalFooter>
        </CModal>
      </div>
      {/* edit model end */}
    </div>
  )
}

export default AllCategory
