import {useState} from 'react'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginContainer,
  Input,
  LoginPage,
  LogoImage,
  Label,
  RadioButton,
  RadioLabel,
  LoginButton,
  ErrorParagraph,
} from './styledComponent'

const Login = props => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const {history} = props

  if (Cookies.get('jwt_token')) {
    history.replace('/')
  }

  // console.log(history)

  const cockieSet = jwtToken => {
    Cookies.set('jwt_token', jwtToken)
    history.replace('/')
    console.log('yes')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isThemeDark} = value
        // ------------

        const handelSubmit = async e => {
          e.preventDefault()

          const option = {
            method: 'POST',
            body: JSON.stringify(user),
          }
          const response = await fetch('https://apis.ccbp.in/login', option)
          const data = await response.json()
          if (response.ok === true) {
            cockieSet(data.jwt_token)
            console.log('ok')
          } else {
            setErrorMsg(data.error_msg)
          }
        }

        return (
          <>
            <LoginPage isThemeDark={isThemeDark}>
              <LoginContainer isThemeDark={isThemeDark}>
                <LogoImage
                  src={
                    isThemeDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="logo"
                />
                <form onSubmit={handelSubmit}>
                  <div>
                    <Label htmlFor="username">USERNAME</Label>
                    <br />
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      isThemeDark={isThemeDark}
                      onChange={e =>
                        setUser({...user, username: e.target.value})
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">PASSWORD</Label>
                    <br />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      isThemeDark={isThemeDark}
                      value={user.password}
                      id="password"
                      placeholder="Password"
                      onChange={e =>
                        setUser({...user, password: e.target.value})
                      }
                    />
                  </div>
                  <br />
                  <RadioButton
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() => setShowPassword(prev => !prev)}
                  />
                  <RadioLabel htmlFor="check" isThemeDark={isThemeDark}>
                    Show Password
                  </RadioLabel>
                  <br />
                  <LoginButton type="submit">Login</LoginButton>
                  <ErrorParagraph>{errorMsg}</ErrorParagraph>
                </form>
              </LoginContainer>
            </LoginPage>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Login
