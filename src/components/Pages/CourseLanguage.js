import React, { useEffect, useState } from 'react'
import { adminUrl } from '../../RouteDynamic'
import { CSmartTable, CFormSwitch, CPopover, CButton, CRow, CCol } from '@coreui/react-pro'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilOptions, cilPen, cilTrash, cilArrowLeft } from '@coreui/icons'
import AuthFun from './AuthFunction/AuthFun'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CModalFooter,
  CFormLabel,
  CForm,
} from '@coreui/react'

function CourseLanguage() {
  document.title = 'Eclass - CourseLanguage'
  const [details, setDetails] = useState([])
  const [courseLang, setcourseLang] = useState([])
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [updateCource, setUpdateCource] = useState([])
  const [courceid, setCourceId] = useState([])
  const [getFormData, setFormData] = useState([])
  const [statusManage, setstatusManage] = useState('')

  useEffect(() => {
    axios
      .get(`${adminUrl}getCourseLanguage`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((testmoni) => {
        setcourseLang(testmoni.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [visibleDelete, visibleEdit, statusManage])

  const columns = [
    {
      key: 'name',
      _style: { width: '40%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Status', _style: { width: '25%' } },
    { key: 'Action', _style: { width: '25%' } },
  ]

  let col = []

  for (let key in courseLang) {
    col[key] = {
      id: key,
      name: `${courseLang[key].name}`,
      Status: `${courseLang[key].isActive}`,
      langId: courseLang[key]._id,
    }
  }

  console.log(col)

  const StatusCheck = (Status) => {
    switch (Status) {
      case 'true':
        return 0
      case 'false':
        return 1
      default:
        return -1
    }
  }

  const onClickEditLang = (e) => {
    let clickEdit = e.target.getAttribute('value-get')
    for (let item in courseLang) {
      if (courseLang[item]._id === clickEdit) {
        setUpdateCource(courseLang[item])
        break
      }
    }
    setVisibleEdit(true)
  }

  const onClickDeletLangPop = () => {
    axios
      .post(
        `${adminUrl}deleteCourseLanguage`,
        { _id: courceid },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then(() => {
        console.log('success')
      })
      .catch((err) => {
        console.log('Some Issue', err)
      })
    setVisibleDelete(false)
  }

  const onClickDeletLang = (e) => {
    let CourcedeletelId = e.target.getAttribute('value-get')
    setCourceId(CourcedeletelId)
    setVisibleDelete(true)
  }

  const onClickEditPopUp = (e) => {
    axios
      .post(
        `${adminUrl}updateCourseLanguage`,
        { _id: updateCource._id, name: updateCource.name, isActive: updateCource.isActive },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then(() => {
        console.log('success')
      })
      .catch((err) => {
        console.log('Some Issue', err)
      })
    setVisibleEdit(false)
  }

  const handleSubmitFormLanguage = (e) => {
    e.preventDefault()
    axios
      .post(`${adminUrl}addCourseLanguage`, getFormData, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then(() => {
        console.log('success')
      })
      .catch((err) => {
        console.log('Some Issue', err)
      })
  }

  const onHandleStatus = (e) => {
    let statusState = e.target.getAttribute('value-status')
    let RefundId = e.target.getAttribute('value-get')
    let delete1 = e.target.getAttribute('value')
    console.log(delete1)
    console.log(statusState)
    if (statusState === 'true') {
      setstatusManage(false)
      handleStatusMainFun(RefundId, false)
    } else {
      setstatusManage(true)
      handleStatusMainFun(RefundId, true)
    }
  }

  const handleStatusMainFun = (Id, State) => {
    let StatusUpdate = {
      _id: Id,
      isActive: State,
    }
    // api call
    axios
      .post(`${adminUrl}updateCourseLanguage`, StatusUpdate, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        console.log('success')
      })
      .catch((e) => {
        console.log('some issue on Server', e)
      })
    setstatusManage('success')
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

  return (
    <>
      <CRow>
        <CCol>
          <div className="background-white-border-radious padding-10px-10px">
            <div>
              <p className="text-weight-1-3rem">Add Course Review</p>
              <hr />
            </div>
            <div>
              <CForm onSubmit={handleSubmitFormLanguage}>
                <div className="margin-down-and-top width-dec10">
                  <CFormLabel>Course Language : </CFormLabel>
                  <CFormInput
                    type="text"
                    placeholder="Enter course language"
                    onChange={(e) => {
                      setFormData((value) => ({ ...value, name: e.target.value }))
                    }}
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="margin-down-and-top width-dec10">
                  <div className="d-flex gap-set-between-1rem">
                    <CFormLabel>Status :</CFormLabel>
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
          <div>
            <div className="margin-down-and-top background-white-border-radious padding-20px-10px">
              <div className="container">
                <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6">
                    <div className="display-flex-justify-space-between-padding text-right-new">
                      <div>
                        <CButton color="primary" type="submit" variant="outline">
                          <CIcon icon={cilArrowLeft} /> Back
                        </CButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AuthFun />
              <CSmartTable
                columns={columns}
                items={col}
                columnSorter
                clickableRows
                elementCover
                scopedColumns={{
                  Status: (item) => (
                    <td>
                      {StatusCheck(item.Status) === 0 ? (
                        <CFormSwitch
                          value-get={item.langId}
                          value-status="true"
                          onChange={onHandleStatus}
                          id="formSwitchCheckChecked"
                          defaultChecked
                        />
                      ) : (
                        <CFormSwitch
                          value-get={item.langId}
                          value-status="false"
                          onChange={onHandleStatus}
                          id="formSwitchCheckChecked"
                        />
                      )}
                    </td>
                  ),
                  Action: (item) => (
                    <td>
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
                  ),
                }}
                pagination
                tableProps={{
                  hover: true,
                }}
                selectable
                sorterValue={{ column: 'BundleName', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search :"
                tableFilterPlaceholder="Type.."
                tableHeadProps={{
                  color: 'success',
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
              <CModalTitle>Edit Course Language</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div>
                <div className="width-dec10 mt-2">
                  <CFormInput
                    type="text"
                    value={updateCource.name}
                    onChange={(e) => {
                      setUpdateCource((value) => ({ ...value, name: e.target.value }))
                    }}
                    label="Course Language :"
                    placeholder="Enter course language"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <h6>Status</h6>
                  <CFormSwitch
                    label="Status"
                    id="formSwitchCheckDefault"
                    value={updateCource.isActive}
                    onChange={(e) => {
                      setUpdateCource((value) => ({ ...value, isActive: e.target.value }))
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
              <CButton color="primary" onClick={onClickDeletLangPop}>
                Yes
              </CButton>
            </CModalFooter>
          </CModal>
        </div>
      </div>
    </>
  )
}

export default CourseLanguage
