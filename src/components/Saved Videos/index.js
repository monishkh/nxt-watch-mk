import {FaYoutube} from 'react-icons/fa'

import Header from '../Header'
import SideNavbar from '../SideNavbar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavePage,
  SaveContainer,
  SvTitleContainer,
  SvBtn,
  SvHeading,
  NoSavedVideoContainer,
  NoVideoImg,
  NoVideoHeading,
  NoVideoCaption,
} from './saveStyledComponent'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeDark, savedVideo} = value
      console.log(savedVideo)

      const renderNoSavedVideoView = () => (
        <>
          <NoSavedVideoContainer data-testid="savedVideos">
            <NoVideoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideoHeading isThemeDark={isThemeDark}>
              No saved videos found
            </NoVideoHeading>
            <NoVideoCaption isThemeDark={isThemeDark}>
              You can save your videos while watching them
            </NoVideoCaption>
          </NoSavedVideoContainer>
        </>
      )

      return (
        <>
          <Header />
          <SavePage>
            <SideNavbar />
            <SaveContainer isThemeDark={isThemeDark}>
              <SvTitleContainer>
                <SvBtn isThemeDark={isThemeDark}>
                  <FaYoutube />
                </SvBtn>
                <SvHeading isThemeDark={isThemeDark}>Saved Videos</SvHeading>
              </SvTitleContainer>
              {renderNoSavedVideoView()}
            </SaveContainer>
          </SavePage>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
