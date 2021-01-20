import React from 'react';
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
function SlideMenu(props) {
    function onSelect({ key }) {
        
    }
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            onSelect={onSelect}
        >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                首页
            </Menu.Item>

            <SubMenu key="名单列表" icon={<MailOutlined />} title="名单列表">
                <Menu.Item key="5">名单列表</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="人员管理" icon={<AppstoreOutlined />} title="人员管理">
                <Menu.Item key="9">人员管理</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
            </SubMenu>
        </Menu>
    )
}
export default SlideMenu