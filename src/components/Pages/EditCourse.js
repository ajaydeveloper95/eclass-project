import { CCol, CRow, CButton, CCollapse } from '@coreui/react-pro'
import React, { useState } from 'react'

import CourseEdit from './editSectionComponent/CourseEdit'

import CIcon from '@coreui/icons-react'

import {
  cilAlignLeft,
  cilBook,
  cilLocationPin,
  cilNotes,
  cilDevices,
  cilFork,
  cilBell,
  cilPeople,
  cilVoiceOverRecord,
  cilFile,
  cilPaperPlane,
  cilLibraryAdd,
  cilTask,
} from '@coreui/icons'
import CourseInclude from './editSectionComponent/CourseInclude'
import WhatLearns from './editSectionComponent/WhatLearns'
import CourseChapter from './editSectionComponent/CourseChapter'
import CourseClass from './editSectionComponent/CourseClass'
import RelatedCourse from './editSectionComponent/RelatedCourse'
import Question from './editSectionComponent/Question'
import ReviewRating from './editSectionComponent/ReviewRating'
import Announcement from './editSectionComponent/Announcement'

function EditCourse() {
  const [visibleCourse, setvisibleCourse] = useState(false)
  const [visibleCourseInclude, setvisibleCourseInclude] = useState(false)
  const [visibleWhatLearns, setvisibleWhatLearns] = useState(false)
  const [visibleCourseChapter, setvisibleCourseChapter] = useState(false)
  const [visibleCourseClass, setvisibleCourseClass] = useState(false)
  const [visibleRelatedCourse, setvisibleRelatedCourse] = useState(false)
  const [visibleQuestion, setvisibleQuestion] = useState(false)
  const [visibleReviewRating, setvisibleReviewRating] = useState(false)
  const [visibleAnnouncement, setvisibleAnnouncement] = useState(false)
  const [visibleReviewReport, setvisibleReviewReport] = useState(true)
  const [visibleQuizTopic, setvisibleQuizTopic] = useState(false)
  const [visibleAppointment, setvisibleAppointment] = useState(false)
  const [visiblePreviousPaper, setvisiblePreviousPaper] = useState(false)

  const forTestOnClick = () => {
    console.log('onclick')
  }

  const onClickStateSwitch = (e) => {
    let valueState = e.target.getAttribute('value-Btn-state')
    console.log(valueState)
  }
  return (
    <div>
      <CRow>
        <CCol xs={2} className="background-color-and-padding mx-3">
          <div>
            <div className="text-alignment">Courses</div>
            <hr />
            <div className="d-grid gap-2 div-class-btn-target ">
              <CButton
                color="dark"
                value-Btn-state="Course"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilAlignLeft}></CIcon> Course
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="CourseInclude"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilBook}></CIcon> CourseInclude
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="WhatLearns"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilLocationPin}></CIcon> WhatLearns
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="CourseChapter"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilNotes}></CIcon> CourseChapter
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="CourseClass"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilDevices}></CIcon> CourseClass
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="RelatedCourse"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilFork}></CIcon> RelatedCourse
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="Question"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilBell}></CIcon> Question
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="ReviewRating"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilPeople}></CIcon> ReviewRating
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="Announcement"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilVoiceOverRecord}></CIcon> Announcement
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="ReviewReport"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilFile}></CIcon> ReviewReport
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="QuizTopic"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilPaperPlane}></CIcon> QuizTopic
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="Appointment"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilLibraryAdd}></CIcon> Appointment
              </CButton>
              <CButton
                color="dark"
                value-Btn-state="PreviousPaper"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilTask}></CIcon> PreviousPaper
              </CButton>
            </div>
          </div>
        </CCol>
        <CCol className="background-color-and-padding">
          <div>
            <CCollapse visible={visibleCourse}>
              {/* for Edit course section  */}
              <CourseEdit />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleCourseInclude}>
              {/* for course include section  */}
              <CourseInclude />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleWhatLearns}>
              {/* for what new course section  */}
              <WhatLearns />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleCourseChapter}>
              {/* for what new courseChapter  */}
              <CourseChapter />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleCourseClass}>
              {/* for what new course class  */}
              <CourseClass />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleRelatedCourse}>
              {/* for what new related course   */}
              <RelatedCourse />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleQuestion}>
              {/* for  question   */}
              <Question />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleReviewRating}>
              {/* for review rating  */}
              <ReviewRating />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleAnnouncement}>
              {/* for visibleAnnouncement  */}
              <Announcement />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleReviewReport}>
              {/* for visibleReviewReport  */}
              <div className="text-alignment">what new Course</div>
              <hr />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleQuizTopic}>
              {/* for visibleQuizTopic  */}
              <div className="text-alignment">what new Course</div>
              <hr />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleAppointment}>
              {/* for visibleAppointment  */}
              <div className="text-alignment">what new Course</div>
              <hr />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visiblePreviousPaper}>
              {/* for visiblePreviousPaper  */}
              <div className="text-alignment">what new Course</div>
              <hr />
            </CCollapse>
          </div>
        </CCol>
      </CRow>
    </div>
  )
}

export default EditCourse
