import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { CSmartTable, CButton, CCardBody, CCollapse, CBadge, CPopover } from '@coreui/react-pro'
import { cilOptions, cilPlus, cilTrash, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { adminUrl } from 'src/RouteDynamic'
import axios from 'axios'

function Alumini() {
  const [details, setDetails] = useState([])
  const [AluminiGet, setAluminiGet] = useState([])
  const [allUserData, setAllUserData] = useState([])

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

  console.log(allUserData)
  console.log(AluminiGet)

  const onClickEditLang = (e) => {
    const clickEdit = e.currentTarget.getAttribute('value-get')
    console.log(clickEdit)
  }

  const onClickDeletLang = (e) => {
    console.log('delet on click handle')
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
          items={usersData}
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
  )
}

export default Alumini
