import React, { useState } from 'react'

import {
  CSmartTable,
  CButton,
  CCardBody,
  CCollapse,
  CFormSwitch,
  CRow,
  CCol,
} from '@coreui/react-pro'

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
  return (
    <div>
      <CRow>
        <CCol xs={4}>
          <div className="background-white-border-radious padding-20px-10px ">
            <div>
              <p className="text-weight-1-3rem">Add New Quiz</p>
            </div>
            <hr />
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
