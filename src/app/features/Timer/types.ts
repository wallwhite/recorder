export type TimerOutputType = {
    time: number;
    start: () => void;
    stop: () => void;
    pause: () => void;
    resume: () => void;
    toggle: () => void;
    updateTime: (time: number) => void;
};
