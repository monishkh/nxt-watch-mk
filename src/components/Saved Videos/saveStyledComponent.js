import styled from 'styled-components'

export const SavePage = styled.div`
  display: flex;
`
export const SaveContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  padding: 10px;
`

export const SvTitleContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`
export const SvBtn = styled.button`
  border: none;
  background-color: ${props => (props.isThemeDark ? 'gray' : '#d7dfe9')};
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  margin-right: 15px;
  font-size: 25px;
  color: #ff0b37;
  border-radius: 50px;
`

export const SvHeading = styled.h1`
  font-size: 32px;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`

export const NoSavedVideoContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  padding: 20px;
`

export const NoVideoImg = styled.img`
  width: 350px;
  margin: 10px;
`

export const NoVideoHeading = styled.h1`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 32px;
  line-height: 3;
`

export const NoVideoCaption = styled.p`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 22px;
  text-align: center;
  font-weight: 400;
`
// saved videos list style here...

export const SavedVideosUl = styled.ul`
  padding: 0;
  list-style-type: none;
`

export const SvList = styled.li`
  margin: 10px;
`
export const ListContainer = styled.div`
  padding: 10px;
`

export const SvThumbnail = styled.img`
  width: 350px;
  margin: 5px;
  border-radius: 8px;
`
export const CannelBox = styled.div`
  display: flex;
`
export const ChImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`
export const TBox = styled.div`
  padding: 5px;
`

export const ChH = styled.h1`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 16px;
  text-align: left;
  font-weight: 500;
`
export const ChDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Para = styled.p`
  padding-top: 10px;
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
`
