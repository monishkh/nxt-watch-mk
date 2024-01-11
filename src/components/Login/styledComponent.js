import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isThemeDark ? '#231f20' : 'white')};
`
export const Label = styled.label`
  color: #7e858e;
  font-weight: 500;
  font-size: 16px;
`

export const RadioButton = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`

export const RadioLabel = styled.label`
  color: black;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`

export const Input = styled.input`
  outline: none;
  width: 300px;
  height: 40px;
  color: #7e858e;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #cbd5e1;
  background-color: ${props => (props.isThemeDark ? 'black' : 'white')};
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 550px;
    height: 40px;
  }
`

export const LogoImage = styled.img`
  width: 150px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    width: 250px;
    margin: 15px;
  }
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isThemeDark ? 'black' : 'white')};
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-top: 15px;
  padding-bottom: 15px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 640px;
  }
`

export const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  margin-top: 19px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    width: 550px;
    height: 40px;
  }
`

export const ErrorParagraph = styled.p`
  color: red;
  font-size: 18px;
  font-weight: 400;
`
