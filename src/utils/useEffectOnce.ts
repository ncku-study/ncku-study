import { EffectCallback, useEffect, useRef } from 'react';

function useEffectOnce(effect: EffectCallback) {
    const ref = useRef(false);

    useEffect(() => {
        if (!ref.current) {
            effect();
        }

        return () => {
            ref.current = true;
        };
    }, [effect]);
}

export default useEffectOnce;
