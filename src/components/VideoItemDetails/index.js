import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {GrLike, GrDislike} from 'react-icons/gr'
import {FiPlusCircle} from 'react-icons/fi'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import SideNavbar from '../SideNavbar'

import {
  VideoDetailsContainer,
  VideoPlayerContainer,
  VideoTitle,
  PublishAt,
  ViewContainer,
  LikeContainer,
  VideosButton,
  ButtonParagraph,
  ChannelContainer,
  ChannelTitleVew,
  ChImg,
  Description,
  VideoDetailsPage,
  ResponsiveContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureCaption,
  EmptyBtn,
} from './detailsVideoStyledComponent'

const apiConstantStatus = {
  INITIAL: 'initial',
  SUCCESS: 'success',
  LOADER: 'loader',
  FAILURE: 'failure',
}

const VideoItemDetails = props => {
  const [videosDetails, setVideosDetails] = useState()
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.INITIAL)

  useEffect(() => {
    const {match} = props
    const {params} = match
    const {id} = params
    const jwt = Cookies.get('jwt_token')
    setApiStatus(apiConstantStatus.LOADER)
    const getVideoData = async () => {
      const url = `https://apis.ccbp.in/videos/${id}`
      const option = {
        method: 'GET',
        headers: {
          authorization: `bearer ${jwt}`,
        },
      }
      const response = await fetch(url, option)
      if (response.ok === true) {
        const data = await response.json()
        const VideoUpData = {
          videoDetails: {
            channel: {
              name: data.video_details.channel.name,
              profileImageUrl: data.video_details.channel.profile_image_url,
              subscriberCount: data.video_details.channel.subscriber_count,
            },
            description: data.video_details.description,
            id: data.video_details.id,
            publishedAt: formatDistanceToNow(
              new Date(data.video_details.published_at),
            ),
            thumbnailUrl: data.video_details.thumbnail_url,
            title: data.video_details.title,
            isLikeVideo: false,
            isDisLikeVideo: false,
            videoUrl: data.video_details.video_url,
            viewCount: data.video_details.view_count,
          },
        }
        setVideosDetails(VideoUpData)
        setApiStatus(apiConstantStatus.SUCCESS)
      } else {
        setApiStatus(apiConstantStatus.FAILURE)
      }
    }

    getVideoData()
  }, [props])

  /*  ---------- like dislike buttons logic  --------------------- */

  const activeLike = videosDetails && videosDetails.videoDetails.isLikeVideo
  const activeDisLike =
    videosDetails && videosDetails.videoDetails.isDisLikeVideo
  // console.log('like video is: ', activeLike)
  // console.log('dislike video is: ', activeDisLike)

  const isLikeVideoFun = () => {
    setVideosDetails(prevData => ({
      ...prevData,
      videoDetails: {
        ...prevData.videoDetails,
        isLikeVideo: true,
        isDisLikeVideo: false,
      },
    }))
  }

  const isDisLikeVideoFun = () => {
    setVideosDetails(prevData => ({
      ...prevData,
      videoDetails: {
        ...prevData.videoDetails,
        isLikeVideo: false,
        isDisLikeVideo: true,
      },
    }))
  }

  /* ----------------------------------------------------------- */

  /* ------------------- conditional rendering functional are here ------------------- */
  const renderLoaderView = () => (
    <>
      <LoaderContainer data-testid="loader">
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
                alt=""
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

  const renderVideosSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark, isSavedVideo, videoList, saveVideo} = value

        return (
          <>
            <VideoDetailsContainer isThemeDark={isThemeDark}>
              <VideoPlayerContainer>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={videosDetails && videosDetails.videoDetails.videoUrl}
                />
              </VideoPlayerContainer>

              <VideoTitle isThemeDark={isThemeDark}>
                {videosDetails && videosDetails.videoDetails.title}
              </VideoTitle>
              <ResponsiveContainer>
                <ViewContainer>
                  <PublishAt isThemeDark={isThemeDark}>
                    {videosDetails && videosDetails.videoDetails.viewCount}
                  </PublishAt>
                  <PublishAt isThemeDark={isThemeDark}>
                    {videosDetails && videosDetails.videoDetails.publishedAt}
                  </PublishAt>
                </ViewContainer>
                {/* ----------- likes dislikes container ------------------ */}
                <LikeContainer>
                  <VideosButton
                    style={activeLike ? {color: '#2563eb'} : null}
                    onClick={() => isLikeVideoFun()}
                  >
                    <GrLike
                      htmlFor="like"
                      style={activeLike ? {color: '#2563eb'} : null}
                    />
                    <ButtonParagraph id="like">Like</ButtonParagraph>
                  </VideosButton>
                  <VideosButton
                    style={activeDisLike ? {color: '#2563eb'} : null}
                    onClick={() => isDisLikeVideoFun()}
                  >
                    <GrDislike
                      htmlFor="disLike"
                      style={activeDisLike ? {color: '#4f46e5'} : null}
                    />
                    <ButtonParagraph id="disLike">Dislike</ButtonParagraph>
                  </VideosButton>
                  <VideosButton
                    style={isSavedVideo ? {color: '#4f46e5'} : null}
                    onClick={() => videoList(videosDetails)}
                  >
                    <FiPlusCircle onClick={() => saveVideo()} htmlFor="save" />{' '}
                    <ButtonParagraph id="save">Save</ButtonParagraph>
                  </VideosButton>
                </LikeContainer>
              </ResponsiveContainer>
              <hr />

              <ChannelContainer>
                <ChImg
                  src={
                    videosDetails &&
                    videosDetails.videoDetails.channel.profileImageUrl
                  }
                  alt={videosDetails && videosDetails.videoDetails.channel.name}
                />
                <ChannelTitleVew isThemeDark={isThemeDark}>
                  <p>
                    {videosDetails && videosDetails.videoDetails.channel.name}
                  </p>
                  <p>
                    {videosDetails &&
                      videosDetails.videoDetails.channel.subscriberCount}{' '}
                    subscribers
                  </p>
                </ChannelTitleVew>
              </ChannelContainer>
              <Description isThemeDark={isThemeDark}>
                {videosDetails && videosDetails.videoDetails.description}
              </Description>
            </VideoDetailsContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const conditionalRender = () => {
    switch (apiStatus) {
      case apiConstantStatus.LOADER:
        return renderLoaderView()
      case apiConstantStatus.FAILURE:
        return renderFailureView()
      case apiConstantStatus.SUCCESS:
        return renderVideosSuccessView()
      default:
        return null
    }
  }

  /* ----------------------------------------------------------------------- */

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value

        return (
          <>
            <Header />
            <VideoDetailsPage
              isThemeDark={isThemeDark}
              data-testid="videoItemDetails"
            >
              <SideNavbar />
              {conditionalRender()}
            </VideoDetailsPage>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItemDetails
