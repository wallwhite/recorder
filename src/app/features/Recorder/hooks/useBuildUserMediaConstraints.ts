import { useEffect } from 'react';
import RecorderError from 'app/features/Recorder/errors/RecorderError';
import { useRecorderState, useRecorderActions } from 'app/features/Recorder/context';
import { getSupportedConstraints } from 'app/features/Recorder/utils';
import { RecorderStatuses, RecorderErrorCodes } from 'app/features/Recorder/constants';

const useBuildUserMediaConstraints = () => {
    const { status, audioDeviceId, videoDeviceId } = useRecorderState();
    const { setMediaConstraints, clearMediaConstraints, setStatus, setError } = useRecorderActions();

    const buildUserMediaConstraints = (): void => {
        const constraints: MediaStreamConstraints = {
            video: false,
            audio: false,
        };

        const supports = getSupportedConstraints();

        const videoConstraints: MediaTrackConstraintSet = {
            deviceId: { exact: String(videoDeviceId) },
            width: { min: 640, ideal: 1280, max: 1920 },
            height: { min: 360, ideal: 720, max: 1080 },
        };

        if (supports.aspectRatio) videoConstraints.aspectRatio = { ideal: 16 / 9 };

        if (supports.frameRate) videoConstraints.frameRate = { min: 25, ideal: 30, max: 30 };

        if (supports.facingMode) videoConstraints.facingMode = { ideal: 'user' };

        if (videoDeviceId) constraints.video = videoConstraints;

        if (audioDeviceId) {
            constraints.audio = {
                deviceId: { exact: audioDeviceId },
            };
        } else {
            constraints.audio = false;
        }

        if (!constraints.video && !constraints.audio) throw new RecorderError(RecorderErrorCodes.videoAccessDenied);

        setMediaConstraints(constraints);
        setStatus(RecorderStatuses.readyToStartCapture);
    };

    useEffect(() => {
        if (status !== RecorderStatuses.preparingConstraints) return;
        try {
            clearMediaConstraints();
            buildUserMediaConstraints();
        } catch (err) {
            setError(err as Error);
        }
    }, [status]);
};

export default useBuildUserMediaConstraints;
