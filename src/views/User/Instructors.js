import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { CSmartTable, CButton, CBadge, CPopover } from '@coreui/react-pro'
import { cilOptions, cilTrash, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import AuthFun from 'src/components/Pages/AuthFunction/AuthFun'
function Instructors() {
  const [instState, setinstState] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/getInstructorList', {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((instruct) => {
        setinstState(instruct.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  let col = []

  for (let key in instState) {
    col[key] = {
      id: key,
      name: `${instState[key].fName} ${instState[key].lName} `,
      InstructoreEmail: `${instState[key].email}`,
      role: `${instState[key].role}`,
      status: instState[key].isActive ? 'Approved' : 'Denied',
      mobileNumber: instState[key].mobileNumber,
    }
  }

  console.log(col)
  console.log(instState)

  const columns = [
    {
      key: 'name',
      _style: { width: '30%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'InstructoreEmail', filter: false, sorter: false, _style: { width: '40%' } },
    { key: 'status', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]
  // const usersData = [
  //   { id: 0, name: 'John Doe', InstructoreInfo: 'Guest', status: 'Pending' },
  //   {
  //     id: 1,
  //     name: 'Samppa Nori',
  //     InstructoreInfo: 'Member',
  //     status: 'Active',
  //     _props: { color: 'primary', align: 'middle' },
  //   },
  //   {
  //     id: 2,
  //     name: 'Estavan Lykos',
  //     InstructoreInfo: 'Staff',
  //     status: 'Banned',
  //     _cellProps: { all: { className: 'fw-semibold' }, name: { color: 'info' } },
  //   },
  //   // { id: 3, name: 'Chetan Mohamed', registered: '2022/02/07', InstructoreInfo: 'Admin', status: 'Inactive' },
  //   // {
  //   //   id: 4,
  //   //   name: 'Derick Maximinus',
  //   //   registered: '2022/03/19',
  //   //   InstructoreInfo: 'Member',
  //   //   status: 'Pending',
  //   // },
  //   // { id: 5, name: 'Friderik Dávid', registered: '2022/01/21', InstructoreInfo: 'Staff', status: 'Active' },
  //   // { id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Active' },
  //   // {
  //   //   id: 7,
  //   //   name: 'Avram Tarasios',
  //   //   registered: '2022/02/07',
  //   //   InstructoreInfo: 'Staff',
  //   //   status: 'Banned',
  //   //   _props: { color: 'warning', align: 'middle' },
  //   // },
  //   // { id: 8, name: 'Quintin Ed', registered: '2022/02/07', InstructoreInfo: 'Admin', status: 'Inactive' },
  //   // { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', InstructoreInfo: 'Member', status: 'Pending' },
  //   // { id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21', InstructoreInfo: 'Staff', status: 'Active' },
  //   // { id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Active' },
  //   // {
  //   //   id: 12,
  //   //   name: 'Nehemiah Tatius',
  //   //   registered: '2022/02/07',
  //   //   InstructoreInfo: 'Staff',
  //   //   status: 'Banned',
  //   //   _selected: true,
  //   // },
  //   // { id: 13, name: 'Ebbe Gemariah', registered: '2022/02/07', InstructoreInfo: 'Admin', status: 'Inactive' },
  //   // {
  //   //   id: 14,
  //   //   name: 'Eustorgios Amulius',
  //   //   registered: '2022/03/19',
  //   //   InstructoreInfo: 'Member',
  //   //   status: 'Pending',
  //   // },
  //   // { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', InstructoreInfo: 'Staff', status: 'Active' },
  //   // { id: 16, name: 'Pompeius René', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Active' },
  //   // { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07', InstructoreInfo: 'Staff', status: 'Banned' },
  //   // {
  //   //   id: 18,
  //   //   name: 'Micheal Mercurius',
  //   //   registered: '2022/02/07',
  //   //   InstructoreInfo: 'Admin',
  //   //   status: 'Inactive',
  //   // },
  //   // {
  //   //   id: 19,
  //   //   name: 'Ganesha Dubhghall',
  //   //   registered: '2022/03/19',
  //   //   InstructoreInfo: 'Member',
  //   //   status: 'Pending',
  //   // },
  //   // { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', InstructoreInfo: 'Staff', status: 'Active' },
  //   // { id: 21, name: 'Vishnu Serghei', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Active' },
  //   // { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07', InstructoreInfo: 'Staff', status: 'Banned' },
  //   // { id: 23, name: 'Aulus Agmundr', registered: '2022/01/01', InstructoreInfo: 'Member', status: 'Pending' },
  //   // {
  //   //   id: 42,
  //   //   name: 'Ford Prefect',
  //   //   registered: '2001/05/25',
  //   //   InstructoreInfo: 'Alien',
  //   //   status: "Don't panic!",
  //   // },
  // ]

  const onClickEditLang = (e) => {
    const clickEdit = e.currentTarget.getAttribute('value-get')
    console.log(clickEdit)
  }

  const onClickDeletLang = (e) => {
    console.log('delet on click handle')
  }

  const getBadge = (status) => {
    switch (status) {
      case 'Approved':
        return 'success'
      case 'Denied':
        return 'danger'
      default:
        return 'primary'
    }
  }

  return (
    <>
      <AuthFun />
      <CSmartTable
        activePage={3}
        cleaner
        // clickableRows
        columns={columns}
        // columnFilter
        columnSorter
        // footer
        items={col}
        itemsPerPageSelect
        itemsPerPage={5}
        pagination
        scopedColumns={{
          InstructoreEmail: (item) => (
            <td>
              <p>E-mail : {item.InstructoreEmail}</p> <p>Mobile No: {item.mobileNumber}</p>
            </td>
          ),
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
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
    </>
  )
}

export default Instructors
