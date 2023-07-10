import React, { useState } from 'react'

import { CSmartTable, CButton, CCardBody, CCollapse, CBadge } from '@coreui/react-pro'
import { cilOptions, cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function RoleAndPermission() {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'RoleName',
      _style: { width: '60%' },
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
    // { id: 3, name: 'Chetan Mohamed', registered: '2022/02/07', InstructoreInfo: 'Admin', status: 'Inactive' },
    // {
    //   id: 4,
    //   name: 'Derick Maximinus',
    //   registered: '2022/03/19',
    //   InstructoreInfo: 'Member',
    //   status: 'Pending',
    // },
    // { id: 5, name: 'Friderik Dávid', registered: '2022/01/21', InstructoreInfo: 'Staff', status: 'Active' },
    // { id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Active' },
    // {
    //   id: 7,
    //   name: 'Avram Tarasios',
    //   registered: '2022/02/07',
    //   InstructoreInfo: 'Staff',
    //   status: 'Banned',
    //   _props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, name: 'Quintin Ed', registered: '2022/02/07', InstructoreInfo: 'Admin', status: 'Inactive' },
    // { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', InstructoreInfo: 'Member', status: 'Pending' },
    // { id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21', InstructoreInfo: 'Staff', status: 'Active' },
    // { id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Active' },
    // {
    //   id: 12,
    //   name: 'Nehemiah Tatius',
    //   registered: '2022/02/07',
    //   InstructoreInfo: 'Staff',
    //   status: 'Banned',
    //   _selected: true,
    // },
    // { id: 13, name: 'Ebbe Gemariah', registered: '2022/02/07', InstructoreInfo: 'Admin', status: 'Inactive' },
    // {
    //   id: 14,
    //   name: 'Eustorgios Amulius',
    //   registered: '2022/03/19',
    //   InstructoreInfo: 'Member',
    //   status: 'Pending',
    // },
    // { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', InstructoreInfo: 'Staff', status: 'Active' },
    // { id: 16, name: 'Pompeius René', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Active' },
    // { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07', InstructoreInfo: 'Staff', status: 'Banned' },
    // {
    //   id: 18,
    //   name: 'Micheal Mercurius',
    //   registered: '2022/02/07',
    //   InstructoreInfo: 'Admin',
    //   status: 'Inactive',
    // },
    // {
    //   id: 19,
    //   name: 'Ganesha Dubhghall',
    //   registered: '2022/03/19',
    //   InstructoreInfo: 'Member',
    //   status: 'Pending',
    // },
    // { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', InstructoreInfo: 'Staff', status: 'Active' },
    // { id: 21, name: 'Vishnu Serghei', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Active' },
    // { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07', InstructoreInfo: 'Staff', status: 'Banned' },
    // { id: 23, name: 'Aulus Agmundr', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Pending' },
    // {
    //   id: 42,
    //   name: 'Ford Prefect',
    //   registered: '2001/05/25',
    //   InstructoreInfo: 'Alien',
    //   status: "Don't panic!",
    // },
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
          // clickableRows
          columns={columns}
          // columnFilter
          columnSorter
          // footer
          items={usersData}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          scopedColumns={{
            Action: (item) => {
              return (
                <td>
                  <CButton color="dark" variant="outline">
                    <CIcon icon={cilOptions} />
                  </CButton>
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
