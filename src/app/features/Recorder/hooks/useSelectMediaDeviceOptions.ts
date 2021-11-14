import { useRecorderState } from 'app/features/Recorder/context';
import { convertMediaDevicesToSelectOptions } from 'app/features/Recorder/utils';

type UseSelectMediaDeviceOptionsOutputType = {
    audioValue: Nullable<string>;
    videoValue: Nullable<string>;
    audioOptions: SelectOptionType[];
    videoOptions: SelectOptionType[];
};

const useSelectMediaDeviceOptions = (): UseSelectMediaDeviceOptionsOutputType => {
    const { videoDevicesList, audioDevicesList, videoDeviceId, audioDeviceId } = useRecorderState();

    return {
        audioValue: audioDeviceId,
        videoValue: videoDeviceId,
        audioOptions: convertMediaDevicesToSelectOptions(audioDevicesList, 'Audio device'),
        videoOptions: convertMediaDevicesToSelectOptions(videoDevicesList, 'Video device'),
    };
};

export default useSelectMediaDeviceOptions;
