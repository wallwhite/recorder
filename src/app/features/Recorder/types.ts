import { RecorderErrorCodes, RecorderStatuses, RecorderActionTypes } from 'app/features/Recorder/constants';

export type RecorderErrorsConfigType = {
    [key in RecorderErrorCodes]: {
        name: string;
        message: string;
    };
};

export type RecorderStateType = {
    status: RecorderStatuses;
    mediaStream: Nullable<MediaStream>;
    videoDeviceId: Nullable<string>;
    audioDeviceId: Nullable<string>;
    videoDevicesList: MediaDeviceInfo[];
    audioDevicesList: MediaDeviceInfo[];
    mediaConstraints: Nullable<MediaStreamConstraints>;
    blob: Nullable<Blob>;
    duration: number;
    error: Nullable<Error>;
};

export type RecorderActionType = {
    type: RecorderActionTypes;
    payload?: {
        status?: RecorderStatuses;
        mediaDeviceId?: string;
        mediaDevice?: MediaDeviceInfo;
        mediaDevices?: MediaDeviceInfo[];
        mediaConstraints?: Nullable<MediaStreamConstraints>;
        mediaStream?: Nullable<MediaStream>;
        blob?: Nullable<Blob>;
        duration?: number;
    };
    error?: Nullable<Error>;
};
