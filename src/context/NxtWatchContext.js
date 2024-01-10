import React from 'react'

const NxtWatchContext = React.createContext({
  isThemeDark: true,
  isSavedVideo: false,
  savedVideo: [],
  activeTab: 'home',
  getActiveTab: () => {},
  changeTheme: () => {},
  saveVideo: () => {},
  videoList: () => {},
})

export default NxtWatchContext
