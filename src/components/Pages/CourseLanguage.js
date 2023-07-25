import React, { useEffect, useState } from 'react'
import { adminUrl } from '../../RouteDynamic'
import { CSmartTable, CFormSwitch, CPopover, CButton } from '@coreui/react-pro'
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
} from '@coreui/react'

function CourseLanguage() {
  document.title = 'Eclass - CourseLanguage'
  const [courseLang, setcourseLang] = useState([])
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [updateCource, setUpdateCource] = useState([])
  const [courceid, setCourceId] = useState([])

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
  }, [])

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
      Action: `${courseLang[key].designation}`,
      langId: courseLang[key]._id,
    }
  }

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

  const onClickDeletLang = (e) => {
    let CourcedeletelId = e.target.getAttribute('value-get')
    setCourceId(CourcedeletelId)
    console.log(courceid, 'cource_id')

    setVisibleDelete(true)
  }

  const onClickEditPopUp = (e) => {}

  return (
    <>
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
          scopedColumns={{
            Status: (item) => (
              <td>
                {StatusCheck(item.Status) === 0 ? (
                  <CFormSwitch
                    onChange={(e) => {
                      console.log('1 ')
                    }}
                    id="formSwitchCheckChecked"
                    defaultChecked
                  />
                ) : (
                  <CFormSwitch
                    onChange={(e) => {
                      console.log(e.target.value)
                    }}
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
                      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}
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
        />
      </div>
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
                  <CFormInput
                    type="text"
                    value={updateCource.name}
                    onChange={(e) => {
                      setUpdateCource((value) => ({ ...value, name: e.target.value }))
                    }}
                    label="Name"
                    placeholder="Enter Name"
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

export default CourseLanguage
