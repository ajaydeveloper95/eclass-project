import React, { useState } from 'react'
import { cilPlus, cilTrash } from '@coreui/icons'
import {
  CSmartTable,
  CButton,
  CCardBody,
  CCollapse,
  CFormSwitch,
  CPopover,
} from '@coreui/react-pro'
import {
  CFormInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilOptions, cilPen, cilArrowLeft } from '@coreui/icons'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'

function PrivateCourses() {
  document.title = 'Eclass - Private Course'
  const [details, setDetails] = useState([])
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)

  const columns = [
    { key: 'Course', _style: { width: '55%' } },
    { key: 'Status', sorter: false, _style: { width: '40%' } },
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
      Course: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Course: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Course: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Course: 'good',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      Course: 'good',
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

  const onClickEditLang = (e) => {
    let EditId = e.target.getAttribute('value-get')
    console.log(EditId)
    setVisibleEdit(true)
  }

  const onClickDeletLang = (e) => {
    let DelId = e.target.getAttribute('value-get')
    console.log(DelId)
    setVisibleDelete(true)
  }

  const onClickEditPopUp = () => {
    console.log('zjkhfdsafn')
  }

  return (
    <div className="background-white-border-radious">
      <AuthFun />
      <div className="display-flex-justify-space-between-padding">
        <div>
          <CButton className="mx-3" color="success" variant="outline">
            <CIcon icon={cilPlus}></CIcon> Add Batch
          </CButton>
          <CButton className="mx-3" color="warning" variant="outline">
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
          items={usersData}
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
      <div>
        <div>
          {/* edit model  */}
          <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
            <CModalHeader onClose={() => setVisibleEdit(false)}>
              <CModalTitle>Edit Private Courses</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div>
                <div className="width-dec10 mt-2">
                  <CFormInput
                    type="text"
                    // value={updateCoupon.couponCode}
                    // onChange={(e) => {
                    //   setUpdateCoupon((value) => ({ ...value, couponCode: e.target.value }))
                    // }}
                    label="Course"
                    placeholder="Enter Course"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                {/* <div className="width-dec10 mt-2">
                  <CFormInput
                    type="text"
                    // value={updateCoupon.amount}
                    // onChange={(e) => {
                    //   setUpdateCoupon((value) => ({ ...value, amount: e.target.value }))
                    // }}
                    label="Amount"
                    placeholder="Enter Amount"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div> */}
                <div className="width-dec10 mt-2">
                  <h6>Status</h6>
                  <CFormSwitch id="formSwitchCheckDefault" />
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
    </div>
  )
}

export default PrivateCourses
