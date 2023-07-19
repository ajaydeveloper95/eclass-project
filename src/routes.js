import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// marketing dashboard
const MarketingDashboard = React.lazy(() => import('./views/dashboard/MarketingDashboard'))
const TestDelete = React.lazy(() => import('./views/dashboard/TestDelete'))

// important route
const AddUser = React.lazy(() => import('./components/Pages/AddUser'))
const AllUser = React.lazy(() => import('./components/Pages/AllUser'))
const Testimonials = React.lazy(() => import('./components/Pages/Testmonials'))
const CourseLanguage = React.lazy(() => import('./components/Pages/CourseLanguage'))
const AllCategory = React.lazy(() => import('./components/Pages/AllCategory'))
const CourseReview = React.lazy(() => import('./components/Pages/CourseReview'))
const EditCourse = React.lazy(() => import('./components/Pages/EditCourse'))

// users
const UsersSide = React.lazy(() => import('./components/Pages/AllUser'))
const Instructors = React.lazy(() => import('./views/User/Instructors'))
const InstructoreSuscription = React.lazy(() => import('./views/User/InstructoreSuscription'))
const InstructorePlan = React.lazy(() => import('./views/User/InstructorePlan'))
const MultipleInstructore = React.lazy(() => import('./views/User/MultipleInstructore'))
const InstructorePayout = React.lazy(() => import('./views/User/InstructorePayout'))
const RoleAndPermission = React.lazy(() => import('./views/User/RoleAndPermission'))
const RequestToInvolve = React.lazy(() => import('./views/User/RequestToInvolve'))
// const InvolvementRequest = React.lazy(() => import('./views/User/InvolvementRequest'))
// const InvolvedInCourse = React.lazy(() => import('./views/User/InvolvedInCourse'))

// Education
const Course = React.lazy(() => import('./views/Education/Course'))
const Ebooks = React.lazy(() => import('./views/Education/Ebooks'))
const VerifyUser = React.lazy(() => import('./views/Education/VerifyUser'))
const CreateCourse = React.lazy(() => import('./views/Education/CreateCourse'))
const Institute = React.lazy(() => import('./views/Education/Institute'))
const Meetings = React.lazy(() => import('./views/Education/Meetings'))
const Alumini = React.lazy(() => import('./views/Education/Alumini'))
const Certificate = React.lazy(() => import('./views/Education/Certificate'))
const Assignments = React.lazy(() => import('./views/Education/Assignments'))
const AllRefundPolicies = React.lazy(() => import('./views/Education/AllRefundPolicies'))
const AllBatches = React.lazy(() => import('./views/Education/AllBatches'))
const QuizReview = React.lazy(() => import('./views/Education/QuizReview'))
const ReportedQuestions = React.lazy(() => import('./views/Education/ReportedQuestions'))
const ReportedCourses = React.lazy(() => import('./views/Education/ReportedCourses'))
const PrivateCourses = React.lazy(() => import('./views/Education/PrivateCourses'))
const BundleCourse = React.lazy(() => import('./views/Education/BundleCourse'))
const BundleForm = React.lazy(() => import('./views/Education/AddBundleCourseForm'))

const EbookCategory = React.lazy(() => import('./views/Education/Ebooks/EbookCategory'))
const EbooksReview = React.lazy(() => import('./views/Education/Ebooks/EbooksReview'))
const EbookOrders = React.lazy(() => import('./views/Education/Ebooks/EbookOrders'))

// MARKETING
const Coupon = React.lazy(() => import('./views/Marketing/Coupon'))
const FlashDeal = React.lazy(() => import('./views/Marketing/FlashDeal'))
const AffiliateAndWallet = React.lazy(() => import('./views/Marketing/AffiliateAndWallet'))
const Followers = React.lazy(() => import('./views/Marketing/Followers'))
const PushNotification = React.lazy(() => import('./views/Marketing/PushNotification'))

