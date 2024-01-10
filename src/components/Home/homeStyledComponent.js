import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  padding: 10px;
  background-color: ${props => (props.isThemeDark ? '#181818 ' : '#f9f9f9')};
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 576px) {
    width: 100%;
  }
`
export const VideosUL = styled.ul`
  padding: 0;
  list-style-type: none;
  width: 95%;

  @media screen and (min-width: 576px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`
export const VideosList = styled.li`
  width: 100%;
  margin: 5px;
  @media screen and (min-width: 576px) {
    width: 32%;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const ChannelImg = styled.img`
  width: 50px;
  margin-right: 15px;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const ViewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
`
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`

export const HeadingTitle = styled.h1`
  font-size: 13px;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`
export const VideosParagraph = styled.p`
  font-size: 14px;
  font-weight: 400;
`
export const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  @media screen and (min-width: 576px) {
    text-align: right;
    padding: 10px;
  }
`

export const SearchButton = styled.button`
  background-color: ${props => (props.isThemeDark ? 'black' : 'white')};

  border: none;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 14px;
  padding: 5px;
  width: 80px;
  @media screen and (min-width: 576px) {
    width: 100px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

export const SearchInput = styled.input`
  outline: none;
  border: none;
  padding: 6px;
  width: 200px;
  @media screen and (min-width: 576px) {
    width: 400px;
    padding: 11px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`
// empty list view styling...

export const EmptyListViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
`

export const EmptyViewImg = styled.img`
  width: 300px;
  margin: 10px;
  padding-top: 80px;

  @media screen and (min-width: 576px) {
    width: 400px;
    padding-top: 40px;
  }
`

export const EmptyHeading = styled.h1`
  font-size: 33px;
  line-height: 3;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  @media screen and (min-width: 576px) {
    line-height: 1.5;
  }
`

export const EmptyCaption = styled.p`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 23px;
  text-align: center;
  font-weight: 400;
  line-height: 1.5;
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

// loader view styling

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: ${props => (props.isThemeDark ? 'white' : 'black')}
  font-size: 22px;
  width: 300px;
  text-align: center;
  line-height: 1;
`
export const FailureCaption = styled.p` 
color: ${props => (props.isThemeDark ? 'white' : 'black')}
  font-size: 26px;
  width: 300px;
  text-align: center;
  font-weight: 500;
  padding-top: 20px;
`
