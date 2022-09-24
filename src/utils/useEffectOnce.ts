import { useEffect, useRef } from 'react';

function useEffectOnce(fn: () => void, deps: Array<unknown>) {
    const ref = useRef(false);

    useEffect(() => {
        if (!ref.current) {
            fn();
        }
        return () => {
            ref.current = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

export default useEffectOnce;
