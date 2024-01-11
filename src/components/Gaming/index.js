import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamePage,
  GameContainer,
  GamingTitleContainer,
  GamingButton,
  GameHeading,
  GameUl,
  GameList,
  GameListContainer,
  GameThumbnail,
  GameTitle,
  GameParagraph,
  LoaderContainer,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureCaption,
  EmptyBtn,
} from './gameStyledComponent'

const apiConstantStatus = {
  INITIAL: 'initial',
  SUCCESS: 'success',
  LOADER: 'loader',
  FAILURE: 'failure',
}

const Gaming = () => {
  const [gameData, setGameData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.INITIAL)

  useEffect(() => {
    setApiStatus(apiConstantStatus.LOADER)
    const getData = async () => {
      const jwt = Cookies.get('jwt_token')
      const url = 'https://apis.ccbp.in/videos/gaming'
      const option = {
        method: 'GET',
        headers: {
          authorization: `bearer ${jwt}`,
        },
      }

      const response = await fetch(url, option)
      if (response.ok === true) {
        const data = await response.json()
        const updateData = {
          videos: data.videos.map(eachGame => ({
            id: eachGame.id,
            thumbnailUrl: eachGame.thumbnail_url,
            title: eachGame.title,
            viewCount: eachGame.view_count,
          })),
        }
        setGameData(updateData)
        setApiStatus(apiConstantStatus.SUCCESS)
      } else {
        setApiStatus(apiConstantStatus.FAILURE)
      }
    }

    getData()
  }, [])

  const renderLoaderView = () => (
    <>
      <LoaderContainer className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
      </LoaderContainer>
    </>
  )

  const renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value

        return (
          <>
            <FailureViewContainer>
              <FailureImg
                src={
                  isThemeDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure image"
              />
              <FailureHeading isThemeDark={isThemeDark}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureCaption isThemeDark={isThemeDark}>
                We are having to some trouble to complete your request. Please
                try again.{' '}
              </FailureCaption>
              <EmptyBtn>Retry</EmptyBtn>
            </FailureViewContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderGameSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value

        return (
          <>
            <GameUl>
              {gameData.videos &&
                gameData.videos.map(eachItem => (
                  <GameList key={eachItem.id}>
                    <Link
                      to={`/videos/${eachItem.id}`}
                      style={{textDecoration: 'none', width: '100%'}}
                    >
                      <GameListContainer>
                        <GameThumbnail
                          src={eachItem.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <GameTitle isThemeDark={isThemeDark}>
                          {eachItem.title}
                        </GameTitle>
                        <GameParagraph>
                          {eachItem.viewCount} Watching Worldwide
                        </GameParagraph>
                      </GameListContainer>
                    </Link>
                  </GameList>
                ))}
            </GameUl>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const conditionalRender = () => {
    switch (apiStatus) {
      case apiConstantStatus.LOADER:
        return renderLoaderView()
      case apiConstantStatus.SUCCESS:
        return renderGameSuccessView()
      case apiConstantStatus.FAILURE:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value

        return (
          <>
            <Header />
            <GamePage>
              <SideNavbar />
              <GameContainer isThemeDark={isThemeDark} data-testid="gaming">
                <GamingTitleContainer>
                  <GamingButton isThemeDark={isThemeDark}>
                    <SiYoutubegaming />
                  </GamingButton>
                  <GameHeading isThemeDark={isThemeDark}>Gaming</GameHeading>
                </GamingTitleContainer>
                {conditionalRender()}
              </GameContainer>
            </GamePage>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Gaming
