import React from 'react';
import { Card, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken } from "../../utils/auth";
import './login.css'
function Login(props) {
    console.log(props);
    const rules = {
        username: [{ required: true, message: '请输入账号' }],
        password: [{ required: true, message: '请输入密码' }]
    }
    function onFinish(value) {
        setToken(value)
        props.history.replace('/')
    }
    return (
        <div className='login'>
            <Card title='登录' style={{ width: '450px', position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <Form onFinish={onFinish}>
                    <Form.Item name='username' rules={rules.username}>
                        <Input placeholder='请输入账号' prefix={<UserOutlined />}></Input>
                    </Form.Item>
                    <Form.Item name='password' rules={rules.password}>
                        <Input.Password placeholder='请输入密码' prefix={<LockOutlined />}></Input.Password>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>


    )
}
export default Login