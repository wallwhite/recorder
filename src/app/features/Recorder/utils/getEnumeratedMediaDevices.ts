import { isEmpty } from 'lodash';
import RecorderError from 'app/features/Recorder/errors/RecorderError';
import { enumerateDevices, getUserMedia } from 'app/features/Recorder/utils';
import { MediaDeviceKinds, RecorderErrorCodes } from 'app/features/Recorder/constants';

const getEnumeratedMediaDevices = async (
    mediaConstraints: MediaStreamConstraints,
    videoDevicesList?: MediaDeviceInfo[],
): Promise<MediaDeviceInfo[]> => {
    const enumeratedDevices = await enumerateDevices();

    const existedEnumeratedVideoInput = enumeratedDevices.find(
        (device: MediaDeviceInfo) => device?.kind === MediaDeviceKinds.videoinput,
    );
    const existedEnumeratedAudioInput = enumeratedDevices.find(
        (device: MediaDeviceInfo) => device?.kind === MediaDeviceKinds.audioinput,
    );

    const isEmptyVideoDevicesList = isEmpty(videoDevicesList);
    const isNotConfirmedAccessToVideoMediaDevice =
        existedEnumeratedVideoInput && isEmpty(existedEnumeratedVideoInput.deviceId);
    const isNotConfirmedAccessToAudioMediaDevice =
        existedEnumeratedAudioInput && isEmpty(existedEnumeratedAudioInput.deviceId);

    const isNeededConfirmationToAccessToVideo = mediaConstraints.video && isNotConfirmedAccessToVideoMediaDevice;
    const isNeededConfirmationAccessToAudio = mediaConstraints.audio && isNotConfirmedAccessToAudioMediaDevice;

    if (isEmptyVideoDevicesList && (isNeededConfirmationToAccessToVideo || isNeededConfirmationAccessToAudio)) {
        try {
            const accessStream = await getUserMedia(mediaConstraints);

            const resetStreamPromise = new Promise((resolve) => {
                const streamTracks = (accessStream as MediaStream).getTracks();

                streamTracks.forEach((track, index) => {
                    track.stop();

                    if (index + 1 === streamTracks.length) resolve(true);
                });
            });

            await resetStreamPromise;

            return getEnumeratedMediaDevices(mediaConstraints);
        } catch {
            if (mediaConstraints.video) throw new RecorderError(RecorderErrorCodes.videoAccessDenied);
            if (mediaConstraints.audio) throw new RecorderError(RecorderErrorCodes.audioAccessDenied);
        }
    }

    return enumeratedDevices;
};

export default getEnumeratedMediaDevices;
