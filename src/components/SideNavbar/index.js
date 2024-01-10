import {FaFire, FaYoutube} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {ImHome} from 'react-icons/im'

import {Link} from 'react-router-dom'
import {
  SideNavContainer,
  NavItemsContainer,
  SideNavUl,
  SaveHomeIcon,
  NavItems,
  LinkText,
  SideIcon,
  FooterSection,
  SideNavHeading,
  SocialBox,
  SocialImg,
  FooterCaption,
} from './styledComponent'
import NxtWatchContext from '../../context/NxtWatchContext'
import '../../utils/index.css'

const SideNavbar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeDark, activeTab, getActiveTab} = value
      console.log(activeTab)
      const homeActive = () => {
        getActiveTab('home')
      }

      const trendActive = () => {
        getActiveTab('trending')
      }

      const gameActive = () => {
        getActiveTab('gaming')
      }

      const saveActive = () => {
        getActiveTab('saved')
      }

      return (
        <>
          <SideNavContainer isThemeDark={isThemeDark}>
            <NavItemsContainer>
              <SideNavUl>
                <Link to="/" className="link-style">
                  <li onClick={homeActive}>
                    <NavItems activeTab={activeTab === 'home'}>
                      <SaveHomeIcon activeTab={activeTab === 'home'}>
                        <ImHome />
                      </SaveHomeIcon>

                      <LinkText>Home</LinkText>
                    </NavItems>
                  </li>
                </Link>
                <Link to="/trending" className="link-style">
                  <li onClick={trendActive}>
                    <NavItems activeTab={activeTab === 'trending'}>
                      <SideIcon activeTab={activeTab === 'trending'}>
                        <FaFire />
                      </SideIcon>

                      <LinkText>Trending</LinkText>
                    </NavItems>
                  </li>
                </Link>
                <Link to="/gaming" className="link-style">
                  <li onClick={gameActive}>
                    <NavItems activeTab={activeTab === 'gaming'}>
                      <SideIcon activeTab={activeTab === 'gaming'}>
                        <SiYoutubegaming />
                      </SideIcon>

                      <LinkText>Gaming</LinkText>
                    </NavItems>
                  </li>
                </Link>
                <Link to="/saved-videos" className="link-style">
                  <li onClick={saveActive}>
                    <NavItems activeTab={activeTab === 'saved'}>
                      <SideIcon activeTab={activeTab === 'saved'}>
                        <FaYoutube />
                      </SideIcon>

                      <LinkText>Saved Videos</LinkText>
                    </NavItems>
                  </li>
                </Link>
              </SideNavUl>
            </NavItemsContainer>
            {/* footer section */}
            <FooterSection>
              <SideNavHeading>CONTACT US</SideNavHeading>
              <SocialBox style={{width: '90%'}}>
                <SocialImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialBox>
              <FooterCaption>
                Enjoy! Now to see your Channels and Recondition!
              </FooterCaption>
            </FooterSection>
          </SideNavContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideNavbar
