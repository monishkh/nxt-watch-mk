import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  background-color: ${props => (props.isThemeDark ? '#231f20' : '#ffffff')};
  height: 60px;
`

export const LogoImg = styled.img`
  width: 100px;
  height: 30px;
  margin-left: 15px;

  //margin-top: 15px;
  @media screen and (min-width: 576px) {
    margin-left: 31px;
    width: 150px;
    height: 40px;
  }
`

export const MobileNavbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  font-size: 25px;
  margin-top: 6px;
`
export const WebNavbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const MobileUlList = styled.ul`
  padding: 0;
  display: flex;
  width: 30%;
  list-style-type: none;
`
export const NavUl = styled.ul`
  padding: 0;
  list-style-type: none;
`
export const NavBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  margin-bottom: 10px;
`

export const HomeIcon = styled.button`
  color: rgb(215, 0, 64);
  margin-right: 10px;
  border: none;
  background-color: transparent;
  font-size: 25px;
`

export const NavLinkText = styled.p`
  font-size: 25px;
  font-weight: 500;
  font-family: Roboto;
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
`
export const Icons = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  font-size: 25px;
  margin-right: 10px;
`
export const OverLayStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.isThemeDark ? '#231f20' : '#f9f9f9')};
  align-items: center;
  min-height: 100vh;
`

export const CloseButton = styled.button`
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  border: none;
  background-color: transparent;
  font-size: 26px;
  margin: 10px;
`
export const UserImage = styled.img`
  width: 30px;
  border-radius: 50px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isThemeDark ? 'white' : '#3b82f6')};
  border: 1px solid ${props => (props.isThemeDark ? 'white' : '#3b82f6')};
  // border-radius: 8px;
  width: 80px;
  height: 40px;
  font-weight: bold;
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.isThemeDark ? '#231f20' : '#f9f9f9')};
  border-radius: 8px;
  width: 300px;
  height: 120px;
  padding: 25px;
  text-align: center;
  @media screen and (min-width: 576px) {
    width: 560px;
    height: 250px;
    padding-top: 90px;
  }
`

export const LogoutText = styled.p`
  color: ${props => (props.isThemeDark ? 'white' : '#00306e')};
  font-weight: 500;
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    font-size: 24px;
    line-height: 1.5;
  }
`
export const PopupCancelButton = styled.button`
  width: 100px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  color: gray;
  margin: 10px;
`

export const PopupLogoutButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  color: white;
  margin: 10px;
`
