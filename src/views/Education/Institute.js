import React, { useState, useEffect } from 'react'
import { adminUrl } from 'src/RouteDynamic'
import axios from 'axios'

import {
  CSmartTable,
  CButton,
  CModal,
  CModalHeader,
  CPopover,
  CImage,
  CModalTitle,
  CModalFooter,
  CModalBody,
} from '@coreui/react-pro'
import { cilPlus, cilOptions, cilTrash, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function Institute() {
  document.title = 'Eclass - Institutes'
  const [instuteData, setInstuteData] = useState([])
  const [instuteDataRender, setInstuteDataRender] = useState([])
  const [instuteIdDelete, setInstuteDeleteId] = useState('')
  const [visibleDelete, setVisibleDelete] = useState(false)
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columns = [
    {
      key: 'Image',
      sorter: false,
      _style: { width: '10%' },
      _props: { className: 'fw-semibold' },
    },
    { key: 'InstituteName', _style: { width: '25%' } },
    { key: 'Details', sorter: false, _style: { width: '25%' } },
    { key: 'Skills', _style: { width: '30%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
      _props: { className: 'fw-semibold' },
    },
  ]

  useEffect(() => {
    axios
      .get(`${adminUrl}getInstitute`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((data) => {
        const mainCourseData = data.data.data
        setInstuteData(mainCourseData)
        let coldata = []
        for (let item in mainCourseData) {
          coldata[item] = {
            id: item,
            InstituteName: mainCourseData[item].instituteName,
            Details: {
              Contact: mainCourseData[item].mobile,
              About: mainCourseData[item].about,
            },
            Skills: mainCourseData[item].skills,
            instuteId: mainCourseData[item]._id,
            _props: { align: 'middle' },
          }
        }
        setInstuteDataRender(coldata)
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
  }, [])
  const usersData = [
    {
      id: 0,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      _props: { align: 'middle' },
    },
    {
      id: 1,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      _props: { align: 'middle' },
    },
    {
      id: 2,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
      _props: { align: 'middle' },
    },
    {
      id: 3,
      Image: Cimg,
      InstituteName: 'good',
      Details: 'Guest',
      Skills: 'Learn Microsoft Excel Beginner',
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
    axios
      .post(
        `${adminUrl}deleteInstitute`,
        { _id: instuteIdDelete },
        {
          headers: { access_token: localStorage.getItem('access_token') },
        },
      )
      .then((data) => {
        console.log('success')
      })
      .catch((err) => {
        console.log('Some issue ', err)
      })
    setVisibleDelete(!visibleDelete)
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
          items={instuteDataRender}
          itemsPerPageSelect
          itemsPerPage={10}
          pagination
          scopedColumns={{
            Image: (item) => (
              <td>
                <CImage rounded thumbnail src={item.Image} width={50} height={50} />
              </td>
            ),
            Details: (item) => (
              <td>
                <p>Contact : {item.Details.Contact}</p>
                <p>About : {item.Details.About}</p>
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
                          value-get={item.instuteId}
                          onClick={onClickEditLang}
                          style={{ textDecoration: 'none', color: 'black' }}
                          color="link"
                        >
                          <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                        </CButton>
                        <CButton
                          value-get={item.instuteId}
                          onClick={(e) => {
                            const instuteIdGet = e.target.getAttribute('value-get')
                            setInstuteDeleteId(instuteIdGet)
                            setVisibleDelete(!visibleDelete)
                          }}
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
      <div>
        <CModal visible={visibleDelete} onClose={() => setVisibleDelete(false)}>
          <CModalHeader onClose={() => setVisibleDelete(false)}>
            <CModalTitle>Modal title</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <p>Do you really want to delete these records? This process cannot be undone.</p>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisibleDelete(false)}>
              No
            </CButton>
            <CButton onClick={onClickDeletLang} color="primary">
              Yes
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    </div>
  )
}

export default Institute
