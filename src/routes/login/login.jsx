import React from 'react'
import { Link ,Switch, Route, Router} from 'dva/router'
import { renderRoutes } from 'react-router-config'
import Sign from '../../components/loginComponents/sign/sign'

const Login = (props) => {
  console.log(props)
  return (
    <div>
      <span>login的主页面</span>

      {renderRoutes(props.route.routes, { someProp: "these extra props are optional" })}

    </div>
  )
}

export default Login