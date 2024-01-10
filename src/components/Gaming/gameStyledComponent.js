import styled from 'styled-components'

export const GamePage = styled.div`
  display: flex;
`
export const GameContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  width: 100%;
  padding: 10px;
`
export const GamingTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`
export const GamingButton = styled.button`
  background-color: ${props => (props.isThemeDark ? 'gray' : '#d7dfe9')};

  border-radius: 50px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  font-size: 40px;
  margin-right: 10px;
  color: #ff0b37;
`

export const GameHeading = styled.h1`
  font-size: 36px;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`

export const GameUl = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const GameList = styled.li`
  margin: 5px;
  width: 45%;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`
export const GameListContainer = styled.div`
  padding: 10px;
`
export const GameThumbnail = styled.img`
  width: 150px;
  margin: 5px;
  @media screen and (min-width: 576px) {
    width: 300px;
    margin: 5px;
  }
`

export const GameTitle = styled.h1`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 20px;
  @media screen and (min-width: 576px) {
    font-size: 32px;
    margin: 5px;
  }
`

export const GameParagraph = styled.p`
  font-size: 18px;
  width: 150px;
  color: gray;
  padding-top: 10px;
  @media screen and (min-width: 576px) {
    font-size: 22px;
    margin: 5px;
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
