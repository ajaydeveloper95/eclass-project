import React, { useState } from 'react'
import { CSmartTable, CButton, CCollapse, CCardBody, CAvatar } from '@coreui/react-pro'
import {} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { CPopover } from '@coreui/react-pro'
import { cilTrash, cilPen, cilZoom } from '@coreui/icons'

function InstructorePayout() {
  const [details, setDetails] = useState([])

  const columns = [
    {
      key: 'instructor',
      _style: { width: '55%' },
    },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '30%' },
      filter: false,
      sorter: false,
    },
  ]
  const usersData = [
    {
      id: 1,
      instructor: 'Samppa Nori',
    },
    {
      id: 2,
      instructor: 'Estavan Lykos',
    },
    {
      id: 3,
      instructor: 'Chetan Mohamed',

      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
      _selected: true,
    },
    {
      id: 4,
      instructor: 'Derick Maximinus',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 5,
      instructor: 'Friderik Dávid',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
    },
    {
      id: 6,
      instructor: 'Yiorgos Avraamu',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 7,
      instructor: 'Avram Tarasios',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
      _selected: true,
    },
    {
      id: 8,
      instructor: 'Quintin Ed',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 9,
      instructor: 'Enéas Kwadwo',
      avatar: '9.jpg',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 10,
      instructor: 'Agapetus Tadeáš',
      avatar: '10.jpg',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
    },
    {
      id: 11,
      instructor: 'Carwyn Fachtna',
      avatar: '11.jpg',
      registered: '2022/01/01',
      role: 'Member',
      status: 'Active',
    },
    {
      id: 12,
      instructor: 'Nehemiah Tatius',
      avatar: '12.jpg',
      registered: '2022/02/07',
      role: 'Staff',
      status: 'Banned',
      _selected: true,
    },
    {
      id: 13,
      instructor: 'Ebbe Gemariah',
      avatar: '13.jpg',
      registered: '2022/02/07',
      role: 'Admin',
      status: 'Inactive',
    },
    {
      id: 14,
      instructor: 'Eustorgios Amulius',
      avatar: '14.jpg',
      registered: '2022/03/19',
      role: 'Member',
      status: 'Pending',
    },
    {
      id: 15,
      instructor: 'Leopold Gáspár',
      avatar: '15.jpg',
      registered: '2022/01/21',
      role: 'Staff',
      status: 'Active',
    },
  ]
  // const getBadge = (status) => {
  //   switch (status) {
  //     case 'Active':
  //       return 'success'
  //     case 'Inactive':
  //       return 'secondary'
  //     case 'Pending':
  //       return 'warning'
  //     case 'Banned':
  //       return 'danger'
  //     default:
  //       return 'primary'
  //   }
  // }
  // const toggleDetails = (index) => {
  //   const position = details.indexOf(index)
  //   let newDetails = details.slice()
  //   if (position !== -1) {
  //     newDetails.splice(position, 1)
  //   } else {
  //     newDetails = [...details, index]
  //   }
  //   setDetails(newDetails)
  // }

  const onClickEditLang = (e) => {
    const clickEdit = e.currentTarget.getAttribute('value-get')
    console.log(clickEdit)
  }

  const onClickDeletLang = (e) => {
    console.log('delet on click handle')
  }

  return (
    <>
      <div className="background-color-and-padding">
        <CSmartTable
          activePage={2}
          cleaner
          clickableRows
          columns={columns}
          columnSorter
          footer
          items={usersData}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          onFilteredItemsChange={(items) => {
            console.log(items)
          }}
          onSelectedItemsChange={(items) => {
            console.log(items)
          }}
          scopedColumns={{
            avatar: (item) => (
              <td>
                <CAvatar src={`/images/avatars/${item.avatar}`} />
              </td>
            ),
            show_details: (item) => {
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
                        <CButton
                          value-get={item.langId}
                          onClick={onClickDeletLang}
                          style={{ textDecoration: 'none', color: 'black' }}
                          color="link"
                        >
                          <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>
                          View
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
          sorterValue={{ column: 'status', state: 'asc' }}
          tableFilter
          tableProps={{
            className: 'add-this-class',
            responsive: true,
            striped: true,
            hover: true,
          }}
          tableBodyProps={{
            className: 'align-middle',
          }}
        />
      </div>
    </>
  )
}

export default InstructorePayout
