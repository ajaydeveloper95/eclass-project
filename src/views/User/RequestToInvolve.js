import React, { useState, useEffect } from 'react'
import { cilColorBorder, cilArrowLeft } from '@coreui/icons'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { cilOptions, cilPen } from '@coreui/icons'
import { cilTrash, cilPlus, cibSonos } from '@coreui/icons'
import {
  CSmartTable,
  CButton,
  CImage,
  CFormSwitch,
  CPopover,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'
import { CFormInput } from '@coreui/react-pro'

function RequestToInvolve() {
  document.title = 'Eclass - All Category'
  const [details, setDetails] = useState([])
  const [StatusState, setStatusState] = useState('0')
  const [visible, setVisible] = useState(false)
  const [activeKey, setActiveKey] = useState(1)
  const [requestToInvolvement, setRequestToInvolvement] = useState([])
  const [requestToInvolvementNew, setRequestToInvolvementNew] = useState([])
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/getRequestToInvolvement', {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        setRequestToInvolvement(result.data.data)
      })
      .catch((e) => {
        console.log('some issue on Server', e)
      })

    axios
      .get('http://localhost:5000/admin/getRequestsToBecomeAnInstructor', {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        setRequestToInvolvementNew(result.data.data)
      })
      .catch((e) => {
        console.log('some issue on Server', e)
      })
  }, [])

  const columns = [
    { key: 'Number', _style: { width: '10%' } },
    {
      key: 'Image',
      sorter: false,
      _style: { width: '15%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Title', _style: { width: '35%' } },
    { key: 'Slug', _style: { width: '15%' } },
    { key: 'Featured', sorter: false, _style: { width: '15%' } },
    { key: 'Status', sorter: false, _style: { width: '15%' } },
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
      id: 1,
      Number: 1,
      Image: Cimg,
      Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
      Slug: 'Microsoft-excel',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 2,
      Number: 2,
      Image: Cimg,
      Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
      Slug: '	Flutter',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 3,
      Number: 3,
      Image: Cimg,
      Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
      Slug: 'React',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 4,
      Number: 4,
      Image: Cimg,
      Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
      Slug: '	Flutter',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 5,
      Number: 5,
      Image: Cimg,
      Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
      Slug: 'Microsoft-excel',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 6,
      Number: 6,
      Image: Cimg,
      Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
      Slug: 'Flutter',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 7,
      Number: 7,
      Image: Cimg,
      Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
      Slug: 'Flutter',
      Status: 'true',
      Featured: 'true',
    },
    {
      id: 8,
      Number: 8,
      Image: Cimg,
      Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
      Slug: 'Microsoft-excel',
      Status: 'true',
      Featured: 'true',
    },
  ]

  let col = []
  for (let item in requestToInvolvement) {
    col[item] = {
      id: item,
      Name: requestToInvolvement[item].name,
      Days: requestToInvolvement[item].days,
      Status: requestToInvolvement[item].isActive,
      requestToInvolvementId: requestToInvolvement[item]._id,
      _props: { align: 'middle' },
    }
  }

  let colnew = []
  for (let item in requestToInvolvementNew) {
    col[item] = {
      id: item,
      Name: requestToInvolvementNew[item].name,
      Days: requestToInvolvementNew[item].days,
      Status: requestToInvolvement[item].isActive,
      requestToInvolvementNewId: requestToInvolvementNew[item]._id,
      _props: { align: 'middle' },
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

  const onClickEditCate = (e) => {
    let EditId = e.target.getAttribute('value-get')
  }

  const onClickDeletCate = (e) => {
    console.log('t')
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

  const deleteSelectedOnChange = () => {
    console.log('t')
  }

  const CategoryFormSubmit = () => {
    console.log('t')
  }

  const onclickEditRequest = (e) => {
    let EditId = e.target.getAttribute('value-get')
    console.log(EditId)
    setVisibleEdit(true)
  }

  const onclickDeleteRequest = () => {}

  const onClickDeletLang = () => {
    console.log('Mbysaudgewdb')
  }

  const onClickEditPopUp = () => {
    console.log('kjsdhde')
  }
  return (
    <>
      <AuthFun />
      <div className="background-color-and-padding">
        <div className="display-flex-justify-space-between-padding">
          <div>
            <p className="text-weight-1-3rem">Multiple Instructore</p>
          </div>
        </div>
        <hr />
        <CNav variant="pills" role="tablist">
          <CNavItem>
            <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
              Request To Involve
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
              Involve Request
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeKey === 3} onClick={() => setActiveKey(3)}>
              Involved in course
            </CNavLink>
          </CNavItem>
          <div className="d-flex justity-content-flex-end">
            <div className="positin-ablsoute-set new-right">
              <CButton color="primary" type="submit" variant="outline">
                <CIcon icon={cilArrowLeft} /> Back
              </CButton>
            </div>
          </div>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="Orders-tab" visible={activeKey === 1}>
            <div className="container">
              <hr />
              <div className="margin-down-and-top">
                <div className="background-white-border-radious">
                  <div className="display-flex-justify-space-between-padding"></div>
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
                        Icon: (item) => (
                          <td>
                            <CImage rounded thumbnail src={item.Icon} width={50} height={50} />
                          </td>
                        ),
                        Image: (item) => (
                          <td>
                            <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                          </td>
                        ),
                        Status: (item) => (
                          <td>
                            {ForStatus(item.Status) === 1 ? (
                              <CFormSwitch
                                valid
                                id="formSwitchCheckChecked"
                                onChange={(e) => {
                                  setStatusState('false')
                                }}
                                defaultChecked
                              />
                            ) : (
                              <CFormSwitch
                                valid
                                id="formSwitchCheckChecked"
                                onChange={(e) => {
                                  setStatusState('true')
                                }}
                              />
                            )}
                          </td>
                        ),
                        Featured: (item) => (
                          <td>
                            {ForFeatured(item.Featured) === 1 ? (
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
                                      value-get={item.couponDataId}
                                      onClick={onclickEditRequest}
                                      style={{ textDecoration: 'none', color: 'black' }}
                                      color="link"
                                    >
                                      <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>
                                      Edit
                                    </CButton>
                                    <CButton
                                      value-get={item.couponDataId}
                                      onClick={(e) => {
                                        let CouponIdGet = e.target.getAttribute('value-get')
                                        // setCouponId(CouponIdGet)
                                        setVisibleDelete(true)
                                      }}
                                      style={{ textDecoration: 'none', color: 'black' }}
                                      color="link"
                                    >
                                      <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>
                                      Delete
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
                      }}
                      selectable
                      sorterValue={{ column: 'Request', state: 'asc' }}
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
                          <CFormInput
                            type="text"
                            // value={updateCoupon.couponCode}
                            // onChange={(e) => {
                            //   setUpdateCoupon((value) => ({ ...value, couponCode: e.target.value }))
                            // }}
                            label="Coupon Code"
                            placeholder="Coupon Code"
                            aria-describedby="exampleFormControlInputHelpInline"
                          />
                        </div>
                        <div className="width-dec10 mt-2">
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
                        </div>
                        <div className="width-dec10 mt-2">
                          <CFormInput
                            type="text"
                            // value={updateCoupon.maxUsageLimit}
                            // onChange={(e) => {
                            //   setUpdateCoupon((value) => ({
                            //     ...value,
                            //     maxUsageLimit: e.target.value,
                            //   }))
                            // }}
                            label="Max-Usage"
                            placeholder="Enter Max Usage"
                            aria-describedby="exampleFormControlInputHelpInline"
                          />
                        </div>
                        <div className="width-dec10 mt-2">
                          <CFormInput
                            type="text"
                            // value={updateCoupon.discountType}
                            // onChange={(e) => {
                            //   setUpdateCoupon((value) => ({
                            //     ...value,
                            //     discountType: e.target.value,
                            //   }))
                            // }}
                            label="Details"
                            placeholder="Enter Details"
                            aria-describedby="exampleFormControlInputHelpInline"
                          />
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
                      <p>
                        Do you really want to delete these records? This process cannot be undone.
                      </p>
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
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refund-tab" visible={activeKey === 2}>
            <div className="container">
              <hr />
              <div className="margin-down-and-top">
                <div className="background-white-border-radious">
                  <div className="display-flex-justify-space-between-padding"></div>
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
                        Icon: (item) => (
                          <td>
                            <CImage rounded thumbnail src={item.Icon} width={50} height={50} />
                          </td>
                        ),
                        Image: (item) => (
                          <td>
                            <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                          </td>
                        ),
                        Status: (item) => (
                          <td>
                            {ForStatus(item.Status) === 1 ? (
                              <CFormSwitch
                                valid
                                id="formSwitchCheckChecked"
                                onChange={(e) => {
                                  setStatusState('false')
                                }}
                                defaultChecked
                              />
                            ) : (
                              <CFormSwitch
                                valid
                                id="formSwitchCheckChecked"
                                onChange={(e) => {
                                  setStatusState('true')
                                }}
                              />
                            )}
                          </td>
                        ),
                        Featured: (item) => (
                          <td>
                            {ForFeatured(item.Featured) === 1 ? (
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
                                      value-get={item.couponDataId}
                                      onClick={onclickEditRequest}
                                      style={{ textDecoration: 'none', color: 'black' }}
                                      color="link"
                                    >
                                      <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>
                                      Edit
                                    </CButton>
                                    <CButton
                                      value-get={item.couponDataId}
                                      onClick={(e) => {
                                        let CouponIdGet = e.target.getAttribute('value-get')
                                        // setCouponId(CouponIdGet)
                                        setVisibleDelete(true)
                                      }}
                                      style={{ textDecoration: 'none', color: 'black' }}
                                      color="link"
                                    >
                                      <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>
                                      Delete
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
                      }}
                      selectable
                      sorterValue={{ column: 'Request', state: 'asc' }}
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
              </div>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refundtwo-tab" visible={activeKey === 3}>
            <div className="container">
              <hr />
            </div>
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

export default RequestToInvolve
