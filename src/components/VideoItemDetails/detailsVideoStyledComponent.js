import styled from 'styled-components'

export const VideoDetailsPage = styled.div`
  display: flex;
`

export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  padding-top: 30px;
  padding-bottom: 50px;
  min-height: 100vh;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 100%;
    padding-top: 0px;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 250px;
  @media screen and (min-width: 576px) {
    height: 400px;
    // padding-left: 15px;
  }
`

export const VideoTitle = styled.h1`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 20px;
  padding: 10px;
  font-weight: 400;
  @media screen and (min-width: 576px) {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.3;
  }
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const PublishAt = styled.p`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 20px;
  padding: 10px;
`
export const ViewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const LikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: 10px;
`

export const VideosButton = styled.button`
  background-color: transparent;
  border: none;
  color: #64748b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`

export const ButtonParagraph = styled.p`
  color: #64748b;
  font-size: 16px;
  line-height: 0;
  margin-left: 5px;
`
export const ChannelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  color: black;
`

export const ChImg = styled.img`
  width: 50px;
  margin-right: 15px;
`

export const ChannelTitleVew = styled.div`
  padding: 10px;
  height: 70px;
  display: flex;
  font-size: 20px;
  font-weight: 400;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.2;
  padding: 10px;
  font-weight: 300;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-left: 180px;
  @media screen and (min-width: 576px) {
    padding-left: 450px;
  }
`

export const EmptyBtn = styled.button`
  border: none;
  color: white;
  padding: 10px;
  width: 100px;
  height: 50px;
  background-color: #4f46e5;
  margin-top: 10px;
`

// failure view styling

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  height: 100vh;
`
export const FailureImg = styled.img`
  width: 300px;
  margin: 10px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 22px;
  width: 300px;
  text-align: center;
  line-height: 1;
`
export const FailureCaption = styled.p`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 26px;
  width: 300px;
  text-align: center;
  font-weight: 500;
  padding-top: 20px;
`
