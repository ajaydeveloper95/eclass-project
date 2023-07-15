import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import {
  CSmartTable,
  CButton,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModal,
  CPopover,
  CModalFooter,
  CFormLabel,
  CBadge,
  CFormInput,
} from '@coreui/react-pro'
import { cilOptions, cilPlus, cilTrash, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { adminUrl } from 'src/RouteDynamic'
import axios from 'axios'

function Alumini() {
  const [details, setDetails] = useState([])
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [alumniEditId, setAlumniEditId] = useState('')
  const [alumniDeleteId, setAlumniDeleteId] = useState('')
  const [AluminiGet, setAluminiGet] = useState([])
  const [allUserData, setAllUserData] = useState([])
  const [AlumniInfoTable, setAlumniInfoTable] = useState([])
  const [alumniUpdate, setAlumniUpdate] = useState([])

  const columns = [
    {
      key: 'AlumniName',
      _style: { width: '60%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Action', _style: { width: '30%' } },
  ]
  const usersData = [
    { id: 0, AlumniName: 'John Doe', Action: 'Pending', _props: { align: 'middle' } },
    {
      id: 1,
      AlumniName: 'Samppa Nori',
      Action: 'Active',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      AlumniName: 'Estavan Lykos',
      Action: 'Banned',
      _props: { align: 'middle' },
    },
  ]

  useEffect(() => {
    axios
      .get(`${adminUrl}getAlumini`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((data) => {
        const mainCourseData = data.data.data
        setAluminiGet(mainCourseData)
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })

    // all user api call
    axios
      .get(`${adminUrl}getUsers`)
      .then((data) => {
        const mainData = data.data.data
        setAllUserData(mainData)
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
  }, [])

  // console.log(allUserData)
  // console.log(AluminiGet)

  let col = []
  for (let item in AluminiGet) {
    for (let i in allUserData) {
      if (allUserData[i]._id === AluminiGet[item].userId) {
        col[item] = {
          id: item,
          AlumniId: AluminiGet[item]._id,
          AlumniName: `${allUserData[i].fName} ${allUserData[i].lName}`,
          _props: { align: 'middle' },
        }
      }
    }
  }
  console.log(col)

  const onClickEditLang = (e) => {
    let id = e.currentTarget.getAttribute('value-get')
    setAlumniEditId(id)
    setVisibleEdit(true)
    for (let item in AluminiGet) {
      if (id === AluminiGet[item]._id) {
        let userIdAlumni = AluminiGet[item].userId
        for (let u in allUserData) {
          if (userIdAlumni === allUserData[u]._id) {
            setAlumniUpdate(allUserData[u])
          }
        }
      }
    }
  }

  const onClickEditPopUp = () => {
    console.log('design after')
  }

  console.log(alumniUpdate)

  const onClickDeletLang = () => {
    axios
      .post(
        `${adminUrl}deleteAlumini`,
        { _id: alumniDeleteId },
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
    setVisibleDelete(false)
  }

  return (
    <div className="background-white-border-radious">
      <div className="display-flex-justify-space-between-padding">
        <div>
          <p className="text-weight-1-3rem">All Alumni</p>
        </div>
        <div>
          <CButton className="mx-3" href="/education/bundleform" color="success" variant="outline">
            <CIcon icon={cilPlus} /> Add Alumni
          </CButton>
          <CButton className="mx-3" href="/education/bundleform" color="warning" variant="outline">
            <CIcon icon={cilTrash} /> Delete Selected
          </CButton>
        </div>
      </div>
      <hr />
      <div className="padding-20px-10px">
        <CSmartTable
          activePage={3}
          cleaner
          // clickableRows
          columns={columns}
          // columnFilter
          columnSorter
          // footer
          items={col}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          scopedColumns={{
            Action: (item) => {
              return (
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
                          value-get={item.AlumniId}
                          onClick={onClickEditLang}
                          style={{ textDecoration: 'none', color: 'black' }}
                          color="link"
                        >
                          <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                        </CButton>
                        <CButton
                          value-get={item.AlumniId}
                          onClick={(e) => {
                            let id = e.currentTarget.getAttribute('value-get')
                            setAlumniDeleteId(id)
                            setVisibleDelete(true)
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
      <div>
        {/* edit model  */}
        <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
          <CModalHeader onClose={() => setVisibleEdit(false)}>
            <CModalTitle>Edit</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div>
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
                    // setdata((values) => ({ ...values, fname: e.target.value }))
                    console.log('test')
                  }}
                  feedbackValid="Looks good!"
                  id="validationCustom01"
                  placeholder="Enter Institute Name"
                  required
                />
              </div>
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
                    // setdata((values) => ({ ...values, fname: e.target.value }))
                    console.log('test')
                  }}
                  feedbackValid="Looks good!"
                  id="validationCustom01"
                  placeholder="Enter Institute Name"
                  required
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
  )
}

export default Alumini
