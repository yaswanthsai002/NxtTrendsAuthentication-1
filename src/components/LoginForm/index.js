import {Component} from 'react'

import './index.css'

export default class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onUsernameChange = event => this.setState({username: event.target.value})

  onPasswordChange = event => this.setState({password: event.target.value})

  submitForm = async event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    try {
      const response = await fetch('https://apis.ccbp.in/login', options)
      const jsonResponse = await response.json()
      if (response.ok) {
        history.replace('/')
      } else {
        this.setState({
          username: '',
          password: '',
          errorMsg: jsonResponse.error_msg,
        })
      }
    } catch (err) {
      console.log('Error in logging in', err)
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="lg-login-container">
        <div className="lg-login-img-container">
          <img
            className="lg-login-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <div className="login-form-container">
          <div className="website-logo-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="sm-login-img-container">
            <img
              className="sm-login-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
            />
          </div>
          <form className="login-form" onSubmit={this.submitForm}>
            <div className="input-grp">
              <label htmlFor="username">USERNAME</label>
              <input
                className="username-input"
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="Username"
                onChange={this.onUsernameChange}
                autoComplete="username"
              />
            </div>
            <div className="input-grp">
              <label htmlFor="password">PASSWORD</label>
              <input
                className="password-input"
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={this.onPasswordChange}
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
            <p
              className={errorMsg !== '' ? 'show-error-msg' : 'hide-error-msg'}
            >
              *{errorMsg}
            </p>
          </form>
        </div>
      </div>
    )
  }
}
