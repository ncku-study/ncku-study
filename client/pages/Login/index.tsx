import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { FC } from 'react';

// import BoxIcon from '~/client/img/box.svg';
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

const Login: FC<unknown> = () => {
    const { loading, accountRef, passwordRef, handleSubmit } = useLogin();

    // useEffect(() => {
    //   if (token) setToken(token);
    // }, [token, setToken]);

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
};

export default Login;
