import React, { useState } from 'react'
import { CSmartTable, CButton, CCardBody, CCollapse, CRow, CCol } from '@coreui/react-pro'

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
  return (
    <div>
      <CRow>
        <CCol xs={4}>
          <div className="background-white-border-radious padding-20px-10px ">
            <div>
              <p className="text-weight-1-3rem">Add New Category</p>
            </div>
            <hr />
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
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          toggleDetails(item.id)
                        }}
                      >
                        {details.includes(item.id) ? 'Hide' : 'View'}
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
