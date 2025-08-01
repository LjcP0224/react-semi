export default {
  title: '偏好设置',
  subtitle: '自定义偏好设置 & 实时预览',
  resetTitle: '重置偏好设置',
  resetTip: '数据有变化，点击可进行重置',
  resetSuccess: '重置偏好设置成功',
  appearance: '外观',
  layout: '布局',
  content: '内容',
  other: '其它',
  wide: '流式',
  compact: '定宽',
  followSystem: '跟随系统',
  vertical: '垂直',
  verticalTip: '侧边垂直菜单模式',
  horizontal: '水平',
  horizontalTip: '水平菜单模式，菜单全部显示在顶部',
  twoColumn: '双列菜单',
  twoColumnTip: '垂直双列菜单模式',
  headerSidebarNav: '侧边导航',
  headerSidebarNavTip: '顶部通栏，侧边导航模式',
  headerTwoColumn: '混合双列',
  headerTwoColumnTip: '双列、水平菜单共存模式',
  mixedMenu: '混合垂直',
  mixedMenuTip: '垂直水平菜单共存',
  fullContent: '内容全屏',
  fullContentTip: '不显示任何菜单，只显示内容主体',
  normal: '常规',
  plain: '朴素',
  rounded: '圆润',
  copyPreferences: '复制偏好设置',
  copyPreferencesSuccessTitle: '复制成功',
  copyPreferencesSuccess:
    '复制成功，请在 app 下的 `src/preferences.ts`内进行覆盖',
  clearAndLogout: '清空缓存 & 退出登录',
  mode: '模式',
  general: '通用',
  language: '语言',
  dynamicTitle: '动态标题',
  watermark: '水印',
  checkUpdates: '定时检查更新',
  position: {
    title: '偏好设置位置',
    header: '顶栏',
    auto: '自动',
    fixed: '固定'
  },
  sidebar: {
    title: '侧边栏',
    width: '宽度',
    visible: '显示侧边栏',
    collapsed: '折叠菜单',
    collapsedShowTitle: '折叠显示菜单名',
    autoActivateChild: '自动激活子菜单',
    autoActivateChildTip:
      '点击顶层菜单时,自动激活第一个子菜单或者上一次激活的子菜单',
    expandOnHover: '鼠标悬停展开',
    expandOnHoverTip:
      '鼠标在折叠区域悬浮时，`启用`则展开当前子菜单，`禁用`则展开整个侧边栏'
  },
  tabbar: {
    title: '标签栏',
    enable: '启用标签栏',
    icon: '显示标签栏图标',
    showMore: '显示更多按钮',
    showMaximize: '显示最大化按钮',
    persist: '持久化标签页',
    maxCount: '最大标签数',
    maxCountTip:
      '每次打开新的标签时如果超过最大标签数，\n会自动关闭一个最先打开的标签\n设置为 0 则不限制',
    draggable: '启动拖拽排序',
    wheelable: '启用纵向滚轮响应',
    middleClickClose: '点击鼠标中键关闭标签页',
    wheelableTip:
      '开启后，标签栏区域可以响应滚轮的纵向滚动事件。\n关闭时，只能响应系统的横向滚动事件（需要按下Shift再滚动滚轮）',
    styleType: {
      title: '标签页风格',
      chrome: '谷歌',
      card: '卡片',
      plain: '朴素',
      brisk: '轻快'
    },
    contextMenu: {
      reload: '重新加载',
      close: '关闭',
      pin: '固定',
      unpin: '取消固定',
      closeLeft: '关闭左侧标签页',
      closeRight: '关闭右侧标签页',
      closeOther: '关闭其它标签页',
      closeAll: '关闭全部标签页',
      openInNewWindow: '在新窗口打开',
      maximize: '最大化',
      restoreMaximize: '还原'
    }
  },
  navigationMenu: {
    title: '导航菜单',
    style: '导航菜单风格',
    accordion: '侧边导航菜单手风琴模式',
    split: '导航菜单分离',
    splitTip: '开启时，侧边栏显示顶栏对应菜单的子菜单'
  },
  breadcrumb: {
    title: '面包屑导航',
    enable: '开启面包屑导航',
    icon: '显示面包屑图标',
    home: '显示首页按钮',
    style: '面包屑风格',
    hideOnlyOne: '仅有一个时隐藏',
    background: '背景'
  },
  animation: {
    title: '动画',
    loading: '页面切换 Loading',
    transition: '页面切换动画',
    progress: '页面切换进度条'
  },
  theme: {
    title: '主题',
    radius: '圆角',
    light: '浅色',
    dark: '深色',
    darkSidebar: '深色侧边栏',
    darkHeader: '深色顶栏',
    weakMode: '色弱模式',
    grayMode: '灰色模式',
    builtin: {
      title: '内置主题',
      default: '默认',
      violet: '紫罗兰',
      pink: '樱花粉',
      rose: '玫瑰红',
      skyBlue: '天蓝色',
      deepBlue: '深蓝色',
      green: '浅绿色',
      deepGreen: '深绿色',
      orange: '橙黄色',
      yellow: '柠檬黄',
      zinc: '锌色灰',
      neutral: '中性色',
      slate: '石板灰',
      gray: '中灰色',
      custom: '自定义'
    }
  },
  header: {
    title: '顶栏',
    modeStatic: '静止',
    modeFixed: '固定',
    modeAuto: '自动隐藏和显示',
    modeAutoScroll: '滚动隐藏和显示',
    visible: '显示顶栏',
    menuAlign: '菜单位置',
    menuAlignStart: '左侧',
    menuAlignEnd: '右侧',
    menuAlignCenter: '居中'
  },
  footer: {
    title: '底栏',
    visible: '显示底栏',
    fixed: '固定在底部'
  },
  copyright: {
    title: '版权',
    enable: '启用版权',
    companyName: '公司名',
    companySiteLink: '公司主页',
    date: '日期',
    icp: 'ICP 备案号',
    icpLink: 'ICP 网站链接'
  },
  shortcutKeys: {
    title: '快捷键',
    global: '全局',
    search: '全局搜索',
    logout: '退出登录',
    preferences: '偏好设置'
  },
  widget: {
    title: '小部件',
    globalSearch: '启用全局搜索',
    fullscreen: '启用全屏',
    themeToggle: '启用主题切换',
    languageToggle: '启用语言切换',
    notification: '启用通知',
    sidebarToggle: '启用侧边栏切换',
    lockScreen: '启用锁屏',
    refresh: '启用刷新'
  }
};
