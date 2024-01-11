import {FaFire} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingPage,
  TrendingContainer,
  HeadingContainer,
  FireButton,
  Heading,
  TrendingUl,
  TrendVideoContainer,
  TrendThumbnail,
  TrendVideoDetailContainer,
  ChannelImg,
  TitleContainer,
  Title,
  ChannelDetail,
  ChannelItems,
  TrendList,
  LoaderContainer,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureCaption,
  EmptyBtn,
} from './trendingStyledComponent'

const apiConstantStatus = {
  INITIAL: 'initial',
  SUCCESS: 'success',
  LOADER: 'loader',
  FAILURE: 'failure',
}

const Trending = () => {
  const [trendingData, setTrendingData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.INITIAL)

  useEffect(() => {
    setApiStatus(apiConstantStatus.LOADER)
    const getData = async () => {
      const jwt = Cookies.get('jwt_token')
      const url = 'https://apis.ccbp.in/videos/trending'
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
          videos: data.videos.map(eachItem => ({
            channel: {
              name: eachItem.channel.name,
              profileImageUrl: eachItem.channel.profile_image_url,
            },
            id: eachItem.id,
            publishedAt: eachItem.published_at,
            thumbnailUrl: eachItem.thumbnail_url,
            title: eachItem.title,
            viewCount: eachItem.view_count,
          })),
        }

        setTrendingData(updateData)
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

  const renderTrendingSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value

        return (
          <TrendingUl>
            {trendingData.videos &&
              trendingData.videos.map(eachTrend => (
                <TrendList key={eachTrend.id}>
                  <Link
                    to={`/videos/${eachTrend.id}`}
                    style={{textDecoration: 'none', width: '100%'}}
                  >
                    <TrendVideoContainer>
                      <TrendThumbnail
                        src={eachTrend.thumbnailUrl}
                        alt="thumbnail image"
                      />
                      <TrendVideoDetailContainer>
                        <ChannelImg
                          src={eachTrend.channel.profileImageUrl}
                          alt="channel logo"
                        />
                        <TitleContainer>
                          <Title isThemeDark={isThemeDark}>
                            {eachTrend.title}
                          </Title>
                          <ChannelDetail isThemeDark={isThemeDark}>
                            <ChannelItems>
                              {eachTrend.channel.name}
                            </ChannelItems>
                            <ChannelItems>
                              {eachTrend.viewCount}Views
                            </ChannelItems>
                            <ChannelItems>
                              {formatDistanceToNow(
                                new Date(eachTrend.publishedAt),
                              )}
                            </ChannelItems>
                          </ChannelDetail>
                        </TitleContainer>
                      </TrendVideoDetailContainer>
                    </TrendVideoContainer>
                  </Link>
                </TrendList>
              ))}
          </TrendingUl>
        )
      }}
    </NxtWatchContext.Consumer>
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

  const conditionalRender = () => {
    switch (apiStatus) {
      case apiConstantStatus.LOADER:
        return renderLoaderView()
      case apiConstantStatus.SUCCESS:
        return renderTrendingSuccessView()
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
            <TrendingPage>
              <SideNavbar />
              <TrendingContainer
                isThemeDark={isThemeDark}
                data-testid="trending"
              >
                <HeadingContainer>
                  <FireButton isThemeDark={isThemeDark}>
                    <FaFire />
                  </FireButton>
                  <Heading isThemeDark={isThemeDark}>Trending</Heading>
                </HeadingContainer>

                {conditionalRender()}
              </TrendingContainer>
            </TrendingPage>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Trending
