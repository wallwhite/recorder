import React from 'react';
import { FlexboxGrid, Progress } from 'rsuite';
import { useRecorderState, useRecorderActions } from 'app/features/Recorder/context';
import {
    RecorderButton,
    RecorderTimeDivider,
    RecordingPreviewProgressBarWrapper,
    RecorderControlsTimer,
} from 'app/features/Recorder/styled/RecorderControls';
import { ResetIcon } from 'app/features/Icons/components';
import { RecordingButtonIcon } from 'app/features/Recorder/components';
import { Time } from 'app/features/Timer/components';

type RecordingPreviewControlsProps = {
    previewTime: number;
    onPlayPause: () => void;
    onReset: () => void;
};

const RecordingPreviewControls: React.FC<RecordingPreviewControlsProps> = ({ previewTime, onPlayPause, onReset }) => {
    const { status, duration } = useRecorderState();
    const { setNextStatus } = useRecorderActions();

    const previewTimeMs = previewTime * 1000;
    const progressPercentage = Math.min((previewTimeMs / duration) * 100, 100);

    const handlePlayPause = () => {
        onPlayPause();
        setNextStatus();
    };

    return (
        <>
            <RecordingPreviewProgressBarWrapper>
                <Progress.Line percent={progressPercentage} strokeColor="#52c41a" showInfo={false} />
            </RecordingPreviewProgressBarWrapper>
            <FlexboxGrid align="middle" justify="center">
                <FlexboxGrid.Item>
                    <RecorderButton circle color="blue" appearance="primary" icon={<ResetIcon />} onClick={onReset} />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                    <RecorderButton
                        circle
                        color="red"
                        appearance="primary"
                        icon={<RecordingButtonIcon status={status} />}
                        onClick={handlePlayPause}
                    />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                    <RecorderControlsTimer className="recording-timer">
                        <Time time={previewTimeMs} />
                        <RecorderTimeDivider>/</RecorderTimeDivider>
                        <Time time={duration} />
                    </RecorderControlsTimer>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </>
    );
};

export default RecordingPreviewControls;
