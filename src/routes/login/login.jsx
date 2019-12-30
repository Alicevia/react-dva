import { Link ,Switch, Route, Router} from 'dva/router'
import { renderRoutes } from 'react-router-config'

import React, { Component } from 'react'
import style from './login.styl'
export default class Login extends Component {
  render() {
    return (
      <div className={style.login}>
      <span>login的主页面</span>
      {renderRoutes(this.props.route.routes)}
    </div>
    )
  }
}
