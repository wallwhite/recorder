import { RecorderStatuses } from 'app/features/Recorder/constants';

const getNextStatus = (status: RecorderStatuses): Nullable<RecorderStatuses> => {
    switch (status) {
        case RecorderStatuses.idle:
            return RecorderStatuses.preparing;
        case RecorderStatuses.preparing:
            return RecorderStatuses.ready;
        case RecorderStatuses.ready:
            return RecorderStatuses.running;
        case RecorderStatuses.running:
            return RecorderStatuses.recording;
        case RecorderStatuses.recording:
            return RecorderStatuses.previewPreparing;
        case RecorderStatuses.previewPreparing:
            return RecorderStatuses.previewStopped;
        case RecorderStatuses.previewStopped:
            return RecorderStatuses.previewPlaying;
        case RecorderStatuses.previewPlaying:
            return RecorderStatuses.previewPaused;
        case RecorderStatuses.previewPaused:
            return RecorderStatuses.previewPlaying;
        default:
            return null;
    }
};

export default getNextStatus;
