import { FC } from 'react';
import { FormLogin } from '../UI/organisms';
import { Center } from '@chakra-ui/react'

const Login: FC = () => {
    return (
        <>
            <Center height='100vh'>
                <FormLogin />
            </Center>
        </>
    );
}

export default Login;