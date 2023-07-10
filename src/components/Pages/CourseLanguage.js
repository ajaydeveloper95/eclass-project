import React, { useEffect, useState } from 'react'
import { adminUrl } from '../../RouteDynamic'
import { CSmartTable, CFormSwitch, CPopover, CButton } from '@coreui/react-pro'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilOptions, cilPen, cilTrash } from '@coreui/icons'

function CourseLanguage() {
  document.title = 'Eclass - CourseLanguage'
  const [courseLang, setcourseLang] = useState([])
  useEffect(() => {
    axios
      .get(`${adminUrl}getCourseLanguage`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((testmoni) => {
        setcourseLang(testmoni.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  let col = []

  for (let key in courseLang) {
    col[key] = {
      id: key,
      name: `${courseLang[key].name}`,
      Status: `${courseLang[key].isActive}`,
      Action: `${courseLang[key].designation}`,
      // langId: courseLang[key]._id,
    }
  }

  const StatusCheck = (Status) => {
    switch (Status) {
      case 'true':
        return 0
      case 'false':
        return 1

      default:
        return -1
    }
  }

  const onClickEditLang = (e) => {
    const clickEdit = e.currentTarget.getAttribute('value-get')
    console.log(clickEdit)
  }

  const onClickDeletLang = (e) => {
    console.log('delet on click handle')
  }

  return (
    <CSmartTable
      items={col}
      //   columnFilter
      columnSorter
      scopedColumns={{
        Status: (item) => (
          <td>
            {StatusCheck(item.Status) === 0 ? (
              <CFormSwitch
                onChange={(e) => {
                  console.log('1 ')
                }}
                id="formSwitchCheckChecked"
                defaultChecked
              />
            ) : (
              <CFormSwitch
                onChange={(e) => {
                  console.log(e.target.value)
                }}
                id="formSwitchCheckChecked"
              />
            )}
          </td>
        ),
        Action: (item) => (
          <td>
            <CPopover
              content={
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
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
        ),
      }}
      pagination
      tableProps={{
        hover: true,
      }}
    />
  )
}

export default CourseLanguage
