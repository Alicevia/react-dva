import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { renderRoutes } from 'react-router-config'
import Home from './routes/home/home';
import Login from './routes/login/login'
import Sign from './components/loginComponents/sign/sign'

const routes1 = [

  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    routes: [
      {
        path: '/login/sign',
        exact:true,
        component: Sign

      }
    ]
  },
  {
    path: "/",
    exact: true,
    component: Sign
  },
  // {
  //   path: "/login/sign",
  //   component: Sign,
  //   exact:true
  // }
]


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutes(routes1)}
        {/* <Route path='/login/sign' component={Sign} ></Route> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
