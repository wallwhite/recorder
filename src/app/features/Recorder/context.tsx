import React, { createContext, useContext } from 'react';
import { RecorderStateType } from 'app/features/Recorder/types';
import { useRecorderStore } from 'app/features/Recorder/store';
import { INITIAL_STATE, RecorderStatuses } from 'app/features/Recorder/constants';
import { getNextStatus } from 'app/features/Recorder/utils';

type RecorderActionsType = {
    setStatus: (status: RecorderStatuses) => void;
    setNextStatus: () => void;
    addVideoMediaDevices: (mediaDevices: MediaDeviceInfo[]) => void;
    addAudioMediaDevices: (mediaDevices: MediaDeviceInfo[]) => void;
    setActiveVideoDeviceId: (mediaDevice: string) => void;
    setActiveAudioDeviceId: (mediaDevice: string) => void;
    setMediaConstraints: (mediaConstraints: Nullable<MediaStreamConstraints>) => void;
    setMediaStream: (mediaStream: Nullable<MediaStream>) => void;
    setBlob: (blob: Nullable<Blob>) => void;
    setDuration: (duration: number) => void;
    resetMediaStream: () => void;
    clearMediaConstraints: () => void;
    clearBlob: () => void;

    setError: (error: Nullable<Error>) => void;
};

type RecorderContextValueType = RecorderActionsType & {
    state: RecorderStateType;
};

const initialValue: RecorderContextValueType = {
    state: INITIAL_STATE,
    setStatus: () => {},
    setNextStatus: () => {},
    addVideoMediaDevices: () => {},
    addAudioMediaDevices: () => {},
    setActiveVideoDeviceId: () => {},
    setActiveAudioDeviceId: () => {},
    setMediaConstraints: () => {},
    setMediaStream: () => {},
    setBlob: () => {},
    setDuration: () => {},
    resetMediaStream: () => {},
    clearMediaConstraints: () => {},
    clearBlob: () => {},
    setError: () => {},
};

const RecorderContext = createContext<RecorderContextValueType>(initialValue);

export const RecorderContextProvider: React.FC = ({ children }) => {
    const {
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
    } = useRecorderStore();

    const { status, mediaStream, blob } = state;

    const setNextStatus = (): void => setStatus(getNextStatus(status) ?? status);

    const clearMediaConstraints = (): void => setMediaConstraints(null);

    const resetMediaStream = (): void => {
        if (!mediaStream) return;

        mediaStream.getTracks().forEach((track) => track.stop());

        setMediaStream(null);
    };

    const clearBlob = (): void => {
        if (blob) setBlob(null);
    };

    return (
        <RecorderContext.Provider
            value={{
                state,
                setStatus,
                setNextStatus,
                addVideoMediaDevices,
                addAudioMediaDevices,
                setActiveVideoDeviceId,
                setActiveAudioDeviceId,
                setMediaConstraints,
                setMediaStream,
                setBlob,
                setDuration,
                resetMediaStream,
                clearMediaConstraints,
                clearBlob,
                setError,
            }}
        >
            {children}
        </RecorderContext.Provider>
    );
};

export const useRecorderState = (): RecorderStateType => useContext(RecorderContext).state;

export const useRecorderActions = (): RecorderActionsType => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { state, ...actions } = useContext(RecorderContext);

    return actions;
};
