import React, { Component } from 'react';
import './style.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      unameFocus: false,
      unameHasVal: false,
      upassFocus: false,
      upassHasVal: false
    };
  }
  render() {
    const { unameFocus, unameHasVal, upassFocus, upassHasVal } = this.state;
    const unameLabelBehaviour = unameFocus ? unameHasVal ? 'none' : 'slideInUp' : 'none';
    const uPassLabelBehaviour = upassFocus ? upassHasVal ? 'none' : 'slideInUp' : 'none';

    return (
      <div className="login_wrapper">
        <div className="form_group">
          <label>
            <div className={`form-label animated ${unameLabelBehaviour}`} >{unameFocus ? "Username" : unameHasVal ? "Username" : ""}</div>
            <input
              ref={(uname) => { this.inputUsername = uname; }}
              type="text"
              placeholder={unameFocus ? "" : "Username"}
              className={!unameFocus ? "form" : "form_onfocus"}
              onChange={() => {
                const hasValOnChange = this.inputUsername.value ? true : false;
                if(hasValOnChange && !unameHasVal) {
                  this.setState({unameHasVal: hasValOnChange});
                }
              }}
              onFocus={()=>{
                const hasValOnFocus = this.inputUsername.value ? true : false;
                this.setState({unameFocus: true, unameHasVal: hasValOnFocus});
              }}
              onBlur={()=>{
                const hasValOnBlur = this.inputUsername.value ? true : false;
                this.setState({unameFocus: false, unameHasVal: hasValOnBlur});
              }}
            />
          </label>
        </div>
        <div className="form_group">
          <label>
            <div className={`form-label animated ${uPassLabelBehaviour}`} >{upassFocus ? "Password" : upassHasVal ? "Password" : ""}</div>
            <input
              ref={(upass) => { this.inputPassword = upass; }}
              type="password"
              placeholder={upassFocus ? "" : "Password"}
              className={!upassFocus ? "form" : "form_onfocus"}
              onChange={() => {
                const hasValOnChange = this.inputPassword.value ? true : false;
                if(hasValOnChange && !upassHasVal) {
                  this.setState({upassHasVal: hasValOnChange});
                }
              }}
              onFocus={()=>{
                const hasValOnFocus = this.inputPassword.value ? true : false;
                this.setState({upassFocus: true, upassHasVal: hasValOnFocus});
              }}
              onBlur={()=>{
                const hasValOnBlur = this.inputPassword.value ? true : false;
                this.setState({upassFocus: false, upassHasVal: hasValOnBlur});
              }}
            />
          </label>
        </div>

        <div className="login_btn_wrapper">
          <div className="login_btn" id="login_btn_facebook" onClick={()=>{alert('facebook')}}>

          </div>
          <div className="spacer"></div>
          <div className="login_btn" id="login_btn_google" onClick={()=>{alert('google')}}></div>
        </div>
      </div>
    );
  }
}

export default Login;
