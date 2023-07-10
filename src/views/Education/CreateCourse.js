import React, { useEffect, useState } from 'react'
import { adminUrl } from '../../RouteDynamic'
import {
  CForm,
  CFormSelect,
  CRow,
  CCol,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormSwitch,
  CButton,
} from '@coreui/react-pro'
import axios from 'axios'

function CreateCourse() {
  document.title = 'Eclass - Create Course'
  // set state
  const [getFormData, setFormData] = useState([])
  const [getCata, setCata] = useState([])
  const [getSubCata, setSubCata] = useState([])
  const [getChildCata, setChildCata] = useState([])
  const [getInst, setInst] = useState([])
  const [getCourseLang, setCourseLang] = useState([])
  const [getRefund, setRefund] = useState([])
  const [getInstitute, setInstitute] = useState([])

  // api call
  const apiCall = () => {
    // getCategory api call
    axios
      .get(`${adminUrl}getCategory`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((allCategory) => {
        const allCat = allCategory.data.data
        let allCatArr = []
        for (let key in allCat) {
          allCatArr[key] = { label: allCat[key].categoryName, value: allCat[key]._id }
        }
        setCata(allCatArr)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    // getsubcategory api call
    axios
      .get(`${adminUrl}getSubCategory`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((allSubCategory) => {
        const allSubCat = allSubCategory.data.data
        let allSubCatArr = []
        for (let key in allSubCat) {
          allSubCatArr[key] = {
            label: allSubCat[key].subCategoryName,
            value: allSubCat[key]._id,
          }
        }
        console.log(allSubCatArr)
        setSubCata(allSubCatArr)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    // getChildCategory api call
    axios
      .get(`${adminUrl}getChildCategory`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((getChildCategory) => {
        const getChildCat = getChildCategory.data.data
        let getChildCategoryArr = []
        for (let key in getChildCat) {
          getChildCategoryArr[key] = {
            label: getChildCat[key].categoryName,
            value: getChildCat[key]._id,
          }
        }
        setChildCata(getChildCategoryArr)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    // getInst api call
    axios
      .get(`${adminUrl}getInstructorList`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((getInstructor) => {
        const getInst = getInstructor.data.data
        let getIns = []
        for (let key in getInst) {
          getIns[key] = {
            label: `${getInst[key].fName} ${getInst[key].lName}`,
            value: `${getInst[key]._id}`,
          }
        }
        setInst(getIns)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    // getCourseLang api call
    axios
      .get(`${adminUrl}getCourseLanguage`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((getCourseLanguage) => {
        const getCourseLang = getCourseLanguage.data.data
        let getLang = []
        for (let key in getCourseLang) {
          getLang[key] = {
            label: `${getCourseLang[key].name}`,
            value: `${getCourseLang[key]._id}`,
          }
        }
        setCourseLang(getLang)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    // refund policy  api call
    axios
      .get(`${adminUrl}getRefundPolicy`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((getRefundPoli) => {
        const getRefundPol = getRefundPoli.data.data
        let getRefundPolArr = []
        for (let key in getRefundPol) {
          getRefundPolArr[key] = {
            label: `${getRefundPol[key].name}`,
            value: `${getRefundPol[key].name}`,
          }
        }
        setRefund(getRefundPolArr)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })

    // setInstitute policy  api call
    axios
      .get(`${adminUrl}getInstitute`, {
        headers: { access_token: localStorage.getItem('access_token') },
      })
      .then((getInstitute) => {
        const getInstuData = getInstitute.data.data
        let getInstuDataArr = []
        for (let key in getInstuData) {
          getInstuDataArr[key] = {
            label: `${getInstuData[key].instituteName}`,
            value: `${getInstuData[key]._id}`,
          }
        }
        setInstitute(getInstuDataArr)
      })
      .catch((err) => {
        console.log('some error are accured ', err)
      })
  }
  // api call end

  useEffect(() => {
    apiCall()
  }, [])

  console.log(getFormData)

  const onSubmitHandle = () => {
    // post request for the add course
    try {
      console.log(getFormData)
      axios
        .post(`${adminUrl}addCourse`, getFormData, {
          headers: { access_token: localStorage.getItem('access_token') },
        })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (err) {
      console.log('some error ', err)
    }
  }

  // console.log(getFormData)

  return (
    <div>
      <CForm>
        <CRow>
          <CCol xs={3}>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, categoryId: e.target.value }))
              }}
              aria-label="Default select example"
              label="Category :"
              options={getCata}
            />
          </CCol>

          <CCol xs={3}>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, subCategoryId: e.target.value }))
              }}
              aria-label="Default select example"
              label="SubCategory :"
              options={getSubCata}
            />
          </CCol>
          <CCol xs={3}>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, childCategoryId: e.target.value }))
              }}
              aria-label="Default select example"
              label="ChildCategory :"
              options={getChildCata}
            />
          </CCol>
          <CCol xs={3}>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, instructorId: e.target.value }))
              }}
              aria-label="Default select example"
              label="Instructor :"
              options={getInst}
            />
          </CCol>
        </CRow>
        <CRow className="my-3">
          <CCol>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, alsoIn: e.target.value }))
              }}
              aria-label="Default select example"
              label="Also In Categories :"
              options={getCata}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={4}>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, languageId: e.target.value }))
              }}
              aria-label="Default select example"
              label="Language :"
              options={getCourseLang}
            />
          </CCol>
          <CCol xs={4}>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, selectRefundPolicy: e.target.value }))
              }}
              aria-label="Default select example"
              label="Select Refund Policy :"
              // options={getRefund}
              options={[
                'Open this select menu',
                { label: 'policies', value: 'policies' },
                { label: 'refund', value: 'refund' },
              ]}
            />
          </CCol>
          <CCol xs={4}>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, instituteId: e.target.value }))
              }}
              aria-label="Default select example"
              label="Institute :"
              options={getInstitute}
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6} className="my-3">
            <CFormLabel htmlFor="courseName" className="col-form-label">
              Course Name :
            </CFormLabel>
            <CFormInput
              onChange={(e) => {
                setFormData((value) => ({ ...value, title: e.target.value }))
              }}
              type="text"
              id="courseName"
              placeholder="Course Name"
              aria-label="default input example"
            />
          </CCol>
          <CCol xs={6} className="my-3">
            <CFormLabel htmlFor="Slugforform" className="col-form-label">
              Slug :
            </CFormLabel>
            <CFormInput
              onChange={(e) => {
                setFormData((value) => ({ ...value, slug: e.target.value }))
              }}
              type="text"
              id="Slugforform"
              placeholder="Enter Slug"
              aria-label="default input example"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormTextarea
              onChange={(e) => {
                setFormData((value) => ({ ...value, shortDetail: e.target.value }))
              }}
              id="shortDetailarea"
              label="Short Detail :"
              rows={3}
              placeholder="Enter Short Detail . "
            ></CFormTextarea>
          </CCol>
          <CCol xs={6}>
            <CFormTextarea
              onChange={(e) => {
                setFormData((value) => ({ ...value, requirements: e.target.value }))
              }}
              id="exampleFormControlTextarea1"
              label="Requirements :"
              rows={3}
              placeholder="Enter Requirements ."
            ></CFormTextarea>
          </CCol>
        </CRow>
        <CRow>
          <CCol className="my-3">
            <CFormTextarea
              onChange={(e) => {
                setFormData((value) => ({ ...value, details: e.target.value }))
              }}
              id="forDetail"
              label="Detail :"
              rows={10}
            ></CFormTextarea>
          </CCol>
        </CRow>
        <CRow className="my-3">
          <CCol xs={4}>
            <CFormLabel htmlFor="Countryname" className="col-form-label"></CFormLabel>
            Country :
            <CFormInput
              onChange={(e) => {
                setFormData((value) => ({ ...value, country: e.target.value }))
              }}
              type="text"
              id="Countryname"
              placeholder="Country Name"
              aria-label="default input example"
            />
          </CCol>
          <CCol xs={4}>
            <CFormSelect
              onChange={(e) => {
                setFormData((value) => ({ ...value, selectTags: e.target.value }))
              }}
              aria-label="Default select example"
              label="Label :"
              options={[
                'Open this select menu',
                { label: 'One', value: '1' },
                { label: 'Two', value: '2' },
                { label: 'Three', value: '3', disabled: true },
              ]}
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel htmlFor="CourseTags" className="col-form-label"></CFormLabel>
            Course Tags :
            <CFormInput
              onChange={(e) => {
                setFormData((value) => ({ ...value, courseTag: e.target.value }))
              }}
              type="text"
              id="CourseTags"
              placeholder="Course Tags"
              aria-label="default input example"
            />
          </CCol>
        </CRow>
        <CRow className="my-3">
          <CCol xs={3}>
            <CFormSwitch
              onChange={(e) => {
                if (getFormData.paid) {
                  setFormData((value) => ({ ...value, paid: false }))
                } else {
                  setFormData((value) => ({ ...value, paid: true }))
                }
              }}
              size="xl"
              label=": Paid"
              id="forpaid"
            />
          </CCol>
          <CCol xs={3}>
            <CFormSwitch
              onChange={(e) => {
                if (getFormData.featured) {
                  setFormData((value) => ({ ...value, featured: false }))
                } else {
                  setFormData((value) => ({ ...value, featured: true }))
                }
              }}
              size="xl"
              label=": Featured"
              id="forfeatured"
            />
          </CCol>
          <CCol xs={3}>
            <CFormSwitch
              onChange={(e) => {
                if (getFormData.isActive) {
                  setFormData((value) => ({ ...value, isActive: false }))
                } else {
                  setFormData((value) => ({ ...value, isActive: true }))
                }
              }}
              size="xl"
              label=": Status"
              id="forstatus"
            />
          </CCol>
          <CCol xs={3}>
            <CFormSwitch
              onChange={(e) => {
                if (getFormData.involvementRequest) {
                  setFormData((value) => ({ ...value, involvementRequest: false }))
                } else {
                  setFormData((value) => ({ ...value, involvementRequest: true }))
                }
              }}
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
                onChange={(e) => {
                  setFormData((value) => ({ ...value, uploadeVideo: e.target.value }))
                }}
                type="text"
                id="uploadeVideo"
                placeholder="uploade Video"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </div>
            <div className="my-3">
              <CFormLabel htmlFor="urlenter">URL :</CFormLabel>
              <CFormInput
                onChange={(e) => {
                  setFormData((value) => ({ ...value, URL: e.target.value }))
                }}
                type="text"
                id="urlenter"
                placeholder="Enter URL "
                aria-describedby="exampleFormControlInputHelpInline"
              />
              <div className="my-3">
                <CFormLabel htmlFor="Imagelabel">Image :</CFormLabel>
                <CFormInput
                  onChange={(e) => {
                    setFormData((value) => ({ ...value, image: e.target.value }))
                  }}
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
              onChange={(e) => {
                if (getFormData.duration) {
                  setFormData((value) => ({ ...value, duration: false }))
                } else {
                  setFormData((value) => ({ ...value, duration: true }))
                }
              }}
              size="xl"
              label=": Duration"
              id="forduration"
            />
            <div className="my-3">
              <CFormLabel htmlFor="forexperied">Course Expire Duration :</CFormLabel>
              <CFormInput
                onChange={(e) => {
                  setFormData((value) => ({ ...value, courseExpireDuration: e.target.value }))
                }}
                type="text"
                id="forexperied"
                placeholder="Course Duration "
                aria-describedby="exampleFormControlInputHelpInline"
              />
              <div className="my-3">
                <CFormLabel htmlFor="instlabel">Instructor Revenue % :</CFormLabel>
                <CFormInput
                  onChange={(e) => {
                    setFormData((value) => ({ ...value, instructorRevenue: e.target.value }))
                  }}
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
                onChange={(e) => {
                  setFormData((value) => ({ ...value, price: e.target.value }))
                }}
                type="text"
                id="price"
                placeholder="Enter Course price"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </div>
            <div className="my-3">
              <CFormLabel htmlFor="discountPrice">discount Price :</CFormLabel>
              <CFormInput
                onChange={(e) => {
                  setFormData((value) => ({ ...value, discountPrice: e.target.value }))
                }}
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
              onChange={(e) => {
                if (getFormData.assignment) {
                  setFormData((value) => ({ ...value, assignment: false }))
                } else {
                  setFormData((value) => ({ ...value, assignment: true }))
                }
              }}
              size="xl"
              label=": Assignment"
              id="forassig"
            />
          </CCol>
          <CCol xs={3}>
            <CFormSwitch
              onChange={(e) => {
                if (getFormData.appointment) {
                  setFormData((value) => ({ ...value, appointment: false }))
                } else {
                  setFormData((value) => ({ ...value, appointment: true }))
                }
              }}
              size="xl"
              label=": Appointment"
              id="forapp"
            />
          </CCol>
          <CCol xs={3}>
            <CFormSwitch
              onChange={(e) => {
                if (getFormData.certificateEnable) {
                  setFormData((value) => ({ ...value, certificateEnable: false }))
                } else {
                  setFormData((value) => ({ ...value, certificateEnable: true }))
                }
              }}
              size="xl"
              label=": Certificate Enable"
              id="forcref"
            />
          </CCol>
          <CCol xs={3}>
            <CFormSwitch
              onChange={(e) => {
                if (getFormData.DripContent) {
                  setFormData((value) => ({ ...value, DripContent: false }))
                } else {
                  setFormData((value) => ({ ...value, DripContent: true }))
                }
              }}
              size="xl"
              label=": Drip Content"
              id="forDrip"
            />
          </CCol>
        </CRow>
        <div>
          <CButton color="primary" onClick={onSubmitHandle} className="mt-3">
            Create Now
          </CButton>
        </div>
      </CForm>
    </div>
  )
}

export default CreateCourse
