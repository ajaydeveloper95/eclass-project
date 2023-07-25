import React, { useState, useEffect } from 'react'
import { adminUrl } from '../../RouteDynamic'
import { CSmartTable, CButton, CImage, CFormSwitch, CPopover } from '@coreui/react-pro'
import { cilLockLocked, cilOptions, cilTrash, cilPen, cilZoom } from '@coreui/icons'
import axios from 'axios'
import CIcon from '@coreui/icons-react'

function AllUser() {
  document.title = 'Eclass - All User'
  const [userState, setUserState] = useState([])
  const [SwitchSetup, setSwitchSetup] = useState('Alluser')
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  useEffect(() => {
    axios
      .get(`${adminUrl}getUsers`)
      .then((alluser) => {
        setUserState(alluser.data.data)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })
  }, [])

  console.log(userState)
  let col = []

  for (let key in userState) {
    col[key] = {
      id: key,
      Image: Cimg,
      Profile: `One`,
      UserDetails: `${userState[key].fName} ${userState[key].lName}`,
      UserEmail: `${userState[key].email}`,
      UserMobile: `${userState[key].mobileNumber}`,
      role: `${userState[key].role}`,
      LoginAsUser: '',
      status: `${userState[key].isActive}`,
      _props: { align: 'middle' },
    }
  }

  const columns = [
    { key: 'Profile', _style: { width: '10%' } },
    {
      key: 'Image',
      _style: { width: '15%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'UserDetails', _style: { width: '35%' } },
    { key: 'role', _style: { width: '15%' } },
    { key: 'LoginAsUser', filter: false, sorter: false, _style: { width: '15%' } },
    { key: 'status', filter: false, sorter: false, _style: { width: '20%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '10%' },
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
      case 'true':
        return 0
      case 'false':
        return 1
      default:
        return -1
    }
  }

  switch (SwitchSetup) {
    case 'students':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              active
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Students</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add Students
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
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
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        {' '}
                        <span className="font-blod">Name : </span> {item.UserDetails}
                      </p>
                      <p>
                        {' '}
                        <span className="font-blod">Email : </span> {item.UserEmail}
                      </p>
                      <p>
                        {' '}
                        <span className="font-blod">Mobile : </span> {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                }}
                selectable
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
      )
    case 'instructors':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              active
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Instructors</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add Instructors
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
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
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span> {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span> {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span> {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
      )
    case 'admins':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              active
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Admins</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add Admin
                </CButton>
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
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span> {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
      )
    case 'Alluser':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              active
              color="primary"
              variant="outline"
              uniqueattriname="Alluser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Users</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add User
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
                <CButton className="margin-right" color="success" variant="outline">
                  Import
                </CButton>
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
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span>
                        {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
      )
    case 'Verify':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              active
              color="primary"
              variant="outline"
              uniqueattriname="Verifyuser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Verifyuser
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>Verify Users</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add User
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
                <CButton className="margin-right" color="success" variant="outline">
                  Import
                </CButton>
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
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span>
                        {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
      )
    case 'Blocked':
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton
              className="margin-right"
              active
              color="primary"
              variant="outline"
              uniqueattriname="Verifyuser"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Verifyuser
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>Blocked Users</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add User
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
                <CButton className="margin-right" color="success" variant="outline">
                  Import
                </CButton>
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
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span>
                        {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
      )
    default:
      return (
        <div className="background-white-border-radious">
          <div className="padding-20px-10px">
            <CButton className="margin-right" active color="primary" variant="outline">
              All Users
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              uniqueattriname="students"
              variant="outline"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                console.log(val)
                setSwitchSetup(val)
              }}
            >
              Students
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="instructors"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Instructors
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="admins"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Admins
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Verify"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Verify User
            </CButton>
            <CButton
              className="margin-right"
              color="primary"
              variant="outline"
              uniqueattriname="Blocked"
              onClick={(e) => {
                let val = e.currentTarget.getAttribute('uniqueattriname')
                setSwitchSetup(val)
              }}
            >
              Blocked User
            </CButton>
          </div>
          <hr />
          <div>
            <div className="display-flex-justify-space-between-padding">
              <p>All Users</p>
              <div>
                <CButton className="margin-right" color="info" variant="outline">
                  Add User
                </CButton>
                <CButton className="margin-right" color="warning" variant="outline">
                  Delete Selected
                </CButton>
                <CButton className="margin-right" color="success" variant="outline">
                  Import
                </CButton>
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
                itemsPerPage={5}
                pagination
                scopedColumns={{
                  Image: (item) => (
                    <td>
                      <CImage rounded thumbnail src={item.Image} width={100} height={100} />
                    </td>
                  ),
                  UserDetails: (item) => (
                    <td>
                      <p>
                        <span className="font-blod">Name : </span>
                        {item.UserDetails}
                      </p>
                      <p>
                        <span className="font-blod">Email : </span>
                        {item.UserEmail}
                      </p>
                      <p>
                        <span className="font-blod">Mobile : </span>
                        {item.UserEmail}
                      </p>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      {getBadge(item.status) === 0 ? (
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                      ) : (
                        <CFormSwitch id="formSwitchCheckChecked" />
                      )}
                    </td>
                  ),
                  LoginAsUser: (item) => (
                    <td>
                      <CButton color="link">
                        <CIcon icon={cilLockLocked} size="xxl" />
                      </CButton>
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
                              <CButton
                                value-get={item.langId}
                                onClick={onClickDeletLang}
                                style={{ textDecoration: 'none', color: 'black' }}
                                color="link"
                              >
                                <CIcon style={{ margin: '0px 10px' }} icon={cilZoom}></CIcon>View
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
                sorterValue={{ column: 'Role', state: 'asc' }}
                tableFilter
                tableFilterLabel="Search : "
                tableFilterPlaceholder=""
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
      )
  }
}

export default AllUser
