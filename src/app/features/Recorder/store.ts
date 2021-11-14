import { useReducer, useCallback } from 'react';
import { uniqBy } from 'lodash';
import { RecorderStatuses, RecorderActionTypes, INITIAL_STATE } from 'app/features/Recorder/constants';
import { RecorderStateType, RecorderActionType } from 'app/features/Recorder/types';

const recorderReducer = (state: RecorderStateType, { type, payload, error }: RecorderActionType): RecorderStateType => {
    switch (type) {
        case RecorderActionTypes.setStatus: {
            if (payload?.status === state.status) return state;
            return {
                ...state,
                status: payload?.status ?? state.status,
            };
        }
        case RecorderActionTypes.addVideoMediaDevices:
            return {
                ...state,
                videoDevicesList: uniqBy([...state.videoDevicesList, ...(payload?.mediaDevices ?? [])], 'deviceId'),
            };
        case RecorderActionTypes.addAudioMediaDevices:
            return {
                ...state,
                audioDevicesList: uniqBy([...state.audioDevicesList, ...(payload?.mediaDevices ?? [])], 'deviceId'),
            };

        case RecorderActionTypes.setActiveAudioDeviceId:
            return {
                ...state,
                audioDeviceId: payload?.mediaDeviceId,
            };
        case RecorderActionTypes.setActiveVideoDeviceId:
            return {
                ...state,
                videoDeviceId: payload?.mediaDeviceId,
            };
        case RecorderActionTypes.setMediaConstraints:
            return {
                ...state,
                mediaConstraints: payload?.mediaConstraints,
            };
        case RecorderActionTypes.setMediaStream:
            return {
                ...state,
                mediaStream: payload?.mediaStream,
            };
        case RecorderActionTypes.setBlob:
            return {
                ...state,
                blob: payload?.blob,
            };
        case RecorderActionTypes.setDuration:
            return {
                ...state,
                duration: payload?.duration ?? 0,
            };
        case RecorderActionTypes.error:
            return {
                ...state,
                error,
            };
        default:
            return state;
    }
};

type UseRecorderStoreOutputType = {
    state: RecorderStateType;
    setStatus: (status: RecorderStatuses) => void;
    addVideoMediaDevices: (mediaDevices: MediaDeviceInfo[]) => void;
    addAudioMediaDevices: (mediaDevices: MediaDeviceInfo[]) => void;
    setActiveVideoDeviceId: (mediaDevice: string) => void;
    setActiveAudioDeviceId: (mediaDevice: string) => void;
    setMediaConstraints: (mediaConstraints: Nullable<MediaStreamConstraints>) => void;
    setMediaStream: (mediaStream: Nullable<MediaStream>) => void;
    setBlob: (blob: Nullable<Blob>) => void;
    setDuration: (duration: number) => void;
    setError: (error: Nullable<Error>) => void;
};

export const useRecorderStore = (): UseRecorderStoreOutputType => {
    const [state, dispatch] = useReducer(recorderReducer, INITIAL_STATE);

    const setStatus = useCallback(
        (nextStatus: RecorderStatuses) =>
            dispatch({ type: RecorderActionTypes.setStatus, payload: { status: nextStatus } }),
        [],
    );

    const addVideoMediaDevices = useCallback(
        (mediaDevices: MediaDeviceInfo[]) =>
            dispatch({ type: RecorderActionTypes.addVideoMediaDevices, payload: { mediaDevices } }),
        [],
    );

    const addAudioMediaDevices = useCallback(
        (mediaDevices: MediaDeviceInfo[]) =>
            dispatch({ type: RecorderActionTypes.addAudioMediaDevices, payload: { mediaDevices } }),
        [],
    );

    const setActiveVideoDeviceId = useCallback(
        (mediaDeviceId: string) =>
            dispatch({ type: RecorderActionTypes.setActiveVideoDeviceId, payload: { mediaDeviceId } }),
        [],
    );

    const setActiveAudioDeviceId = useCallback(
        (mediaDeviceId: string) =>
            dispatch({ type: RecorderActionTypes.setActiveAudioDeviceId, payload: { mediaDeviceId } }),
        [],
    );

    const setMediaConstraints = useCallback(
        (mediaConstraints: Nullable<MediaStreamConstraints>) =>
            dispatch({ type: RecorderActionTypes.setMediaConstraints, payload: { mediaConstraints } }),
        [],
    );

    const setMediaStream = useCallback(
        (mediaStream: Nullable<MediaStream>) =>
            dispatch({ type: RecorderActionTypes.setMediaStream, payload: { mediaStream } }),
        [],
    );

    const setBlob = useCallback(
        (blob: Nullable<Blob>) => dispatch({ type: RecorderActionTypes.setBlob, payload: { blob } }),
        [],
    );

    const setDuration = useCallback(
        (duration: number) => dispatch({ type: RecorderActionTypes.setDuration, payload: { duration } }),
        [],
    );

    const setError = useCallback((error: Nullable<Error>) => dispatch({ type: RecorderActionTypes.error, error }), []);

    return {
        state,
        setStatus,
        addVideoMediaDevices,
        addAudioMediaDevices,
        setActiveVideoDeviceId,
        setActiveAudioDeviceId,
        setMediaConstraints,
        setMediaStream,
        setBlob,
        setDuration,
        setError,
    };
};
