import React, { useState } from 'react'
import { cilPlus, cilTrash } from '@coreui/icons'

import { CSmartTable, CButton, CCardBody, CCollapse, CFormSwitch } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

function EbooksReview() {
  document.title = 'Eclass - Ebook Review'
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'User',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Ebook', _style: { width: '30%' } },
    { key: 'Rating', sorter: false, _style: { width: '25%' } },
    { key: 'Commnet', sorter: false, _style: { width: '25%' } },
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
      Ebook: 'good',
      Rating: 'false',
      Commnet: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      User: 'Cimg',
      Ebook: 'good',
      Rating: 'false',
      Commnet: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      User: 'Cimg',
      Ebook: 'good',
      Rating: 'false',
      Commnet: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      User: 'Cimg',
      Ebook: 'good',
      Rating: 'false',
      Commnet: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      User: 'Cimg',
      Ebook: 'good',
      Rating: 'false',
      Commnet: 'false',
      _props: { align: 'middle' },
    },
  ]

  const ForRating = (Rating) => {
    switch (Rating) {
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
    <div className="background-white-border-radious">
      <div className="display-flex-justify-space-between-padding">
        <div>
          <p className="text-weight-1-3rem">Ebook Review</p>
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
            Rating: (item) => (
              <td>
                {ForRating(item.Featured) === 0 ? (
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
  )
}

export default EbooksReview
