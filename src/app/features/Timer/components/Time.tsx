import React from 'react';
import { TimerCountDownWrapper } from 'app/features/Timer/styled/TimerCountDown';
import { getTimeParts, formatNum } from 'app/features/Timer/utils';

type TimeProps = {
    time: number;
};

const Time: React.FC<TimeProps> = ({ time }) => {
    const { h, m, s } = getTimeParts(time, 'h');

    return (
        <TimerCountDownWrapper>
            <span>{formatNum(h)}</span>
            <span>:</span>
            <span>{formatNum(m)}</span>
            <span>:</span>
            <span>{formatNum(s)}</span>
        </TimerCountDownWrapper>
    );
};

export default Time;
