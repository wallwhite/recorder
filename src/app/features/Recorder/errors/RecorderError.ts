import { RECORDER_ERRORS_CONFIG } from 'app/features/Recorder/constants';
import type { RecorderErrorCodes } from 'app/features/Recorder/constants';

class RecorderError extends Error {
    code: RecorderErrorCodes;

    constructor(code: RecorderErrorCodes) {
        super();

        this.code = code;
    }

    get name(): string {
        return RECORDER_ERRORS_CONFIG[this.code].name;
    }

    get message(): string {
        return RECORDER_ERRORS_CONFIG[this.code].message;
    }
}

export default RecorderError;
