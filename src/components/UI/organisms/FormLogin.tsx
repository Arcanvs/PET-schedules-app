import { ChangeEvent, FC, useState } from 'react';
import { setLocalStorage } from '../../../utilities/localStorage.utility';
import { useNavigate } from 'react-router-dom';
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Button, Input,
    FormControl,
    FormLabel,
    FormHelperText, FormErrorMessage } from '@chakra-ui/react'

const FormLogin: FC = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState<string>('');
    const [inputPass, setInputPass] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
    const handleInputPassChange = (e: ChangeEvent<HTMLInputElement>) => setInputPass(e.target.value);

    const isError = input === ''

    const handleClickLogin = () => {
        setLocalStorage('sesion', { 'sesion': true });
        navigate(0);
    }
    
    return(
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Bienvenido</Heading>
                        <FormControl isInvalid={isError}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' value={input} onChange={handleInputChange} />
                            <FormLabel>Password</FormLabel>
                            <Input type='password' value={inputPass} onChange={handleInputPassChange} />
                        </FormControl>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue' onClick={handleClickLogin}>
                            Ingresar
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    );
    
}

export default FormLogin;