import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { CFormSelect, CFormInput } from '@coreui/react'
import { CForm, CFormTextarea } from '@coreui/react-pro'

import { CButton, CFormSwitch } from '@coreui/react-pro'

function Certificate() {
  document.title = 'Eclass - All Category'
  const [details, setDetails] = useState([])
  const [StatusState, setStatusState] = useState('0')
  const [visible, setVisible] = useState(false)
  const [activeKey, setActiveKey] = useState(1)
  const [selectedTab, setSelectedTab] = useState(0)
  const [test, setTest] = useState('')
  const [testOne, setTestOne] = useState('')
  const [testTwo, setTestTwo] = useState('')
  const [activeTab, setActiveTab] = useState(0)

  const Cimg = 'https://cdn.pixabay.com/photo/2023/05/27/18/15/barn-swallows-8022044_1280.jpg'

  // const columns = [
  //   { key: 'Number', _style: { width: '10%' } },
  //   {
  //     key: 'Image',
  //     sorter: false,
  //     _style: { width: '15%' },
  //     _props: { className: 'fw-semibold' },
  //   },
  //   { key: 'Title', _style: { width: '35%' } },
  //   { key: 'Slug', _style: { width: '15%' } },
  //   { key: 'Featured', sorter: false, _style: { width: '15%' } },
  //   { key: 'Status', sorter: false, _style: { width: '15%' } },
  //   {
  //     key: 'show_details',
  //     label: 'Action',
  //     _style: { width: '1%' },
  //     filter: false,
  //     sorter: false,
  //     _props: { className: 'fw-semibold' },
  //   },
  // ]

  // const usersData = [
  //   {
  //     id: 1,
  //     Number: 1,
  //     Image: Cimg,
  //     Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
  //     Slug: 'Microsoft-excel',
  //     Status: 'true',
  //     Featured: 'true',
  //   },
  //   {
  //     id: 2,
  //     Number: 2,
  //     Image: Cimg,
  //     Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
  //     Slug: '	Flutter',
  //     Status: 'true',
  //     Featured: 'true',
  //   },
  //   {
  //     id: 3,
  //     Number: 3,
  //     Image: Cimg,
  //     Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
  //     Slug: 'React',
  //     Status: 'true',
  //     Featured: 'true',
  //   },
  //   {
  //     id: 4,
  //     Number: 4,
  //     Image: Cimg,
  //     Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
  //     Slug: '	Flutter',
  //     Status: 'true',
  //     Featured: 'true',
  //   },
  //   {
  //     id: 5,
  //     Number: 5,
  //     Image: Cimg,
  //     Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
  //     Slug: 'Microsoft-excel',
  //     Status: 'true',
  //     Featured: 'true',
  //   },
  //   {
  //     id: 6,
  //     Number: 6,
  //     Image: Cimg,
  //     Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
  //     Slug: 'Flutter',
  //     Status: 'true',
  //     Featured: 'true',
  //   },
  //   {
  //     id: 7,
  //     Number: 7,
  //     Image: Cimg,
  //     Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
  //     Slug: 'Flutter',
  //     Status: 'true',
  //     Featured: 'true',
  //   },
  //   {
  //     id: 8,
  //     Number: 8,
  //     Image: Cimg,
  //     Title: 'Learn Microsoft Excel from A-Z: Beginner To Expert Course',
  //     Slug: 'Microsoft-excel',
  //     Status: 'true',
  //     Featured: 'true',
  //   },
  // ]

  // const ForStatus = (Status) => {
  //   switch (Status) {
  //     case 'true':
  //       return 1
  //     case 'false':
  //       return 0
  //     default:
  //       return -1
  //   }
  // }

  // const onClickEditCate = (e) => {
  //   let EditId = e.target.getAttribute('value-get')
  // }

  // const onClickDeletCate = (e) => {
  //   console.log('t')
  // }

  // const ForFeatured = (Featured) => {
  //   switch (Featured) {
  //     case 'true':
  //       return 1
  //     case 'false':
  //       return 0
  //     default:
  //       return -1
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

  // const deleteSelectedOnChange = () => {
  //   console.log('t')
  // }

  // const CategoryFormSubmit = () => {
  //   console.log('t')
  // }

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <div className="background-color-and-padding mb-4">
        <div className="display-flex-justify-space-between-padding"></div>
        <CNav variant="pills" role="tablist">
          <CNavItem>
            <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
              Manage Certificate
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
              Certificate Setting
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink active={activeKey === 3} onClick={() => setActiveKey(3)}>
              Certificate Verify
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent className="mt-4">
          <CTabPane role="tabpanel" aria-labelledby="Orders-tab" visible={activeKey === 1}>
            <div className="container">
              <div className="row">
                <hr />
                <h4>Manage Certificate</h4>
                <hr className="mt-2" />
                <div className="col-md-3">
                  <CNav variant="pills" className="flex-column">
                    <CNavItem>
                      <CNavLink active={activeTab === 0} onClick={() => handleTabClick(0)}>
                        OuterBorder
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink active={activeTab === 1} onClick={() => handleTabClick(1)}>
                        InnerBorder
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink active={activeTab === 2} onClick={() => handleTabClick(2)}>
                        Background Image
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink active={activeTab === 3} onClick={() => handleTabClick(3)}>
                        Content
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink active={activeTab === 4} onClick={() => handleTabClick(4)}>
                        Add Logo
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink active={activeTab === 5} onClick={() => handleTabClick(5)}>
                        Date
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink active={activeTab === 6} onClick={() => handleTabClick(6)}>
                        Signature
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink active={activeTab === 7} onClick={() => handleTabClick(7)}>
                        Widget
                      </CNavLink>
                    </CNavItem>
                  </CNav>
                </div>
                <div className="col-md-9">
                  <CTabContent activetab={activeTab}>
                    <CTabPane visible={activeTab === 0}>
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h6>Enable Outer Border:</h6>
                            <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                          </div>
                          <div className="col-6 mt-3">
                            <h6> Outer Border width</h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: '10px', value: '1' },
                                { label: '11px', value: '2' },
                                { label: '11px', value: '3' },
                                { label: '12px', value: '4' },
                                { label: '13px', value: '5' },
                                { label: '14px', value: '6' },
                                { label: '15px', value: '7', disabled: true },
                              ]}
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Outer Border Color:</h6>
                            <CFormInput
                              type="color"
                              id="exampleColorInput"
                              defaultValue="#563d7c"
                              title="Choose your color"
                            />
                          </div>
                        </div>

                        <div className="d-grid gap-2 d-md-block mt-4">
                          <CButton color="primary">Save</CButton>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane visible={activeTab === 1}>
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h6> Enable Inner Border: </h6>
                            <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                          </div>
                          <div className="col-6 mt-3">
                            <h6> Outer Border width</h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: '10px', value: '1' },
                                { label: '11px', value: '2' },
                                { label: '11px', value: '3' },
                                { label: '12px', value: '4' },
                                { label: '13px', value: '5' },
                                { label: '14px', value: '6' },
                                { label: '15px', value: '7', disabled: true },
                              ]}
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Outer Border Color:</h6>
                            <CFormInput
                              type="color"
                              id="exampleColorInput"
                              defaultValue="#563d7c"
                              title="Choose your color"
                            />
                          </div>
                        </div>

                        <div className="d-grid gap-2 d-md-block mt-4">
                          <CButton color="primary">Save</CButton>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane visible={activeTab === 2}>
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h6>Background Image:</h6>
                            <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                          </div>
                          <div className="col-12 mt-3">
                            <div className="mb-3">
                              <label htmlFor="formFile" className="form-label">
                                Background Image: *
                              </label>
                              <input
                                className="form-control"
                                onChange={(e) => {
                                  let d = e.target.files[0]
                                  setTest(URL.createObjectURL(d))
                                }}
                                type="file"
                                id="formFile"
                              />
                            </div>
                            <div className="col-12">
                              <span className="showing-data">
                                <img src={test} />
                              </span>
                            </div>
                          </div>
                          <div></div>
                        </div>

                        <div className="d-grid gap-2 d-md-block mt-4">
                          <CButton color="primary">Save</CButton>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane visible={activeTab === 3}>
                      <div className="container">
                        <div className="row">
                          <div className="col-6">
                            <h6>Title: *</h6>
                            <CFormInput
                              type="text"
                              placeholder="Default input"
                              aria-label="default input example"
                            />
                          </div>
                          <div className="col-6">
                            <h6>Title Font Size </h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: '10px', value: '1' },
                                { label: '11px', value: '2' },
                                { label: '11px', value: '3' },
                                { label: '12px', value: '4' },
                                { label: '13px', value: '5' },
                                { label: '14px', value: '6' },
                                { label: '15px', value: '7', disabled: true },
                              ]}
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Font Color:</h6>
                            <CFormInput
                              type="color"
                              id="exampleColorInput"
                              defaultValue="#563d7c"
                              title="Choose your color"
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Title Font Size </h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: 'Center', value: '1' },
                                { label: 'Left', value: '2' },
                                { label: 'Right', value: '3' },
                              ]}
                            />
                          </div>
                          <hr className="mt-4 mb-4" />

                          <div className="col-6">
                            <CForm>
                              <CFormTextarea
                                id="exampleFormControlTextarea1"
                                label="Example textarea"
                                rows={3}
                                text="• use [user] to display enrolled user name"
                              ></CFormTextarea>
                            </CForm>
                          </div>
                          <div className="col-6">
                            <CFormSelect
                              aria-label="Default select example"
                              label="Body Font Size "
                              options={[
                                'Select an Option',
                                { label: '10px', value: '1' },
                                { label: '11px', value: '2' },
                                { label: '11px', value: '3' },
                                { label: '12px', value: '4' },
                                { label: '13px', value: '5' },
                                { label: '14px', value: '6' },
                                { label: '15px', value: '7', disabled: true },
                              ]}
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Body Font Color:</h6>
                            <CFormInput
                              type="color"
                              id="exampleColorInput"
                              defaultValue="#563d7c"
                              title="Choose your color"
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Title Font Size </h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: 'Center', value: '1' },
                                { label: 'Left', value: '2' },
                                { label: 'Right', value: '3' },
                              ]}
                            />
                          </div>
                        </div>

                        <div className="d-grid gap-2 d-md-block mt-4">
                          <CButton color="primary">Save</CButton>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane visible={activeTab === 4}>
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h3>Add Logo</h3>
                          </div>
                          <hr />
                          <div className="col-12">
                            <h6>LogoEnable:</h6>
                            <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                          </div>

                          <div className="col-8 mt-3">
                            <div className="mb-3">
                              <label htmlFor="formFile" className="form-label">
                                Logo: *
                              </label>
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={(e) => {
                                  let d = e.target.files[0]
                                  setTestOne(URL.createObjectURL(d))
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <span>
                              <span className="showing-data">
                                <img src={testOne} />
                              </span>
                            </span>
                          </div>

                          <div className="col-6 mt-3">
                            <h6>Logo Width: *</h6>
                            <CFormInput
                              type="number"
                              placeholder="Default input"
                              aria-label="default input example"
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Logo Height: *</h6>
                            <CFormInput
                              type="number"
                              placeholder="Default input"
                              aria-label="default input example"
                            />
                          </div>
                          <div className="d-grid gap-2 d-md-block mt-4">
                            <CButton color="primary">Save</CButton>
                          </div>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane visible={activeTab === 5}>
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h6>Date Enable:</h6>
                            <CFormSwitch size="xl" id="formSwitchCheckDefaultXL" />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Date Font Size</h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: '10px', value: '1' },
                                { label: '11px', value: '2' },
                                { label: '11px', value: '3' },
                                { label: '12px', value: '4' },
                                { label: '13px', value: '5' },
                                { label: '14px', value: '6' },
                                { label: '15px', value: '7', disabled: true },
                              ]}
                            />
                          </div>
                          <div className="col-6 mt-3">
                            <h6>Date Font Color:</h6>
                            <CFormInput
                              type="color"
                              id="exampleColorInput"
                              defaultValue="#563d7c"
                              title="Choose your color"
                            />
                          </div>
                          <div className="d-grid gap-2 d-md-block mt-4">
                            <CButton color="primary">Save</CButton>
                          </div>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane visible={activeTab === 6}>
                      <div className="container">
                        <div className="row">
                          <h6>Signature Image: *</h6>
                          <div className="col-6">
                            <div className="mb-3">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={(e) => {
                                  let d = e.target.files[0]
                                  setTestTwo(URL.createObjectURL(d))
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <span className="showing-data">
                              <img src={testTwo} />
                            </span>
                          </div>

                          <div className="col-6">
                            <h6>Signature Width: *</h6>
                            <CFormInput
                              type="number"
                              placeholder="Default input"
                              aria-label="default input example"
                            />
                          </div>
                          <div className="col-6">
                            <h6>Signature Height: *</h6>
                            <CFormInput
                              type="number"
                              placeholder="Default input"
                              aria-label="default input example"
                            />
                          </div>
                          <hr className="mt-4 mb-4" />
                          <div className="col-6">
                            <h6>Name After Signature: *</h6>
                            <CFormInput
                              type="text"
                              placeholder="Default input"
                              aria-label="default input example"
                            />
                          </div>
                          <div className="col-6">
                            <h6>Name Font Size </h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: '10px', value: '1' },
                                { label: '11px', value: '2' },
                                { label: '11px', value: '3' },
                                { label: '12px', value: '4' },
                                { label: '13px', value: '5' },
                                { label: '14px', value: '6' },
                                { label: '15px', value: '7', disabled: true },
                              ]}
                            />
                          </div>
                          <div className="col-8 mt-3">
                            <h6>Name Font Color:</h6>
                            <CFormInput
                              type="color"
                              id="exampleColorInput"
                              defaultValue="#563d7c"
                              title="Choose your color"
                            />
                          </div>
                          <div className="d-grid gap-2 d-md-block mt-4">
                            <CButton color="primary">Save</CButton>
                          </div>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane visible={activeTab === 7}>
                      <div className="conatiner">
                        <div className="row">
                          <div className="col-4">
                            <h6>Enable of Widget1</h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: 'Logo', value: '1' },
                                { label: 'Date', value: '2' },
                                { label: 'Signature', value: '3' },
                              ]}
                            />
                          </div>
                          <div className="col-4">
                            <h6>Enable of Widget2</h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: 'Logo', value: '1' },
                                { label: 'Date', value: '2' },
                                { label: 'Signature', value: '3' },
                              ]}
                            />
                          </div>
                          <div className="col-4">
                            <h6>Enable of Widget3</h6>
                            <CFormSelect
                              aria-label="Default select example"
                              options={[
                                'Select an Option',
                                { label: 'Logo', value: '1' },
                                { label: 'Date', value: '2' },
                                { label: 'Signature', value: '3' },
                              ]}
                            />
                          </div>
                          <div className="d-grid gap-2 d-md-block mt-4">
                            <CButton color="primary">Save</CButton>
                          </div>
                        </div>
                      </div>
                    </CTabPane>
                  </CTabContent>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refund-tab" visible={activeKey === 2}>
            <div className="container">
              <div className="row">
                <hr />
                <h4>Certificate Setting</h4>
                <hr className="mt-2" />
                <div className="col-6">
                  <h6>Percentage :</h6>
                  <CFormInput
                    type="number"
                    placeholder="Enter Percentage"
                    aria-label="default input example"
                  />

                  <div className="row">
                    <div className="col-2">
                      <div className="d-grid gap-2 d-md-block mt-4">
                        <CButton color="primary">Reset</CButton>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="d-grid gap-2 d-md-block mt-4">
                        <CButton color="primary">Update</CButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="Refundtwo-tab" visible={activeKey === 3}>
            <div className="container">
              <hr />
              <div className="row">
                <div className="col-6">
                  <h4>Certificate Verify</h4>
                </div>
                <div className="col-6">
                  <div className="d-grid gap-2 d-md-block float-end">
                    <CButton color="primary">Reset</CButton>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-6 mb-3">
                  <h6>Enter Certificate Serial Number:*</h6>
                  <CFormInput type="number" aria-label="default input example" />
                </div>
                <div className="col-1">
                  <div className="d-grid gap-2 d-md-block mt-4 float-end">
                    <CButton color="primary">Verify</CButton>
                  </div>
                </div>
              </div>
            </div>
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

export default Certificate
