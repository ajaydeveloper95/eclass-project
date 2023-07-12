import React, { useState } from 'react'
import {
  CSmartTable,
  CButton,
  CCardBody,
  CCollapse,
  CPopover,
  CImage,
  CFormSwitch,
} from '@coreui/react-pro'
import { cilPlus, cilOptions, cilTrash, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function Institute() {
  document.title = 'Eclass - Institutes'
  const [details, setDetails] = useState([])
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'InstituteName', _style: { width: '20%' } },
    { key: 'Details', sorter: false, _style: { width: '15%' } },
    { key: 'Skills', _style: { width: '20%' } },
    { key: 'Status', sorter: false, _style: { width: '15%' } },
    { key: 'Verify', sorter: false, _style: { width: '15%' } },
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
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      Verify: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      Verify: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      Verify: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      Verify: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    {
      id: 4,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      Verify: 'true',
      Status: 'false',
      _props: { align: 'middle' },
    },
    // { id: 3, name: 'Chetan Mohamed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // {
    //   id: 4,
    //   name: 'Derick Maximinus',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // {
    //   id: 7,
    //   name: 'Avram Tarasios',
    //   registered: '2022/02/07',
    //   role: 'Staff',
    //   status: 'Banned',
    //   _props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, name: 'Quintin Ed', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // { id: 9, name: 'Enéas Kwadwo', registered: '2022/03/19', role: 'Member', status: 'Pending' },
    // { id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // {
    //   id: 12,
    //   name: 'Nehemiah Tatius',
    //   registered: '2022/02/07',
    //   role: 'Staff',
    //   status: 'Banned',
    //   _selected: true,
    // },
    // { id: 13, name: 'Ebbe Gemariah', registered: '2022/02/07', role: 'Admin', status: 'Inactive' },
    // {
    //   id: 14,
    //   name: 'Eustorgios Amulius',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 16, name: 'Pompeius René', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // { id: 17, name: 'Paĉjo Jadon', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    // {
    //   id: 18,
    //   name: 'Micheal Mercurius',
    //   registered: '2022/02/07',
    //   role: 'Admin',
    //   status: 'Inactive',
    // },
    // {
    //   id: 19,
    //   name: 'Ganesha Dubhghall',
    //   registered: '2022/03/19',
    //   role: 'Member',
    //   status: 'Pending',
    // },
    // { id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', role: 'Staff', status: 'Active' },
    // { id: 21, name: 'Vishnu Serghei', registered: '2022/01/01', role: 'Member', status: 'Active' },
    // { id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/07', role: 'Staff', status: 'Banned' },
    // { id: 23, name: 'Aulus Agmundr', registered: '2022/01/01', role: 'Member', status: 'Pending' },
    // {
    //   id: 42,
    //   name: 'Ford Prefect',
    //   registered: '2001/05/25',
    //   role: 'Alien',
    //   status: "Don't panic!",
    // },
  ]

  const onClickEditLang = (e) => {
    const clickEdit = e.currentTarget.getAttribute('value-get')
    console.log(clickEdit)
  }

  const onClickDeletLang = (e) => {
    console.log('delet on click handle')
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

  const ForVerify = (Verify) => {
    switch (Verify) {
      case 'true':
        return 1
      case 'false':
        return 0
      default:
        return -1
    }
  }

  return (
    <div className="background-white-border-radious">
      <div className="display-flex-justify-space-between-padding">
        <div>
          <p className="text-weight-1-3rem">Institutes</p>
        </div>
        <div>
          <CButton className="mx-3" href="/education/bundleform" color="success" variant="outline">
            <CIcon icon={cilPlus} /> Add Institutes
          </CButton>
          <CButton className="mx-3" color="warning" variant="outline">
            <CIcon icon={cilPlus}></CIcon> Import
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
            Verify: (item) => (
              <td>
                {ForVerify(item.Verify) === 0 ? (
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
          }}
          selectable
          sorterValue={{ column: 'BundleName', state: 'asc' }}
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
  )
}

export default Institute
