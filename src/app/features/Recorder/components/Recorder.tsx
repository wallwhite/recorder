import React, { useRef } from 'react';
import { Loader, Message } from 'rsuite';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { useRecorder, usePreviewCurrentTime } from 'app/features/Recorder/hooks';
import { RecorderWrapperPanel, RecordingVideoPreview } from 'app/features/Recorder/styled/Recorder';
import { RecordingControlsStyles, RecordingControlsWrapper } from 'app/features/Recorder/styled/RecorderControls';
import {
    RecorderStatuses,
    LOADING_STATUSES,
    RECORDER_STATUSES,
    PLAYER_PREVIEW_STATUSES,
} from 'app/features/Recorder/constants';
import { useRecorderState, useRecorderActions } from 'app/features/Recorder/context';
import { RecordingControls, RecordingPreviewControls, RecordingSettings } from 'app/features/Recorder/components';

const Recorder: React.FC = () => {
    const videoPreviewRef = useRef<HTMLVideoElement>(null);

    const { status, error } = useRecorderState();
    const { setStatus, setNextStatus, clearBlob } = useRecorderActions();

    const isLoading = LOADING_STATUSES.includes(status);
    const isRecording = RECORDER_STATUSES.includes(status);
    const isPreviewing = PLAYER_PREVIEW_STATUSES.includes(status);
    const isRecordingRunning = status === RecorderStatuses.running;
    const isSkipUpdatePreviewTime = isRecording || isLoading;

    const { startRecording, stopRecording } = useRecorder(videoPreviewRef.current);

    const previewTime = usePreviewCurrentTime(videoPreviewRef.current, isSkipUpdatePreviewTime);

    const videoPreviewClassNames = classNames({
        active: !isLoading,
    });

    const handleResetRecording = (): void => {
        clearBlob();
        setStatus(RecorderStatuses.idle);
    };

    const handleEndedPreview = (): void => {
        setStatus(RecorderStatuses.previewStopped);
    };

    const handlePlayPause = async (): Promise<void> => {
        const { current: videoPreview } = videoPreviewRef;

        if (!videoPreview) return;

        const isStopped = [RecorderStatuses.previewStopped, RecorderStatuses.previewPaused].includes(status);

        if (isStopped) await videoPreview.play();
        else await videoPreview.pause();

        setNextStatus();
    };

    return (
        <RecorderWrapperPanel bordered>
            <RecordingControlsStyles />
            {isLoading && <Loader backdrop content="loading..." vertical />}
            {isRecordingRunning && <RecordingSettings />}
            {error && (
                <Message full showIcon type="error" header={error?.name ?? 'Something went wrong'}>
                    {error.message}
                </Message>
            )}
            <RecordingVideoPreview
                ref={videoPreviewRef}
                className={videoPreviewClassNames}
                onEnded={handleEndedPreview}
            />
            <RecordingControlsWrapper justify={isPreviewing ? 'flex-start' : 'center'}>
                <CSSTransition timeout={300} classNames="recording-controls" unmountOnExit in={isRecording}>
                    <RecordingControls onStartRecording={startRecording} onStopRecording={stopRecording} />
                </CSSTransition>
                <CSSTransition timeout={300} classNames="recording-controls" unmountOnExit in={isPreviewing}>
                    <RecordingPreviewControls
                        previewTime={previewTime}
                        onPlayPause={handlePlayPause}
                        onReset={handleResetRecording}
                    />
                </CSSTransition>
            </RecordingControlsWrapper>
        </RecorderWrapperPanel>
    );
};

export default Recorder;
