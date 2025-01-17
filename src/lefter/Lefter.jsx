
import React from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom';
import { Menu, Icon, Badge } from 'antd';
const { SubMenu } = Menu;
// import logo from '../../static/image/logo.png';
// import logoNoText from '../../static/image/logo_no_text.png';
class Lefter extends React.Component {
    constructor(props) {
        super(props);
        // 权限相关
        this.state = {
            currentPath: window.location.pathname || '/members',
            currentSubMenu: '',
            initApproval: 0,
            headerLinkList: [ {
                path: `/members`,
                text: `Members`,
                // img: 'alert'
            },{
                path: `/experiment`,
                text: `Information`,
                // img: 'team'
            },]
        };
    }
    componentWillReceiveProps(nextProps) {
        // this.getCurrentPath(nextProps);
        return nextProps;
    }
   

    getCurrentPath(props, currentSubMenu) {
        const { location } = props || window;
        const { headerLinkList } = this.state;
        headerLinkList.some((item) => {
            if (item.children) {
                item.children.some((childItem) => {
                    if (location.pathname.indexOf(childItem.path) === 0) {
                        this.setState({
                            currentPath: childItem.path,
                            currentSubMenu
                        });
                        return true;
                    }
                    return false;
                });
            }
            if (location.pathname.indexOf(item.path) === 0) {
                this.setState({
                    currentPath: item.path,
                    currentSubMenu
                },() => {
                });
                return true;
            }
            return false;
        });
    }
    getRedirectBlock() {
        const { userInfo: { logined, isWhite } } = this.props;
        const { location } = window;
        if (location.pathname !== '/' && (!logined || !isWhite)) {
            return (
                <Redirect to={{ pathname: '/' }} />
            );
        }
        if (logined) {
            if (location.pathname === '/') {
                return <Redirect to={{ pathname: '/audience' }} />;
            }
        }
    }
    
    getLefterBlock() {
        const { currentPath, headerLinkList, currentSubMenu, initApproval } = this.state;
        console.log(currentPath,'------>currentPath')
        const { collapsed, waitingApproval } = this.props;
        return (
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[currentPath]}
                // defaultOpenKeys={[currentSubMenu]}
                inlineCollapsed={collapsed}
            >
                {
                    headerLinkList.map((item) => {
                        if (item.children) {
                            const path = item.children.map(el => el.path);
                            return (
                                <SubMenu
                                    key={item.path}
                                    className={path.indexOf(currentPath) !== -1 ? 'is-opacity' : ''}
                                    title={
                                        <span>
                                            {/* <Icon type={item.img} /> */}
                                            <span>{item.text}</span>
                                        </span>
                                    }
                                >
                                {
                                    item.children.map(childrenItem => {
                                        if (childrenItem.children) {
                                            const threePath = childrenItem.children.map(el => el.path);
                                            return (
                                                <SubMenu
                                                    key={childrenItem.path}
                                                    className={threePath.indexOf(currentPath) !== -1 ? 'three-children is-opacity' : 'three-children'}
                                                    title={childrenItem.text}
                                                >
                                                {
                                                    childrenItem.children.map((threeChildren) => {
                                                        return (
                                                            <Menu.Item key={threeChildren.path}>
                                                                {threeChildren.text}
                                                                <Link className="a-position"
                                                                    to={threeChildren.path}
                                                                    onClick={() => { this.menuOnClickHandler(threeChildren.path, threeChildren.subMenu); }}
                                                                >
                                                                </Link>
                                                            </Menu.Item>
                                                        );
                                                    })
                                                }
                                                </SubMenu>
                                            )
                                        } else {
                                            return (
                                                <Menu.Item key={childrenItem.path}>
                                                    {childrenItem.text}
                                                    <Link className="a-position"
                                                        to={childrenItem.path}
                                                        onClick={() => { this.menuOnClickHandler(childrenItem.path, item.subMenu); }}
                                                    >
                                                    </Link>
                                                </Menu.Item>
                                            );
                                        }
                                    })
                                }
                                </SubMenu>
                            );
                        } else {
                            return (
                                <Menu.Item key={item.path}>
                                    {/* <Icon type={item.img} /> */}
                                    <span>{item.text}</span>
                                    <Link className="a-position"
                                        to={item.path}
                                        onClick={() => { this.menuOnClickHandler(item.path); }}
                                    >
                                    </Link>
                                </Menu.Item>
                            );
                        }
                    })
                }
            </Menu>
        );
    }
    menuOnClickHandler(pathname, currentSubMenu = '') {
        this.getCurrentPath({
            location: {
                pathname
            }
        }, currentSubMenu);
    }
    render() {
        const LefterBlock = this.getLefterBlock();
        const { collapsed } = this.props;
        return (
            <div  className='app-lefter'>
                <div className="logo-bg">
                    <div>logo</div>
                    {/* <img
                        src={!collapsed ? logo : logoNoText}
                        style={!collapsed ?
                            {height: '30px', width: '160px', verticalAlign: 'middle' } :
                            {height: '30px', width: '30px', verticalAlign: 'middle' }
                        }
                    /> */}
                </div>
                {LefterBlock}
            </div>
        );
    }
}

export default Lefter;