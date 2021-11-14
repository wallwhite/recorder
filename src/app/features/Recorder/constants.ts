import { RecorderErrorsConfigType, RecorderStateType } from 'app/features/Recorder/types';

export enum RecorderStatuses {
    idle = 'idle',
    preparing = 'preparing',
    preparingConstraints = 'preparingConstraints',
    readyToStartCapture = 'readyToStartCapture',
    ready = 'ready',
    running = 'running',
    recording = 'recording',
    previewPreparing = 'previewPreparing',
    previewPlaying = 'previewPlaying',
    previewPaused = 'previewPaused',
    previewStopped = 'previewStopped',
    error = 'error',
}

export enum MediaDeviceKinds {
    videoinput = 'videoinput',
    audioinput = 'audioinput',
}

export enum RecorderActionTypes {
    setStatus = 'setStatus',
    addVideoMediaDevices = 'addVideoMediaDevices',
    addAudioMediaDevices = 'addAudioMediaDevices',
    setActiveAudioDeviceId = 'setActiveAudioDeviceId',
    setActiveVideoDeviceId = 'setActiveVideoDeviceId',
    setMediaConstraints = 'setMediaConstraints',
    setMediaStream = 'setMediaStream',
    setBlob = 'setBlob',
    setDuration = 'setDuration',
    error = 'error',
}

export enum RecorderErrorCodes {
    notSupported = 'notSupported',
    videoAccessDenied = 'videoAccessDenied',
    audioAccessDenied = 'audioAccessDenied',
    mediaDeviceNotConnected = 'mediaDeviceNotConnected',
}

export const LOADING_STATUSES = [
    RecorderStatuses.idle,
    RecorderStatuses.preparing,
    RecorderStatuses.preparingConstraints,
    RecorderStatuses.readyToStartCapture,
    RecorderStatuses.previewPreparing,
];

export const RECORDER_STATUSES = [RecorderStatuses.ready, RecorderStatuses.running, RecorderStatuses.recording];

export const PLAYER_PREVIEW_STATUSES = [
    RecorderStatuses.previewPlaying,
    RecorderStatuses.previewStopped,
    RecorderStatuses.previewPaused,
];

export const INITIAL_STATE: RecorderStateType = {
    status: RecorderStatuses.idle,
    duration: 0,
    blob: null,
    mediaStream: null,
    videoDeviceId: null,
    audioDeviceId: null,
    mediaConstraints: null,
    videoDevicesList: [],
    audioDevicesList: [],
    error: null,
};

export const RECORDER_ERRORS_CONFIG: RecorderErrorsConfigType = {
    [RecorderErrorCodes.notSupported]: {
        name: 'Browser is not supported',
        message:
            'Either your browser or your OS doesn’t support audio recording. Please try to update your browser to latest version or try another.',
    },
    [RecorderErrorCodes.videoAccessDenied]: {
        name: 'Access denied',
        message: 'Make sure that access to web-camera  is allowed in your browser preferences',
    },
    [RecorderErrorCodes.audioAccessDenied]: {
        name: 'Access denied',
        message: 'Make sure that access to microphone is allowed in your browser preferences',
    },
    [RecorderErrorCodes.mediaDeviceNotConnected]: {
        name: 'Camera is not connected',
        message: 'Make sure that access to media device is allowed in your browser preferences',
    },
};
