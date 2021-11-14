/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import { useRecorderState, useRecorderActions } from 'app/features/Recorder/context';
import { RecorderStatuses } from 'app/features/Recorder/constants';
import { getUserMedia } from 'app/features/Recorder/utils';

const useStartCapture = (playerNode: Nullable<HTMLVideoElement>) => {
    const { status, mediaConstraints, mediaStream } = useRecorderState();
    const { setStatus, setMediaStream, resetMediaStream } = useRecorderActions();

    const startCapture = async (): Promise<void> => {
        if (!mediaConstraints) return;

        const stream = await getUserMedia(mediaConstraints);

        setMediaStream(stream);
        setStatus(RecorderStatuses.ready);
    };

    const startupPreview = (): void => {
        if (!playerNode || !mediaStream) return;

        playerNode.muted = true;
        playerNode.srcObject = mediaStream;
        playerNode.autoplay = true;
    };

    useEffect(() => {
        if (status !== RecorderStatuses.readyToStartCapture) return () => {};
        startCapture();

        return resetMediaStream;
    }, [status, mediaConstraints]);

    useEffect(() => {
        if (status !== RecorderStatuses.readyToStartCapture) return;
        startupPreview();
    }, [status, playerNode, mediaStream]);
};

export default useStartCapture;
