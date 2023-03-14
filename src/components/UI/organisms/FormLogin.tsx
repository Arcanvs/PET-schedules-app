import { FC, useEffect, FormEvent } from 'react';
import { Form, Button, Input , Card} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { setLocalStorage } from '../../../utilities/localStorage.utility';
import { useNavigate } from 'react-router-dom';

const FormLogin: FC = () => {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        if(values){
            setLocalStorage('sesion', {sesion: true});
            navigate(0);
        }
    }

    return(
        <>
            <Card
                style={{ maxWidth: '500px' }}
            >
                <Form 
                    name="normal_login"
                    onFinish={ onFinish }
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >  
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >  
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>      
        </>
    );
    
}

export default FormLogin;