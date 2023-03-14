import { FC } from 'react';
import { FormLogin } from '../UI/organisms';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

const Login: FC = () => {
    return (
        <>
            <Layout style={{
                overflow: 'auto',
                height: '100vh',
            }}>
                <Content>
                    <Row style={{ height: '100%' }} justify='center' align='middle'>
                        <Col>
                            <FormLogin />
                        </Col>
                    </Row>  
                </Content>
            </Layout>
        </>
    );
}

export default Login;