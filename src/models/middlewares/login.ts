interface FetchLoginInfoInterface {
    loginInfo: {
        account: string;
        password: string;
    };
    callback: {
        onSuccess: () => void;
        onFailure: (isLoading: boolean) => void;
    };
}
export default function fetchLoginInfo({
    loginInfo: { account, password },
    callback: { onSuccess, onFailure },
}: FetchLoginInfoInterface) {
    fetch('/api/login', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({ account, password }),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.status !== 'success')
                throw new Error('Login Information not existed');

            onSuccess();
        })
        .catch(() => {
            onFailure(false);
        });
}
