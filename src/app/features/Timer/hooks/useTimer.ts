import { useEffect, useState, useRef } from 'react';
import { TimerDirections } from 'app/features/Timer/constants';
import { IntervalTimer } from 'app/features/Timer/utils';
import { TimerOutputType } from 'app/features/Timer/types';

type UseTimerOptionsType = {
    direction?: TimerDirections;
    isInSeconds?: boolean;
    initialTime?: number;
    expectedTime?: number;
    timeToUpdate?: number;
    startImmediately?: boolean;
    onStop?: (time: number) => void;
};

const useTimer = ({
    direction,
    isInSeconds,
    initialTime = 0,
    expectedTime = 0,
    timeToUpdate = 1000,
    startImmediately,
    onStop = (): void => {},
}: UseTimerOptionsType): TimerOutputType => {
    const [passedTime, setPassedTime] = useState(initialTime);
    const intervalTimerRef = useRef<IntervalTimer>();

    const timeDelta = isInSeconds ? 1000 : 1;

    const handleStart = (): void => {
        intervalTimerRef.current?.startTimer();
    };

    const handleStop = (): void => {
        intervalTimerRef.current?.stop();
    };

    const handlePause = (): void => {
        intervalTimerRef.current?.pause();
    };

    const handleResume = (): void => {
        intervalTimerRef.current?.resume();
    };

    const handleToggle = (): void => {
        intervalTimerRef.current?.toggle();
    };

    const handleChangeTime = (time: number): void => {
        setPassedTime(time / timeDelta);
    };

    const handleStopIntervalTimer = (time: number): void => {
        onStop(time / timeDelta);
    };

    const handleUpdateTimerTime = (time: number): void => {
        setPassedTime(time);
        intervalTimerRef.current?.setPassedTime(time * timeDelta);
    };

    useEffect(() => {
        intervalTimerRef.current = new IntervalTimer({
            initialTime: initialTime * timeDelta,
            expectedTime: expectedTime * timeDelta,
            direction,
            timeToUpdate,
            onChange: handleChangeTime,
            onStop: handleStopIntervalTimer,
        });

        if (startImmediately) handleStart();
    }, [initialTime, expectedTime, direction]);

    return {
        time: passedTime,
        start: handleStart,
        stop: handleStop,
        pause: handlePause,
        resume: handleResume,
        toggle: handleToggle,
        updateTime: handleUpdateTimerTime,
    };
};

export default useTimer;
