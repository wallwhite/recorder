type TimePartsType = {
    ms: number;
    s: number;
    m: number;
    h: number;
    d: number;
};

const getTimeParts = (time: number, lastPart: string): TimePartsType => {
    const parts = ['ms', 's', 'm', 'h', 'd'];
    const lastPartIndex = parts.findIndex((unit) => unit === lastPart);

    const dividers = [1000, 60, 60, 24, 1];
    const dividersAcc = [1, 1000, 60000, 3600000, 86400000];

    const startValue: TimePartsType = {
        ms: 0,
        s: 0,
        m: 0,
        h: 0,
        d: 0,
    };

    const output = parts.reduce((acc, unit, index) => {
        if (index > lastPartIndex) return { ...acc, [unit]: 0 };

        if (index === lastPartIndex) return { ...acc, [unit]: Math.floor(time / dividersAcc[index]) };

        return { ...acc, [unit]: Math.floor(time / dividersAcc[index]) % dividers[index] };
    }, startValue);

    return output;
};

export default getTimeParts;
