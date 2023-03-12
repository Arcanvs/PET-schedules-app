import { FC } from 'react';
import { InputText, InputPass } from '../atoms';

const FormLogin: FC = () => {
    return(
        <>
            <InputText data={{ placeholder:'asd 1' }} />            
            <InputPass data={{ placeholder:'asd 2' }} />            
        </>
    );
    
}

export default FormLogin;