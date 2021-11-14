import { useState, useLayoutEffect, useRef } from 'react';

const usePreviewCurrentTime = (playerNode: Nullable<HTMLVideoElement>, skip?: boolean): number => {
    const rafIdRef = useRef<number>();
    const isMountedRef = useRef<boolean>(false);

    const initialTime = skip ? 0 : playerNode?.currentTime;
    const [currentTime, setCurrentTime] = useState(initialTime ?? 0);

    useLayoutEffect(() => {
        if (!playerNode) return () => {};

        const handleTimeUpdate = (): void => {
            if (skip || !playerNode || !isMountedRef.current) return;

            if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);

            setCurrentTime(playerNode.currentTime);

            rafIdRef.current = window.requestAnimationFrame(handleTimeUpdate);
        };

        isMountedRef.current = true;

        playerNode.addEventListener('timeupdate', handleTimeUpdate);

        return (): void => {
            isMountedRef.current = false;
            playerNode.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [playerNode?.currentTime, skip]);

    return currentTime;
};

export default usePreviewCurrentTime;
