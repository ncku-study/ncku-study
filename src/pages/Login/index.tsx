import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import type { FC } from 'react';

import { User } from '~/lib/session';

// import BoxIcon from '~/src/img/box.svg';
import {
    ErrorText,
    FormLayout,
    H2,
    Img,
    Input,
    InputLayout,
    LoadingIcon,
    LoginBtn,
    LoginLayout,
    TopicLayout,
} from './style';
import useLogin from './useLogin';

export interface LoginProps {
    user: User;
}

const Login: FC<LoginProps> = ({ user }) => {
    const { loading, accountRef, passwordRef, handleSubmit } = useLogin();

    if (!user.isLoggedIn)
        return (
            <LoginLayout>
                <FormLayout>
                    <TopicLayout>
                        <Img alt="box" />
                        <H2>NCKU STUDY</H2>
                        {loading === false && (
                            <ErrorText>
                                登入失敗。請檢查輸入的帳號密碼是否正確。
                            </ErrorText>
                        )}
                    </TopicLayout>
                    <form onSubmit={handleSubmit}>
                        <InputLayout>
                            <PersonIcon />
                            <Input
                                inputRef={accountRef}
                                type="text"
                                label="account"
                            />
                        </InputLayout>
                        <InputLayout>
                            <LockIcon />
                            <Input
                                inputRef={passwordRef}
                                type="password"
                                label="password"
                            />
                        </InputLayout>
                        <LoginBtn onSubmit={handleSubmit}>
                            {loading ? <LoadingIcon size={20} /> : '登入'}
                        </LoginBtn>
                    </form>
                </FormLayout>
            </LoginLayout>
        );

    return <div>Welcome, {user.username}</div>;
};

export default Login;
