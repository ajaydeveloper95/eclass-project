import React, { useState, useEffect } from 'react'
import { cilPlus, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import {
  CSmartTable,
  CButton,
  CCardBody,
  CCollapse,
  CFormInput,
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
import { adminUrl } from 'src/RouteDynamic'

function AllRefundPolicies() {
  document.title = 'Eclass - Refund Policies'
  const [details, setDetails] = useState([])
  const [refundPolicy, setRefundPolicy] = useState([])
  const [updateRefundPolicy, setUpdateRefundPolicy] = useState([])
  const [selectedSetupState, setSelectedSetupState] = useState([])
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [refundPolicyIdGet, SetRefundPolicyIdGet] = useState('')
  const [statusManage, setstatusManage] = useState('')

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
  }, [visibleDelete, visibleEdit, statusManage])

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
    let editData = {
      _id: updateRefundPolicy._id,
      name: updateRefundPolicy.name,
      days: updateRefundPolicy.days,
      // details: updateRefundPolicy.details,
      // isActive: updateRefundPolicy.isActive,
    }
    axios
      .post(`${adminUrl}updateRefundPolicy`, editData, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        console.log('success')
      })
      .catch((e) => {
        console.log('some issue on Server', e)
      })
    setVisibleEdit(false)
  }

  const onClickDeletLang = () => {
    axios
      .post(
        `${adminUrl}deleteRefundPolicy`,
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
    let EditId = e.target.getAttribute('value-get')
    setVisibleEdit(true)
    for (let item in refundPolicy) {
      if (refundPolicy[item]._id === EditId) {
        setUpdateRefundPolicy(refundPolicy[item])
        break
      }
    }
  }

  const DeleteAllSelected = () => {
    for (let item in selectedSetupState) {
      axios
        .post(
          `${adminUrl}deleteRefundPolicy`,
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
      case true:
        return 1
      case false:
        return 0
      default:
        return -1
    }
  }

  const onHandleStatus = (e) => {
    let statusState = e.target.getAttribute('value-status')
    let RefundId = e.target.getAttribute('value-get')
    console.log(RefundId)
    if (statusState === 'true') {
      handleStatusMainFun(RefundId, false)
    } else {
      handleStatusMainFun(RefundId, true)
    }
  }

  const handleStatusMainFun = (Id, State) => {
    console.log('id of the element is ', Id)
    console.log('State of the element is ', State)
    let StatusUpdate = {
      _id: Id,
      isActive: State,
    }
    // api call
    axios
      .post(`${adminUrl}updateRefundPolicy`, StatusUpdate, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        console.log('success')
      })
      .catch((e) => {
        console.log('some issue on Server', e)
      })
    setstatusManage('success')
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
                {ForStatus(item.Status) === 1 ? (
                  <CFormSwitch
                    value-get={item.RefundPolicyId}
                    value-status="true"
                    id="formSwitchCheckChecked"
                    onChange={onHandleStatus}
                    defaultChecked
                  />
                ) : (
                  <CFormSwitch
                    value-get={item.RefundPolicyId}
                    value-status="false"
                    onChange={onHandleStatus}
                    id="formSwitchCheckChecked"
                  />
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
              <CModalTitle>Edit Refund Policies</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div>
                <div className="width-dec10 mt-2">
                  <CFormInput
                    type="text"
                    value={updateRefundPolicy.name}
                    onChange={(e) => {
                      setUpdateRefundPolicy((value) => ({ ...value, name: e.target.value }))
                    }}
                    label="Name"
                    placeholder="Enter Name"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <CFormInput
                    type="number"
                    value={updateRefundPolicy.days}
                    onChange={(e) => {
                      setUpdateRefundPolicy((value) => ({ ...value, days: e.target.value }))
                    }}
                    label="Day"
                    placeholder="Enter Day"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                {/* <div className="width-dec10 mt-2">
                  <h6>Status</h6>
                  <CFormSwitch
                    label=""
                    id="formSwitchCheckDefault"
                    value={updateRefundPolicy.isActive}
                    onChange={(e) => {
                      setUpdateRefundPolicy((value) => ({ ...value, isActive: e.target.value }))
                    }}
                  />
                </div> */}
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
    </div>
  )
}

export default AllRefundPolicies
