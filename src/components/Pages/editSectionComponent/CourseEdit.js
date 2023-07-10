import {
  CCol,
  CRow,
  CButton,
  CFormSelect,
  CFormLabel,
  CMultiSelect,
  CFormTextarea,
  CFormInput,
  CFormSwitch,
} from '@coreui/react-pro'
import React, { useState } from 'react'

function CourseEdit() {
  const options = [
    {
      value: 0,
      text: 'Angular',
    },
    {
      value: 1,
      text: 'Bootstrap',
    },
    {
      value: 2,
      text: 'React.js',
    },
    {
      value: 3,
      text: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          text: 'Django',
        },
        {
          value: 5,
          text: 'Laravel',
        },
        {
          value: 6,
          text: 'Node.js',
        },
      ],
    },
  ]

  return (
    <div>
      <div className="text-alignment">Edit Course</div>
      <hr />
      <div>
        <CRow>
          <CCol xs={3}>
            <div>
              <CFormLabel>Category </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </div>
          </CCol>
          <CCol xs={3}>
            <div>
              <CFormLabel>SubCategory </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </div>
          </CCol>
          <CCol xs={3}>
            <div>
              <CFormLabel>ChildCategory </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </div>
          </CCol>
          <CCol xs={3}>
            <div>
              <CFormLabel>SelectUser </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </div>
          </CCol>
          <CCol xs={12}>
            <div>
              <CMultiSelect
                options={options}
                label="Also in :"
                text="if in list primary category is also present then it will auto remove from this after create product."
              />
            </div>
          </CCol>
          <CCol xs={4}>
            <div>
              <CFormLabel>SelectLanguage: </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </div>
          </CCol>
          <CCol xs={4}>
            <div>
              <CFormLabel>SelectRefundPolicy </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </div>
          </CCol>
          <CCol xs={4}>
            <div>
              <CFormLabel>Institute: </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </div>
          </CCol>
          <CCol xs={6}>
            <div>
              <CFormLabel>Title:</CFormLabel>
              <CFormInput
                type="text"
                placeholder="Enter Title"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </div>
          </CCol>
          <CCol xs={6}>
            <div>
              <CFormLabel>Slug:</CFormLabel>
              <CFormInput
                type="text"
                placeholder="enter-your-slug"
                text="Must be 8-20 characters long."
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </div>
          </CCol>
          <CCol xs={6}>
            <div>
              <CFormLabel htmlFor="exampleFormControlInput1">ShortDetail:</CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows={3}
                text="Must be 8-20 words long."
              ></CFormTextarea>
            </div>
          </CCol>
          <CCol xs={6}>
            <div>
              <CFormLabel htmlFor="exampleFormControlInput1">Requirements:</CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows={3}
                text="Must be 8-20 words long."
              ></CFormTextarea>
            </div>
          </CCol>
          <CCol xs={6}>
            <div>
              <CFormLabel>Level/Type Tags </CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                options={[
                  'Open this select menu',
                  { label: 'One', value: '1' },
                  { label: 'Two', value: '2' },
                  { label: 'Three', value: '3', disabled: true },
                ]}
              />
            </div>
          </CCol>
          <CCol xs={6}>
            <div>
              <CMultiSelect
                options={options}
                label="Course Tags:"
                text="if in list primary category is also present then it will auto remove from this after create product."
              />
            </div>
          </CCol>
          <CCol xs={12}>
            <div>
              <CFormLabel htmlFor="exampleFormControlInput1">Detail:</CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows={6}
                text="Must be 8-20 words long."
              ></CFormTextarea>
            </div>
          </CCol>
          <CCol xs={12}>
            <div>
              <CMultiSelect
                options={options}
                label="Country : :"
                text="(Select those countries where you want to block courses.)"
              />
            </div>
          </CCol>
        </CRow>
        <div>
          <CRow className="my-3">
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.paid) {
                //     setFormData((value) => ({ ...value, paid: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, paid: true }))
                //   }
                // }}
                size="xl"
                label=": Paid"
                id="forpaid"
              />
            </CCol>
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.featured) {
                //     setFormData((value) => ({ ...value, featured: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, featured: true }))
                //   }
                // }}
                size="xl"
                label=": Featured"
                id="forfeatured"
              />
            </CCol>
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.isActive) {
                //     setFormData((value) => ({ ...value, isActive: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, isActive: true }))
                //   }
                // }}
                size="xl"
                label=": Status"
                id="forstatus"
              />
            </CCol>
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.involvementRequest) {
                //     setFormData((value) => ({ ...value, involvementRequest: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, involvementRequest: true }))
                //   }
                // }}
                size="xl"
                label=": Involvement Request"
                id="forrequest"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol xs={3}>
              <CFormSwitch size="xl" label=": Preview Video" id="forpreview" />
              <div className="my-3">
                <CFormLabel htmlFor="uploadeVideo">Uploade Video :</CFormLabel>
                <CFormInput
                  // onChange={(e) => {
                  //   setFormData((value) => ({ ...value, uploadeVideo: e.target.value }))
                  // }}
                  type="text"
                  id="uploadeVideo"
                  placeholder="uploade Video"
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
              <div className="my-3">
                <CFormLabel htmlFor="urlenter">URL :</CFormLabel>
                <CFormInput
                  // onChange={(e) => {
                  //   setFormData((value) => ({ ...value, URL: e.target.value }))
                  // }}
                  type="text"
                  id="urlenter"
                  placeholder="Enter URL "
                  aria-describedby="exampleFormControlInputHelpInline"
                />
                <div className="my-3">
                  <CFormLabel htmlFor="Imagelabel">Image :</CFormLabel>
                  <CFormInput
                    // onChange={(e) => {
                    //   setFormData((value) => ({ ...value, image: e.target.value }))
                    // }}
                    type="text"
                    id="Imagelabel"
                    placeholder="Select Image "
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
              </div>
            </CCol>
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.duration) {
                //     setFormData((value) => ({ ...value, duration: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, duration: true }))
                //   }
                // }}
                size="xl"
                label=": Duration"
                id="forduration"
              />
              <div className="my-3">
                <CFormLabel htmlFor="forexperied">Course Expire Duration :</CFormLabel>
                <CFormInput
                  // onChange={(e) => {
                  //   setFormData((value) => ({
                  //     ...value,
                  //     courseExpireDuration: e.target.value,
                  //   }))
                  // }}
                  type="text"
                  id="forexperied"
                  placeholder="Course Duration "
                  aria-describedby="exampleFormControlInputHelpInline"
                />
                <div className="my-3">
                  <CFormLabel htmlFor="instlabel">Instructor Revenue % :</CFormLabel>
                  <CFormInput
                    // onChange={(e) => {
                    //   setFormData((value) => ({
                    //     ...value,
                    //     instructorRevenue: e.target.value,
                    //   }))
                    // }}
                    type="text"
                    id="instlabel"
                    placeholder="Enter Instructor Revenue %"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </div>
              </div>
            </CCol>
            <CCol xs={3}>
              <div className="my-3">
                <CFormLabel htmlFor="price">Price :</CFormLabel>
                <CFormInput
                  // onChange={(e) => {
                  //   setFormData((value) => ({ ...value, price: e.target.value }))
                  // }}
                  type="text"
                  id="price"
                  placeholder="Enter Course price"
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
              <div className="my-3">
                <CFormLabel htmlFor="discountPrice">discount Price :</CFormLabel>
                <CFormInput
                  // onChange={(e) => {
                  //   setFormData((value) => ({ ...value, discountPrice: e.target.value }))
                  // }}
                  type="text"
                  id="discountPrice"
                  placeholder="Enter Course discountPrice"
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </div>
            </CCol>
          </CRow>
          <CRow className="my-3">
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.assignment) {
                //     setFormData((value) => ({ ...value, assignment: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, assignment: true }))
                //   }
                // }}
                size="xl"
                label=": Assignment"
                id="forassig"
              />
            </CCol>
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.appointment) {
                //     setFormData((value) => ({ ...value, appointment: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, appointment: true }))
                //   }
                // }}
                size="xl"
                label=": Appointment"
                id="forapp"
              />
            </CCol>
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.certificateEnable) {
                //     setFormData((value) => ({ ...value, certificateEnable: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, certificateEnable: true }))
                //   }
                // }}
                size="xl"
                label=": Certificate Enable"
                id="forcref"
              />
            </CCol>
            <CCol xs={3}>
              <CFormSwitch
                // onChange={(e) => {
                //   if (getFormData.DripContent) {
                //     setFormData((value) => ({ ...value, DripContent: false }))
                //   } else {
                //     setFormData((value) => ({ ...value, DripContent: true }))
                //   }
                // }}
                size="xl"
                label=": Drip Content"
                id="forDrip"
              />
            </CCol>
          </CRow>
          <div>
            <CButton color="primary" variant="outline">
              Save
            </CButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseEdit
