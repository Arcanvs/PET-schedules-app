import { FC } from 'react';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

type InputData = {
    placeholder: string
}

type Props = {
    data: InputData
}

const InputPass: FC<Props> = ({ data }) => {
    return(
        <>
            <Input.Password 
                placeholder={ data.placeholder } 
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </>
    );
    
}

export default InputPass;