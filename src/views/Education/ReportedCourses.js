import React, { useState } from 'react'
import { cilTrash, cilOptions, cilPen } from '@coreui/icons'
import { CSmartTable, CButton, CCardBody, CCollapse, CPopover } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function ReportedCourses() {
  document.title = 'Eclass - Reported Courses'
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'User',
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Issue', _style: { width: '20%' } },
    { key: 'Email', _style: { width: '25%' } },
    { key: 'Details', sorter: false, _style: { width: '20%' } },
    { key: 'Course', _style: { width: '20%' } },
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
      User: 'Cimg',
      Issue: 'good',
      Email: 'true',
      Details: 'false',
      Course: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      User: 'Cimg',
      Issue: 'good',
      Email: 'true',
      Details: 'false',
      Course: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      User: 'Cimg',
      Issue: 'good',
      Email: 'true',
      Details: 'false',
      Course: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      User: 'Cimg',
      Issue: 'good',
      Email: 'true',
      Details: 'false',
      Course: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      User: 'Cimg',
      Issue: 'good',
      Email: 'true',
      Details: 'false',
      Course: 'false',
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
  return (
    <div className="background-white-border-radious">
      <AuthFun />
      <div className="display-flex-justify-space-between-padding">
        <div>
          <p className="text-weight-1-3rem">Reported Courses</p>
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
          elementCover
          columns={columns}
          columnSorter
          items={usersData}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
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
          selectable
          sorterValue={{ column: 'User', state: 'asc' }}
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
  )
}

export default ReportedCourses
