import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import NxtWatchContext from './context/NxtWatchContext'

import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import SavedVideos from './components/Saved Videos'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtecterRoute'

// Replace your code here
const App = () => {
  const [isThemeDark, setIsThemeDark] = useState(false)
  // const [isLikeVideo, setIsLikeVideo] = useState(false)
  // const [isDisLikeVideo, setIsDisLikeVideo] = useState(false)
  const [isSavedVideo, setIsSavedVideo] = useState(false)
  const [savedVideo, setSavedVideo] = useState([])
  const [activeTab, setActiveTab] = useState('home')

  const getActiveTab = tab => {
    setActiveTab(tab)
  }

  const saveVideo = () => {
    setIsSavedVideo(prev => !prev)
  }

  const videoList = newVideo => {
    console.log('m', newVideo)
    setSavedVideo(prevState => [...prevState, newVideo])
  }

  //  console.log('sss', savedVideo)

  const changeTheme = () => {
    setIsThemeDark(prev => !prev)
  }

  return (
    <NxtWatchContext.Provider
      value={{
        isThemeDark,
        activeTab,
        getActiveTab,
        isSavedVideo,
        savedVideo,
        changeTheme,
        saveVideo,
        videoList,
      }}
    >
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </NxtWatchContext.Provider>
  )
}

export default App
