export default {
  title: 'Preferences',
  subtitle: 'Customize Preferences & Preview in Real Time',
  resetTip: 'Data has changed, click to reset',
  resetTitle: 'Reset Preferences',
  resetSuccess: 'Preferences reset successfully',
  appearance: 'Appearance',
  layout: 'Layout',
  content: 'Content',
  other: 'Other',
  wide: 'Wide',
  compact: 'Fixed',
  followSystem: 'Follow System',
  vertical: 'Vertical',
  verticalTip: 'Side vertical menu mode',
  horizontal: 'Horizontal',
  horizontalTip: 'Horizontal menu mode, all menus displayed at the top',
  twoColumn: 'Two Column',
  twoColumnTip: 'Vertical Two Column Menu Mode',
  headerSidebarNav: 'Header Vertical',
  headerSidebarNavTip: 'Header Full Width, Sidebar Navigation Mode',
  headerTwoColumn: 'Header Two Column',
  headerTwoColumnTip: 'Header Navigation & Sidebar Two Column co-exists',
  mixedMenu: 'Mixed Menu',
  mixedMenuTip: 'Vertical & Horizontal Menu Co-exists',
  fullContent: 'Full Content',
  fullContentTip: 'Only display content body, hide all menus',
  normal: 'Normal',
  plain: 'Plain',
  rounded: 'Rounded',
  copyPreferences: 'Copy Preferences',
  copyPreferencesSuccessTitle: 'Copy successful',
  copyPreferencesSuccess:
    'Copy successful, please override in `src/preferences.ts` under app',
  clearAndLogout: 'Clear Cache & Logout',
  mode: 'Mode',
  general: 'General',
  language: 'Language',
  dynamicTitle: 'Dynamic Title',
  watermark: 'Watermark',
  checkUpdates: 'Periodic update check',
  position: {
    title: 'Preferences Postion',
    header: 'Header',
    auto: 'Auto',
    fixed: 'Fixed'
  },
  sidebar: {
    title: 'Sidebar',
    width: 'Width',
    visible: 'Show Sidebar',
    collapsed: 'Collpase Menu',
    collapsedShowTitle: 'Show Menu Title',
    autoActivateChild: 'Auto Activate SubMenu',
    autoActivateChildTip:
      '`Enabled` to automatically activate the submenu while click menu.',
    expandOnHover: 'Expand On Hover',
    expandOnHoverTip:
      'When the mouse hovers over menu, \n `Enabled` to expand children menus \n `Disabled` to expand whole sidebar.'
  },
  tabbar: {
    title: 'Tabbar',
    enable: 'Enable Tab Bar',
    icon: 'Show Tabbar Icon',
    showMore: 'Show More Button',
    showMaximize: 'Show Maximize Button',
    persist: 'Persist Tabs',
    maxCount: 'Max Count of Tabs',
    maxCountTip:
      'When the number of tabs exceeds the maximum,\nthe oldest tab will be closed.\n Set to 0 to disable count checking.',
    draggable: 'Enable Draggable Sort',
    wheelable: 'Support Mouse Wheel',
    middleClickClose: 'Close Tab when Mouse Middle Button Click',
    wheelableTip:
      'When enabled, the Tabbar area responds to vertical scrolling events of the scroll wheel.',
    styleType: {
      title: 'Tabs Style',
      chrome: 'Chrome',
      card: 'Card',
      plain: 'Plain',
      brisk: 'Brisk'
    },
    contextMenu: {
      reload: 'Reload',
      close: 'Close',
      pin: 'Pin',
      unpin: 'Unpin',
      closeLeft: 'Close Left Tabs',
      closeRight: 'Close Right Tabs',
      closeOther: 'Close Other Tabs',
      closeAll: 'Close All Tabs',
      openInNewWindow: 'Open in New Window',
      maximize: 'Maximize',
      restoreMaximize: 'Restore'
    }
  },
  navigationMenu: {
    title: 'Navigation Menu',
    style: 'Navigation Menu Style',
    accordion: 'Sidebar Accordion Menu',
    split: 'Navigation Menu Separation',
    splitTip: "When enabled, the sidebar displays the top bar's submenu"
  },
  breadcrumb: {
    title: 'Breadcrumb',
    home: 'Show Home Button',
    enable: 'Enable Breadcrumb',
    icon: 'Show Breadcrumb Icon',
    background: 'background',
    style: 'Breadcrumb Style',
    hideOnlyOne: 'Hidden when only one'
  },
  animation: {
    title: 'Animation',
    loading: 'Page Loading',
    transition: 'Page Transition',
    progress: 'Page Progress'
  },
  theme: {
    title: 'Theme',
    radius: 'Radius',
    light: 'Light',
    dark: 'Dark',
    darkSidebar: 'Semi Dark Sidebar',
    darkHeader: 'Semi Dark Header',
    weakMode: 'Weak Mode',
    grayMode: 'Gray Mode',
    builtin: {
      title: 'Built-in',
      default: 'Default',
      violet: 'Violet',
      pink: 'Pink',
      rose: 'Rose',
      skyBlue: 'Sky Blue',
      deepBlue: 'Deep Blue',
      green: 'Green',
      deepGreen: 'Deep Green',
      orange: 'Orange',
      yellow: 'Yellow',
      zinc: 'Zinc',
      neutral: 'Neutral',
      slate: 'Slate',
      gray: 'Gray',
      custom: 'Custom'
    }
  },
  header: {
    title: 'Header',
    visible: 'Show Header',
    modeStatic: 'Static',
    modeFixed: 'Fixed',
    modeAuto: 'Auto hide & Show',
    modeAutoScroll: 'Scroll to Hide & Show',
    menuAlign: 'Menu Align',
    menuAlignStart: 'Start',
    menuAlignEnd: 'End',
    menuAlignCenter: 'Center'
  },
  footer: {
    title: 'Footer',
    visible: 'Show Footer',
    fixed: 'Fixed at Bottom'
  },
  copyright: {
    title: 'Copyright',
    enable: 'Enable Copyright',
    companyName: 'Company Name',
    companySiteLink: 'Company Site Link',
    date: 'Date',
    icp: 'ICP License Number',
    icpLink: 'ICP Site Link'
  },
  shortcutKeys: {
    title: 'Shortcut Keys',
    global: 'Global',
    search: 'Global Search',
    logout: 'Logout',
    preferences: 'Preferences'
  },
  widget: {
    title: 'Widget',
    globalSearch: 'Enable Global Search',
    fullscreen: 'Enable Fullscreen',
    themeToggle: 'Enable Theme Toggle',
    languageToggle: 'Enable Language Toggle',
    notification: 'Enable Notification',
    sidebarToggle: 'Enable Sidebar Toggle',
    lockScreen: 'Enable Lock Screen',
    refresh: 'Enable Refresh'
  }
};
