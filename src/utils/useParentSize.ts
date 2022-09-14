import { RefObject, useCallback, useEffect, useState } from 'react';

export default function useParentSize(ref: RefObject<HTMLDivElement>) {
    const [parentWidth, setParentWidth] = useState(0);
    const [parentHeight, setParentHeight] = useState(0);

    const handleWindowResize = useCallback(() => {
        if (!ref.current) return;

        const { parentElement } = ref.current;
        if (
            !parentElement ||
            !parentElement.offsetWidth ||
            !parentElement.offsetHeight
        )
            return;

        setParentWidth(parentElement.offsetWidth);
        setParentHeight(parentElement.offsetHeight);
    }, [ref]);

    useEffect(() => {
        // Init when first time render
        handleWindowResize();

        // Note: won't execute when first time render
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [handleWindowResize]);

    return { parentWidth, parentHeight };
}
