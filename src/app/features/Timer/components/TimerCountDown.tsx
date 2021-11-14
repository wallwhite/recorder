import React, { useEffect } from 'react';
import { TimerDirections } from 'app/features/Timer/constants';
import { useTimer } from 'app/features/Timer/hooks';
import { Time } from 'app/features/Timer/components';
import { TimerOutputType } from 'app/features/Timer/types';

type TimerCountDownProps = {
    direction?: TimerDirections;
    initialTime?: number;
    expectedTime?: number;
    onStop?: (time: number) => void;
    setTimerRef?: (ref: TimerOutputType) => void;
};

const TimerCountDown: React.FC<TimerCountDownProps> = ({
    direction = TimerDirections.forward,
    initialTime = 0,
    expectedTime,
    setTimerRef,
    onStop,
}) => {
    const timer = useTimer({
        initialTime,
        expectedTime,
        direction,
        startImmediately: false,
        onStop,
    });

    useEffect(() => {
        setTimerRef?.(timer);
    }, []);

    return <Time time={timer.time} />;
};

export default TimerCountDown;
