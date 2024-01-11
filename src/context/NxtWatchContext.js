import React from 'react'

const NxtWatchContext = React.createContext({
  isThemeDark: true,
  activeTab: 'home',
  savedVideo: [],
  getActiveTab: () => {},
  changeTheme: () => {},
  addSavedVideo: () => {},
})

export default NxtWatchContext
