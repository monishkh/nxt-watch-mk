import {BsSearch} from 'react-icons/bs'

import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

import NxtWatchContext from '../../context/NxtWatchContext'
// import '../../utils/index.css'

import {
  HomePage,
  HomeContainer,
  VideosUL,
  VideosList,
  VideoThumbnail,
  ChannelImg,
  TitleContainer,
  ViewsContainer,
  VideoContainer,
  TitleBox,
  HeadingTitle,
  VideosParagraph,
  SearchBox,
  SearchButton,
  SearchInput,
  EmptyListViewContainer,
  EmptyViewImg,
  EmptyHeading,
  EmptyCaption,
  EmptyBtn,
  LoaderContainer,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureCaption,
} from './homeStyledComponent'

const apiConstantStatus = {
  INITIALS: 'initials',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
}

const Home = () => {
  const [videosData, setVideosData] = useState([])
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [onTry, setOnTry] = useState(false)
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.INITIALS)

  const getSearch = () => {
    setSearchInput(search)
  }

  useEffect(() => {
    setApiStatus(apiConstantStatus.LOADING)
    const fetchData = async () => {
      const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
      const jwt = Cookies.get('jwt_token')
      const option = {
        method: 'GET',
        headers: {
          authorization: `bearer ${jwt}`,
        },
      }
      const response = await fetch(apiUrl, option)
      const data = await response.json()
      console.log(data)

      if (response.ok === true) {
        // console.log(data)

        const updateData = {
          videos: data.videos.map(eachVideo => ({
            channel: {
              name: eachVideo.channel.name,
              profileImageUrl: eachVideo.channel.profile_image_url,
            },
            id: eachVideo.id,
            publishedAt: eachVideo.published_at,
            thumbnailUrl: eachVideo.thumbnail_url,
            title: eachVideo.title,
            viewCount: eachVideo.view_count,
          })),
        }
        // console.log(updateData)
        setVideosData(updateData)
        setApiStatus(apiConstantStatus.SUCCESS)
      } else {
        console.log('some want wrong')
        setApiStatus(apiConstantStatus.FAILURE)
      }
    }
    fetchData()
  }, [searchInput, onTry])

  const reTry = () => {
    //  setSearch('')
    setOnTry(prev => !prev)
    getSearch()
  }

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

  const renderEmptyListView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value

        return (
          <>
            <EmptyListViewContainer>
              <EmptyViewImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                alt="no videos"
              />
              <EmptyHeading isThemeDark={isThemeDark}>
                No Search result found
              </EmptyHeading>
              <EmptyCaption isThemeDark={isThemeDark}>
                Try different key word or remove search filter
              </EmptyCaption>
              <EmptyBtn onClick={() => reTry()}>Retry</EmptyBtn>
            </EmptyListViewContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderVideosSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value

        const renderCondition =
          videosData.videos && videosData.videos.length === 0

        if (renderCondition) {
          setSearch('')
        }

        return (
          <>
            {renderCondition ? (
              renderEmptyListView()
            ) : (
              <>
                <VideosUL>
                  {videosData.videos &&
                    videosData.videos.map(eachItem => (
                      <VideosList key={eachItem.id}>
                        <Link
                          to={`/videos/${eachItem.id}`}
                          style={{textDecoration: 'none', width: '100%'}}
                          key={eachItem.id}
                        >
                          <VideoContainer>
                            <VideoThumbnail
                              src={eachItem.thumbnailUrl}
                              alt="video thumbnail"
                            />

                            <TitleContainer>
                              <ChannelImg
                                src={eachItem.channel.profileImageUrl}
                                alt="channel logo"
                              />
                              <TitleBox isThemeDark={isThemeDark}>
                                <HeadingTitle isThemeDark={isThemeDark}>
                                  {eachItem.title}
                                </HeadingTitle>
                                <ViewsContainer>
                                  <VideosParagraph>
                                    {eachItem.channel.name}
                                  </VideosParagraph>
                                  <VideosParagraph>
                                    {eachItem.viewCount}
                                  </VideosParagraph>
                                  <VideosParagraph>
                                    {formatDistanceToNow(
                                      new Date(eachItem.publishedAt),
                                    )}
                                  </VideosParagraph>
                                </ViewsContainer>
                              </TitleBox>
                            </TitleContainer>
                          </VideoContainer>
                        </Link>
                      </VideosList>
                    ))}
                </VideosUL>
              </>
            )}
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const conditionalRendering = () => {
    switch (apiStatus) {
      case apiConstantStatus.LOADING:
        return renderLoaderView()
      case apiConstantStatus.FAILURE:
        return renderFailureView()
      case apiConstantStatus.SUCCESS:
        return renderVideosSuccessView()
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
            <HomePage>
              <SideNavbar />
              <HomeContainer isThemeDark={isThemeDark} data-testid="home">
                <SearchBox>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <SearchButton data-testid="searchButton">
                    <BsSearch onClick={getSearch} />
                  </SearchButton>
                </SearchBox>
                {/* {renderFailureView()}
                {renderLoaderView()}
                {renderCondition
                  ? renderEmptyListView()
                  : renderVideosSuccessView()} */}
                {conditionalRendering()}
              </HomeContainer>
            </HomePage>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Home
