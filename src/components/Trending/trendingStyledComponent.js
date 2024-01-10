import styled from 'styled-components'

export const TrendingPage = styled.div`
  display: flex;
`
export const TrendingContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`
export const HeadingContainer = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  padding: 10px;
`

export const FireButton = styled.button`
  background-color: ${props => (props.isThemeDark ? '#606060' : '#cbd5e1')};
  color: #ff0b37;
  border: none;
  border-radius: 50px;
  font-size: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  margin-right: 15px;
`

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`
export const TrendingUl = styled.ul`
  padding: 0;
  list-style-type: none;
`

export const TrendVideoContainer = styled.div`
  padding: 10px;
  width: 100%;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const TrendList = styled.li`
  width: 100%;
`

export const TrendThumbnail = styled.img`
  border-radius: 10px;
  width: 350px;
  @media screen and (min-width: 576px) {
    width: 400px;
    margin: 15px;
  }
`
export const TrendVideoDetailContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelImg = styled.img`
  width: 40px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`
export const Title = styled.h1`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 18px;
  line-height: 1.3;
  font-weight: bold;
  @media screen and (min-width: 576px) {
    width: 400px;
    line-height: 1.1;
    padding-bottom: 10px;
    font-weight: 400;
  }
`

export const ChannelDetail = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ChannelItems = styled.p`
  // color: ${props => (props.isThemeDark ? 'white' : 'black')};
  color: gray;
  font-size: 16px;
  font-weight: 400;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
