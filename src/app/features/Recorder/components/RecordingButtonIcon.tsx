import React from 'react';

import { Loader } from 'rsuite';
import { RecorderIconWrapper, RecorderIconText } from 'app/features/Recorder/styled/RecordingButtonIcon';
import { RecStopIcon, StopIcon, RecIcon, PlayIcon } from 'app/features/Icons/components';
import { RecorderStatuses } from 'app/features/Recorder/constants';

type RecordingButtonIconProps = {
    status: RecorderStatuses;
};

const RecordingButtonIcon: React.FC<RecordingButtonIconProps> = ({ status }) => {
    const renderIconBody = (): React.ReactNode => {
        switch (status) {
            case RecorderStatuses.running:
                return (
                    <>
                        <RecIcon />
                        <RecorderIconText>Start</RecorderIconText>
                    </>
                );
            case RecorderStatuses.recording:
                return <RecStopIcon />;
            case RecorderStatuses.previewPreparing:
                return <Loader />;
            case RecorderStatuses.previewPlaying:
                return <StopIcon />;
            case RecorderStatuses.previewPaused:
            case RecorderStatuses.previewStopped:
                return <PlayIcon />;
            default:
                return null;
        }
    };

    return <RecorderIconWrapper>{renderIconBody()}</RecorderIconWrapper>;
};

export default RecordingButtonIcon;
