import {FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'

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
  SavedVideosUl,
  SvList,
  ListContainer,
  SvThumbnail,
  CannelBox,
  ChImg,
  TBox,
  ChH,
  ChDetail,
  Para,
} from './saveStyledComponent'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeDark, savedVideo} = value

      // savedVideo.map(e => console.log('m', e.videoDetails.channel.name))

      const condition = savedVideo.length === 0
      // console.log(condition)

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

      const renderSavedVideosListView = () => (
        <>
          <SavedVideosUl>
            {savedVideo.map(eachItem => (
              <SvList key={eachItem.videoDetails.id}>
                <Link
                  to={`/videos/${eachItem.videoDetails.id}`}
                  style={{textDecoration: 'none', width: '100%'}}
                >
                  <ListContainer>
                    <SvThumbnail
                      src={eachItem.videoDetails.thumbnailUrl}
                      alt="thumbnail image"
                    />
                    <CannelBox>
                      <ChImg
                        src={eachItem.videoDetails.channel.profileImageUrl}
                        alt="channel logo"
                      />
                      <TBox>
                        <ChH isThemeDark={isThemeDark}>
                          {eachItem.videoDetails.title}
                        </ChH>
                        <ChDetail>
                          <Para>{eachItem.videoDetails.channel.name}</Para>
                          <Para>{eachItem.videoDetails.viewCount} views</Para>
                          <Para>{eachItem.videoDetails.publishedAt}</Para>
                        </ChDetail>
                      </TBox>
                    </CannelBox>
                  </ListContainer>
                </Link>
              </SvList>
            ))}
          </SavedVideosUl>
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
              {condition
                ? renderNoSavedVideoView()
                : renderSavedVideosListView()}
            </SaveContainer>
          </SavePage>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
