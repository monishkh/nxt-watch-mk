import styled from 'styled-components'

export const NotFoundPage = styled.div`
  display: flex;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#0f0f0f ' : ' #f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 10px;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 32px;
  line-height: 2;
  font-weight: bold;
`

export const NotFoundCaption = styled.p`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  text-align: center;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 500;
`
export const NotFoundImg = styled.img`
  width: 330px;
  margin: 10px;
`
