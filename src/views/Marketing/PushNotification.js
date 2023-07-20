import { cilTrash, cilPlus, cibSonos } from '@coreui/icons'
import React, { useState, useEffect } from 'react'
import { cilOptions, cilPen } from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'
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
  CFormTextarea,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import axios from 'axios'

function PushNotification() {
  const [details, setDetails] = useState([])
  const [dataHandle, setDataHandle] = useState([])
  const [couponData, setCouponData] = useState([])
  const [updateCoupon, setUpdateCoupon] = useState([])
  const [selectedSetupState, setSelectedSetupState] = useState([])
  const [couponId, setCouponId] = useState('')
  const [stateTrue, setStateTrue] = useState('true')
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)

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

  return (
    <>
      <div className="margin-down-and-top">
        <CRow>
          <CCol>
            <div className="background-white-border-radious">
              <div className="display-flex-justify-space-between-padding">
                <div>
                  <p className="text-weight-1-3rem">All Coupons</p>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <h6>Select Users Group: *</h6>
                    <CFormSelect
                      aria-label="Default select example"
                      options={[
                        'Select Users Group',
                        { label: 'All Users', value: '1' },
                        { label: 'All Instructors', value: '2' },
                        { label: 'All Admin', value: '3' },
                        { label: 'All (Users + Instructors + Admin)', value: '4' },
                      ]}
                    />
                  </div>
                  <div className="col-6">
                    <h6>Subject: *</h6>
                    <CFormInput
                      type="text"
                      placeholder="Default input"
                      aria-label="default input example"
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <h6>Notification Body : *</h6>
                    <CFormTextarea
                      id="floatingTextarea2"
                      style={{ height: '100px' }}
                    ></CFormTextarea>
                  </div>
                  <div className="col-6 mt-4">
                    <h6>Target URL :</h6>
                    <CFormInput
                      type="text"
                      placeholder="https://eclass.mediacity.co.in/demo/public"
                      aria-label="default input example"
                    />
                  </div>
                  <div className="col-6 mt-4">
                    <h6>Notification Icon :</h6>
                    <CFormInput
                      type="text"
                      placeholder="https://someurl/icon.png"
                      aria-label="default input example"
                    />
                  </div>
                  <div className="col-6 mt-4">
                    <h6>Image:</h6>
                    <CFormInput
                      type="text"
                      placeholder="https://someurl/image.png"
                      aria-label="default input example"
                    />
                  </div>
                  <div className="col-6 mt-4">
                    <h6>Show Button:</h6>
                    <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                  </div>
                  <div className="col-12 mb-4">
                    <CLoadingButton color="info" timeout={2000} className="Onebtn mt-3">
                      Reset
                    </CLoadingButton>
                    <CLoadingButton
                      color="success"
                      variant="outline"
                      timeout={2000}
                      className="Twobtn mt-3"
                    >
                      Update
                    </CLoadingButton>
                  </div>
                </div>
              </div>
            </div>
          </CCol>
          <CCol xs={4}>
            <div className="background-white-border-radious padding-20px-10px ">
              <div>
                <p className="text-weight-1-3rem">Add New Coupon</p>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h6>ONESIGNAL APP ID: *</h6>
                    <CFormInput
                      type="text"
                      placeholder="Enter ONESIGNAL APP ID"
                      aria-label="default input example"
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <h6>ONESIGNAL REST API KEY: *</h6>
                    <CFormInput
                      type="text"
                      placeholder="Enter ONESIGNAL REST API KEY"
                      aria-label="default input example"
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <CLoadingButton color="info" className="mt-4 resetbtnone">
                      Reset
                    </CLoadingButton>
                    <CLoadingButton color="success" variant="outline" className="mt-4">
                      Update
                    </CLoadingButton>
                  </div>
                </div>
              </div>
            </div>
          </CCol>
        </CRow>
      </div>
    </>
  )
}

export default PushNotification
