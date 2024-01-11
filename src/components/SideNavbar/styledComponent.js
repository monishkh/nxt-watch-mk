import styled from 'styled-components'

export const SideNavContainer = styled.nav`
  background-color: ${props => (props.isThemeDark ? '#231f20' : '#ffffff')};
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 100vh;

  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const NavItemsContainer = styled.div`
  padding: 5px;
`

export const SideNavUl = styled.ul`
  padding: 0;
  padding-top: 10px;
  list-style-type: none;
`
export const NavItems = styled.div`
  background-color: ${props => (props.activeTab ? 'lightgray' : '#fff')};
  color: ${props => (props.isThemeDark ? 'white' : 'black')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  &:hover {
    background-color: ${props =>
      props.isThemeDark ? 'whiteSmoke' : 'lightgray'};
    color: black;
  }
`
export const SaveHomeIcon = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.activeTab ? 'red' : 'gray')};
  font-size: 28px;
  margin-right: 15px;
`

export const LinkText = styled.p`
  font-size: 20px;
  font-weight: 500;
`

export const SideIcon = styled.button`
  background-color: transparent;
  border: none;
  font-size: 28px;
  margin-right: 15px;
  color: ${props => (props.activeTab ? 'red' : 'gray')};
`

// footer section style's

export const FooterSection = styled.div`
  margin: 28px;
  margin-top: 50px;
`
export const SideNavHeading = styled.p`
  font-size: 22px;
  color: gray;
  line-height: 1;
`
export const SocialBox = styled.div`
  display: flex;
  margin-left: -10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const SocialImg = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const FooterCaption = styled.p`
  color: gray;
  font-size: 18px;
  font-weight: 400;
  width: 80%;
  padding-top: 10px;
  padding-bottom: 30px;
`
