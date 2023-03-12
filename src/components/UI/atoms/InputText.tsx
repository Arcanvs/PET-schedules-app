import { FC } from 'react';
import { Input } from 'antd';

type InputData = {
    placeholder: string
}

type Props = {
    data: InputData
}

const InputText: FC<Props> = ({ data }) => {
    return(
        <>
            <Input placeholder={ data.placeholder } />
        </>
    );
    
}

export default InputText;