import Header from '../Header'
import SideNavbar from '../SideNavbar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundPage,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundCaption,
  NotFoundImg,
} from './fontfoundstyledcomponent'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isThemeDark} = value

      return (
        <>
          <Header />
          <NotFoundPage>
            <SideNavbar />
            <NotFoundContainer isThemeDark={isThemeDark}>
              <NotFoundImg
                src={
                  isThemeDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading isThemeDark={isThemeDark}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundCaption isThemeDark={isThemeDark}>
                We are sorry, the page you requested could not be found
              </NotFoundCaption>
            </NotFoundContainer>
          </NotFoundPage>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound

console.log('font-found')
