import React, { useState, useEffect } from 'react'
import { cilPlus, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import {
  CSmartTable,
  CButton,
  CCardBody,
  CCollapse,
  CFormSwitch,
  CPopover,
} from '@coreui/react-pro'
import { cilPen, cilOptions } from '@coreui/icons'

function AllRefundPolicies() {
  document.title = 'Eclass - Refund Policies'
  const [details, setDetails] = useState([])
  const [refundPolicy, setRefundPolicy] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/getRefundPolicy', {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        setRefundPolicy(result.data.data)
      })
      .catch((e) => {
        console.log('some issue on Server', e)
      })
  }, [])

  // const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'
  const columns = [
    {
      key: 'Name',
      sorter: false,
      _style: { width: '35%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Days', _style: { width: '25%' } },
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

  let col = []
  for (let item in refundPolicy) {
    col[item] = {
      id: item,
      Name: refundPolicy[item].name,
      Days: refundPolicy[item].days,
      Status: refundPolicy[item].isActive,
      RefundPolicyId: refundPolicy[item]._id,
      _props: { align: 'middle' },
    }
  }

  const usersData = [
    {
      id: 0,
      Name: 'vijay',
      Days: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Name: 'Cimg',
      Days: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Name: 'Cimg',
      Days: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Name: 'Cimg',
      Days: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      Name: 'Cimg',
      Days: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 5,
      Name: 'Cimg',
      Days: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 6,
      Name: 'Cimg',
      Days: 'good',
      Status: 'false',
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
          <p className="text-weight-1-3rem">All Bundles</p>
        </div>
        <div>
          <CButton className="mx-3" color="success" variant="outline">
            <CIcon icon={cilPlus}></CIcon> Add Bundle
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
          items={col}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
            Status: (item) => (
              <td>
                {ForStatus(item.Status) === 0 ? (
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
          sorterValue={{ column: 'BundleName', state: 'asc' }}
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

export default AllRefundPolicies
