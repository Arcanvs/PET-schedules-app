export interface UserInfo {
    id: number;
    name: string;
    email: string;
}

export const UserInfoEmpty : UserInfo = {
    id: 0,
    name: '',
    email: ''
}