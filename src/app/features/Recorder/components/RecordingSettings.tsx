import React, { useState } from 'react';
import { IconButton, Modal, Button } from 'rsuite';
import { useSelectMediaDeviceOptions } from 'app/features/Recorder/hooks';
import { SettingsIcon, MicIcon, CameraSettingIcon } from 'app/features/Icons/components';
import {
    RecordingSettingsWrapper,
    RecordingSettingModal,
    RecordingSettingGroup,
    RecordingSettingRow,
    RecordingSettingSelect,
    RecordingSettingIconWrapper,
} from 'app/features/Recorder/styled/RecordingSettings';
import { useRecorderActions } from 'app/features/Recorder/context';
import { RecorderStatuses } from 'app/features/Recorder/constants';

const RecordingSettings: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { setStatus, resetMediaStream, setActiveVideoDeviceId, setActiveAudioDeviceId } = useRecorderActions();
    const { audioValue, videoValue, audioOptions, videoOptions } = useSelectMediaDeviceOptions();

    const handleOpen = (): void => setIsOpen(true);
    const handleClose = (): void => setIsOpen(false);

    const handleSubmitChangeMediaDevices = () => {
        resetMediaStream();
        setStatus(RecorderStatuses.preparingConstraints);
        handleClose();
    };

    return (
        <RecordingSettingsWrapper>
            <IconButton appearance="subtle" size="lg" icon={<SettingsIcon />} onClick={handleOpen} />
            <RecordingSettingModal open={isOpen} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Recording Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RecordingSettingGroup>
                        <RecordingSettingRow>
                            <RecordingSettingIconWrapper>
                                <CameraSettingIcon />
                            </RecordingSettingIconWrapper>
                            <RecordingSettingSelect
                                value={videoValue}
                                data={videoOptions}
                                onChange={setActiveVideoDeviceId}
                                searchable={false}
                                cleanable={false}
                                placeholder="Select video device"
                            />
                        </RecordingSettingRow>
                        <RecordingSettingRow>
                            <RecordingSettingIconWrapper>
                                <MicIcon />
                            </RecordingSettingIconWrapper>
                            <RecordingSettingSelect
                                value={audioValue}
                                data={audioOptions}
                                onChange={setActiveAudioDeviceId}
                                searchable={false}
                                cleanable={false}
                                placeholder="Select audio device"
                            />
                        </RecordingSettingRow>
                    </RecordingSettingGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmitChangeMediaDevices} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </RecordingSettingModal>
        </RecordingSettingsWrapper>
    );
};

export default RecordingSettings;
