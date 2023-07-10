import React, { useState, useEffect } from 'react'
import { CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'
import axios from 'axios'

function VerifyUser() {
  document.title = 'Eclass - User Verify'
  const [details, setDetails] = useState([])
  const [allUser, setAllUser] = useState([])
  const [updatedData, setupdatedData] = useState([])

  // user Verified and Blocked function
  const UserVerifyAndBlocked = (id, getBol) => {
    const _id = id
    const isActive = getBol
    console.log(_id)
    console.log(isActive)
    axios
      .post(
        'http://localhost:5000/admin/isVerifiedUser',
        { _id: _id, isVerified: isActive },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((Value) => {
        console.log(Value)
      })
      .catch((e) => {
        console.log('Some Error', e)
      })
  }

  const onVerifiedBtn = (e) => {
    let getData = e.currentTarget.getAttribute('value-get')
    console.log(getData)
    UserVerifyAndBlocked(getData, true)
  }

  const onBlockedBtn = (e) => {
    let getDataBlocked = e.currentTarget.getAttribute('value-get')
    console.log(getDataBlocked)
    UserVerifyAndBlocked(getDataBlocked, false)
  }

  // useeffect and get data
  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/getUsers')
      .then((result) => {
        const AllUserData = result.data.data
        setAllUser(AllUserData)
        let setupAll = []
        for (let item in AllUserData) {
          setupAll[item] = {
            id: item,
            name: `${AllUserData[item].fName} ${AllUserData[item].lName}`,
            Role: AllUserData[item].role,
            verified: AllUserData[item].isVerified,
            Blocked: !AllUserData[item].isVerified ? true : false,
            email: AllUserData[item].email,
            userid: AllUserData[item]._id,
            mobileNumber: AllUserData[item].mobileNumber,
          }
        }
        setupdatedData(setupAll)
      })
      .catch((err) => {
        console.log('some Internel Server Error ', err)
      })
  }, [])

  const columns = [
    {
      key: 'name',
      _style: { width: '30%' },
      _props: { className: 'fw-semibold' },
    },
    'Role',
    { key: 'verified', _style: { width: '20%' } },
    { key: 'Blocked', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      _props: { className: 'fw-semibold' },
    },
  ]

  const getBadge = (Blocked) => {
    switch (Blocked) {
      case true:
        return 'danger'
      case false:
        return 'light'
      default:
        return 'primary'
    }
  }

  const getVerified = (verified) => {
    switch (verified) {
      case true:
        return 'success'
      case false:
        return 'light'
      default:
        return 'primary'
    }
  }
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

  console.log(updatedData)

  return (
    <CSmartTable
      activePage={3}
      cleaner
      clickableRows
      columns={columns}
      //   columnFilter
      columnSorter
      //   footer
      items={updatedData}
      itemsPerPageSelect
      itemsPerPage={5}
      pagination
      scopedColumns={{
        Blocked: (item) => (
          <td>
            <CButton value-get={item.userid} onClick={onBlockedBtn} color={getBadge(item.Blocked)}>
              Blocked
            </CButton>
          </td>
        ),

        verified: (item) => (
          <td>
            <CButton
              value-get={item.userid}
              onClick={onVerifiedBtn}
              color={getVerified(item.verified)}
            >
              verified
            </CButton>
          </td>
        ),

        show_details: (item) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(item.id)
                }}
              >
                {details.includes(item.id) ? 'Hide' : 'Status'}
              </CButton>
            </td>
          )
        },
        details: (item) => {
          return (
            <CCollapse visible={details.includes(item.id)}>
              <CCardBody className="p-3" style={{ color: 'black' }}>
                <h4>{item.username}</h4>
                <p className="text-muted">Email: {item.email}</p>
                <p className="text-muted">Mobile No: {item.mobileNumber}</p>
                <p className="text-muted">User Role: {item.Role}</p>
                <div>
                  <CButton style={{ margin: '0px 20px' }} size="sm" color="info">
                    Verify User
                  </CButton>
                  <CButton style={{ margin: '0px 20px' }} size="sm" color="danger" className="ml-1">
                    Blocked
                  </CButton>
                </div>
              </CCardBody>
            </CCollapse>
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
  )
}

export default VerifyUser
