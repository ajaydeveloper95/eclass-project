import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilEnvelopeOpen,
  cilLayers,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilUser,
  cilVoiceOverRecord,
  cilSnowflake,
  cilPeople,
  cilVideo,
  cilLibraryBuilding,
  cilCommentBubble,
  cilCash,
  cilUserFollow,
  cilWallet,
  cilBell,
  cilBadge,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info-gradient',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Marketing Dashboard',
    to: '/marketingdashboard',
    icon: <CIcon icon={cilSnowflake} customClassName="nav-icon" />,
  },

  // theme start
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // theme end

  // start user sidenav
  {
    component: CNavTitle,
    name: 'Users',
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/users/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '- All User',
        to: '/users/user',
      },
      {
        component: CNavItem,
        name: '- Add User',
        to: '/dashboard/user/adduser',
      },
      {
        component: CNavItem,
        name: '- Roles And Permission',
        to: '/users/roleandpermission',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Instructors',
    to: '/users/Instructors',
    icon: <CIcon icon={cilVoiceOverRecord} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '- All Instructores',
        to: '/users/Instructors',
      },
      {
        component: CNavItem,
        name: '- Suscription',
        to: '/users/instructoresuscription',
      },
      {
        component: CNavGroup,
        name: '- Instructore Plan',
        to: '/users/instructoreplan',
      },
      {
        component: CNavItem,
        name: '- Multiple Instructore',
        to: '/users/involvedincourse',
      },
      {
        component: CNavItem,
        name: '- Instructore Payout',
        to: '/users/instructorepayout',
      },
    ],
  },

  // end user sidenav

  // start Education sidenav
  {
    component: CNavTitle,
    name: 'EDUCATION',
  },
  {
    component: CNavGroup,
    name: 'Course',
    to: '/education',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '- Category',
        to: '/dashboard/allCategory',
      },
      {
        component: CNavItem,
        name: '- Courses',
        to: '/education/course',
      },
      {
        component: CNavItem,
        name: '- Bundle Course',
        to: '/education/bundle',
      },
      {
        component: CNavItem,
        name: '- Course Language',
        to: '/education/courselanguage',
      },
      {
        component: CNavItem,
        name: '- Course Review',
        to: '/education/coursereview',
      },
      {
        component: CNavItem,
        name: '- Assignment',
        to: '/education/assignments',
      },
      {
        component: CNavItem,
        name: '- Refund Policy',
        to: '/education/allrefundpolicies',
      },
      {
        component: CNavItem,
        name: '- Batch',
        to: '/education/allbatches',
      },
      {
        component: CNavItem,
        name: '- Quiz Review',
        to: '/education/quizreview',
      },
      {
        component: CNavItem,
        name: '- Private Course',
        to: '/education/privatecourses',
      },
      {
        component: CNavItem,
        name: '- Reported Course',
        to: '/education/reportedcourses',
      },
      {
        component: CNavItem,
        name: '- Reported Question',
        to: '/education/reportedquestions',
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Ebooks',
  //   to: '/education/ebooks',
  //   icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: '- Category',
  //       to: '/education/ebookcategory',
  //     },
  //     {
  //       component: CNavItem,
  //       name: '- Ebooks',
  //       to: '/education/ebooks',
  //     },
  //     {
  //       component: CNavItem,
  //       name: '- Reviews',
  //       to: '/education/ebooksreview',
  //     },
  //     {
  //       component: CNavItem,
  //       name: '- Orders',
  //       to: '/education/ebookorders',
  //     },
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Meeting',
    to: '/education/meetings',
    icon: <CIcon icon={cilVideo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '- Jitsi Meeting',
        to: '/',
      },
      {
        component: CNavItem,
        name: '- Google ClassRoom',
        to: '/',
      },
      {
        component: CNavItem,
        name: '- Meeting Recoding',
        to: '/',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Institute',
    to: '/education/institute',
    icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Alumini',
    to: '/education/alumini',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Certificate',
    to: '/education/certificate',
    icon: <CIcon icon={cilBadge} customClassName="nav-icon" />,
  },

  // end Education sidenav

  // start MARKETING sidenav
  {
    component: CNavTitle,
    name: 'MARKETING',
  },
  {
    component: CNavItem,
    name: 'Coupon',
    to: '/marketing/coupon',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Followers',
    to: '/marketing/followers',
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Affiliate & Wallet',
    to: '/marketing/AffiliateAndWallet',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Push Notification',
    to: '/marketing/pushnotification',
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Flash Deals',
    to: '/marketing/flashdeal',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },

  // end MARKETING sidenav

  // start FINANCIAL sidenav
  {
    component: CNavTitle,
    name: 'FINANCIAL',
  },
  {
    component: CNavItem,
    name: 'Order',
    to: '/financial/order',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },

  // end FINANCIAL sidenav

  // components and other plugines start
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Loading Buttons',
  //       to: '/buttons/loading-buttons',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Multi Select',
  //       to: '/forms/multi-select',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Date Picker',
  //       to: '/forms/date-picker',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Date Range Picker',
  //       to: '/forms/date-range-picker',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Time Picker',
  //       to: '/forms/time-picker',
  //       badge: {
  //         color: 'danger-gradient',
  //         text: 'PRO',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success-gradient',
  //         text: 'FREE',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info-gradient',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavItem,
  //   name: 'Smart Table',
  //   icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'danger-gradient',
  //     text: 'PRO',
  //   },
  //   to: '/smart-table',
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Plugins',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Calendar',
  //   icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'danger-gradient',
  //     text: 'PRO',
  //   },
  //   to: '/plugins/calendar',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  //   to: '/plugins/charts',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Google Maps',
  //   icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'danger-gradient',
  //     text: 'PRO',
  //   },
  //   to: '/plugins/google-maps',
  // },
  // components and other plugines end

  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Apps',
    icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Invoicing',
        icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
        to: '/apps/invoicing',
        items: [
          {
            component: CNavItem,
            name: 'Invoice',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/invoicing/invoice',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Email',
        to: '/apps/email',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Inbox',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/inbox',
          },
          {
            component: CNavItem,
            name: 'Message',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/message',
          },
          {
            component: CNavItem,
            name: 'Compose',
            badge: {
              color: 'danger-gradient',
              text: 'PRO',
            },
            to: '/apps/email/compose',
          },
        ],
      },
    ],
  },
]

export default _nav
