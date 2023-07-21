import React, { useState } from 'react'
import { CSmartTable, CButton, CCardBody, CCollapse, CBadge, CPopover } from '@coreui/react-pro'
import { cilOptions, cilPlus, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CModalFooter,
} from '@coreui/react'

function RoleAndPermission() {
  const [details, setDetails] = useState([])
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [visibleDelete, setVisibleDelete] = useState(false)

  const columns = [
    {
      key: 'RoleName',
      _style: { width: '50%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'Action', _style: { width: '30%' } },
  ]
  const usersData = [
    { id: 0, RoleName: 'John Doe', Action: 'Pending', _props: { align: 'middle' } },
    {
      id: 1,
      RoleName: 'Samppa Nori',
      Action: 'Active',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      RoleName: 'Estavan Lykos',
      Action: 'Banned',
      _props: { align: 'middle' },
    },
  ]

  const onClickEditLang = (e) => {
    setVisibleEdit(true)
  }

  const onClickDeletLang = (e) => {
    setVisibleDelete(true)
  }

  return (
    <>
      <div className="background-white-border-radious">
        <AuthFun />
        <div className="display-flex-justify-space-between-padding">
          <div>
            <p className="text-weight-1-3rem">Roles</p>
          </div>
          <div>
            <CButton
              className="mx-3"
              href="/education/bundleform"
              color="success"
              variant="outline"
            >
              <CIcon icon={cilPlus} /> Create A New Role
            </CButton>
          </div>
        </div>
        <hr />
        <div className="padding-20px-10px">
          <CSmartTable
            activePage={3}
            cleaner
            columns={columns}
            columnSorter
            items={usersData}
            itemsPerPageSelect
            itemsPerPage={5}
            pagination
            scopedColumns={{
              Action: (item) => {
                return (
                  <td>
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
                      label="Role Name"
                      placeholder="Enter Role Name"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
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
                <CButton color="primary">Yes</CButton>
              </CModalFooter>
            </CModal>
          </div>
        </div>
      </div>
    </>
  )
}

export default RoleAndPermission
