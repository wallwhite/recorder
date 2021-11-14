import { useEffect, useRef } from 'react';
import { useRecorderState, useRecorderActions } from 'app/features/Recorder/context';
import { RecorderStatuses } from 'app/features/Recorder/constants';
import {
    useEnumerateMediaDevices,
    useBuildUserMediaConstraints,
    useStartCapture,
    useUpdateRecorderPreviewSource,
} from 'app/features/Recorder/hooks';

type UseRecorderOutputType = {
    startRecording: () => void;
    stopRecording: () => void;
};

const useRecorder = (playerNode: Nullable<HTMLVideoElement>): UseRecorderOutputType => {
    const mediaRecorderRef = useRef<MediaRecorder>();
    const { status, mediaStream } = useRecorderState();
    const { setStatus, setBlob } = useRecorderActions();

    useEnumerateMediaDevices();
    useBuildUserMediaConstraints();
    useStartCapture(playerNode);
    useUpdateRecorderPreviewSource(playerNode);

    const handleDataAvailable = ({ data }: BlobEvent): void => {
        setBlob(data);
    };

    const setupRecorder = () => {
        if (!mediaStream) return;

        const recorderOptions = {
            mimeType: 'video/webm',
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 2500000,
        };

        mediaRecorderRef.current = new MediaRecorder(mediaStream, recorderOptions);
        mediaRecorderRef.current.ondataavailable = handleDataAvailable;

        setStatus(RecorderStatuses.running);
    };

    const startRecording = (): void => {
        mediaRecorderRef?.current?.start?.();
    };

    const stopRecording = (): void => {
        const { current: mediaRecorder } = mediaRecorderRef;

        if (!mediaRecorder) return;
        mediaRecorder.stop();

        setStatus(RecorderStatuses.previewPreparing);
    };

    useEffect(() => {
        if (status !== RecorderStatuses.ready) return;

        setupRecorder();
    }, [status, mediaStream]);

    return {
        startRecording,
        stopRecording,
    };
};

export default useRecorder;
