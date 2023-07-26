import { CCol, CRow, CButton, CCollapse } from '@coreui/react-pro'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
import ReviewReport from './editSectionComponent/ReviewReport'
import QuizTopic from './editSectionComponent/QuizTopic'
import Appointment from './editSectionComponent/Appointment'
import PreviousPaper from './editSectionComponent/PreviousPaper'
import AuthFun from './AuthFunction/AuthFun'

function EditCourse() {
  const [visibleCourse, setvisibleCourse] = useState(true)
  const [visibleCourseInclude, setvisibleCourseInclude] = useState(false)
  const [visibleWhatLearns, setvisibleWhatLearns] = useState(false)
  const [visibleCourseChapter, setvisibleCourseChapter] = useState(false)
  const [visibleCourseClass, setvisibleCourseClass] = useState(false)
  const [visibleRelatedCourse, setvisibleRelatedCourse] = useState(false)
  const [visibleQuestion, setvisibleQuestion] = useState(false)
  const [visibleReviewRating, setvisibleReviewRating] = useState(false)
  const [visibleAnnouncement, setvisibleAnnouncement] = useState(false)
  const [visibleReviewReport, setvisibleReviewReport] = useState(false)
  const [visibleQuizTopic, setvisibleQuizTopic] = useState(false)
  const [visibleAppointment, setvisibleAppointment] = useState(false)
  const [visiblePreviousPaper, setvisiblePreviousPaper] = useState(false)
  const [PropsCourseId, setPropsCourseId] = useState('')

  const { courseId } = useParams()
  useEffect(() => {
    // get id from url
    setPropsCourseId(courseId)
  }, [])

  const [allVisibleState, setAllVisibleState] = useState([
    setvisibleCourse,
    setvisibleCourseInclude,
    setvisibleWhatLearns,
    setvisibleCourseChapter,
    setvisibleCourseClass,
    setvisibleRelatedCourse,
    setvisibleQuestion,
    setvisibleReviewRating,
    setvisibleReviewRating,
    setvisibleAnnouncement,
    setvisibleReviewReport,
    setvisibleQuizTopic,
    setvisibleAppointment,
    setvisiblePreviousPaper,
  ])
  const forTestOnClick = () => {
    // console.log('onclick')
  }

  const onClickStateSwitch = (e) => {
    let valueState = e.target.getAttribute('value-Btn-state')
    for (let item in allVisibleState) {
      allVisibleState[item](false)
    }
    switch (valueState) {
      case 'visibleCourse':
        setvisibleCourse(true)
        break
      case 'visibleCourseInclude':
        setvisibleCourseInclude(true)
        break
      case 'visibleWhatLearns':
        setvisibleWhatLearns(true)
        break
      case 'visibleCourseChapter':
        setvisibleCourseChapter(true)
        break
      case 'visibleCourseClass':
        setvisibleCourseClass(true)
        break
      case 'visibleRelatedCourse':
        setvisibleRelatedCourse(true)
        break
      case 'visibleQuestion':
        setvisibleQuestion(true)
        break
      case 'visibleReviewRating':
        setvisibleReviewRating(true)
        break
      case 'visibleAnnouncement':
        setvisibleAnnouncement(true)
        break
      case 'visibleReviewReport':
        setvisibleReviewReport(true)
        break
      case 'visibleQuizTopic':
        setvisibleQuizTopic(true)
        break
      case 'visibleAppointment':
        setvisibleAppointment(true)
        break
      case 'visiblePreviousPaper':
        setvisiblePreviousPaper(true)
        break

      default:
        setvisibleCourse(true)
        break
    }
  }
  return (
    <div className="margin-bottom-down-20px">
      <AuthFun />
      <CRow>
        <CCol xs={2} className="background-color-and-padding mx-3">
          <div>
            <div className="text-alignment">Courses</div>
            <hr />
            <div className="d-grid gap-2 div-class-btn-target ">
              <CButton
                color="dark"
                active={visibleCourse}
                value-Btn-state="visibleCourse"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilAlignLeft}></CIcon> Course
              </CButton>
              <CButton
                color="dark"
                active={visibleCourseInclude}
                value-Btn-state="visibleCourseInclude"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilBook}></CIcon> CourseInclude
              </CButton>
              <CButton
                color="dark"
                active={visibleWhatLearns}
                value-Btn-state="visibleWhatLearns"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilLocationPin}></CIcon> WhatLearns
              </CButton>
              <CButton
                color="dark"
                active={visibleCourseChapter}
                value-Btn-state="visibleCourseChapter"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilNotes}></CIcon> CourseChapter
              </CButton>
              <CButton
                color="dark"
                active={visibleCourseClass}
                value-Btn-state="visibleCourseClass"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilDevices}></CIcon> CourseClass
              </CButton>
              <CButton
                color="dark"
                active={visibleRelatedCourse}
                value-Btn-state="visibleRelatedCourse"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilFork}></CIcon> RelatedCourse
              </CButton>
              <CButton
                color="dark"
                active={visibleQuestion}
                value-Btn-state="visibleQuestion"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilBell}></CIcon> Question
              </CButton>
              <CButton
                color="dark"
                active={visibleReviewRating}
                value-Btn-state="visibleReviewRating"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilPeople}></CIcon> ReviewRating
              </CButton>
              <CButton
                color="dark"
                active={visibleAnnouncement}
                value-Btn-state="visibleAnnouncement"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilVoiceOverRecord}></CIcon> Announcement
              </CButton>
              <CButton
                color="dark"
                active={visibleReviewReport}
                value-Btn-state="visibleReviewReport"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilFile}></CIcon> ReviewReport
              </CButton>
              <CButton
                color="dark"
                active={visibleQuizTopic}
                value-Btn-state="visibleQuizTopic"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilPaperPlane}></CIcon> QuizTopic
              </CButton>
              <CButton
                color="dark"
                active={visibleAppointment}
                value-Btn-state="visibleAppointment"
                onClick={onClickStateSwitch}
                variant="ghost"
              >
                <CIcon icon={cilLibraryAdd}></CIcon> Appointment
              </CButton>
              <CButton
                color="dark"
                active={visiblePreviousPaper}
                value-Btn-state="visiblePreviousPaper"
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
              <CourseEdit CourseId={PropsCourseId} />
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
              <ReviewReport />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleQuizTopic}>
              {/* for visibleQuizTopic  */}
              <QuizTopic />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visibleAppointment}>
              {/* for visibleAppointment  */}
              <Appointment />
            </CCollapse>
          </div>
          <div>
            <CCollapse visible={visiblePreviousPaper}>
              {/* for visiblePreviousPaper  */}
              <PreviousPaper />
            </CCollapse>
          </div>
        </CCol>
      </CRow>
    </div>
  )
}

export default EditCourse
