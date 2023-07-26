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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'
import { cilPen, cilOptions, cilArrowLeft } from '@coreui/icons'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function AllRefundPolicies() {
  document.title = 'Eclass - Refund Policies'
  const [details, setDetails] = useState([])
  const [refundPolicy, setRefundPolicy] = useState([])
  const [updateRefundPolicy, setUpdateRefundPolicy] = useState([])
  const [selectedSetupState, setSelectedSetupState] = useState([])
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [refundPolicyIdGet, SetRefundPolicyIdGet] = useState('')

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

  const onClickEditPopUp = () => {
    console.log('onClickEditPopUp')
  }

  const onClickDeletLang = () => {
    axios
      .post(
        'http://localhost:5000/admin/deleteRefundPolicy',
        { _id: refundPolicyIdGet },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((result) => [console.log('successfully')])
      .catch((e) => {
        console.log('some issue on Server', e)
      })
    setVisibleDelete(false)
  }

  const OnClickEditShow = (e) => {
    let editID = e.target.getAttribute('value-get')
    console.log(editID)
    console.log('update refund policy', updateRefundPolicy)
  }
  const DeleteAllSelected = () => {
    for (let item in selectedSetupState) {
      axios
        .post(
          'http://localhost:5000/admin/deleteRefundPolicy',
          { _id: selectedSetupState[item].RefundPolicyId },
          {
            headers: { access_token: localStorage.getItem('access_token') },
          },
        )
        .then((result) => [console.log('successfully')])
        .catch((e) => {
          console.log('some issue on Server', e)
        })
    }
  }

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
      <AuthFun />
      <div className="display-flex-justify-space-between-padding">
        <div>
          <CButton className="mx-3" color="success" variant="outline">
            <CIcon icon={cilPlus}></CIcon> Add Bundle
          </CButton>
          <CButton className="mx-3" color="warning" onClick={DeleteAllSelected} variant="outline">
            <CIcon icon={cilTrash}></CIcon> Delete Selected
          </CButton>
        </div>
        <div>
          <CButton color="primary" type="submit" variant="outline">
            <CIcon icon={cilArrowLeft} /> Back
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
          onSelectedItemsChange={(items) => {
            // console.log(items)
            if (items.length !== 0) {
              setSelectedSetupState(items)
            } else {
              setSelectedSetupState([])
            }
          }}
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
                          alignItems: 'start',
                        }}
                      >
                        <CButton
                          value-get={item.RefundPolicyId}
                          onClick={OnClickEditShow}
                          style={{ textDecoration: 'none', color: 'black' }}
                          color="link"
                        >
                          <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                        </CButton>
                        <CButton
                          value-get={item.RefundPolicyId}
                          onClick={(e) => {
                            let RefundPolicyId = e.target.getAttribute('value-get')
                            SetRefundPolicyIdGet(RefundPolicyId)
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
      <div>
        <div>
          {/* edit model  */}
          <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
            <CModalHeader onClose={() => setVisibleEdit(false)}>
              <CModalTitle>Edit Coupon</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div>hello</div>
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
    </div>
  )
}

export default AllRefundPolicies
