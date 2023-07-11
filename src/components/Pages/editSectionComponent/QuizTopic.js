import { CButton, CFormSwitch, CSmartTable, CAvatar, CPopover } from '@coreui/react-pro'
import React, { useState } from 'react'

import CIcon from '@coreui/icons-react'

import { cilOptions, cilTrash, cilPen, cilTask, cilPlus } from '@coreui/icons'

function QuizTopic() {
  const [details, setDetails] = useState([])
  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  const columnsCourseInclude = [
    {
      key: 'Question',
      _style: { width: '25%' },
    },
    {
      key: 'Marks',
      _style: { width: '15%' },
    },
    {
      key: 'status',
      _style: { width: '15%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'Reattempt',
      _style: { width: '15%' },
      filter: false,
      sorter: false,
    },
    {
      key: 'DueDays',
      _style: { width: '15%' },
    },
    {
      key: 'Type',
      _style: { width: '25%' },
    },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]

  const usersDataCourseInclude = [
    {
      id: 1,
      Question: 'Artifical ',
      Marks: '5',
      DueDays: '3',
      Type: 'Objective',
      status: 'false',
      Reattempt: 'false',
    },
    {
      id: 2,
      Question: 'Artifical ',
      Marks: '5',
      DueDays: '3',
      Type: 'Objective',
      status: 'false',
      Reattempt: 'false',
    },
    {
      id: 3,
      Question: 'Artifical ',
      Marks: '5',
      DueDays: '3',
      Type: 'Objective',
      status: 'false',
      Reattempt: 'false',
    },
    {
      id: 4,
      Question: 'Artifical ',
      Marks: '5',
      DueDays: '3',
      Type: 'Objective',
      status: 'false',
      Reattempt: 'false',
    },
  ]

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

  const getStatus = (status) => {
    switch (status) {
      case 'true':
        return 1
      case 'false':
        return 0
      default:
        return -1
    }
  }
  const getFeatured = (Reattempt) => {
    switch (Reattempt) {
      case 'true':
        return 1
      case 'false':
        return 0
      default:
        return -1
    }
  }

  const onClickEditCate = () => {
    console.log('for edit click')
  }
  const onClickDeletCate = () => {
    console.log('for delete click')
  }

  return (
    <div>
      <div>
        <CButton className="mx-3" color="warning" variant="outline">
          <CIcon icon={cilTrash}></CIcon> Delete Selected
        </CButton>
      </div>
      <hr />
      <div>
        <CSmartTable
          activePage={2}
          cleaner
          clickableRows
          columns={columnsCourseInclude}
          // columnFilter
          columnSorter
          // footer
          items={usersDataCourseInclude}
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
            status: (item) => (
              <td>
                {getStatus(item.status) === 1 ? (
                  <CFormSwitch id="formSwitchCheckChecked" defaultChecked />
                ) : (
                  <CFormSwitch id="formSwitchCheckChecked" />
                )}
              </td>
            ),
            Reattempt: (item) => (
              <td>
                {getFeatured(item.Reattempt) === 1 ? (
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
                          value-get={item.elementId}
                          onClick={onClickEditCate}
                          style={{ textDecoration: 'none', color: 'black' }}
                          color="link"
                        >
                          <CIcon style={{ margin: '0px 10px' }} icon={cilPen}></CIcon>Edit
                        </CButton>
                        <CButton
                          value-get={item.elementId}
                          onClick={onClickDeletCate}
                          style={{ textDecoration: 'none', color: 'black' }}
                          color="link"
                        >
                          <CIcon style={{ margin: '0px 10px' }} icon={cilTrash}></CIcon>
                          Delete
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
          sorterValue={{ column: 'status', state: 'asc' }}
          tableFilter
          tableHeadProps={{
            color: 'success',
          }}
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
    </div>
  )
}

export default QuizTopic
