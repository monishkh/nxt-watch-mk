import {FaMoon, FaFire, FaYoutube} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {IoMdSunny} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {IoClose} from 'react-icons/io5'
import {ImHome} from 'react-icons/im'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Popup} from 'reactjs-popup'

import {
  NavbarContainer,
  NavUl,
  NavBox,
  HomeIcon,
  NavLinkText,
  Icons,
  LogoImg,
  MobileNavbar,
  ThemeButton,
  WebNavbar,
  MobileUlList,
  CloseButton,
  UserImage,
  LogoutButton,
  LogoutPopupContainer,
  LogoutText,
  PopupCancelButton,
  PopupLogoutButton,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'
import '../../utils/index.css'

const Header = props => {
  const {history} = props

  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark, changeTheme} = value
        // console.log(isThemeDark)
        const overLayout = {
          backgroundColor: isThemeDark ? 'black' : 'white',
          textAlign: 'center',
          paddingBottom: '150px',
        }

        return (
          <>
            <NavbarContainer isThemeDark={isThemeDark}>
              <Link to="/" style={{textDecoration: 'none'}}>
                <LogoImg
                  // onClick={() => backToHome()}
                  src={
                    isThemeDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="nxt watch logo"
                />
              </Link>

              <MobileNavbar>
                <MobileUlList>
                  <li>
                    <ThemeButton
                      onClick={() => changeTheme()}
                      isThemeDark={isThemeDark}
                    >
                      {isThemeDark ? <IoMdSunny /> : <FaMoon />}
                    </ThemeButton>
                  </li>
                  <li>
                    <ThemeButton isThemeDark={isThemeDark}>
                      <Popup
                        modal
                        trigger={<GiHamburgerMenu />}
                        overlayStyle={overLayout}
                      >
                        {close => (
                          <>
                            <div>
                              <CloseButton isThemeDark={isThemeDark}>
                                <IoClose onClick={() => close()} />
                              </CloseButton>

                              <NavUl>
                                <Link to="/" className="link-style">
                                  <li>
                                    <NavBox>
                                      <HomeIcon>
                                        <ImHome />
                                      </HomeIcon>

                                      <NavLinkText isThemeDark={isThemeDark}>
                                        Home
                                      </NavLinkText>
                                    </NavBox>
                                  </li>
                                </Link>
                                <Link to="/trending" className="link-style">
                                  <li>
                                    <NavBox>
                                      <Icons>
                                        <FaFire />
                                      </Icons>

                                      <NavLinkText isThemeDark={isThemeDark}>
                                        Trending
                                      </NavLinkText>
                                    </NavBox>
                                  </li>
                                </Link>
                                <Link to="/gaming" className="link-style">
                                  <li>
                                    <NavBox>
                                      <Icons>
                                        <SiYoutubegaming />
                                      </Icons>

                                      <NavLinkText isThemeDark={isThemeDark}>
                                        Gaming
                                      </NavLinkText>
                                    </NavBox>
                                  </li>
                                </Link>
                                <Link to="/saved-videos" className="link-style">
                                  <li>
                                    <NavBox>
                                      <Icons>
                                        <FaYoutube />
                                      </Icons>

                                      <NavLinkText isThemeDark={isThemeDark}>
                                        Saved Videos
                                      </NavLinkText>
                                    </NavBox>
                                  </li>
                                </Link>
                              </NavUl>
                            </div>
                          </>
                        )}
                      </Popup>
                    </ThemeButton>
                  </li>
                  <li>
                    <Popup
                      modal
                      trigger={
                        <ThemeButton isThemeDark={isThemeDark}>
                          <FiLogOut />
                        </ThemeButton>
                      }
                    >
                      {close => (
                        <>
                          <LogoutPopupContainer isThemeDark={isThemeDark}>
                            <LogoutText isThemeDark={isThemeDark}>
                              Are you sure you want to logout?
                            </LogoutText>
                            <PopupCancelButton onClick={() => close()}>
                              Cancel
                            </PopupCancelButton>
                            <PopupLogoutButton onClick={() => logout()}>
                              Logout
                            </PopupLogoutButton>
                          </LogoutPopupContainer>
                        </>
                      )}
                    </Popup>
                  </li>
                </MobileUlList>
              </MobileNavbar>
              <WebNavbar>
                <ThemeButton
                  onClick={() => changeTheme()}
                  isThemeDark={isThemeDark}
                >
                  {isThemeDark ? <IoMdSunny /> : <FaMoon />}
                </ThemeButton>
                <UserImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile image"
                />
                <Popup
                  modal
                  trigger={
                    <LogoutButton isThemeDark={isThemeDark}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <>
                      <LogoutPopupContainer isThemeDark={isThemeDark}>
                        <LogoutText isThemeDark={isThemeDark}>
                          Are you sure, you want to logout
                        </LogoutText>
                        <PopupCancelButton onClick={() => close()}>
                          Cancel
                        </PopupCancelButton>
                        <PopupLogoutButton onClick={() => logout()}>
                          Logout
                        </PopupLogoutButton>
                      </LogoutPopupContainer>
                    </>
                  )}
                </Popup>
              </WebNavbar>
            </NavbarContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