// FINANCIAL
const Order = React.lazy(() => import('./views/Financial/Order'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const LoadingButtons = React.lazy(() => import('./views/buttons/loading-buttons/LoadingButtons'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const DatePicker = React.lazy(() => import('./views/forms/date-picker/DatePicker'))
const DateRangePicker = React.lazy(() => import('./views/forms/date-range-picker/DateRangePicker'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const MultiSelect = React.lazy(() => import('./views/forms/multi-select/MultiSelect'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const TimePicker = React.lazy(() => import('./views/forms/time-picker/TimePicker'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const SmartTable = React.lazy(() => import('./views/smart-table/SmartTable'))

// Plugins
const Calendar = React.lazy(() => import('./views/plugins/calendar/Calendar'))
const Charts = React.lazy(() => import('./views/plugins/charts/Charts'))
const GoogleMaps = React.lazy(() => import('./views/plugins/google-maps/GoogleMaps'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const Invoice = React.lazy(() => import('./views/apps/invoicing/Invoice'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/MarketingDashboard', name: 'MarketingDashboard', element: MarketingDashboard },
  { path: '/dashboard/user', name: 'user', element: AllUser },
  { path: '/dashboard/user/adduser', name: 'adduser', element: AddUser },
  { path: '/dashboard/testimonials', name: 'Testimonials', element: Testimonials },
  { path: '/dashboard/allCategory', name: 'AllCategory', element: AllCategory },

  { path: '/dashboard/test', name: 'TestDelete', element: TestDelete },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },

  { path: '/users', name: 'users', element: UsersSide, exact: true },
  { path: '/users/user', name: 'usersUser', element: UsersSide },
  { path: '/users/Instructors', name: 'Instructors', element: Instructors },
  { path: '/users/roleandpermission', name: 'RoleAndPermission', element: RoleAndPermission },
  {
    path: '/users/instructoresuscription',
    name: 'InstructoreSuscription',
    element: InstructoreSuscription,
  },
  { path: '/users/instructoreplan', name: 'InstructorePlan', element: InstructorePlan },
  { path: '/users/multipleinstructore', name: 'MultipleInstructore', element: MultipleInstructore },
  { path: '/users/instructorepayout', name: 'InstructorePayout', element: InstructorePayout },
  { path: '/users/involvedincourse', name: 'InvolvedInCourse', element: RequestToInvolve },
  // { path: '/users/involvementrequest', name: 'InvolvementRequest', element: InvolvementRequest },
  // { path: '/users/involvementrequest', name: 'InvolvementRequest', element: InvolvedInCourse },

  { path: '/education', name: 'education', element: Course, exact: true },
  { path: '/education/course', name: 'Course', element: Course },
  { path: '/education/verifyuser', name: 'VerifyUser', element: VerifyUser },
  { path: '/education/createcourse', name: 'CreateCourse', element: CreateCourse },
  { path: '/education/coursereview', name: 'CourseReview', element: CourseReview },
  { path: '/education/courselanguage', name: 'CourseLanguage', element: CourseLanguage },
  { path: '/education/ebooks', name: 'Ebooks', element: Ebooks },
  { path: '/education/assignments', name: 'Assignments', element: Assignments },
  { path: '/education/institute', name: 'Institute', element: Institute },
  { path: '/education/meetings', name: 'Meetings', element: Meetings },
  { path: '/education/alumini', name: 'Alumini', element: Alumini },
  { path: '/education/certificate', name: 'Certificate', element: Certificate },
  { path: '/education/allrefundpolicies', name: 'AllRefundPolicies', element: AllRefundPolicies },
  { path: '/education/allbatches', name: 'AllBatches', element: AllBatches },
  { path: '/education/quizreview', name: 'QuizReview', element: QuizReview },
  { path: '/education/reportedquestions', name: 'ReportedQuestions', element: ReportedQuestions },
  { path: '/education/reportedcourses', name: 'ReportedCourses', element: ReportedCourses },
  { path: '/education/privatecourses', name: 'PrivateCourses', element: PrivateCourses },
  { path: '/education/bundle', name: 'BundleCourse', element: BundleCourse },
  { path: '/education/bundleform', name: 'BundleForm', element: BundleForm },
  { path: '/education/editcourse/:courseId', name: 'EditCourse', element: EditCourse },

  { path: '/education/ebookcategory', name: 'EbookCategory', element: EbookCategory },
  { path: '/education/ebooksreview', name: 'EbooksReview', element: EbooksReview },
  { path: '/education/ebookorders', name: 'EbookOrders', element: EbookOrders },

  { path: '/marketing', name: 'marketing', element: Coupon, exact: true },
  { path: '/marketing/coupon', name: 'Coupon', element: Coupon },
  { path: '/marketing/followers', name: 'Followers', element: Followers },
  {
    path: '/marketing/AffiliateAndWallet',
    name: 'AffiliateAndWallet',
    element: AffiliateAndWallet,
  },
  { path: '/marketing/flashdeal', name: 'FlashDeal', element: FlashDeal },
  { path: '/marketing/pushnotification', name: 'PushNotification', element: PushNotification },

  { path: '/financial', name: 'financial', element: Order, exact: true },
  { path: '/financial/order', name: 'Order', element: Order },

  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/buttons/loading-buttons', name: 'Loading Buttons', element: LoadingButtons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/multi-select', name: 'Multi Select', element: MultiSelect },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/date-picker', name: 'Date Picker', element: DatePicker },
  { path: '/forms/date-range-picker', name: 'Date Range Picker', element: DateRangePicker },
  { path: '/forms/time-picker', name: 'Time Picker', element: TimePicker },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/plugins', name: 'Plugins', element: Calendar, exact: true },
  { path: '/plugins/calendar', name: 'Calendar', element: Calendar },
  { path: '/plugins/charts', name: 'Charts', element: Charts },
  { path: '/plugins/google-maps', name: 'GoogleMaps', element: GoogleMaps },
  { path: '/smart-table', name: 'Smart Table', element: SmartTable },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/apps', name: 'Apps', element: Invoice, exact: true },
  { path: '/apps/invoicing', name: 'Invoice', element: Invoice, exact: true },
  { path: '/apps/invoicing/invoice', name: 'Invoice', element: Invoice },
  { path: '/apps/email', name: 'Email', exact: true },
  { path: '/apps/email/inbox', name: 'Inbox', exact: true },
  { path: '/apps/email/compose', name: 'Compose', exact: true },
  { path: '/apps/email/message', name: 'Message', exact: true },
]

export default routes
