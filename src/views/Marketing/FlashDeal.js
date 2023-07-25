import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'
import React, { useState, useEffect } from 'react'
import { cilTrash, cilPen, cilOptions, cilArrowLeft } from '@coreui/icons'
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
  CFormInput,
  CDatePicker,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import axios from 'axios'

function FlashDeal() {
  const [StatusState, setStatusState] = useState('0')
  const [Deal, setDeal] = useState([])
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [UpdateDeal, setUpdateDeal] = useState([])
  const [dataHandle, setDataHandle] = useState([])
  const [Deleteflaseid, setDeleteflaseid] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/getFlashDeals', {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((result) => {
        setDeal(result.data.data)
      })
      .catch((e) => {
        console.log('some issue on Server', e)
      })
  }, [])

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columns = [
    { key: 'Number', _style: { width: '10%' } },
    { key: 'Deal_Name', _style: { width: '20%' } },
    { key: 'Start_Date', _style: { width: '20%' } },
    { key: 'End_Date', _style: { width: '20%' } },
    {
      key: 'Image',
      sorter: false,
      _style: { width: '15%' },
      _props: { className: 'fw-semibold' },
    },
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
  for (let item in Deal) {
    col[item] = {
      id: item,
      Number: item,
      Image: Deal[item].backgroundImage,
      Deal_Name: Deal[item].title,
      Start_Date: Deal[item].startDate,
      End_Date: Deal[item].endDate,
      FlashDealId: Deal[item]._id,
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

  const Deletonpopuphandal = () => {}

  const onClickEditCate = (e) => {
    let EditId = e.target.getAttribute('value-get')
    for (let item in Deal) {
      if (Deal[item]._id === EditId) {
        setUpdateDeal(Deal[item])
        break
      }
    }
    setVisibleEdit(true)
  }

  const onClickDeletCate = (e) => {
    let flashDealId = e.target.getAttribute('value-get')
    setDeleteflaseid(flashDealId)
    setVisibleDelete(true)
  }

  return (
    <>
      <AuthFun />
      <div className="background-white-border-radious">
        <div className="container">
          <div className="margin-down-and-top">
            <div className="background-white-border-radious">
              <div>
                <div className="d-flex justity-content-flex-end">
                  <div className="positin-ablsoute-set mt-4">
                    <CButton color="primary" type="submit" variant="outline">
                      <CIcon icon={cilArrowLeft} /> Back
                    </CButton>
                  </div>
                </div>
              </div>
              <div className="padding-20px-10px">
                <CSmartTable
                  activePage={3}
                  cleaner
                  clickableRows
                  columns={columns}
                  columnSorter
                  items={col}
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
                                    value-get={item.FlashDealId}
                                    onClick={onClickEditCate}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                    color="link"
                                  >
                                    <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                                  </CButton>
                                  <CButton
                                    value-get={item.FlashDealId}
                                    onClick={onClickDeletCate}
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
                    value={UpdateDeal.title}
                    onChange={(e) => {
                      setUpdateDeal((value) => ({ ...value, title: e.target.value }))
                    }}
                    label="Deal Name"
                    placeholder="Enter Deal Name"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <h6>Start Date</h6>
                  <CDatePicker
                    date="2023/03/15 02:22:13 PM"
                    locale="en-US"
                    timepicker
                    value={UpdateDeal.startDate}
                    onChange={(e) => {
                      setUpdateDeal((value) => ({ ...value, startDate: e.target.value }))
                    }}
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <h6>End Date</h6>
                  <CDatePicker
                    date="2023/03/15 02:22:13 PM"
                    locale="en-US"
                    timepicker
                    value={UpdateDeal.endDate}
                    onChange={(e) => {
                      setUpdateDeal((value) => ({ ...value, endDate: e.target.value }))
                    }}
                  />
                </div>
                <div className="width-dec10 mt-2">
                  <div className="mb-3">
                    <CFormInput
                      type="file"
                      id="formFile"
                      label="Upload Image"
                      placeholder="Image"
                      // value={UpdateDeal.backgroundImage}
                      // onChange={(e) => {
                      //   setUpdateDeal((value) => ({ ...value, backgroundImage: e.target.value }))
                      // }}
                    />
                  </div>
                </div>
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisibleEdit(false)}>
                No
              </CButton>
              <CButton color="primary">Update</CButton>
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
              <CButton color="primary" onClick={Deletonpopuphandal}>
                Yes
              </CButton>
            </CModalFooter>
          </CModal>
        </div>
      </div>
    </>
  )
}

export default FlashDeal
