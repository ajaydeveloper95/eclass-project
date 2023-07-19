import { cilTrash, cilPlus, cibSonos } from '@coreui/icons'
import React, { useState, useEffect } from 'react'
import { cilOptions, cilPen } from '@coreui/icons'
import {
  CSmartTable,
  CButton,
  CCardBody,
  CCollapse,
  CRow,
  CCol,
  CFormInput,
  CForm,
  CFormSelect,
  CFormSwitch,
  CBadge,
  CInputGroupText,
  CInputGroup,
  CDatePicker,
  CPopover,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import axios from 'axios'

function Coupon() {
  document.title = 'Eclass - Reported Courses'
  const [details, setDetails] = useState([])
  const [dataHandle, setDataHandle] = useState([])
  const [couponData, setCouponData] = useState([])
  const [couponId, setCouponId] = useState('')
  const [stateTrue, setStateTrue] = useState('true')
  const [visibleDelete, setVisibleDelete] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/getCoupon', {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        setCouponData(result.data.data)
      })
      .catch((e) => {
        console.log('some issue on Server', e)
      })
  }, [])

  const columns = [
    {
      key: 'CouponCode',
      _style: { width: '30%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Amount', _style: { width: '15%' } },
    { key: 'MaxUsage', _style: { width: '20%' } },
    { key: 'Details', sorter: false, _style: { width: '20%' } },
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
  for (let item in couponData) {
    col[item] = {
      id: item,
      CouponCode: couponData[item].couponCode,
      Amount: couponData[item].amount,
      MaxUsage: couponData[item].maxUsageLimit,
      Details: couponData[item].discountType,
      couponDataId: couponData[item]._id,
      _props: { align: 'middle' },
    }
  }

  // const usersData = [
  //   {
  //     id: 0,
  //     CouponCode: 'Cimg',
  //     Amount: 'good',
  //     MaxUsage: 'true',
  //     Details: 'false',
  //     _props: { align: 'middle' },
  //   },
  //   {
  //     id: 1,
  //     CouponCode: 'Cimg',
  //     Amount: 'good',
  //     MaxUsage: 'true',
  //     Details: 'false',
  //     _props: { align: 'middle' },
  //   },
  //   {
  //     id: 2,
  //     CouponCode: 'Cimg',
  //     Amount: 'good',
  //     MaxUsage: 'true',
  //     Details: 'false',
  //     _props: { align: 'middle' },
  //   },
  //   {
  //     id: 3,
  //     CouponCode: 'Cimg',
  //     Amount: 'good',
  //     MaxUsage: 'true',
  //     Details: 'false',
  //     _props: { align: 'middle' },
  //   },
  //   {
  //     id: 4,
  //     CouponCode: 'Cimg',
  //     Amount: 'good',
  //     MaxUsage: 'true',
  //     Details: 'false',
  //     _props: { align: 'middle' },
  //   },
  // ]
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

  const onClickDeletLang = () => {
    console.log(couponId)
    axios
      .post(
        'http://localhost:5000/admin/deleteCoupon',
        { _id: couponId },
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

  console.log(dataHandle)
  const onSubmitCoupon = () => {
    axios
      .post('http://localhost:5000/admin/addCoupon', dataHandle, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => [console.log('successfully')])
      .catch((e) => {
        console.log('some issue on Server', e)
      })
  }

  return (
    <div className="margin-down-and-top">
      <CRow>
        <CCol xs={4}>
          <div className="background-white-border-radious padding-20px-10px ">
            <div>
              <p className="text-weight-1-3rem">Add New Coupon</p>
            </div>
            <hr />
            <CForm>
              <div className="width-dec10">
                <CFormInput
                  type="text"
                  id="exampleFormControlInput2"
                  label="Coupon Code :"
                  placeholder="Enter Code"
                  onChange={(e) => {
                    let couponCode = e.target.value
                    setDataHandle((value) => ({ ...value, couponCode: couponCode }))
                  }}
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
              <div className="width-30per margin-down-and-top">
                <CFormSelect
                  label="Discount Type :"
                  aria-label="Default select example"
                  onChange={(e) => {
                    let discountType = e.target.value
                    setDataHandle((value) => ({ ...value, discountType: discountType }))
                  }}
                  options={[
                    'None',
                    { label: 'Fix Amount', value: 'Fix Amount' },
                    { label: '% Percentage', value: '%Percentage' },
                  ]}
                />
              </div>
              <div className="width-dec10">
                <CFormInput
                  type="text"
                  id="exampleFormControlInput3"
                  label="Amount :"
                  placeholder="Enter Amount"
                  onChange={(e) => {
                    let amount = e.target.value
                    setDataHandle((value) => ({ ...value, amount: amount }))
                  }}
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
              <div className="width-dec10 margin-down-and-top">
                <CFormSelect
                  label="Linked to :"
                  aria-label="Default select example"
                  onChange={(e) => {
                    let linkedTo = e.target.value
                    setDataHandle((value) => ({ ...value, linkedTo: linkedTo }))
                  }}
                  options={[
                    'Select an Option',
                    { label: 'Link to Course', value: 'Link to Course' },
                    { label: 'Link to Cart', value: 'Link to Cart' },
                    { label: 'Link to Category', value: 'Link to Category' },
                    { label: 'Link to Bundle', value: 'Link to Bundle' },
                  ]}
                />
              </div>
              <div className="width-dec10 margin-down-and-top">
                <label htmlFor="selettest">Coupon Code Display On Front :</label>
                <CFormSwitch
                  id="selettest"
                  onChange={(e) => {
                    if (stateTrue === 'true') {
                      setStateTrue('false')
                      setDataHandle((value) => ({ ...value, couponCodeDisplayFront: stateTrue }))
                    } else {
                      setStateTrue('true')
                      setDataHandle((value) => ({ ...value, couponCodeDisplayFront: stateTrue }))
                    }
                  }}
                />
                <p className="margin-down-and-top">
                  {' '}
                  (If Choose Yes then Coupon Code shows to all users)
                </p>
              </div>
              <div className="width-dec10 margin-down-and-top">
                <CInputGroup className="mb-3">
                  <CInputGroupText>$</CInputGroupText>
                  <CFormInput
                    onChange={(e) => {
                      const minAmount = e.target.value
                      setDataHandle((value) => ({ ...value, minAmount: minAmount }))
                    }}
                    aria-label="Amount (to the nearest dollar)"
                  />
                </CInputGroup>
              </div>
              <div className="width-dec10 margin-down-and-top">
                <CDatePicker
                  onDateChange={(date) => {
                    setDataHandle((value) => ({ ...value, expiryDate: date }))
                  }}
                  label="Expiry Date :"
                  locale="en-US"
                />
              </div>
              <div className="width-dec10">
                <CFormInput
                  type="text"
                  id="exampleFormControlInput2"
                  label="Max Usage Limit :"
                  placeholder="Max Limit"
                  onChange={(e) => {
                    const maxUage = e.target.value
                    setDataHandle((value) => ({ ...value, maxUsageLimit: maxUage }))
                  }}
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
              <div className="width-dec10 margin-down-and-top d-flex justify-content-space-evenly">
                <CButton color="danger" size="sm" variant="outline">
                  Reset
                </CButton>
                <CButton color="primary" onClick={onSubmitCoupon} size="sm" variant="outline">
                  Create
                </CButton>
              </div>
            </CForm>
          </div>
        </CCol>
        <CCol>
          <div className="background-white-border-radious">
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
                elementCover
                columns={columns}
                columnSorter
                items={col}
                itemsPerPageSelect
                itemsPerPage={10}
                pagination
                scopedColumns={{
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
                                value-get={item.couponDataId}
                                onClick={(e) => {
                                  let CouponIdGet = e.target.getAttribute('value-get')
                                  setCouponId(CouponIdGet)
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
                }}
                selectable
                sorterValue={{ column: 'User', state: 'asc' }}
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
  )
}

export default Coupon
