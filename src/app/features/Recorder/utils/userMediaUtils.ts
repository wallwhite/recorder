import { RecorderErrorCodes } from 'app/features/Recorder/constants';
import RecorderError from 'app/features/Recorder/errors/RecorderError';

export const getSupportedConstraints = (): MediaTrackSupportedConstraints => {
    const { mediaDevices } = navigator;

    if (!mediaDevices || !mediaDevices.getSupportedConstraints)
        throw new RecorderError(RecorderErrorCodes.notSupported);

    return mediaDevices.getSupportedConstraints();
};

export const enumerateDevices = (): Promise<Array<MediaDeviceInfo>> => {
    const { mediaDevices } = navigator;

    if (!mediaDevices || !mediaDevices.enumerateDevices) throw new RecorderError(RecorderErrorCodes.notSupported);

    return mediaDevices.enumerateDevices();
};

export const getUserMedia = (mediaConstraints: MediaStreamConstraints): Promise<MediaStream> => {
    const { mediaDevices } = navigator;

    if (!mediaDevices || !mediaDevices.enumerateDevices) throw new RecorderError(RecorderErrorCodes.notSupported);

    return mediaDevices.getUserMedia(mediaConstraints);
};
