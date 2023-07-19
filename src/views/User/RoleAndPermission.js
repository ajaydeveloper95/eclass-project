import React, { useState } from 'react'
import { CSmartTable, CButton, CCardBody, CCollapse, CBadge, CPopover } from '@coreui/react-pro'
import { cilOptions, cilPlus, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { cilTrash } from '@coreui/icons'

function RoleAndPermission() {
  const [details, setDetails] = useState([])
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

  return (
    <div className="background-white-border-radious">
      <div className="display-flex-justify-space-between-padding">
        <div>
          <p className="text-weight-1-3rem">Roles</p>
        </div>
        <div>
          <CButton className="mx-3" href="/education/bundleform" color="success" variant="outline">
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
  )
}

export default RoleAndPermission
