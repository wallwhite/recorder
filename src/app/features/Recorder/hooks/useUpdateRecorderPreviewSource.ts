/* eslint-disable no-param-reassign */
import { useLayoutEffect } from 'react';
import { RecorderStatuses } from 'app/features/Recorder/constants';
import { useRecorderState, useRecorderActions } from 'app/features/Recorder/context';

const useUpdateRecorderPreviewSource = (playerNode: Nullable<HTMLVideoElement>): void => {
    const { blob } = useRecorderState();
    const { setStatus, resetMediaStream } = useRecorderActions();

    useLayoutEffect(() => {
        if (!playerNode || !blob) return (): void => {};

        playerNode.srcObject = null;
        playerNode.autoplay = false;
        playerNode.muted = false;
        playerNode.src = URL.createObjectURL(blob);

        resetMediaStream();

        setTimeout(() => {
            setStatus(RecorderStatuses.previewStopped);
        }, 1000);

        return (): void => {
            if (playerNode.src) URL.revokeObjectURL(playerNode.src);
        };
    }, [blob, playerNode]);
};

export default useUpdateRecorderPreviewSource;
