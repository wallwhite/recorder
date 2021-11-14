import { TimerDirections, TimerStatuses } from 'app/features/Timer/constants';

type IntervalTimerProps = {
    initialTime?: number;
    expectedTime?: number;
    timeToUpdate: number;
    direction?: TimerDirections;
    onChange: (time: number) => void;
    onStop?: (time: number) => void;
};

class IntervalTimer {
    intervalId: Nullable<number> = null;

    initialTime: number;

    expectedTime: number;

    startTime = 0;

    status: TimerStatuses = TimerStatuses.idle;

    timeToUpdate = 1000;

    downtime = 0;

    startPause = 0;

    passedTime = 0;

    direction: TimerDirections;

    onChange: (time: number) => void;

    onStop: (time: number) => void;

    constructor({
        initialTime = 0,
        expectedTime = 0,
        timeToUpdate,
        direction = TimerDirections.forward,
        onChange = (): void => {},
        onStop = (): void => {},
    }: IntervalTimerProps) {
        this.setPassedTime(initialTime);
        this.initialTime = initialTime;
        this.expectedTime = expectedTime;
        this.timeToUpdate = timeToUpdate;
        this.direction = direction;
        this.onChange = onChange;
        this.onStop = onStop;
    }

    setPassedTime = (time: number): void => {
        this.passedTime = time;
    };

    startTimer = (): void => {
        if (this.status !== TimerStatuses.idle && this.status !== TimerStatuses.resumed) return;

        this.startTime = Date.now();

        this.intervalId = window.setInterval(() => {
            this.passedTime = this.computeTime();

            this.onChange(this.passedTime);
        }, this.timeToUpdate);

        this.status = TimerStatuses.running;
    };

    stop = (): void => {
        if (this.status !== TimerStatuses.running && this.status !== TimerStatuses.paused) return;

        if (this.intervalId) clearInterval(this.intervalId);

        this.status = TimerStatuses.idle;

        this.onStop(this.passedTime);
        this.setPassedTime(this.initialTime);
        this.onChange(this.initialTime);
    };

    pause = (): void => {
        if (this.status !== TimerStatuses.running) return;
        this.startPause = Date.now();

        if (this.intervalId) clearInterval(this.intervalId);

        this.status = TimerStatuses.paused;
    };

    resume = (): void => {
        if (this.status !== TimerStatuses.paused) return;

        this.status = TimerStatuses.resumed;

        this.startTimer();
    };

    toggle = (): void => {
        if (this.status === TimerStatuses.paused) this.resume();
        if (this.status === TimerStatuses.running) this.pause();
        if (this.status === TimerStatuses.idle || this.status === TimerStatuses.resumed) this.startTimer();
    };

    computeTime = (): number => {
        if (this.status !== TimerStatuses.running) return this.passedTime;

        const currentTime = Date.now();
        const delta = currentTime - this.startTime;

        switch (this.direction) {
            case 'forward':
                this.passedTime += delta;
                this.startTime = currentTime;

                if (!!this.expectedTime && this.passedTime >= this.expectedTime) {
                    this.stop();

                    return this.expectedTime;
                }

                return this.passedTime;

            case 'backward': {
                const updatedPassedTime = this.passedTime - delta;
                const lostTimeGap =
                    updatedPassedTime % this.timeToUpdate
                        ? this.timeToUpdate - (updatedPassedTime % this.timeToUpdate)
                        : 0;

                this.passedTime = updatedPassedTime + lostTimeGap;
                this.startTime = currentTime;

                if (this.passedTime < this.expectedTime) {
                    this.stop();

                    return 0;
                }

                return this.passedTime;
            }

            default:
                return this.passedTime;
        }
    };
}

export default IntervalTimer;
