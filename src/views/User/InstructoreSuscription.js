import React from 'react'
import { CFormSwitch, CFormLabel, CForm, CFormInput, CRow, CCol, CButton } from '@coreui/react-pro'

function InstructoreSuscription() {
  return (
    <div>
      <div style={{ backgroundColor: 'white', padding: '20px 10px' }}>
        <div>
          <p>Instructors Subscription Settings :</p>
        </div>
        <hr></hr>
        <div className="d-flex">
          <CFormLabel htmlFor="exampleFormControlInput1">Instructors Subscription :</CFormLabel>
          <CFormSwitch
            onChange={() => {
              const val = document.getElementById('formpurcharseid')
              if (val.style.display === 'none') {
                val.style.display = 'block'
              } else {
                val.style.display = 'none'
              }
            }}
            style={{ marginLeft: '10px' }}
            size="xl"
            id="exampleFormControlInput1"
          />
        </div>
        <div>
          <CForm>
            <CRow>
              <CCol id="formpurcharseid" xs={4} style={{ margin: '20px 0px', display: 'none' }}>
                <CFormInput
                  type="text"
                  id="purchcodeenter"
                  label="Purchase Code :"
                  placeholder="Enter Purchase Code"
                  aria-describedby="exampleFormControlInputHelpInline"
                />
              </CCol>
            </CRow>
            <div>
              <CButton style={{ margin: '0px 20px' }} color="warning" variant="outline">
                Reset
              </CButton>
              <CButton style={{ margin: '0px 20px' }} color="success" variant="outline">
                Update
              </CButton>
            </div>
          </CForm>
        </div>
      </div>
    </div>
  )
}

export default InstructoreSuscription
