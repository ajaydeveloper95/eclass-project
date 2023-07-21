import React, { useState } from 'react'
import {
  CCardBody,
  CCollapse,
  CButton,
  CImage,
  CFormSwitch,
  CSmartTable,
  CPopover,
} from '@coreui/react-pro'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CModalFooter,
} from '@coreui/react'
import { cilPlus, cilTrash, cilOptions, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import AuthFun from './AuthFunction/AuthFun'

function CourseReview() {
  document.title = 'Eclass - CourseReview'
  const [details, setDetails] = useState([])
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Title', _style: { width: '35%' } },
    { key: 'Instructor', sorter: false, _style: { width: '20%' } },
    { key: 'Featured', sorter: false, _style: { width: '15%' } },
    { key: 'Status', sorter: false, _style: { width: '30%' } },
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
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Guest',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Member',
      Featured: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      Title: 'Learn Microsoft Excel Beginner',
      Instructor: 'Staff',
      Featured: 'true',
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

  const onClickEditLang = (e) => {
    // let Reviewid = e.target.getAttribute('value-get')
    setVisibleEdit(true)
  }

  const onClickDeletLang = (e) => {
    setVisibleDelete(true)
  }

  const onClickEditPopUp = (e) => {}
  return (
    <>
      <div className="background-white-border-radious">
        <AuthFun />
        <div className="display-flex-justify-space-between-padding">
          <div>
            <p className="text-weight-1-3rem">All Coupons</p>
          </div>
          <div>
            <CButton className="mx-3" color="success" variant="outline">
              <CIcon icon={cilPlus}></CIcon> Add Coupon
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
      <div>
        <div>
          {/* edit model  */}
          <CModal visible={visibleEdit} onClose={() => setVisibleEdit(false)}>
            <CModalHeader onClose={() => setVisibleEdit(false)}>
              <CModalTitle>Edit Coupon</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div>
                <div className="width-dec10 mt-2">
                  <div className="mb-3">
                    <CFormInput
                      type="file"
                      id="formFile"
                      label="Image"
                      // value={updateCource.name}
                      // onChange={(e) => {
                      // setUpdateCource((value) => ({ ...value, name: e.target.value }))
                    />
                  </div>
                </div>
                <div className="width-dec10 mt-2">
                  <CFormInput
                    type="text"
                    // value={updateCource.name}
                    // onChange={(e) => {
                    //   setUpdateCource((value) => ({ ...value, name: e.target.value }))
                    // }}
                    label="Title"
                    placeholder="Enter Title"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <CFormInput
                    type="text"
                    // value={updateCource.name}
                    // onChange={(e) => {
                    //   setUpdateCource((value) => ({ ...value, name: e.target.value }))
                    // }}
                    label="Instructor"
                    placeholder="Enter Instructor"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <h6>Featured</h6>
                  <CFormSwitch label="Featured" id="formSwitchCheckDefault" />
                </div>
                <div className="width-dec10 mt-2">
                  <h6>Status</h6>
                  <CFormSwitch label="Status" id="formSwitchCheckDefault" />
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
    </>
  )
}

export default CourseReview
