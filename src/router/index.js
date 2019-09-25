/** @format */

import React from "react";
import { Spin } from "antd";
import Loadable from "react-loadable";

const loading = () => <Spin />;

const asyncComponent = component =>
  Loadable({
    loader: component,
    loading
  });
// 登录页面
const LogIn = asyncComponent(() =>
  import(/* webpackChunkName: "LogIn" */ "../pages/LogIn")
);
// 实验
const Experiment = asyncComponent(() =>
  import(/* webpackChunkName: "Experiment" */ "../pages/Experiment")
);

// 用户列表
const Members = asyncComponent(() =>
  import(/* webpackChunkName: "Members" */ "../pages/Members")
);
// 添加用户
const AddMember = asyncComponent(() =>
import(/* webpackChunkName: "AddMember" */ "../pages/AddMember")
);
// 路由匹配默认是 exact: true ,并且需要验证
const routes = [
  {
    path: "/login",
     // component: bundleHelper(LogIn)
    component: LogIn
  },
  {
    path: "/experiment",
     // component: bundleHelper(Experiment)
    component: Experiment
  },{
    path: "/members",
     // component: bundleHelper(Members)
    component: Members
  },{
    path: '/members/add',
    component: AddMember
  }
];

export default routes;
