import { useState } from 'react';
import { RecorderStatuses } from 'app/features/Recorder/constants';
import { getNextStatus } from 'app/features/Recorder/utils';

type UseRecorderStatusOutput = {
    status: RecorderStatuses;
    setStatus: (status: RecorderStatuses) => void;
    setNextStatus: () => void;
};

const useRecorderStatus = (): UseRecorderStatusOutput => {
    const [status, setStatus] = useState<RecorderStatuses>(RecorderStatuses.preparing);

    const setNextStatus = (): void => {
        const nextStatus = getNextStatus(status);

        setStatus(nextStatus ?? status);
    };

    return {
        status,
        setNextStatus,
        setStatus,
    };
};

export default useRecorderStatus;
