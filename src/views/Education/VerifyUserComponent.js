import React, { useState, useEffect } from 'react'
import { CButton, CCardBody, CCollapse, CSmartTable, CAlert } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle } from '@coreui/icons'
import axios from 'axios'
import AlertFeat from 'src/components/Pages/BasicFeatures/AlertFeat'

function VerifyUserComponent() {
  const [details, setDetails] = useState([])
  const [allUser, setAllUser] = useState([])
  const [updatedData, setupdatedData] = useState([])
  const [visibleAlertSuccess, setvisibleAlertSuccess] = useState(false)
  const [visibleAlertValue, setvisibleAlertValue] = useState('')

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
        setvisibleAlertSuccess(true)
        setvisibleAlertValue('Update')
        setTimeout(() => {
          setvisibleAlertSuccess(false)
        }, 2000)
      })
      .catch((e) => {
        console.log('Some Error', e)
      })
  }

  const onVerifiedBtn = (e) => {
    let getData = e.currentTarget.getAttribute('value-get')
    console.log(getData)
    UserVerifyAndBlocked(getData, false)
  }

  // useeffect and get data
  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/getUsers')
      .then((result) => {
        const AllUserData = result.data.data
        setAllUser(AllUserData)
        let setupAll = []
        let UserVerifyNumber = 0
        for (let item in AllUserData) {
          if (AllUserData[item].isVerified) {
            setupAll[UserVerifyNumber] = {
              id: UserVerifyNumber,
              name: `${AllUserData[item].fName} ${AllUserData[item].lName}`,
              Role: AllUserData[item].role,
              verified: AllUserData[item].isVerified,
              email: AllUserData[item].email,
              userid: AllUserData[item]._id,
              mobileNumber: AllUserData[item].mobileNumber,
            }
            UserVerifyNumber++
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
    {
      key: 'Role',
      _style: { width: '30%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'verified', _style: { width: '30%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '10%' },
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
    <>
      <div>
        <div className="for-test">
          <CAlert
            visible={visibleAlertSuccess}
            color="success"
            dismissible
            className="d-flex align-items-center cAlert-custom-class-set-fit"
            onClose={() => setvisibleAlertSuccess(false)}
          >
            <CIcon icon={cilCheckCircle} className="flex-shrink-0 me-2" width={24} height={24} />
            <div>Element {visibleAlertValue} Successfully</div>
          </CAlert>
        </div>
      </div>
      <div>
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
            verified: (item) => (
              <td>
                <CButton
                  value-get={item.userid}
                  onClick={onVerifiedBtn}
                  color={getVerified(item.verified)}
                >
                  Click On Block
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
                      <CButton
                        style={{ margin: '0px 20px' }}
                        size="sm"
                        color="danger"
                        className="ml-1"
                      >
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
      </div>
    </>
  )
}

export default VerifyUserComponent
