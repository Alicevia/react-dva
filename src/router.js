import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { renderRoutes } from 'react-router-config'
import loadable from '@loadable/component'
import dynamic from 'dva/dynamic'
// import Home from './routes/home/home';
import Login from './routes/login/login'
import Sign from './components/loginComponents/sign/sign'
//   import { Spin } from 'antd';
// const Home = loadable(() => import("./routes/home/home"), { fallback: <Spin /> });
const routes = [
  {
    path: "/",
    component: dynamic({
      component: () => import('./components/loginComponents/sign/sign')
    }),
    exact: true,
  },
  {
    path: "/home",
    component:  dynamic({
      component: () => import('./routes/home/home')
    })
  },
  {
    path: "/login",
    component: dynamic({
      component: () => import('./routes/login/login')
    }),
    routes: [
      {
        path: '/login/sign',
        component: dynamic({
          component: () => import('./components/loginComponents/sign/sign')
        }),
      }
    ]
  },
]


function RouterConfig({ history }) {
  return (
    <Router history={history}>
        {renderRoutes(routes)}
    </Router>
  );
}

export default RouterConfig;
