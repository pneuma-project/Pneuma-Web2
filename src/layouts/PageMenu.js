/**
 * Created by zhiyang on 2018/1/12.
 *
 * @format
 */

import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const SubMenu = Menu.SubMenu
class PageMenu extends React.Component {
  state = {
    openKeys: [],
    selectedKeys: []
  }

  handleOpenChange = (keys) => {
    let openKeys = []
    if (keys.length) {
      openKeys = keys.slice(-1)
    }

    this.setState({ openKeys })
  }

  setHighLightKeys = (props) => {
    const { pathname } = props.location
    let selectedKey = ''
    let openKey = ''
    if (pathname) {
      openKey = pathname.substr(1).split('/')[0]
      if (openKey === 'manualOrder') {
        openKey = 'order'
      }
      selectedKey = pathname.substr(1).replace('/', '.')
    }
    // console.log(openKey, selectedKey)
    this.setState({
      openKeys: [openKey],
      selectedKeys: [selectedKey]
    })
  }

  componentDidMount() {
    this.setHighLightKeys(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.setHighLightKeys(nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { match, location } = this.props
    /**
     * history 是变化的，这里只判断 match 与 location。
     * 参考链接: https://reacttraining.com/react-router/web/api/history/history-is-mutable
     */
    if (!(match === nextProps.match && location === nextProps.location)) {
      return true
    }
    return nextState !== this.state
  }

  render() {
    const { openKeys, selectedKeys } = this.state
    // console.log(selectedKeys)
    return (
      <div>
        <div className="logo-header">
          <img
            src="https://file1.jiuhuar.com/FjRxfnx-r35f4nM6cQ6Yz4t7Q9Gc"
            className="logo"
            alt="logo"
          />
          <div className="name">
            <div>JIU HUAR</div>
            <div>商城后台管理系统</div>
          </div>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onOpenChange={this.handleOpenChange}
          style={{ height: '100%', borderRight: 0, background: '#001529' }}
        >
          <SubMenu key="product" title={<span>商品库</span>}>
            <Menu.Item key="product.index">
              <NavLink to="/product/index">商品列表</NavLink>
            </Menu.Item>
            <Menu.Item key="product.category">
              <NavLink to="/product/category">类别管理</NavLink>
            </Menu.Item>
            <Menu.Item key="product.tag">
              <NavLink to="/product/tag">商品标签</NavLink>
            </Menu.Item>
            <Menu.Item key="product.sku">
              <NavLink to="/product/sku">商品sku属性</NavLink>
            </Menu.Item>
            <Menu.Item key="product.combination">
              <NavLink to="/product/combination">组合商品</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="mall" title={<span>酒花儿商城</span>}>
            <Menu.Item key="mall.index">
              <NavLink to="/mall/index">商城商品</NavLink>
            </Menu.Item>
            <Menu.Item key="mall.shelf">
              <NavLink to="/mall/shelf">待上架商品</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="order" title={<span>订单管理</span>}>
            <Menu.Item key="order.index">
              <NavLink to="/order/index">APP订单</NavLink>
            </Menu.Item>
            <Menu.Item key="manualOrder.index">
              <NavLink to="/manualOrder/index">手动创建订单</NavLink>
            </Menu.Item>
            <Menu.Item key="order.refund">
              <NavLink to="/order/refund">退款单</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="stats" title={<span>统计</span>}>
            <Menu.Item key="stats.index">
              <NavLink to="/stats/index">数据导出</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="saletools" title={<span>营销工具</span>}>
            {/* <Menu.Item key="saletools.redpocket"><NavLink to="/saletools/redpocket"></NavLink>订单红包</Menu.Item> */}
            <Menu.Item key="saletools.limiteddiscountlist">
              <NavLink to="/saletools/limiteddiscountlist" />
              限时优惠
            </Menu.Item>
            <Menu.Item key="saletools.coupons">
              <NavLink to="/saletools/coupons">优惠券</NavLink>
            </Menu.Item>
            <Menu.Item key="saletools.discount">
              <NavLink to="/saletools/discount">满减活动</NavLink>
            </Menu.Item>
            <Menu.Item key="saletools.flashsalelist">
              <NavLink to="/saletools/flashsalelist">秒杀</NavLink>
            </Menu.Item>
            <Menu.Item key="saletools.specialrecommendationlist">
              <NavLink to="/saletools/specialrecommendationlist">
                专题推荐
              </NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="shop" title={<span>店铺装修</span>}>
            <Menu.Item key="shop.ad">
              <NavLink to="/shop/ad">广告管理</NavLink>
            </Menu.Item>
            <Menu.Item key="shop.nav">
              <NavLink to="/shop/nav">图片导航</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="cost" title={<span>成本管理</span>}>
            <Menu.Item key="cost.accounting">
              <NavLink to="/cost/accounting">成本核算</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

PageMenu.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(PageMenu)
