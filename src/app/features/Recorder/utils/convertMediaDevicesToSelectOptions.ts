const convertMediaDevicesToSelectOptions = (
    mediaDevicesList: MediaDeviceInfo[],
    labelTemplate: string,
): SelectOptionType[] =>
    mediaDevicesList.map(({ deviceId: value, label }, index) => ({
        value,
        label: label || `${labelTemplate} ${index + 1}`,
    }));

export default convertMediaDevicesToSelectOptions;
