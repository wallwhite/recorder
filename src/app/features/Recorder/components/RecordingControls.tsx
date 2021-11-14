import React, { useRef, useEffect } from 'react';
import { FlexboxGrid } from 'rsuite';
import { CSSTransition } from 'react-transition-group';
import { useRecorderState, useRecorderActions } from 'app/features/Recorder/context';
import {
    RecorderButton,
    RecorderControlsTimer,
    RecorderTimerStyles,
} from 'app/features/Recorder/styled/RecorderControls';
import { RecordingButtonIcon } from 'app/features/Recorder/components';
import { TimerCountDown } from 'app/features/Timer/components';
import { RecorderStatuses } from 'app/features/Recorder/constants';
import { TimerOutputType } from 'app/features/Timer/types';

type RecordingControlsProps = {
    onStartRecording: () => void;
    onStopRecording: () => void;
};

const RecordingControls: React.FC<RecordingControlsProps> = ({ onStartRecording, onStopRecording }) => {
    const timerRef = useRef<TimerOutputType>();
    const { status } = useRecorderState();
    const { setNextStatus, setDuration } = useRecorderActions();

    const isRecording = status === RecorderStatuses.recording;

    const setTimerRef = (timer: TimerOutputType): void => {
        timerRef.current = timer;
    };

    const startTimer = (): void => timerRef.current?.start?.();

    const stopTimer = (): void => timerRef.current?.stop?.();

    const handleStartRecording = (): void => {
        onStartRecording();
        setNextStatus();
        startTimer();
    };

    const handleStopRecording = (): void => {
        onStopRecording();
        setNextStatus();
        stopTimer();
    };

    const handleMainButtonClick = (): void => {
        switch (status) {
            case RecorderStatuses.running:
                handleStartRecording();
                break;
            case RecorderStatuses.recording:
                handleStopRecording();
                break;
            default:
        }
    };

    useEffect(() => {
        if (status !== RecorderStatuses.previewStopped) return;
        stopTimer();
    }, [status]);

    return (
        <>
            <RecorderTimerStyles />
            <FlexboxGrid align="middle" justify="center">
                <FlexboxGrid.Item>
                    <RecorderButton
                        onClick={handleMainButtonClick}
                        color="red"
                        appearance="primary"
                        icon={<RecordingButtonIcon status={status} />}
                        circle
                    />
                </FlexboxGrid.Item>
                <CSSTransition timeout={300} classNames="recording-timer" in={isRecording}>
                    <RecorderControlsTimer className="recording-timer">
                        <TimerCountDown setTimerRef={setTimerRef} onStop={setDuration} />
                    </RecorderControlsTimer>
                </CSSTransition>
            </FlexboxGrid>
        </>
    );
};

export default RecordingControls;
