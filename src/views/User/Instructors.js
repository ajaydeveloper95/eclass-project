import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CSmartTable, CButton, CBadge, CPopover, CAvatar } from '@coreui/react-pro'
import { cilOptions, cilTrash, cilPen, cilArrowLeft } from '@coreui/icons'
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

  const ImgAdd = 'https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg'

  for (let key in instState) {
    col[key] = {
      id: key,
      name: `${instState[key].fName} ${instState[key].lName} `,
      InstructoreEmail: `${instState[key].email}`,
      role: `${instState[key].role}`,
      status: instState[key].isActive ? 'Approved' : 'Denied',
      mobileNumber: instState[key].mobileNumber,
      Image: ImgAdd,
    }
  }

  console.log(col)
  console.log(instState)

  const columns = [
    {
      key: 'Image',
      _style: { width: '20%' },
      _props: { className: 'fw-semibold' },
    },
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
      <div className="background-white-border-radious padding-20px-10px mb-4">
        <div>
          <div className="d-flex justity-content-flex-end">
            <div className="positin-ablsoute-set">
              <CButton color="primary" type="submit" variant="outline">
                <CIcon icon={cilArrowLeft} /> Back
              </CButton>
            </div>
          </div>
        </div>
        <CSmartTable
          activePage={3}
          cleaner
          columns={columns}
          columnSorter
          items={col}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          scopedColumns={{
            Image: (item) => (
              <td>
                <img src={item.Image} style={{ width: '100px' }} />
              </td>
            ),
            InstructoreEmail: (item) => (
              <td>
                <p>
                  {' '}
                  <span className="font-blod">E-mail :</span> {item.InstructoreEmail}
                </p>{' '}
                <p>
                  <span className="font-blod">Mobile No:</span> {item.mobileNumber}
                </p>
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
                          alignItems: 'start',
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
    </>
  )
}

export default Instructors
