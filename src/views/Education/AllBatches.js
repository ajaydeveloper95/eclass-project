import React, { useState } from 'react'

import { cilPlus, cilTrash } from '@coreui/icons'

import { CSmartTable, CButton, CCardBody, CCollapse, CImage, CFormSwitch } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

function AllBatches() {
  document.title = 'Eclass - All Batch'
  const [details, setDetails] = useState([])
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'
  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'BatchName', _style: { width: '30%' } },
    { key: 'Featured', sorter: false, _style: { width: '25%' } },
    { key: 'Status', sorter: false, _style: { width: '25%' } },
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
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
      // _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
      // _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
      _props: { align: 'middle' },
    },
    {
      id: 4,
      Image: Cimg,
      BatchName: 'good',
      Featured: 'true',
      Status: 'false',
      // _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
      _props: { align: 'middle' },
    },
  ]
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
  return (
    <div className="background-white-border-radious">
      <div className="display-flex-justify-space-between-padding">
        <div>
          <p className="text-weight-1-3rem">All Batches</p>
        </div>
        <div>
          <CButton className="mx-3" color="success" variant="outline">
            <CIcon icon={cilPlus}></CIcon> Add Batch
          </CButton>
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
            Image: (item) => (
              <td>
                <CImage rounded thumbnail src={item.Image} width={100} height={100} />
              </td>
            ),
            Status: (item) => (
              <td>
                {ForStatus(item.Status) === 0 ? (
                  <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                ) : (
                  <CFormSwitch id="formSwitchCheckChecked" />
                )}
              </td>
            ),
            Featured: (item) => (
              <td>
                {ForFeatured(item.Featured) === 0 ? (
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

export default AllBatches