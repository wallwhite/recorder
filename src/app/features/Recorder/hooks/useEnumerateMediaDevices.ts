import { useEffect } from 'react';
import { isEmpty } from 'lodash';
import RecorderError from 'app/features/Recorder/errors/RecorderError';
import { useRecorderState, useRecorderActions } from 'app/features/Recorder/context';
import { RecorderStatuses, MediaDeviceKinds, RecorderErrorCodes } from 'app/features/Recorder/constants';
import { getEnumeratedMediaDevices } from 'app/features/Recorder/utils';

const DEFAULT_MEDIA_DEVICE_ID = 'default';

const useEnumerateMediaDevices = (): void => {
    const { status } = useRecorderState();
    const {
        setStatus,
        addAudioMediaDevices,
        addVideoMediaDevices,
        setActiveVideoDeviceId,
        setActiveAudioDeviceId,
        setError,
    } = useRecorderActions();

    const prepareMediaDevices = async () => {
        try {
            const enumeratedDevices = await getEnumeratedMediaDevices({
                audio: true,
                video: true,
            });

            const isExistAudioInput = enumeratedDevices.find(
                (mediaDevice) =>
                    mediaDevice.kind === MediaDeviceKinds.audioinput &&
                    !isEmpty((mediaDevice as MediaDeviceInfo).deviceId),
            );
            const isExistVideoInput = enumeratedDevices.find(
                (mediaDevice) =>
                    mediaDevice.kind === MediaDeviceKinds.videoinput &&
                    !isEmpty((mediaDevice as MediaDeviceInfo).deviceId),
            );

            if (!isExistAudioInput || !isExistVideoInput)
                throw new RecorderError(RecorderErrorCodes.mediaDeviceNotConnected);

            const videoDevices = enumeratedDevices.filter(
                ({ kind }: MediaDeviceInfo) => kind === MediaDeviceKinds.videoinput,
            );
            const audioDevices = enumeratedDevices.filter(
                ({ kind }: MediaDeviceInfo) => kind === MediaDeviceKinds.audioinput,
            );

            const defaultVideoMediaDevice =
                videoDevices.find(
                    ({ kind, deviceId }: MediaDeviceInfo) =>
                        kind === MediaDeviceKinds.videoinput && deviceId === DEFAULT_MEDIA_DEVICE_ID,
                ) || videoDevices[0];

            const defaultAudioMediaDevice =
                audioDevices.find(
                    ({ kind, deviceId }: MediaDeviceInfo) =>
                        kind === MediaDeviceKinds.audioinput && deviceId === DEFAULT_MEDIA_DEVICE_ID,
                ) || audioDevices[0];

            addVideoMediaDevices(videoDevices);
            addAudioMediaDevices(audioDevices);

            if (defaultVideoMediaDevice) setActiveVideoDeviceId(defaultVideoMediaDevice.deviceId);
            if (defaultAudioMediaDevice) setActiveAudioDeviceId(defaultAudioMediaDevice.deviceId);

            setStatus(RecorderStatuses.preparingConstraints);
        } catch (err) {
            setError(err as Error);
        }
    };

    useEffect(() => {
        if (status !== RecorderStatuses.idle) return;

        try {
            setStatus(RecorderStatuses.preparing);
            prepareMediaDevices();
        } catch (err) {
            setStatus(RecorderStatuses.error);
            setError(err as Error);
        }
    }, [status]);
};

export default useEnumerateMediaDevices;
